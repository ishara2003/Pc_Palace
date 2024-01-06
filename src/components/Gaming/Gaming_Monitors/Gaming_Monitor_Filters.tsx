import Gaming_Monitor_Filter_by_Brand from "./Gaming_Monitor_Filter_by_Brand.tsx";
import Gaming_Monitor_Filter_by_Resolutions from "./Gaming_Monitor_Filter_by_Resolutions.tsx";
import Gaming_Monitor_Filters_by_Refresh_Rate from "./Gaming_Monitor_Filters_by_Refresh_Rate.tsx";

import Gaming_Monitor_Filter_by_Screen_Size from "./Gaming_Monitor_Filter_by_Screen_Size.tsx";
import Gaming_Monitor_Filter_by_Price from "./Gaming_Monitor_Filter_by_Price.tsx";

function Gaming_Monitor_Filters() {

    return(
        <div>
            <Gaming_Monitor_Filter_by_Price/>
            <Gaming_Monitor_Filter_by_Brand/>
            <Gaming_Monitor_Filter_by_Resolutions/>
            <Gaming_Monitor_Filter_by_Screen_Size/>
            <Gaming_Monitor_Filters_by_Refresh_Rate/>
        </div>
    )

}

export default Gaming_Monitor_Filters;