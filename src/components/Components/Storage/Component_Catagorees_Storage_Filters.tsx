import Component_Catagorees_Storage_Filter_by_Brand from "./Component_Catagorees_Storage_Filter_by_Brand.tsx";
import Component_Content_Storage_Filter_by_Storageinterface
    from "./Component_Content_Storage_Filter_by_Storageinterface.tsx";
import Component_Catagorees_Storage_Filters_by_Type
    from "./Component_Catagorees_Storage_Filters_by_Type.tsx";
import Component_Catagorees_Storage_Filter_by_Price from "./Component_Catagorees_Storage_Filter_by_Price.tsx";

function Component_Catagorees_Storage_Filters() {

    return(
        <div className={''}>
            <Component_Catagorees_Storage_Filter_by_Price/>
            <Component_Catagorees_Storage_Filter_by_Brand/>
            <Component_Catagorees_Storage_Filters_by_Type/>
            <Component_Content_Storage_Filter_by_Storageinterface/>
        </div>
    )

}

export default Component_Catagorees_Storage_Filters;