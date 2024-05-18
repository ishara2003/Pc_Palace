import axios from "axios"
import * as apiRoutes from '../apiRouts'
class DesktopService {


    getFilterByType = async (type:any, setProducts: any, score: any) => {

        axios.get(apiRoutes.PRODUCT_TYPE_MICROSERVICE.concat(`req_type=${type}&size=20&page=${score}`))
    
          .then((response) => {
    
            setProducts(response.data.data);
    
          })
          .catch((error) => {
            console.log("Error : ", error);
    
          });
      }//getFilterByType
    


    getFilterByWorkstation = async (workstation: any, setProduct: any, score: any, data:any) => {
console.log(workstation);

        axios.get(apiRoutes.WORKSTATION_MICROSERVICE.concat(`req_workstation=${workstation}&size=20&page=${score}`))

            .then((response) => {

                setProduct(response.data.data);

            })
            .catch((error) => {
                console.log("Error : ", error);

            });

    //         const filteredData = workstation
    // // ? data.filter(
    //   (product:any) =>
    //     product.type === "DESKTOP" &&
    //     product.workstation === workstation
    // )
    // : data;

    }//getFilterByWorkstation


    
    getFilterByProcessor = async (processor: any, setProducts: any, score: any) => {

        axios.get(apiRoutes.PROCESSOR_MICROSERVICE.concat(`req_processor=${processor}&size=20&page=${score}`))

            .then((response) => {

                setProducts(response.data.data);

            })
            .catch((error) => {
                console.log("Error : ", error);

            });
    }//getFilterByProcessor



    getFilterByRam = async (ram: any, setProducts: any, score: any) => {

        axios.get(apiRoutes.RAM_MICROSERVICE.concat(`req_ram=${ram}&size=20&page=${score}`))
    
          .then((response) => {
    
            setProducts(response.data.data);
    
          })
          .catch((error) => {
            console.log("Error : ", error);
    
          });
      }//getFilterByRam

      

      getFilterByGpu = async (gpu: any, setProducts: any, score: any) => {

        axios.get(apiRoutes.GPU_MICROSERVICE.concat(`req_gpu=${gpu}&size=20&page=${score}`))
    
          .then((response) => {
    
            setProducts(response.data.data);
    
          })
          .catch((error) => {
            console.log("Error : ", error);
    
          });
      }//getFilterByGpu

      

      getFilterByAll = async (workstation:any, processor:any, gpu: any, ram:any, setProducts: any, score: any) => {

        axios.get(apiRoutes.WS_CPU_GPU_RAM.concat(`req_workstation=${workstation}&req_processor=${processor}&req_gpu=${gpu}&req_ram=${ram}&size=20&page=${score}`))
    
          .then((response) => {
    
            setProducts(response.data.data);
    
          })
          .catch((error) => {
            console.log("Error : ", error);
    
          });
      }//getFilterByAll

      

      getFilterBy_Workstation_Processor_GPU = async (workstation:any, processor:any, gpu: any, setProducts: any, score: any) => {

        axios.get(apiRoutes.WS_CPU_GPU.concat(`req_workstation=${workstation}&req_processor=${processor}&req_gpu=${gpu}&size=20&page=${score}`))
    
          .then((response) => {
    
            setProducts(response.data.data);
    
          })
          .catch((error) => {
            console.log("Error : ", error);
    
          });
      }//getFilterBy_Workstation_Processor_GPU

      

      getFilterBy_Workstation_Processor_Ram = async (workstation:any, processor:any, ram: any, setProducts: any, score: any) => {

        axios.get(apiRoutes.WS_CPU_RAM.concat(`req_workstation=${workstation}&req_processor=${processor}&req_ram=${ram}&size=20&page=${score}`))
    
          .then((response) => {
    
            setProducts(response.data.data);
    
          })
          .catch((error) => {
            console.log("Error : ", error);
    
          });
      }//getFilterBy_Workstation_Processor_Ram

      

