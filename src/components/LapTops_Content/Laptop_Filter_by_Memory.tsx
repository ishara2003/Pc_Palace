import {ChangeEvent, useState} from "react";

interface RamCheckboxData {
    ramName: string;
    ramIsChecked: boolean;
}

function Laptop_Filter_by_Memory() {


    const initialMemorycheckboxes: RamCheckboxData[] = [
        {ramName: '4GB', ramIsChecked: false},
        {ramName: '8GB', ramIsChecked: false},
        {ramName: '16GB', ramIsChecked: false},
        {ramName: '32GB', ramIsChecked: false},


        // Add more checkboxes as needed
    ];

    const [ramcheckboxStates, setRamcheckboxStates]
        = useState<RamCheckboxData[]>(initialMemorycheckboxes);

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        setRamcheckboxStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index].ramIsChecked = event.target.checked;


            switch (newStates[index]) {

                case newStates[0]:
                    console.log(newStates[0].ramName);
                    break;
                case newStates[1]:
                    console.log(newStates[1].ramName);

                    break;
                case newStates[2]:
                    console.log(newStates[2].ramName);
                    break;

                case newStates[3]:
                    console.log(newStates[3].ramName);
                    break;

                default:
                    console.log("None selected");
                    break;

            }

            /*
                        if (newStates[index].processorName == 'INTEL CORE i3') {
                            /!* console.log("INTEL CORE i3");
                             console.log(initialMemorycheckboxes[0].processorName);*!/
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

        // console.log(`${ramcheckboxStates[index].name} checkbox is checked:`, event.target.checked);
    };


    return (
        <div className={'text-left text-[20px] mb-3'}>
            <h2 className={'relative left-[25px] text-[20px] text-white'}><b>MEMORY (RAM)</b></h2>
            {ramcheckboxStates.map((checkbox, index) => (
                <div key={index}>
                    <input
                        className="w-5 h-5 m-4 rounded-md]"
                        id={`ramcheckbox${index + 1}`}
                        type="checkbox"
                        value=""
                        checked={checkbox.ramIsChecked}
                        onChange={handleCheckboxChange(index)}
                    />
                    <label htmlFor={`ramcheckbox${index + 1}`}>{checkbox.ramName}</label>
                </div>
            ))}
        </div>
    )

}

export default Laptop_Filter_by_Memory;