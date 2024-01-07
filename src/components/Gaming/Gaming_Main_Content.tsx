import React, {useState} from "react";
import Gaming_Product_Content from "./Gaming_Product_Content.tsx";
import Gaming_Desktop_Main_Content from "./Gaming_Desktop/Gaming_Desktop_Main_Content.tsx";
import Gaming_Monitor_Main_Content from "./Gaming_Monitors/Gaming_Monitor_Main_Content.tsx";
import Gaming_LapTop_Main_Content from "./Gaming_Laptops/Gaming_LapTop_Main_Content.tsx";
import Gaming_Accessories_Main_Content from "./Gaming_Accessories/Gaming_Accessories_Main_Content.tsx";
import Gaming_Desktop_Product_Content from "./Gaming_Desktop/Gaming_Desktop_Product_Content.tsx";
import Gaming_Monitor_Product_Content from "./Gaming_Monitors/Gaming_Monitor_Product_Content.tsx";
import Gaming_accessories_Product_Content from "./Gaming_Accessories/Gaming_accessories_Product_Content.tsx";
import Gaming_Laptop_Product_Content from "./Gaming_Laptops/Gaming_Laptop_Product_Content.tsx";


function Gaming_Main_Content() {

    const [gamingCurrentCategory, setGamingCurrentCategory] = useState('');

    const handleGamingCategoryClick = (category: string) => {
        setGamingCurrentCategory(category);
    };


    return (
        <div className={'main_content_root p-4 '}>

            <h1 className={'w-fit laptop_header text-4xl relative left-[300px] top-[-5px] mb-2'}>
                <b>{gamingCurrentCategory}</b></h1>

            <div className={'flex mt-3'}>


                <div className={'items-center w-[288px] h-full p-2'}>

                    <div className={''}>

                        <ul className={"text-[20px] pt-6 pb-8 text-left "}>
                            <b>

                                <li className={'header_nav_bar header_nav_bar_color w-full h-[60px] p-[10px] mt-[30px] mb-[30px] border-[4px] border-cyan-500'}
                                    onClick={() => {
                                        handleGamingCategoryClick('DESKTOPS')
                                    }}>DESKTOPS
                                </li>
                                <li className={'header_nav_bar header_nav_bar_color w-full h-[60px] p-[10px] mt-[30px] mb-[30px] border-[4px] border-cyan-500'}
                                    onClick={() => {
                                        handleGamingCategoryClick('MONITORS')
                                    }}>MONITORS
                                </li>
                                <li className={'header_nav_bar header_nav_bar_color w-full h-[60px] p-[10px] mt-[30px] mb-[30px] border-[4px] border-cyan-500'}
                                    onClick={() => {
                                        handleGamingCategoryClick('ACCESSORIES')
                                    }}>ACCESSORIES
                                </li>
                                <li className={'header_nav_bar header_nav_bar_color w-full h-[60px] p-[10px] mt-[30px] mb-[30px] border-[4px] border-cyan-500'}
                                    onClick={() => {
                                        handleGamingCategoryClick('LAPTOPS')
                                    }}>LAPTOPS
                                </li>

                            </b>
                        </ul>

                    </div>

                </div>

                <div className={'component_area items-center w-96 h-full ml-8  p-2'}>


                    {gamingCurrentCategory == "DESKTOPS" &&

                        <Gaming_Desktop_Main_Content/>
                    }

                    {gamingCurrentCategory == "MONITORS" &&

                        <Gaming_Monitor_Main_Content/>
                    }

                    {gamingCurrentCategory == "ACCESSORIES" &&

                        <Gaming_Accessories_Main_Content/>
                    }


                    {gamingCurrentCategory == "LAPTOPS" &&

                        <Gaming_LapTop_Main_Content/>
                    }

                </div>


                <div className={'w-full h-full border-l-[#0af3f3] border-l-4 p-2 '}>

                    {gamingCurrentCategory == "DESKTOPS" &&

                        <Gaming_Desktop_Product_Content/>
                    }

                    {gamingCurrentCategory == "MONITORS" &&

                        <Gaming_Monitor_Product_Content/>
                    }

                    {gamingCurrentCategory == "ACCESSORIES" &&

                        <Gaming_accessories_Product_Content/>
                    }

                    {gamingCurrentCategory == "LAPTOPS" &&

                        <Gaming_Laptop_Product_Content/>
                    }

                    {gamingCurrentCategory == "" &&

                        <Gaming_Laptop_Product_Content/>
                    }

                </div>
            </div>

        </div>

    )
}

export default Gaming_Main_Content;