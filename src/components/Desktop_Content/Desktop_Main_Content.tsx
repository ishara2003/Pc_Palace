import Desktop_Filter from "./Desktop_Filter.tsx";
import Desktop_Product_Content from "./Desktop_Product_Content.tsx";

function Desktop_Main_Content() {
    return (
        <div className={'main_content_root p-4 '}>

            <h1 className={'w-fit laptop_header text-4xl relative left-[20px] top-[-5px] mb-2 '}><b>DESKTOP</b></h1>

            <div className={'flex mt-3'}>


                <div className={'items-center w-96 h-full  p-2 '}>

                    <Desktop_Filter/>

                </div>


                <div className={'w-full h-full border-l-[#0af3f3] border-l-4 p-2 '}>

                    <Desktop_Product_Content/>

                </div>
            </div>

        </div>

    )
}

export default Desktop_Main_Content;