import Desktop_Filter_by_Brand from "./Desktop_Filter_by_Workstation.tsx";
import Desktop_Filter_by_Processor from "./Desktop_Filter_by_Processor.tsx";
import Desktop_Filter_by_GPU from "./Desktop_Filter_by_GPU.tsx";
import Desktop_Filter_by_Memory from "./Desktop_Filter_by_Memory.tsx";

function Desktop_Filter() {

    return (

        <div>

            <Desktop_Filter_by_Brand/>

            <Desktop_Filter_by_Processor/>

            <Desktop_Filter_by_GPU/>

            <Desktop_Filter_by_Memory/>


        </div>
    )

}

export default Desktop_Filter;