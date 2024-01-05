import Component_Catagorees_Monitor_Filter_by_Brand from "./Component_Catagorees_Monitor_Filter_by_Brand.tsx";
import Component_Content_Monitor_Filter_by_Resolutions from "./Component_Content_Monitor_Filter_by_Resolutions.tsx";
import Component_Catagorees_Monitor_Filters_by_Refresh_Rate from "./Component_Catagorees_Monitor_Filters_by_Refresh_Rate.tsx";
import Component_Content_Monitor_Filter_by_Refresh_Rate from "./Component_Content_Monitor_Filter_by_Screen_Size.tsx";

function Component_Catagorees_Monitor_Filters() {

    return(
        <div>
            <Component_Catagorees_Monitor_Filter_by_Brand/>
            <Component_Content_Monitor_Filter_by_Resolutions/>
            <Component_Content_Monitor_Filter_by_Refresh_Rate/>
            <Component_Catagorees_Monitor_Filters_by_Refresh_Rate/>
        </div>
    )

}

export default Component_Catagorees_Monitor_Filters;