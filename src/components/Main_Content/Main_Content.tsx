import Clip_Board from "./Clip_Board.tsx";
import Product_Content from "./Product_Content.tsx";

function Main_Content() {


    return (

        <div className={'main_content_root p-4'}>


            <div className={'w-full h-full border-amber-200 border-2 p-2'}>

                <Clip_Board/>

                <Product_Content/>

                <div className={'w-fit  main_content_next_page relative left-3/4 hidden  xl:flex'}>

                    <button className={'flex '}>
                        <img src="src/assets/icons/left-chevron1.png" alt="left_arrow_01"
                             className={'w-16 h-10 relative filter border-b-blue-700'}/>
                        <img src="src/assets/icons/left-chevron2.png" alt="left_arrow_02"
                             className={'w-14 h-8 relative right-[2vw] top-[4px]'}/>
                        <img src="src/assets/icons/left-chevron3.png" alt="left_arrow_03"
                             className={'w-12 h-6 relative right-[4vw] top-[8px]'}/>
                    </button>

                    <button className={'flex rotate-180'}>
                        <img src="src/assets/icons/left-chevron1.png" alt="left_arrow_01"
                             className={'w-16 h-10 relative'}/>
                        <img src="src/assets/icons/left-chevron2.png" alt="left_arrow_02"
                             className={'w-14 h-8 relative right-[2vw] top-[4px]'}/>
                        <img src="src/assets/icons/left-chevron3.png" alt="left_arrow_03"
                             className={'w-12 h-6 relative right-[4vw] top-[8px]'}/>
                    </button>


                </div>

            </div>

        </div>

    )
}

export default Main_Content;