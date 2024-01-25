import { useSearchParams } from "react-router-dom";
import { ReactNode, useEffect, useState } from "react";
import axios from "axios";
import { HiMiniPlus } from "react-icons/hi2";
import { HiMinus } from "react-icons/hi";
import { createSearchParams, useNavigate } from "react-router-dom";



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

const data = "DATA";

export function saveCustomerDB(new_customer: any) {
  let pre_data = localStorage.getItem(data);
  let data_arr = [];

  console.log("Local Data get from Product Detail Component : ", pre_data);

  if (pre_data) {
    data_arr = JSON.parse(pre_data);
  }
  // Check for duplicates before adding the new item
  const isDuplicate = data_arr.some(
    (item: any) => item._id === new_customer._id
  );

  if (!isDuplicate) {
    data_arr.push(new_customer);
    localStorage.setItem(data, JSON.stringify(data_arr));
    console.log("Item added to local storage:", new_customer);
  } else {
    console.log("Duplicate item detected. Not added to local storage.");
  }
}

function ProductDetail(props: any) {
  
  const [searchparams] = useSearchParams();

  const ItemDetails: String = searchparams.get("productID")!!;

  // console.log("Data : ", ItemDetails);

  // const productData = props.location?.state?.data;

  const [data, setProps] = useState<Data[]>([]);

  const navigate = useNavigate();

  const navigateToProductDetailPage = () => {
    // console.log(_id);
    // console.log(total_price);

    navigate({
      pathname: "/cart",
      // search: createSearchParams({
      //   productID: _id,
      //   qty_vice_price: total_price.toString(),
      // }).toString(),
    });
  };

  const fetchData = (): void => {
    axios
      .get(`http://localhost:5050/products/filterbyId?id=${ItemDetails}`)
      .then((response) => {
        console.log("Single Product Data: ", response.data);

        setProps(response.data.data);
      })
      .catch((err) => {
        console.log("error : " + err);
      });
  };

  useEffect(() => {
    console.log("");
    fetchData();
  }, []);

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
    <div className="p-10">
      {data.map((r: Data, index: number) => {
        const id = r._id;
        const title = r.title;
        const price = r.price;
        const file = r.file.s3Key;
        const qty = r.qty;
        const manufacture = r.manufacture;
        const processor = r.processor;
        const gpu = r.gpu;
        const storage_type = r.storage_type;
        const ram = r.ram;
        const screen_size = r.screen_size;
        const v_ram = r.v_ram;
        const warranty = r.warranty;
        const additional_details = r.additional_details;

        const qty_vise_price = score * price;




        const manu: string = "Manufacture";
        const vga: string = "VGA";
        const process: string = "Processor";
        const s_size: string = "Screen Size";
        const Ram: string = "Ram";

        const handle_save_on_local_storage = () => {
          console.log("To Local Called");

          const producttoLocal = {
            _id: id,
            title: title,
            file:file,
            score: score,
            qty_vise_price: qty_vise_price,
            item_price:price
          };
          console.log("Product To Local: ", producttoLocal);

          saveCustomerDB(producttoLocal);
        };

        const component_process_handler = () => {
          console.log("All Handler called");

          handle_save_on_local_storage();
          navigateToProductDetailPage();
        };

        const SpesificationValuesChecking = (name: string, value: any) => {
          if (value != "") {
            console.log("Have Val");

            return (
              <h1 className="p-4">
                {name}: {value}
              </h1>
            );
          }
          return null;
        };

        const AdditionalDetailsCheck = (val: any) => {
          if (val != null) {
            return (
              <div className="p-5">
                <h1 className="text-2xl p-5">Additional</h1>
                <ul>
                  {ramParts?.map((part?) => (
                    <li className="list-disc">{part?.trim()}</li>
                  ))}
                </ul>
              </div>
            );
          }
          return null;
        };

        //@ts-ignore
        const ramParts = additional_details?.split("=");

        // Filter out any empty strings
        const filteredRamParts = ramParts?.filter((part) => part.trim() !== "");

        // Display the result
        filteredRamParts?.forEach((part?) => {
          console.log(part?.trim());
        });

        return (
          <div className="h-fit" key={index}>
            <div className="grid grid-cols-2 gap-6 w-full h-fit p-10">
              <div className=" text-white w-3/4 h-[500px] flex items-center">
                <img
                  src={`https://pc-palace-images.s3.eu-north-1.amazonaws.com/${r.file.s3Key}`}
                  alt={title}
                />
              </div>

              <div className=" text-white p-4 text-left w-full h-[500px] flex flex-col justify-between border-2 rounded-md">
                <div className="text-2xl">
                  <ul>
                    <li className="p-5">{title}</li>
                    <li className="p-5">Warranty: {warranty}</li>
                    <li className="p-5">LKR: {price.toLocaleString()}</li>
                    {/* <li className="p-5">Availability: {qty}</li> */}
                  </ul>
                </div>

                <div className="w-full h-36 flex">
                  <div className="w-full h-36 flex items-center justify-center">
                    <div onClick={min}>
                      <HiMinus />
                    </div>

                    <label
                      htmlFor=""
                      className="pl-7 pr-7 rounded-md border-2 ml-5 mr-5"
                    >
                      {score}
                    </label>

                    <div onClick={add}>
                      <HiMiniPlus />
                    </div>
                  </div>

                  <div className="w-full h-36 flex items-center justify-center">
                    TOTAL: {qty_vise_price.toLocaleString()}
                  </div>
                </div>

                <div className="buttonDiv flex items-center justify-center">
                  <button
                    className="bg-[#0a13f3] w-28 h-8 rounded-md"
                    onClick={() => component_process_handler()}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>

            <div className="border-2 rounded-md text-white p-4 text-center w-full h-fit mt-5">
              <h1 className="p-10 text-4xl">SPECIFICATION</h1>
              <div className="grid grid-cols-3 w-full items-center justify-between text-left text-2xl p-5">
                {SpesificationValuesChecking(manu, manufacture)}
                {SpesificationValuesChecking(vga, v_ram)}
                {SpesificationValuesChecking(process, processor)}
                {SpesificationValuesChecking(Ram, ram)}
                {SpesificationValuesChecking(s_size, screen_size)}
                {SpesificationValuesChecking(s_size, storage_type)}
              </div>

              <div className="w-full text-left p-5">
                {AdditionalDetailsCheck(additional_details)}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductDetail;
