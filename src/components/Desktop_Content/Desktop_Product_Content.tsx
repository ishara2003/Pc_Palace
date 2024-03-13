import { useEffect, useState } from "react";
import axios from "axios";
import Product from "../All_Type_Products/Product.tsx";

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
  discount: number;
  workstation: any;
  processor: any;
  caled: any;
}

interface Props {
  score: number;
  selectedWorkstation: string[]; // Corrected prop name
  selectedProcessor: string[]; // Corrected prop name
  selectedGPU: string[];
  selectedRAM: string[];
}

function Desktop_Product_Content({
  score,
  selectedWorkstation,
  selectedProcessor,
  selectedGPU,
  selectedRAM
}: Props) {
  console.log("In DESKTOP selectedWorkstation : ", selectedWorkstation);
  console.log("In DESKTOP selectedProcessor : ", selectedProcessor);
  console.log("In DESKTOP selectedGPU : ", selectedGPU);
  console.log("In DESKTOP selectedRAM: ", selectedRAM);

  const fuck = () => {
    if (selectedWorkstation) {
      console.log();
      console.log(
        "In DESKTOP COMPONENT IN FUCK selectedWorkstation : ",
        selectedWorkstation
      );
    }

    if (selectedProcessor) {
      console.log();
      console.log(
        "In DESKTOP COMPONENT IN FUCK selectedProcessor : ",
        selectedProcessor
      );
    }

    if (selectedGPU) {
      console.log();
      console.log("In DESKTOP COMPONENT IN FUCK selectedGPU : ", selectedGPU);
    }

    if(selectedRAM){
        console.log();
      console.log("In DESKTOP COMPONENT IN FUCK selectedRAM : ", selectedRAM);
    }
  };

  const [data, setProps] = useState<Data[]>([]);

  // console.log("function Laptop_Product_Content : ",score);

  const fetchData = (): void => {
    if(selectedWorkstation.length != 0 || selectedProcessor.length != 0 || selectedGPU.length != 0 || selectedRAM.length != 0){
      console.log("are not null  selectedWorkstation.length != 0 && selectedProcessor.length != 0 && selectedGPU.length != 0 && selectedRAM.length != 0");
      axios
        .get(
          `http://localhost:5050/products/filter_all?req_workstation=${selectedWorkstation}&req_processor=${selectedProcessor}&req_gpu=${selectedGPU}&req_ram=${selectedRAM}size=20&page=${score}`
        )
        .then((response) => {
          console.log(
            "selectedWorkstation and selectedProcessor Object data: ",
            response.data
          );

          setProps(response.data.data);
        })
        .catch((err) => {
          console.log("error : " + err);
        });


    }else if (selectedWorkstation.length != 0 || selectedProcessor.length != 0 || selectedGPU.length != 0) {
      console.log("are not null  selectedWorkstation.length != 0 && selectedProcessor.length != 0 && selectedGPU.length != 0");

      axios
        .get(
          `http://localhost:5050/products/filter?req_workstation=${selectedWorkstation}&req_processor=${selectedProcessor}&req_gpu=${selectedGPU}&size=20&page=${score}`
        )
        .then((response) => {
          console.log(
            "selectedWorkstation and selectedProcessor Object data: ",
            response.data
          );

          setProps(response.data.data);
        })
        .catch((err) => {
          console.log("error : " + err);
        });
    }else if(selectedWorkstation.length != 0 || selectedProcessor.length != 0){
      console.log("are not null  selectedWorkstation.length != 0 && selectedProcessor.length != 0");
      
      axios
      .get(
        ` http://localhost:5050/products/filter_by_two?req_workstation=${selectedWorkstation}&req_processor=${selectedProcessor}&size=10&page=${score}`
      )
      .then((response) => {
        console.log(
          "selectedWorkstation is selected Object data: ",
          response.data
        );

        setProps(response.data.data);
      })
      .catch((err) => {
        console.log("error : " + err);
      });
     
    } else {
      if (selectedProcessor.length != 0) {
        console.log("selectedProcessor is selected");

        axios
          .get(
            `http://localhost:5050/products/filter_by_processor?req_processor=${selectedProcessor}&size=20&page=${score}`
          )
          .then((response) => {
            console.log(
              "selectedWorkstation is selected Object data: ",
              response.data
            );

            setProps(response.data.data);
          })
          .catch((err) => {
            console.log("error : " + err);
          });
      } else if (selectedWorkstation.length != 0) {
        console.log("selectedWorkstation is selected");

        axios
          .get(
            `http://localhost:5050/products/filter_by_workstation?req_workstation=${selectedWorkstation}&size=20&page=${score}`
          )
          .then((response) => {
            console.log(
              "selectedWorkstation is selected Object data: ",
              response.data
            );

            setProps(response.data.data);
          })
          .catch((err) => {
            console.log("error : " + err);
          });
      } else if (selectedGPU.length != 0) {
        console.log("selectedWorkstation is selected");

        axios
          .get(
            `http://localhost:5050/products/filter_by_gpu?req_gpu=${selectedGPU}&size=20&page=${score}`
          )
          .then((response) => {
            console.log(
              "selectedWorkstation is selected Object data: ",
              response.data
            );

            setProps(response.data.data);
          })
          .catch((err) => {
            console.log("error : " + err);
          });
      }else if(selectedRAM.length != 0){

        console.log("selectedWorkstation is selected");

        axios
          .get(
            `http://localhost:5050/products/filter_by_ram?req_ram=${selectedRAM}&size=20&page=${score}`
          )
          .then((response) => {
            console.log(
              "selectedWorkstation is selected Object data: ",
              response.data
            );

            setProps(response.data.data);
          })
          .catch((err) => {
            console.log("error : " + err);
          });


      } else {
        axios
          .get(
            `http://localhost:5050/products/filter_by_type?req_type=DESKTOP&size=20&page=${score}`
          )
          .then((response) => {
            console.log("Object data: ", response.data);

            setProps(response.data.data);
          })
          .catch((err) => {
            console.log("error : " + err);
          });
      }
    }
  };
  useEffect(() => {
    console.log("");
    fetchData();
    fuck();
  }, [score, selectedWorkstation, selectedProcessor, selectedGPU , selectedRAM]);

  const filteredData = selectedWorkstation
    ? data.filter(
        (product) =>
          product.type === "DESKTOP" &&
          product.workstation === selectedWorkstation
      )
    : data;

  // console.log("8787878787",filteredData);

  return (
    <div className={" mt-6 text-4xl "}>
      <div className={"w-full mt-6"}>
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
                    title={product.title}
                    file={product.file}
                    discount_price={product.caled.toFixed(0)}
                    fixed_price={product.price}
                    _id={product._id}
                  />
                );
              } else {
                return (
                  <Product
                    title={product.title}
                    file={product.file}
                    discount_price={product.caled}
                    fixed_price={0}
                    _id={product._id}
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
