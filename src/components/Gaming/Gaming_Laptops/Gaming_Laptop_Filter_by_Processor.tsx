import {ChangeEvent, useState} from "react";
import '../../Components/CSS/Filter_CSS.css'

interface ProcessorCheckboxData {
    processorName: string;
    processorIsChecked: boolean;
}

function Gaming_Laptop_Filter_by_Processor() {


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
        setProcessorcheckboxStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index].processorIsChecked = event.target.checked;


            switch (newStates[index]) {

                case newStates[0]:
                    console.log(newStates[0].processorName);
                    break;
                case newStates[1]:
                    console.log(newStates[1].processorName);

                    break;
                case newStates[2]:
                    console.log(newStates[2].processorName);
                    break;

                case newStates[3]:
                    console.log(newStates[3].processorName);
                    break;

                case newStates[4]:
                    console.log(newStates[4].processorName);
                    break;

                case newStates[5]:
                    console.log(newStates[5].processorName);
                    break;

                case newStates[6]:
                    console.log(newStates[6].processorName);
                    break;
                default:
                    console.log("None selected");
                    break;

            }

            /*
                        if (newStates[index].processorName == 'INTEL CORE i3') {
                            /!* console.log("INTEL CORE i3");
                             console.log(initialScreenSizeCheckboxes[0].processorName);*!/
                        }

                        if (newStates[index].processorName == '14 INCHES') {
                            console.log("14 INCHES");
                        }

                        if (newStates[index].processorName == '15 INCHES') {
                            console.log("15 INCHES");
                        }

                        if (newStates[index].processorName == '16 INCHES') {
                            console.log("16 INCHES");
                        }*/

            return newStates;
        });

        // console.log(`${processorcheckboxStates[index].name} checkbox is checked:`, event.target.checked);
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

export default Gaming_Laptop_Filter_by_Processor;