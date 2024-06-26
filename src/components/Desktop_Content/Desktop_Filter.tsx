import Desktop_Filter_by_Brand from "./Desktop_Filter_by_Workstation.tsx";
import Desktop_Filter_by_Processor from "./Desktop_Filter_by_Processor.tsx";
import Desktop_Filter_by_GPU from "./Desktop_Filter_by_GPU.tsx";
import Desktop_Filter_by_Memory from "./Desktop_Filter_by_Memory.tsx";
import Desktop_Filter_by_Price from "./Desktop_Filter_by_Price.tsx";
import Desktop_Filter_by_Workstation from "./Desktop_Filter_by_Workstation.tsx";
import Laptop_Filter_by_Condition from "../LapTops_Content/Laptop_Filter_by_Condition.tsx";

function Desktop_Filter({onWorkstationChange , onProcessorChange , onGpuChange , onRamChange , onConditionChecked}:any) {

    return (

        <div>

            <Desktop_Filter_by_Price/>

            {/* <Laptop_Filter_by_Condition onConditionChecked={onConditionChecked}/> */}

            <Desktop_Filter_by_Workstation onWorkstationChange={onWorkstationChange}  />

            <Desktop_Filter_by_Processor onProcessorChange={onProcessorChange} />

            <Desktop_Filter_by_GPU onGpuChange={onGpuChange} />

            <Desktop_Filter_by_Memory onRamChange={onRamChange}/>


        </div>
    )

}

export default Desktop_Filter;