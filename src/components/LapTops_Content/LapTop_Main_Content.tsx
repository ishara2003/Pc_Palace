import './CSS/Laptop_Main_Contnt_CSS.css'
import Product_Content from "../Main_Content/Product_Content.tsx";
import Laptop_Filter from "./Laptop_Filter.tsx";

function LapTop_Main_Content() {
    return (
        <div className={'main_content_root p-4 ' }>

            <h1 className={'w-fit laptop_header text-4xl relative left-[20px] top-[-5px] mb-2'}><b>LAPTOPS</b></h1>

            <div className={'flex mt-3'}>


            <div className={'items-center w-96 h-full border-amber-950 border-2 p-2'}>

                <Laptop_Filter/>

            </div>


            <div className={'w-full h-full border-amber-950 border-2 p-2'}>

<Product_Content/>
            </div>
            </div>

        </div>

    )
}

export default LapTop_Main_Content;