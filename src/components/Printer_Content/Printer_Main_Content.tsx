import { useState } from "react";
import Printer_Filter from "./Printer_Filter.tsx";
import Printer_Product_Content from "./Printer_Product_Content.tsx";
import CardList from "../Main_Content/Page_Forwerd.tsx";

function Printer_Main_Content() {


    const [score, setScore] = useState(1);  // Lift the state up

    const add = () => {
      setScore(score + 1);
    };
  
    const min = () => {
      if (score > 1) {
        setScore(score - 1);
      }
    };

    return (
        <div className={'main_content_root p-4 '}>

            <h1 className={'w-fit laptop_header text-4xl relative left-[20px] top-[-5px] mb-2 '}><b>DESKTOP</b></h1>

            <div className={'flex mt-3'}>


                <div className={'items-center w-96 h-full  p-2 '}>

                    <Printer_Filter/>

                </div>


                <div className={'w-full h-full border-l-[#0af3f3] border-l-4 p-2 '}>
<>
                    <Printer_Product_Content score = {score} />

<CardList score = {score} add = {add} min = {min} />
</>

                </div>
            </div>

        </div>

    )
}

export default Printer_Main_Content;