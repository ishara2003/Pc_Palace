import Component_Catagorees_Casing_Filter_by_Brand from "./Component_Catagorees_Casing_Filter_by_Brand.tsx";
import Component_Catagorees_Casing_Filter_by_Price from "./Component_Catagorees_casing_Filter_by_Price.tsx";


function Component_Catagorees_Casing_Filters() {

    return(
        <div className={''}>
            <Component_Catagorees_Casing_Filter_by_Price/>
           <Component_Catagorees_Casing_Filter_by_Brand/>
        </div>
    )

}

export default Component_Catagorees_Casing_Filters;