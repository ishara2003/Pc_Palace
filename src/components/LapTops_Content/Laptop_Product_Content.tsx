// import './CSS/MainContent.css';
import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../All_Type_Products/Product.tsx";
import LaptopFilterService from "../../service/LaptopFilterService.ts";

// interface Data {
//     _id: number,
//     title: string,
//     file:  {
//         filename: string;
//         contentType: string;
//         s3Key: string;
//     },
//     price: number,
//     type:string
//     // discount_price: string
// }

// function Laptop_Product_Content() {
//     const [data, setProps] = useState<Data[]>([]);

//     const fetchData = (): void => {
//         axios.get('http://localhost:5050/products/all').then(response => {
//             console.log("Object data: ",response.data);

//             setProps(response.data.data);
//         }).catch(err => {
//             console.log('error : '+err);
//         });
//     };

//     useEffect(() => {
//         console.log("useEffect called");
//         fetchData();
//     }, []);

//     return (
//         <div className={' mt-6 text-4xl '}>

//             <div className={'w-full mt-6'}>
//                 <div
//                     className={'grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-fit relative m-auto'}>
//                     {
//                         data.map((r: Data, index: number) => {
//                             if (r.type==="LAPTOP"){
//                             return <Product title={r.title} file={r.file} discount_price={r.price}
//                                             fixed_price={r._id}/>
//                             }

//                         })
//                     }



//                 </div>
//             </div>
//         </div>
//     );
// }


interface FileData {
  filename: string;
  contentType: string;
  s3Key: string;
}

interface ProductData {
  _id: number;
  title: string;
  file: FileData;
  price: number;
  type: string;
  discount: number
}

interface Props {
  score: number;
  selectedBrand: string[]; // Corrected prop name
  selectedProcessor: string[];
  selectedGPU: string[];
  selectedRAM: string[];
  selectedScreenSize: string[];

}

function Laptop_Product_Content({ score, selectedBrand, selectedProcessor, selectedGPU, selectedRAM, selectedScreenSize }: Props) {

  console.log(selectedBrand);
  console.log(selectedProcessor);
  console.log(selectedGPU);
  console.log(selectedRAM);
  console.log(selectedScreenSize);



  const [products, setProducts] = useState<ProductData[]>([]);
  console.log("products:", products);
  console.log("function Laptop_Product_Content : ", score);


  const fetchData = async () => {
    try {

      if (selectedBrand.length != 0 && selectedScreenSize.length != 0 && selectedProcessor.length != 0 && selectedGPU.length != 0 && selectedRAM.length != 0) {

        LaptopFilterService.getFilterBy_MF_SS_CPU_GPU_RAM(selectedBrand, selectedScreenSize, selectedProcessor, selectedGPU, selectedRAM, setProducts, score)

      } else if (selectedBrand.length != 0 && selectedScreenSize.length != 0 && selectedProcessor.length != 0 && selectedGPU.length != 0) {
        LaptopFilterService.getFilterBy_MF_SS_CPU_GPU(selectedBrand, selectedScreenSize, selectedProcessor, selectedGPU, setProducts, score)
      } else if (selectedBrand.length != 0 && selectedProcessor.length != 0 && selectedGPU.length != 0 && selectedRAM.length != 0) {
        LaptopFilterService.getFilterBy_MF_CPU_GPU_RAM(selectedBrand, selectedProcessor, selectedGPU, selectedRAM, setProducts, score)
      } else if (selectedBrand.length != 0 && selectedScreenSize.length != 0 && selectedProcessor.length != 0 && selectedRAM.length != 0) {
        LaptopFilterService.getFilterBy_MF_SS_CPU_RAM(selectedBrand, selectedScreenSize, selectedProcessor, selectedRAM, setProducts, score)
      } else if (selectedBrand.length != 0 && selectedScreenSize.length != 0 && selectedGPU.length != 0 && selectedRAM.length != 0) {
        LaptopFilterService.getFilterBy_MF_SS_GPU_RAM(selectedBrand, selectedScreenSize, selectedGPU, selectedRAM, setProducts, score)
      } else {

        if (selectedProcessor.length != 0) {

          LaptopFilterService.getFilterByProcessor(selectedProcessor, setProducts, score);

        } else if (selectedBrand.length != 0) {

          let res = await LaptopFilterService.getFilterByManufacture(selectedBrand, setProducts, score)

        } else if (selectedGPU.length != 0) {

          LaptopFilterService.getFilterByGpu(selectedGPU, setProducts, score);


        } else if (selectedRAM.length != 0) {

          LaptopFilterService.getFilterByRam(selectedRAM, setProducts, score);

        } else if (selectedScreenSize.length != 0) {
          LaptopFilterService.getFilterByScreenSize(selectedScreenSize, setProducts, score)
        } else {
          LaptopFilterService.getFilterByType("LAPTOP", setProducts, score);
        }
      }

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };



  useEffect(() => {

    fetchData();
  }, [score, selectedBrand, selectedProcessor, selectedGPU, selectedRAM, selectedScreenSize]);

  return (
    <div className="mt-6 text-4xl">
      <div className="w-full mt-6">
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-fit relative m-auto">
          {products.map((product: ProductData) => {
            console.log(products);

            const dis: number = product.price - (product.price / product.discount)
            console.log(dis);


            if (product.type === "LAPTOP") {
              if (product.discount) {
                //@ts-ignore
                return <Product title={product.title} file={product.file} discount_price={dis.toFixed(0)}
                  fixed_price={product.price} _id={product._id} />
              } else {

                return <Product title={product.title} file={product.file} discount_price={product.price}
                  fixed_price={0} _id={product._id} />

              }

            }

          })}
        </div>
      </div>
    </div>
  );
}

export default Laptop_Product_Content;
