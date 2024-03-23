import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../All_Type_Products/Product.tsx";
import DesktopFilterService from "../../service/DesktopFilterService.ts"

interface Data {
  _id  : number;
  title: string;
  file : {
    filename   : string;
    contentType: string;
    s3Key      : string;
  };
  price      : number;
  type       : string;
  discount   : number;
  workstation: any;
  processor  : any;
  caled      : any;
}

interface Props {
  score              : number;
  selectedWorkstation: string[];  // Corrected prop name
  selectedProcessor  : string[];  // Corrected prop name
  selectedGPU        : string[];
  selectedRAM        : string[];
}

function Desktop_Product_Content({ score, selectedWorkstation, selectedProcessor, selectedGPU, selectedRAM}: Props) {


  const [data, setProps] = useState<Data[]>([]);


  const fetchData = (): void => {
    if (selectedWorkstation.length != 0 && selectedProcessor.length != 0 && selectedGPU.length != 0 && selectedRAM.length != 0) {

      DesktopFilterService.getFilterByAll(selectedWorkstation, selectedProcessor, selectedGPU, selectedRAM, setProps, score);

    } else if (selectedWorkstation.length != 0 && selectedProcessor.length != 0 && selectedGPU.length != 0) {

      DesktopFilterService.getFilterBy_Workstation_Processor_GPU(selectedWorkstation, selectedProcessor, selectedGPU, setProps, score)

    } else if (selectedWorkstation.length != 0 && selectedProcessor.length != 0 && selectedRAM.length != 0){

      DesktopFilterService.getFilterBy_Workstation_Processor_Ram(selectedWorkstation, selectedProcessor, selectedRAM, setProps, score)

    } else if (selectedWorkstation.length !=0 && selectedGPU.length        != 0 && selectedRAM.length != 0){

      DesktopFilterService.getFilterBy_Workstation_GPU_Ram(selectedWorkstation, selectedGPU, selectedRAM, setProps, score)

    } else if (selectedProcessor.length   != 0 && selectedGPU.length       != 0 && selectedRAM.length != 0) {

      DesktopFilterService.getFilterBy_Processor_GPU_RAM(selectedProcessor, selectedGPU, selectedRAM, setProps, score)

    } else if (selectedWorkstation.length != 0 && selectedProcessor.length != 0) {
      
      DesktopFilterService.getFilterBy_Workstation_Processor(selectedWorkstation,selectedProcessor,setProps,score);

    } else if (selectedWorkstation.length != 0 && selectedGPU.length != 0){

      DesktopFilterService.getFilterBy_Workstation_GPU(selectedWorkstation, selectedGPU, setProps, score);

    } else if (selectedWorkstation.length != 0 && selectedRAM.length != 0){

      DesktopFilterService.getFilterBy_Workstation_RAM(selectedWorkstation,selectedRAM,setProps,score)

    } else if (selectedProcessor.length != 0 && selectedGPU.length != 0){
      DesktopFilterService.getFilterBy_Processor_GPU(selectedProcessor, selectedGPU, setProps, score)
    } else if (selectedProcessor .length != 0 && selectedRAM.length != 0){
      DesktopFilterService.getFilterBy_Processor_RAM(selectedProcessor, selectedRAM, setProps, score)
    } else if (selectedGPU.length != 0 && selectedRAM.length != 0){
      DesktopFilterService.getFilterBy_GPU_RAM(selectedGPU, selectedRAM, setProps, score)
    } else {
      if        (selectedProcessor.length != 0) {

        DesktopFilterService.getFilterByProcessor(selectedProcessor, setProps, score)

      } else if (selectedWorkstation.length != 0) {

        DesktopFilterService.getFilterByWorkstation(selectedWorkstation, setProps, score, data)


      } else if (selectedGPU.length         != 0) {
        console.log("selectedWorkstation is selected");

        DesktopFilterService.getFilterByGpu(selectedGPU, setProps, score)


      } else if (selectedRAM.length         != 0) {

        DesktopFilterService.getFilterByRam(selectedRAM, setProps, score)


      } else {
        DesktopFilterService.getFilterByType("DESKTOP", setProps, score)
      }
    }
  };
  useEffect(() => {

    fetchData();

  }, [score, selectedWorkstation, selectedProcessor, selectedGPU, selectedRAM]);



  return (
    <div className = {" mt-6 text-4xl "}>
    <div className = {"w-full mt-6"}>
        <div
          className={
            "grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-fit relative m-auto"
          }
        >
          {data.map((product: Data) => {
              // console.log(data);

            if (product.type === "DESKTOP") {
              if (product.discount) {
                  //@ts-ignore
                return (
                  <Product
                    title          = {product.title}
                    file           = {product.file}
                    discount_price = {product.caled.toFixed(0)}
                    fixed_price    = {product.price}
                    _id            = {product._id}
                  />
                );
              } else {
                return (
                  <Product
                    title          = {product.title}
                    file           = {product.file}
                    discount_price = {product.caled}
                    fixed_price    = {0}
                    _id            = {product._id}
                  />
                );
              }
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Desktop_Product_Content;