      getFilterBy_Workstation_GPU_Ram = async (workstation:any, gpu:any, ram: any, setProducts: any, score: any) => {

        axios.get(apiRoutes.WS_GPU_RAM.concat(`req_workstation=${workstation}&req_gpu=${gpu}&req_ram=${ram}&size=20&page=${score}`))
    
          .then((response) => {
    
            setProducts(response.data.data);
    
          })
          .catch((error) => {
            console.log("Error : ", error);
    
          });
      }//getFilterBy_Workstation_GPU_Ram

      

      getFilterBy_Processor_GPU_RAM = async (processor:any, gpu: any,ram:any, setProducts: any, score: any) => {

        axios.get(apiRoutes.CPU_GPU_RAM.concat(`req_processor=${processor}&req_gpu=${gpu}&req_ram=${ram}&size=20&page=${score}`))
    
          .then((response) => {
    
            setProducts(response.data.data);
    
          })
          .catch((error) => {
            console.log("Error : ", error);
    
          });
      }//getFilterBy_Processor_GPU_RAM

      

      getFilterBy_Workstation_Processor = async (workstation:any, processor:any, setProducts: any, score: any) => {

        axios.get(apiRoutes.WS_CPU.concat(`req_workstation=${workstation}&req_processor=${processor}&size=20&page=${score}`))
    
          .then((response) => {
    
            setProducts(response.data.data);
    
          })
          .catch((error) => {
            console.log("Error : ", error);
    
          });
      }//getFilterBy_Workstation_Processor

      

      getFilterBy_Workstation_GPU = async (workstation:any, gpu:any, setProducts: any, score: any) => {

        axios.get(apiRoutes.WS_GPU.concat(`req_workstation=${workstation}&req_gpu=${gpu}&size=20&page=${score}`))
    
          .then((response) => {
    
            setProducts(response.data.data);
    
          })
          .catch((error) => {
            console.log("Error : ", error);
    
          });
      }//getFilterBy_Workstation_GPU

      

      getFilterBy_Workstation_RAM = async (workstation:any, ram:any, setProducts: any, score: any) => {

        axios.get(apiRoutes.WS_RAM.concat(`req_workstation=${workstation}&req_ram=${ram}&size=20&page=${score}`))
    
          .then((response) => {
    
            setProducts(response.data.data);
    
          })
          .catch((error) => {
            console.log("Error : ", error);
    
          });
      }//getFilterBy_Workstation_RAM
    

      

      getFilterBy_Processor_GPU = async (processor:any, gpu:any, setProducts: any, score: any) => {

        axios.get(apiRoutes.CPU_GPU.concat(`req_processor=${processor}&req_gpu=${gpu}&size=20&page=${score}`))
    
          .then((response) => {
    
            setProducts(response.data.data);
    
          })
          .catch((error) => {
            console.log("Error : ", error);
    
          });
      }//getFilterBy_Workstation_RAM
    

      

      getFilterBy_Processor_RAM = async (processor:any, ram:any, setProducts: any, score: any) => {

        axios.get(apiRoutes.CPU_RAM.concat(`req_processor=${processor}&req_ram=${ram}&size=20&page=${score}`))
    
          .then((response) => {
    
            setProducts(response.data.data);
    
          })
          .catch((error) => {
            console.log("Error : ", error);
    
          });
      }//getFilterBy_Workstation_RAM
    

      

      getFilterBy_GPU_RAM = async (gpu:any, ram:any, setProducts: any, score: any) => {

        axios.get(apiRoutes.GPU_RAM.concat(`req_gpu=${gpu}&req_ram=${ram}&size=20&page=${score}`))
    
          .then((response) => {
    
            setProducts(response.data.data);
    
          })
          .catch((error) => {
            console.log("Error : ", error);
    
          });
      }//getFilterBy_Workstation_RAM
    

}//DesktopService

export default new DesktopService;