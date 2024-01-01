import Clip_Board from "./Clip_Board.tsx";
import Product_Content from "./Product_Content.tsx";
import CardList from "./Page_Forwerd.tsx";
import Page_Forwerd from "./Page_Forwerd.tsx";

function Main_Content() {


    return (

        <div className={'main_content_root p-4'}>


            <div className={'w-full h-full p-2'}>

                <Clip_Board/>

                <Product_Content/>

                <Page_Forwerd/>

            </div>

        </div>

    )
}

export default Main_Content;