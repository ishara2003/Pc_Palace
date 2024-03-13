import {ChangeEvent, useState} from "react";
import '../Components/CSS/Filter_CSS.css'
interface ProcessorCheckboxData {
    processorName: string;
    processorIsChecked: boolean;
}

interface Props {
    
    onProcessorChange: (processor: any) => void;
      
}

function Desktop_Filter_by_Processor({onProcessorChange}:any) {


    const initialScreenSizeCheckboxes: ProcessorCheckboxData[] = [
        {processorName: 'INTEL CORE i3', processorIsChecked: false},
        {processorName: 'INTEL CORE i5', processorIsChecked: false},
        {processorName: 'INTEL CORE i7', processorIsChecked: false},
        {processorName: 'INTEL CORE i9', processorIsChecked: false},
        {processorName: 'AMD RYZEN 5 ', processorIsChecked: false},
        {processorName: 'AMD RYZEN 7 ', processorIsChecked: false},
        {processorName: 'AMD RYZEN 9 ', processorIsChecked: false},

        // Add more checkboxes as needed
    ];

    const [processorcheckboxStates, setProcessorcheckboxStates]
        = useState<ProcessorCheckboxData[]>(initialScreenSizeCheckboxes);

        const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
            const isChecked = event.target.checked;
            let processorTemp = initialScreenSizeCheckboxes[index].processorName;
    
            setProcessorcheckboxStates(prevStates => {
                const newStates = [...prevStates];
                newStates[index].processorIsChecked = isChecked;
    
                if (isChecked) {                
                    console.log("Added to processorcheckboxStates");
                    
                    onProcessorChange({processorName:processorTemp,processorIsChecked:true});
                } else {
                    onProcessorChange({processorName:processorTemp,processorIsChecked:false});
    
                }
    
                return newStates;
            });
        };
    


    return (
        <div className={'filter_css'}>
            <h2 className={'relative left-[25px] text-[20px] text-white'}><b>PROCESSOR</b></h2>
            {processorcheckboxStates.map((checkbox, index) => (
                <div key={index}>
                    <input
                        className="w-5 h-5 m-4 rounded-md]"
                        id={`processorcheckbox${index + 1}`}
                        type="checkbox"
                        value=""
                        checked={checkbox.processorIsChecked}
                        onChange={handleCheckboxChange(index)}
                    />
                    <label htmlFor={`processorcheckbox${index + 1}`}>{checkbox.processorName}</label>
                </div>
            ))}
        </div>
    )

}

export default Desktop_Filter_by_Processor;