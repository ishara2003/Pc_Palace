import { useState } from 'react';
import Page_Forwerd from '../Main_Content/Page_Forwerd.tsx';
import './CSS/Laptop_Main_Contnt_CSS.css'
import Laptop_Filter from "./Laptop_Filter.tsx";
import Laptop_Product_Content from "./Laptop_Product_Content.tsx";
import CardList from '../Main_Content/Page_Forwerd.tsx';

function LapTop_Main_Content() {


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
        <div className={'main_content_root p-4 '}>

            <h1 className={'w-fit laptop_header text-4xl relative left-[20px] top-[-5px] mb-2 '}><b>LAPTOPS</b></h1>

            <div className={'flex mt-3'}>


                <div className={'items-center w-96 h-full  p-2'}>

                    <Laptop_Filter/>

                </div>


                <div className={'laptop_main_content_border'}>

                <Laptop_Product_Content score={score}/> {/* Pass score as prop */}
                    {/* <Page_Forwerd/> */}
                    <CardList score={score} add={add} min={min}/> {/* Pass score and functions as props */}


                </div>

            </div>

        </div>

    )
}

export default LapTop_Main_Content;