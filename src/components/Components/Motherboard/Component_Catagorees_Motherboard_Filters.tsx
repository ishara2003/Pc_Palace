import Component_Catagorees_Motherboard_Filter_by_Brand from "./Component_Catagorees_Motherboard_Filter_by_Brand.tsx";
import Component_Content_Motherboard_Filter_by_SocketType
    from "./Component_Content_Motherboard_Filter_by_SocketType.tsx";
import Component_Catagorees_Motherboard_Filters_by_Chipset
    from "./Component_Catagorees_Motherboard_Filters_by_Chipset.tsx";
import Component_Catagorees_Motherboard_Filter_by_Price from "./Component_Catagorees_Motherboard_Filter_by_Price.tsx";

function Component_Catagorees_Motherboard_Filters() {

    return(
        <div className={''}>
            <Component_Catagorees_Motherboard_Filter_by_Price/>
            <Component_Catagorees_Motherboard_Filter_by_Brand/>
            <Component_Content_Motherboard_Filter_by_SocketType/>
            <Component_Catagorees_Motherboard_Filters_by_Chipset/>
        </div>
    )

}

export default Component_Catagorees_Motherboard_Filters;