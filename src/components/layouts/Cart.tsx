import axios from "axios";
import { useEffect, useState } from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

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


function Cart(){

    const [data, setProps] = useState<Data[]>([]);
    const [searchparams] = useSearchParams();

    const ItemDetails: String = searchparams.get("productID")!!;

    console.log(ItemDetails);

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
    

return(

    <div>
    


    </div>

);

}

export default Cart;


