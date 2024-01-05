import Component_Product_Content from "./Component_Product_Content.tsx";
import './CSS/CSS.css'
import Component_Catagorees_Motherboard from "./Motherboard/Component_Catagorees_Motherboard.tsx";
import React, {useState} from "react";
import Component_Catagorees_Processors from "./Processor/Component_Catagorees_Processors.tsx";
import {Link} from "react-router-dom";
import Component_Catagorees_GPU from "./GPU/Component_Catagorees_GPU.tsx";
import Component_Catagorees_Memory from "./Memory/Component_Catagorees_Memory.tsx";
import '../Main_Content/CSS/Product_CSS.css'
import '../layouts/CSS/FooterCss.css'
import Component_Catagorees_Storage from "./Storage/Component_Catagorees_Storage.tsx";
import Component_Catagorees_PowerSupply from "./Power Supply/Component_Catagorees_PowerSupply.tsx";
import Component_Catagorees_Cooler from "./Cooler/Component_Catagorees_Cooler.tsx";
import Component_Catagorees_Casing from "./Casing/Component_Catagorees_Casing.tsx";
import Component_Catagorees_Monitor from "./Monitor/Component_Catagorees_Monitor.tsx";

function Components_Main_Content() {

    const [currentCategory, setCurrentCategory] = useState('');

    const handleCategoryClick = (category: string) => {
        setCurrentCategory(category);
    };


    return (
        <div className={'main_content_root p-4 '}>

            <h1 className={'w-fit laptop_header text-4xl relative left-[300px] top-[-5px] mb-2'}>
                <b>{currentCategory}</b></h1>

            <div className={'flex mt-3'}>


                <div className={'items-center w-[288px] h-full p-2'}>

                    <div className={''}>

                        <ul className={"text-[20px] pt-6 pb-8 text-left "}>
                            <b>

                                <li className={'header_nav_bar header_nav_bar_color w-full h-[60px] p-[10px] mt-[30px] mb-[30px] border-[4px] border-cyan-500'}
                                    onClick={() => {
                                        handleCategoryClick('PROCESSOR')
                                    }}>PROCESSORS
                                </li>
                                <li className={'header_nav_bar header_nav_bar_color w-full h-[60px] p-[10px] mt-[30px] mb-[30px] border-[4px] border-cyan-500'}
                                    onClick={() => {
                                        handleCategoryClick('MOTHERBOARDS')
                                    }}>MOTHERBOARDS
                                </li>
                                <li className={'header_nav_bar header_nav_bar_color w-full h-[60px] p-[10px] mt-[30px] mb-[30px] border-[4px] border-cyan-500'}
                                    onClick={() => {
                                        handleCategoryClick('MEMORY')
                                    }}>MEMORY
                                </li>
                                <li className={'header_nav_bar header_nav_bar_color w-full h-[60px] p-[10px] mt-[30px] mb-[30px] border-[4px] border-cyan-500'}
                                    onClick={() => {
                                        handleCategoryClick('GRAPHIC CARDS')
                                    }}>GRAPHIC CARDS
                                </li>
                                <li className={'header_nav_bar header_nav_bar_color w-full h-[60px] p-[10px] mt-[30px] mb-[30px] border-[4px] border-cyan-500'}
                                    onClick={() => {
                                        handleCategoryClick('STORAGES')
                                    }}>STORAGES
                                </li>
                                <li className={'header_nav_bar header_nav_bar_color w-full h-[60px] p-[10px] mt-[30px] mb-[30px] border-[4px] border-cyan-500'}
                                    onClick={() => {
                                        handleCategoryClick('POWER SUPPLY')
                                    }}>POWER SUPPLY
                                </li>
                                <li className={'header_nav_bar header_nav_bar_color w-full h-[60px] p-[10px] mt-[30px] mb-[30px] border-[4px] border-cyan-500'}
                                    onClick={() => {
                                        handleCategoryClick('COOLERS')
                                    }}>COOLERS
                                </li>
                                <li className={'header_nav_bar header_nav_bar_color w-full h-[60px] p-[10px] mt-[30px] mb-[30px] border-[4px] border-cyan-500'}
                                    onClick={() => {
                                        handleCategoryClick('CASING')
                                    }}>CASING
                                </li>
                                <li className={'header_nav_bar header_nav_bar_color w-full h-[60px] p-[10px] mt-[30px] mb-[30px] border-[4px] border-cyan-500'}
                                    onClick={() => {
                                        handleCategoryClick('MONITOR')
                                    }}>MONITOR
                                </li>

                            </b>
                        </ul>

                    </div>

                </div>

                <div className={'component_area items-center w-96 h-full ml-8  p-2'}>

                    {currentCategory == "PROCESSOR" &&
                        <Component_Catagorees_Processors/>
                    }

                    {currentCategory == "MOTHERBOARDS" &&
                        <Component_Catagorees_Motherboard/>
                    }

                    {currentCategory == "MEMORY" &&
                        <Component_Catagorees_Memory/>
                    }

                    {currentCategory == "GRAPHIC CARDS" &&
                        <Component_Catagorees_GPU/>
                    }

                    {currentCategory == "STORAGES" &&
                        <Component_Catagorees_Storage/>
                    }

                    {currentCategory == "POWER SUPPLY" &&
                        <Component_Catagorees_PowerSupply/>
                    }

                    {currentCategory == "COOLERS" &&
                        <Component_Catagorees_Cooler/>
                    }

                    {currentCategory == "CASING" &&
                        <Component_Catagorees_Casing/>
                    }

{currentCategory == "MONITOR" &&
                        <Component_Catagorees_Monitor/>
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