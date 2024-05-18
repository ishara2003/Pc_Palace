import axios from 'axios';
import * as apiRoutes from '../apiRouts'

class LaptopService {


  getFilterByType = async (type:any, setProducts: any, score: any) => {

    axios.get(apiRoutes.PRODUCT_TYPE_MICROSERVICE.concat(`req_type=${type}&size=20&page=${score}`))

      .then((response) => {

        setProducts(response.data.data);

      })
      .catch((error) => {
        console.log("Error : ", error);

      });
  }//getFilterByType


  getFilterByManufacture = async (manufacture: any, setProducts: any, score: any) => {

    axios.get(apiRoutes.MANUFACTURE_MICROSERVICE.concat(`req_manufacture=${manufacture}&size=20&page=${score}`))

      .then((response) => {
        
        setProducts(response.data.data);

      })
      .catch((err) => {
        console.log("error : " + err);
      });
  }// getFilterByManufacture


  getFilterByProcessor = async (processor: any, setProducts: any, score: any) => {

    axios.get(apiRoutes.PROCESSOR_MICROSERVICE.concat(`req_processor=${processor}&size=20&page=${score}`))

      .then((response) => {

        setProducts(response.data.data);

      })
      .catch((error) => {
        console.log("Error : ", error);

      });
  }//getFilterByProcessor

  
  getFilterByGpu = async (gpu: any, setProducts: any, score: any) => {

    axios.get(apiRoutes.GPU_MICROSERVICE.concat(`req_gpu=${gpu}&size=20&page=${score}`))

      .then((response) => {

        setProducts(response.data.data);

      })
      .catch((error) => {
        console.log("Error : ", error);

      });
  }//getFilterByGpu


  getFilterByRam = async (ram: any, setProducts: any, score: any) => {

    axios.get(apiRoutes.RAM_MICROSERVICE.concat(`req_ram=${ram}&size=20&page=${score}`))

      .then((response) => {

        setProducts(response.data.data);

      })
      .catch((error) => {
        console.log("Error : ", error);

      });
  }//getFilterByRam


  getFilterByScreenSize = async (screen_size: any, setProducts: any, score: any) => {

    axios.get(apiRoutes.SCREEN_SIZE_MICROSERVICE.concat(`req_screenSize=${screen_size}&size=20&page=${score}`))

      .then((response) => {

        setProducts(response.data.data);

      })
      .catch((error) => {
        console.log("Error : ", error);

      });
  }//getFilterByScreenSize


  getFilterBy_MF_SS_CPU_GPU_RAM = async (manufacture: any, screen_size: any,processor: any,gpu: any,ram: any, setProducts: any, score: any) => {

    axios.get(apiRoutes.MF_SS_CPU_GPU_RAM.concat(`req_manufacture=${manufacture}&req_screenSize=${screen_size}&req_processor=${processor}&req_gpu=${gpu}&req_ram=${ram}&size=20&page=${score}`))

      .then((response) => {

        setProducts(response.data.data);

      })
      .catch((error) => {
        console.log("Error : ", error);

      });
  }//getFilterBy_MF_SS_CPU_GPU_RAM



  getFilterBy_MF_SS_CPU_GPU = async (manufacture: any, screen_size: any,processor: any,gpu: any, setProducts: any, score: any) => {

    axios.get(apiRoutes.MF_SS_CPU_GPU.concat(`req_manufacture=${manufacture}&req_screenSize=${screen_size}&req_processor=${processor}&req_gpu=${gpu}&size=20&page=${score}`))

      .then((response) => {

        setProducts(response.data.data);

      })
      .catch((error) => {
        console.log("Error : ", error);

      });
  }//getFilterBy_MF_SS_CPU_GPU



  getFilterBy_MF_CPU_GPU_RAM = async (manufacture: any, processor: any,gpu: any,ram: any, setProducts: any, score: any) => {

    axios.get(apiRoutes.MF_CPU_GPU_RAM.concat(`req_manufacture=${manufacture}&req_processor=${processor}&req_gpu=${gpu}&req_ram=${ram}&size=20&page=${score}`))

      .then((response) => {

        setProducts(response.data.data);

      })
      .catch((error) => {
        console.log("Error : ", error);

      });
  }//getFilterBy_MF_CPU_GPU_RAM




  getFilterBy_MF_SS_CPU_RAM = async (manufacture: any, screen_size: any,processor: any, ram: any, setProducts: any, score: any) => {

    axios.get(apiRoutes.MF_SS_CPU_RAM.concat(`req_manufacture=${manufacture}&req_screenSize=${screen_size}&req_processor=${processor}&req_ram=${ram}&size=20&page=${score}`))

      .then((response) => {

        setProducts(response.data.data);

      })
      .catch((error) => {
        console.log("Error : ", error);

      });
  }//getFilterBy_MF_SS_CPU_RAM


  getFilterBy_MF_SS_GPU_RAM = async (manufacture: any, screen_size: any, gpu: any,ram: any, setProducts: any, score: any) => {

    axios.get(apiRoutes.MF_SS_GPU_RAM.concat(`req_manufacture=${manufacture}&req_screenSize=${screen_size}&req_gpu=${gpu}&req_ram=${ram}&size=20&page=${score}`))

      .then((response) => {

        setProducts(response.data.data);

      })
      .catch((error) => {
        console.log("Error : ", error);

      });
  }//getFilterBy_MF_SS_CPU_GPU_RAM




}//LaptopService

export default new LaptopService;