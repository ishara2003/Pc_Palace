import Gaming_Accessories_Filter_by_Type from "./Gaming_Accessories_Filter_by_Type.tsx";
import Gaming_Accessories_Filter_by_Price from "./Gaming_Accessories_Filter_by_Price.tsx";


function Gaming_Accessories_Filters() {

    return(
        <div className={''}>
            <Gaming_Accessories_Filter_by_Price/>
           <Gaming_Accessories_Filter_by_Type/>
        </div>
    )

}

export default Gaming_Accessories_Filters;