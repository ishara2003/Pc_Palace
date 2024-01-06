import Gaming_Desktop_Filter_by_Processor from "./Gaming_Desktop_Filter_by_Processor.tsx";
import Gaming_Desktop_Filter_by_GPU from "./Gaming_Desktop_Filter_by_GPU.tsx";
import Gaming_Desktop_Filter_by_Memory from "./Gaming_Desktop_Filter_by_Memory.tsx";
import Gaming_Desktop_Filter_by_Price from "./Gaming_Desktop_Filter_by_Price.tsx";

function Gaming_Desktop_Filter() {

    return (

        <div>

            <Gaming_Desktop_Filter_by_Price/>

            <Gaming_Desktop_Filter_by_Processor/>

            <Gaming_Desktop_Filter_by_GPU/>

            <Gaming_Desktop_Filter_by_Memory/>


        </div>
    )

}

export default Gaming_Desktop_Filter;