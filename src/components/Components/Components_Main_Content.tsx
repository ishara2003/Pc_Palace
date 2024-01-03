import Component_Product_Content from "./Component_Product_Content.tsx";
import './CSS/CSS.css'
import Component_Catagorees_Motherboard from "./Motherboard/Component_Catagorees_Motherboard.tsx";
import React, {useState} from "react";
import Component_Catagorees_Processors from "./Processor/Component_Catagorees_Processors.tsx";
import {Link} from "react-router-dom";
import Component_Catagorees_GPU from "./Memory/Component_Catagorees_GPU.tsx";
import Component_Catagorees_Memory from "./GPU/Component_Catagorees_Memory.tsx";
import '../Main_Content/CSS/Product_CSS.css'

function Components_Main_Content() {

    const [currentCategory, setCurrentCategory] = useState('');

    const handleCategoryClick = (category:string) => {
        setCurrentCategory(category);
    };


    return (
        <div className={'main_content_root p-4 '}>

            <h1 className={'w-fit laptop_header text-4xl relative left-[300px] top-[-5px] mb-2'}><b>{currentCategory}</b></h1>

            <div className={'flex mt-3'}>


                <div className={'items-center w-[288px] h-full p-2'}>

                    <div className={''}>

                        <ul className={"text-2xl pt-6 pb-8 text-left "}>
                        <b>

                        <li className={'hover_effect_for_all_click_events component_catagorees_item_list'} onClick={()=>{handleCategoryClick('PROCESSOR')}}>PROCESSORS</li>
                        <li className={'hover_effect_for_all_click_events component_catagorees_item_list'} onClick={()=>{handleCategoryClick('MOTHERBOARDS')}} >MOTHERBOARDS</li>
                        <li className={'hover_effect_for_all_click_events component_catagorees_item_list'} onClick={()=>{handleCategoryClick('MEMORY')}} >MEMORY</li>
                        <li className={'hover_effect_for_all_click_events component_catagorees_item_list'} onClick={()=>{handleCategoryClick('GRAPHIC CARDS')}} >GRAPHIC CARDS</li>
                        <li className={'hover_effect_for_all_click_events component_catagorees_item_list'} onClick={()=>{handleCategoryClick('STORAGES')}} >STORAGES</li>
                        <li className={'hover_effect_for_all_click_events component_catagorees_item_list'} onClick={()=>{handleCategoryClick('POWER SUPPLY')}} >POWER SUPPLY</li>
                        <li className={'hover_effect_for_all_click_events component_catagorees_item_list'} onClick={()=>{handleCategoryClick('POWER SUPPLY')}} >COOLERS</li>
                        <li className={'hover_effect_for_all_click_events component_catagorees_item_list'} onClick={()=>{handleCategoryClick('CASING')}} >CASING</li>
                        <li className={'hover_effect_for_all_click_events component_catagorees_item_list'} onClick={()=>{handleCategoryClick('MONITOR')}} >MONITOR</li>

                        </b>
                        </ul>

                    </div>

                </div>

                <div className={'component_area items-center w-96 h-full ml-8  p-2'}>

                    {currentCategory=="PROCESSOR"&&
                    <Component_Catagorees_Processors />
                    }

                    {currentCategory=="MOTHERBOARDS"&&
                    <Component_Catagorees_Motherboard/>
                    }

                    {currentCategory == "MEMORY" &&
                        <Component_Catagorees_Memory/>
                    }
                    {currentCategory == "GRAPHIC CARDS" &&
                        <Component_Catagorees_GPU/>
                    }

                </div>


                <div className={'w-full h-full border-l-[#0af3f3] border-l-4 p-2 '}>

                    <Component_Product_Content/>

                </div>
            </div>

        </div>

    )
}

export default Components_Main_Content;