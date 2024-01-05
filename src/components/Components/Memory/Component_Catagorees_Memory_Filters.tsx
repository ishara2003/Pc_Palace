import Component_Catagorees_Memory_Filter_by_Brand from "./Component_Catagorees_Memory_Filter_by_Brand.tsx";
import Component_Content_Memory_Filter_by_Size
    from "./Component_Content_Memory_Filter_by_Size.tsx";
import Component_Catagorees_Memory_Filters_by_Speed
    from "./Component_Catagorees_Memory_Filters_by_Speed.tsx";

function Component_Catagorees_Memory_Filters() {

    return(
        <div className={''}>
            <Component_Catagorees_Memory_Filter_by_Brand/>
            <Component_Catagorees_Memory_Filters_by_Speed/>
            <Component_Content_Memory_Filter_by_Size/>
        </div>
    )

}

export default Component_Catagorees_Memory_Filters;