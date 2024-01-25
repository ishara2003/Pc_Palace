import axios from "axios";
import { useEffect, useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { HiMiniPlus } from "react-icons/hi2";
import { HiMinus } from "react-icons/hi";

interface Data {
  _id: number;
  title: string;
  file: {
    filename: string;
    contentType: string;
    s3Key: string;
  };
  price: number;
  type: string;
  qty: number;
  manufacture?: string;
  gpu?: string; // Desktop, Laptop, Component GPU, Gaming Desktop, Gaming Laptop
  screen_size?: string; // Monitor, Laptop
  processor?: string; // Desktop, Laptop, Component CPU, Gaming Desktop, Gaming Laptop
  ram?: string; // Desktop, Laptop, Component RAM, Gaming Desktop, Gaming Laptop
  workstation?: string; // Desktop
  socket_type?: string; // PROCESSOR, MOTHERBOARDS
  cores?: string; // PROCESSOR
  chip_set?: string; // MOTHERBOARDS, GPU
  speed?: string; // MEMORY
  v_ram?: string; // GRAPHIC CARDS
  storage_type?: string; // STORAGES
  interface?: string; // STORAGES
  efficiency?: string; // POWER SUPPLY
  modular?: string; // POWER SUPPLY
  cooler_type?: string; // COOLERS
  resolution?: string; // MONITOR
  refresh_rate?: string; // MONITOR
  accessories_type?: string; // ACCESSORIES
  warranty?: string;
  additional_details?: string;
}

interface TData {
  file: {
    filename: string;
    contentType: string;
    s3Key: string;
  };
  title?: string;
}

interface TableDataItem {
  title: string;
  score: number;
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

  const load_quot_data = () => {
    let mappedData = null;

    if (customer_data_arr) {
      console.log("Table Data to Map from Local Storage : ", customer_data_arr);

      mappedData = customer_data_arr.map((item: any, index: any) => {
        const local_id = item._id;
        const local_title = item.title;
        const local_score = item.score;
        const local_qtyVisePrice = item.qty_vise_price;
        const local_file = item.file;
        const local_item_price = item.item_price;

        const table_item_price = local_item_price * local_score;


        const [score, setScore] = useState(1);

        const add = () => {
          setScore(score + 1);
          console.log("Score adding", score);
        };
      
        const min = () => {
          if (score != 1) {
            setScore(score - 1);
            console.log("Score min", score);
          }
        };

        return (
          <tr
            key={index}
            className="mb-4 border p-10 flex items-center justify-between"
          >
            <td>
              <img
                className="w-[175px]"
                src={`https://pc-palace-images.s3.eu-north-1.amazonaws.com/${local_file}`}
              />
            </td>
            <td>{local_title}</td>
            <td>
              <div className="flex items-center justify-between ">
                <div onClick={min}>
                  <HiMinus />
                </div>
                <label className="pl-7 pr-7">{local_score + score}</label>

                <div onClick={add}>
                  <HiMiniPlus />
                </div>
              </div>
            </td>
            <td className="w-[300px]">{local_qtyVisePrice + (local_item_price*score) }</td>
          </tr>
        );
      });
    } else {
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



  return (
    <div className="p-10">
      <div>
        <table className="text-2xl text-white w-full">{load_quot_data()}</table>
      </div>
    </div>
  );
}
export default Cart;
