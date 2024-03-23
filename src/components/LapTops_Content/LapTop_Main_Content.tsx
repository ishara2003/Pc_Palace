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


    const [selectBrand, setSelectBrand] = useState<string[]>([]);
    const [selectProcessor, setSelectProcessor] = useState<string[]>([]);
    const [selectedGPU, setSelectedGPU] = useState<string[]>([]);
    const [selectedRAM, setSelectedRAM] = useState<string[]>([]);
    const [selectedScreenSize, setSelectedScreenSize] = useState<string[]>([]);


    const addSelectedBrand = (brand: any) => {

        if (brand.brandIsChecked) {

            setSelectBrand(preSelected => [...preSelected, brand.brand]);

        } else {

            setSelectBrand(preSelected => preSelected.filter(item => item !== brand.brand))

        }
    }

    const addSelectedProcessor = (processor: any) => {

        if (processor.processorIsChecked) {

            setSelectProcessor(preSelected => [...preSelected, processor.processor])

        } else {
            setSelectProcessor(preSelected => preSelected.filter(item => item !== processor.processor))
        }


    }

    const addSelectedGpu = (gpu: any) => {

        if (gpu.gpuIsChecked) {

            setSelectedGPU(preSelected => [...preSelected, gpu.gpu])

        } else {
            setSelectedGPU(preSelected => preSelected.filter(item => item !== gpu.gpu))
        }

    }

    const addSelectedRAM = (ram: any) => {

        if (ram.ramIsChecked) {

            setSelectedRAM(preSelected => [...preSelected, ram.ram])

        } else {
            setSelectedRAM(preSelected => preSelected.filter(item => item !== ram.ram))
        }


    }

    const addSelectedScreenSize = (screenSize: any) => {

        if (screenSize.screenSizeIsChecked) {

            setSelectedScreenSize(preSelected => [...preSelected, screenSize.screenSize]);

        } else {

            setSelectedScreenSize(preSelected => preSelected.filter(item => item !== screenSize.screenSize))

        }


    }

    return (
        <div className={'main_content_root p-4 '}>

            <h1 className={'w-fit laptop_header text-4xl relative left-[20px] top-[-5px] mb-2 '}><b>LAPTOPS</b></h1>

            <div className={'flex mt-3'}>


                <div className={'items-center w-96 h-full  p-2'}>

                    <Laptop_Filter onBrandChecked={addSelectedBrand} onSelectedProcessor={addSelectedProcessor} onSelectedGPU={addSelectedGpu} OnSelectedRAM={addSelectedRAM} onSelectedScreenSize={addSelectedScreenSize} />

                </div>


                <div className={'laptop_main_content_border'}>

                    <Laptop_Product_Content score={score} selectedBrand={selectBrand} selectedProcessor={selectProcessor} selectedGPU={selectedGPU} selectedRAM={selectedRAM} selectedScreenSize={selectedScreenSize}/> {/* Pass score as prop */}
                    {/* <Page_Forwerd/> */}
                    <CardList score={score} add={add} min={min} /> {/* Pass score and functions as props */}


                </div>

            </div>

        </div>

    )
}

export default LapTop_Main_Content;