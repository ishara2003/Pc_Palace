import Component_Catagorees_GPU_Filter_by_Brand from "./Component_Catagorees_GPU_Filter_by_Brand.tsx";
import Component_Content_GPU_Filter_by_Chipset
    from "./Component_Content_GPU_Filter_by_Chipset.tsx";
import Component_Catagorees_GPU_Filters_by_VRam
    from "./Component_Catagorees_GPU_Filters_by_VRam.tsx";

function Component_Catagorees_GPU_Filters() {

    return(
        <div className={''}>
            <Component_Catagorees_GPU_Filter_by_Brand/>
            <Component_Catagorees_GPU_Filters_by_VRam/>
            <Component_Content_GPU_Filter_by_Chipset/>
        </div>
    )

}

export default Component_Catagorees_GPU_Filters;