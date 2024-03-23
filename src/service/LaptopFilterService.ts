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




}//LaptopService

export default new LaptopService;