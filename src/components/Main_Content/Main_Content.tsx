import Clip_Board from "./Clip_Board.tsx";
import Product_Content from "./Product_Content.tsx";

import Page_Forwerd from "./Page_Forwerd.tsx";
import { useState } from "react";
import CardList from "./Page_Forwerd.tsx";

function Main_Content() {
    const [score, setScore] = useState(1); // Lift the state up

    const add = () => {
        setScore(score + 1);
        
    };

    const min = () => {
        if (score > 1) {
            setScore(score - 1);
        }
    };

    return (

        <div className={'main_content_root p-4'}>


            <div className={'w-full h-full p-2'}>

                <Clip_Board/>

                <Product_Content score={score}/>
                      {/* <Page_Forwerd/> */}
                      <CardList score={score} add={add} min={min}/>

            </div>

        </div>

    )
}

export default Main_Content;