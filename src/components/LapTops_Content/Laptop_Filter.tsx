import Latptop_Filter_by_Brand from "./Laptop_Filter_by_Brand.tsx";
import Laptop_Filter_by_Screen_Size from "./Laptop_Filter_by_Screen_Size.tsx";
import Laptop_Filter_by_Processor from "./Laptop_Filter_by_Processor.tsx";
import Laptop_Filter_by_GPU from "./Laptop_Filter_by_GPU.tsx";
import Laptop_Filter_by_Memory from "./Laptop_Filter_by_Memory.tsx";
import Price from "./Price.tsx";
import SuperSimple from "./Price.tsx";

function Laptop_Filter() {

    return (

        <div>

            <Price/>

            <Latptop_Filter_by_Brand/>

            <Laptop_Filter_by_Screen_Size/>

            <Laptop_Filter_by_Processor/>

            <Laptop_Filter_by_GPU/>

            <Laptop_Filter_by_Memory/>


        </div>
    )

}

export default Laptop_Filter;