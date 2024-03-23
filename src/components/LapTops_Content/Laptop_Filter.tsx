import Latptop_Filter_by_Brand from "./Laptop_Filter_by_Brand.tsx";
import Laptop_Filter_by_Screen_Size from "./Laptop_Filter_by_Screen_Size.tsx";
import Laptop_Filter_by_Processor from "./Laptop_Filter_by_Processor.tsx";
import Laptop_Filter_by_GPU from "./Laptop_Filter_by_GPU.tsx";
import Laptop_Filter_by_Memory from "./Laptop_Filter_by_Memory.tsx";
import Laptop_Filter_by_Price from "./Laptop_Filter_by_Price.tsx";
import SuperSimple from "./Laptop_Filter_by_Price.tsx";

function Laptop_Filter({onBrandChecked , onSelectedProcessor, onSelectedGPU, OnSelectedRAM, onSelectedScreenSize}:any) {

    return (

        <div>

            <Laptop_Filter_by_Price/>

            <Latptop_Filter_by_Brand onBrandChecked={onBrandChecked}/>

            <Laptop_Filter_by_Screen_Size onSelectedScreenSize={onSelectedScreenSize}/>

            <Laptop_Filter_by_Processor onSelectedProcessor={onSelectedProcessor}/>

            <Laptop_Filter_by_GPU onSelectedGPU={onSelectedGPU}/>

            <Laptop_Filter_by_Memory OnSelectedRAM={OnSelectedRAM}/>


        </div>
    )

}

export default Laptop_Filter;