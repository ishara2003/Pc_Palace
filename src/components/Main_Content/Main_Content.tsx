
import Clip_Board from "./Clip_Board.tsx";
import Product_Content from "./Product_Content.tsx";

function Main_Content() {


    return (

        <div className={'content_root p-4'}>


            <div className={'w-full h-[2300.15px] border-amber-200 border-2 p-2'}>

                <Clip_Board/>

               <Product_Content/>



            </div>


        </div>

    )
}

export default Main_Content;