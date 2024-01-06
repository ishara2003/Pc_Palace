import Component_Catagorees_GPU_Filter_by_Brand from "./Component_Catagorees_GPU_Filter_by_Brand.tsx";
import Component_Content_GPU_Filter_by_Chipset
    from "./Component_Content_GPU_Filter_by_Chipset.tsx";
import Component_Catagorees_GPU_Filters_by_VRam
    from "./Component_Catagorees_GPU_Filters_by_VRam.tsx";
import Component_Catagorees_GPU_Filter_by_Price from "./Component_Catagorees_GPU_Filter_by_Price.tsx";

function Component_Catagorees_GPU_Filters() {

    return(
        <div className={''}>
            <Component_Catagorees_GPU_Filter_by_Price/>
            <Component_Catagorees_GPU_Filter_by_Brand/>
            <Component_Content_GPU_Filter_by_Chipset/>
            <Component_Catagorees_GPU_Filters_by_VRam/>
        </div>
    )

}

export default Component_Catagorees_GPU_Filters;