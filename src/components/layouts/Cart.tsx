import axios from "axios";
import { useEffect, useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { HiMiniPlus } from "react-icons/hi2";
import { HiMinus } from "react-icons/hi";
import "./CSS/FooterCss.css";
import { AiFillDelete } from "react-icons/ai";

interface Data {
  _id  : number;
  title: string;
  file : {
    filename   : string;
    contentType: string;
    s3Key      : string;
  };
  price              : number;
  type               : string;
  qty                : number;
  manufacture       ?: string;
  gpu               ?: string;  // Desktop, Laptop, Component GPU, Gaming Desktop, Gaming Laptop
  screen_size       ?: string;  // Monitor, Laptop
  processor         ?: string;  // Desktop, Laptop, Component CPU, Gaming Desktop, Gaming Laptop
  ram               ?: string;  // Desktop, Laptop, Component RAM, Gaming Desktop, Gaming Laptop
  workstation       ?: string;  // Desktop
  socket_type       ?: string;  // PROCESSOR, MOTHERBOARDS
  cores             ?: string;  // PROCESSOR
  chip_set          ?: string;  // MOTHERBOARDS, GPU
  speed             ?: string;  // MEMORY
  v_ram             ?: string;  // GRAPHIC CARDS
  storage_type      ?: string;  // STORAGES
  interface         ?: string;  // STORAGES
  efficiency        ?: string;  // POWER SUPPLY
  modular           ?: string;  // POWER SUPPLY
  cooler_type       ?: string;  // COOLERS
  resolution        ?: string;  // MONITOR
  refresh_rate      ?: string;  // MONITOR
  accessories_type  ?: string;  // ACCESSORIES
  warranty          ?: string;
  additional_details?: string;
}

interface TableDataItem {
  title         : string;
  score         : number;
  qty_vise_price: number;
}

const local_storage_data = "DATA";

function Cart() {
  const [data, setProps] = useState<Data[]>([]);

    // const [searchparams] = useSearchParams();

    // const ItemDetails: String = searchparams.get("productID")!!;
    // const TotalPrice: String = searchparams.get("qty_vice_price")!!;

    // console.log("Id Passed from ProductDetail Component : ", ItemDetails);
    // console.log("Total Price Passed from ProductDetail Component : ", TotalPrice);

  let pre_data = localStorage.getItem(local_storage_data);

    //@ts-ignore
  let customer_data_arr = JSON.parse(pre_data);

    // const [tableData, setTableData] = useState<TableDataItem[]>([]);

  console.log("Get data from Local Storage : ", customer_data_arr);

  let price2       = 0;
  let dised_price2 = 0;

  const load_quot_data = () => {
    let mappedData = null;

    if (customer_data_arr) {
      console.log("Table Data to Map from Local Storage : ", customer_data_arr);

      mappedData = customer_data_arr.map((item: any, index: any) => {
        const local_id           = item._id;
        const local_title        = item.title;
        const local_score        = item.score;
        const local_qtyVisePrice = item.qty_vise_price;
        const local_file         = item.file;
        const local_item_price   = item.price;
        const local_item_price2  = item.price2;
        const local_discount     = item.discount;
        const local_caled        = item.caled;

        const table_item_price = local_item_price * local_score;

        const [score, setScore] = useState(local_score);
        console.log("85421855 : ", score);

        const add = () => {
          setScore(score + 1);  // Update the score using the current state value 'score'
          console.log("Local Score:", local_score, "score", score);
          console.log("Score adding", score);
        };

        const min = () => {
          console.log("Score min before : ", score);
          if (score > 1) {
            setScore(score - 1);  // Decrement the score only if it's greater than 1
            console.log("Score min", score);
          }
        };


        console.log("Local Price In Table :", local_item_price);

        const check_if_discount = () => {
            //@ts-ignore
          if (item.discount > 0) {
            console.log("check_if_discount : ", local_caled);
              //@ts-ignore
            dised_price2 = local_caled * score;
            console.log("check_if_discount : ", dised_price2);
            return (
              <label htmlFor = "">TOTAL: {dised_price2.toLocaleString()}</label>
            );
          } else {
            console.log("cheach_if_not_discount : ", local_caled);
              //@ts-ignore
            price2 = local_caled * score;

            console.log("cheach_if_not_discount : ", price2);
            return <label htmlFor = "">TOTAL: {price2.toLocaleString()}</label>;
          }
        };

        console.log("Final Price in Table : ", price2, "2nd", dised_price2);

        const removeProduct = (productId: any) => {
            // Get the existing data from local storage
            //@ts-ignore
          let customers = JSON.parse(localStorage.getItem(local_storage_data));
          console.log(customers);

          customers.map((result: any, index: any) => {
            if (result._id === productId) {
              customers.splice(index, 1);
            }
          });

          localStorage.setItem(local_storage_data, JSON.stringify(customers));
          window.location.reload();
        };

        return (
          <tr
            key       = {index}
            className = "mb-4 border p-10 flex items-center justify-between"
          >
            <td>
              <img
                className = "w-[175px]"
                src       = {`https://pc-palace-images.s3.eu-north-1.amazonaws.com/${local_file}`}
              />
            </td>
            <td className = "w-[600px] text-left">{local_title}</td>
            <td>
              <div className = "flex items-center justify-between ">
              <div className = "cursor-pointer" onClick = {min} >
                  <HiMinus />
                </div>
                <label className = "pl-7 pr-7">{score}</label>

                <div className = "cursor-pointer" onClick = {add}>
                  <HiMiniPlus />
                </div>
              </div>
            </td>
            <td className = "w-[300px]">{check_if_discount()}</td>
            <td>
              <button onClick = {() => removeProduct(local_id)}>
                <AiFillDelete />
              </button>
            </td>
          </tr>
        );
      });
    } else {
      return <h1 className = "m-20">No Matching Record Found</h1>;
      console.log("No data found in local storage.");
    }

    console.log("Load Quot Data's if condition didn't get called");
    return <tbody>{mappedData}</tbody>;
  };

    // const fetchData = (): void => {
    //   axios
    //     .get(`http://localhost:5050/products/filterbyId?id=${ItemDetails}`)
    //     .then((response) => {
    //       console.log("Single Product Data: ", response.data);

    //       setProps(response.data.data);
    //     })
    //     .catch((err) => {
    //       console.log("error : " + err);
    //     });
    // };

  useEffect(() => {
      // console.log("");
      // fetchData();
  }, []);

  const remove_from_local_Storage = () => {
    if (local_storage_data) {
      localStorage.removeItem(local_storage_data);
      window.location.reload();
    }

    return null;
  };

  return (
    <div className = "p-10">
    <h1  className = "text-4xl contact_us mb-10">QUOTATION</h1>

      <div>
        <table className = "text-2xl text-white w-full">{load_quot_data()}</table>
      </div>

      <button
        className = "text-2xl border p-2 rounded-md header_nav_bar header_nav_bar_color"
        onClick   = {() => remove_from_local_Storage()}
      >
        SEND TO MAIL
      </button>
    </div>
  );
}
export default Cart;
