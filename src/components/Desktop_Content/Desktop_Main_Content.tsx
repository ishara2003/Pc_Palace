import { useState } from "react";
import Desktop_Filter from "./Desktop_Filter.tsx";
import Desktop_Product_Content from "./Desktop_Product_Content.tsx";
import CardList from "../Main_Content/Page_Forwerd.tsx";

function Desktop_Main_Content() {

    const [score, setScore] = useState(1); // Lift the state up

    const add = () => {
        setScore(score + 1);   
    };

    const min = () => {
        if (score > 1) {
            setScore(score - 1);
        }
    };

    const [selectedWorkstations, setSelectedWorkstations] = useState<string[]>([]);

    const [selectedProcessor, setSelectedProcessor] = useState<string[]>([]);

    const [selectedGPU, setSelectedGPU] = useState<string[]>([]);

    const [selectedRAM, setSelectedRAM] = useState<string[]>([]);



    const addSelectedWorkstation = (workstation: any) => {

        // console.log("Add Una HUTTOOO");

        if(workstation.isChecked){

        setSelectedWorkstations(prevSelected => [...prevSelected, workstation.workstation]);
        }else{
            setSelectedWorkstations(prevSelected => prevSelected.filter(item => item !== workstation.workstation));
        }
        
    };



    const addSelectedProcessor = (processor: any) => {

        // console.log("Processor Ekata Add");

        if(processor.processorIsChecked){

            setSelectedProcessor(prevSelected => [...prevSelected, processor.processorName]);
        }else{
            setSelectedProcessor(prevSelected => prevSelected.filter(items => items !== processor.processorName));
        }
    };

  
    const addSelectedGPU = (gpu: any) => {

        // console.log("Processor Ekata Add");

        if(gpu.gpuIsChecked){

            setSelectedGPU(prevSelected => [...prevSelected, gpu.gpuName]);
        }else{
            setSelectedGPU(prevSelected => prevSelected.filter(items => items !== gpu.gpuName));
        }
    };

  
    const addSelectedRAM = (ram: any) => {

       

        if(ram.isChecked){
 console.log("RAM Ekata Add", ram.ramName);
            setSelectedRAM(prevSelected => [...prevSelected, ram.ramName]);
        }else{
            setSelectedRAM(prevSelected => prevSelected.filter(items => items !== ram.ramName));
        }
    };

  

    return (
        <div className={'main_content_root p-4 '}>

            <h1 className={'w-fit laptop_header text-4xl relative left-[20px] top-[-5px] mb-2 '}><b>DESKTOP</b></h1>

            <div className={'flex mt-3'}>
                <div className={'items-center w-96 h-full  p-2 '}>
                    <Desktop_Filter onWorkstationChange={addSelectedWorkstation} onProcessorChange={addSelectedProcessor} onGpuChange={addSelectedGPU} onRamChange={addSelectedRAM}/>
                </div>

                <div className={'w-full h-full border-l-[#0af3f3] border-l-4 p-2 '}>

                    <Desktop_Product_Content score={score} selectedWorkstation={selectedWorkstations} selectedProcessor={selectedProcessor} selectedGPU={selectedGPU} selectedRAM={selectedRAM} />
                    
                    <CardList score={score} add={add} min={min}/> 

                </div>
            </div>
        </div>
    )
}

export default Desktop_Main_Content;
