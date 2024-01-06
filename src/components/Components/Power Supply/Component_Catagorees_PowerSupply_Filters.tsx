import Component_Catagorees_PowerSupply_Filter_by_Brand from "./Component_Catagorees_PowerSupply_Filter_by_Brand.tsx";
import Component_Content_PowerSupply_Filter_by_Modeuler
    from "./Component_Content_PowerSupply_Filter_by_Modeuler.tsx";
import Component_Catagorees_PowerSupply_Filters_by_Efficiency
    from "./Component_Catagorees_PowerSupply_Filters_by_Efficiency.tsx";
import Component_Catagorees_Power_Supply_Filter_by_Price from "./Component_Catagorees_Power_Supply_Filter_by_Price.tsx";

function Component_Catagorees_PowerSupply_Filters() {

    return(
        <div className={''}>
            <Component_Catagorees_Power_Supply_Filter_by_Price/>
            <Component_Catagorees_PowerSupply_Filter_by_Brand/>
            <Component_Catagorees_PowerSupply_Filters_by_Efficiency/>
            <Component_Content_PowerSupply_Filter_by_Modeuler/>
        </div>
    )

}

export default Component_Catagorees_PowerSupply_Filters;