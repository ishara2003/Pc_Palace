import Component_Catagorees_Cooler_Filter_by_Brand from "./Component_Catagorees_Cooler_Filter_by_Brand.tsx";
import Component_Catagorees_Cooler_Filters_by_Cooler_Type
    from "./Component_Catagorees_Cooler_Filters_by_Cooler_Type.tsx";

function Component_Catagorees_Cooler_Filters() {

    return(
        <div className={''}>
            <Component_Catagorees_Cooler_Filter_by_Brand/>
            <Component_Catagorees_Cooler_Filters_by_Cooler_Type/>
        </div>
    )

}

export default Component_Catagorees_Cooler_Filters;