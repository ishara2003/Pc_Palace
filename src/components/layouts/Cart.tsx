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

interface TData{

  file: {
    filename: string;
    contentType: string;
    s3Key: string;
  };
  title?:string;


}

function Cart() {
  const [data, setProps] = useState<Data[]>([]);
  const [searchparams] = useSearchParams();

  const ItemDetails: String = searchparams.get("productID")!!;
  const TotalPrice: String = searchparams.get("qty_vice_price")!!;

  console.log(ItemDetails);
  console.log(TotalPrice);

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
    // console.log("");
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




       





        return (
          <div>
            <table className="text-2xl text-white w-full ">

              <tr className="border-2 flex justify-between">
                <td>
                  <img
                    src={`https://pc-palace-images.s3.eu-north-1.amazonaws.com/${r.file.s3Key}`}
                    className="w-[150px]"
                    alt={title}
                  />
                </td>
                <td>{title}</td>
              </tr>

              <tr className="border-2 ">
                <td>
                  <img
                    src={`https://pc-palace-images.s3.eu-north-1.amazonaws.com/${r.file.s3Key}`}
                    className="w-[150px]"
                    alt={title}
                  />
                </td>
                <td>{title}</td>
                <td> <div className="w-full h-36 flex items-center justify-center">
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
                  </div></td>
              </tr>

            </table>
          </div>
        );
      })}
    </div>
  );
}
export default Cart;
