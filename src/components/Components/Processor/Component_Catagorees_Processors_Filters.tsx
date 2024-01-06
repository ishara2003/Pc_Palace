import Component_Catagorees_Processor_Filter_by_Brand from "./Component_Catagorees_Processor_Filter_by_Brand.tsx";
import Component_Content_Processor_Filter_by_SocketType from "./Component_Content_Processor_Filter_by_SocketType.tsx";
import Component_Catagorees_Processors_Filters_by_Cores from "./Component_Catagorees_Processors_Filters_by_Cores.tsx";
import Component_Catagorees_Processor_Filter_by_Price from "./Component_Catagorees_Processor_Filter_by_Price.tsx";

function Component_Catagorees_Processors_Filters() {

    return(
        <div>
            <Component_Catagorees_Processor_Filter_by_Price/>
            <Component_Catagorees_Processor_Filter_by_Brand/>
            <Component_Content_Processor_Filter_by_SocketType/>
            <Component_Catagorees_Processors_Filters_by_Cores/>
        </div>
    )

}

export default Component_Catagorees_Processors_Filters;