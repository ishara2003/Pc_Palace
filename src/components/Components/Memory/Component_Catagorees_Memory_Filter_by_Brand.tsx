import {ChangeEvent, useState} from "react";
import '../CSS/Filter_CSS.css'

interface MemoryCheckboxData {
    memoryName: string;
    memoryIsChecked: boolean;
}

function Component_Catagorees_Memory_Filter_by_Brand() {


    const initialMemoryCheckboxes: MemoryCheckboxData[] = [
        {memoryName: 'ADATA', memoryIsChecked: false},
        {memoryName: 'ADDLINK', memoryIsChecked: false},
        {memoryName: 'KINGSTON', memoryIsChecked: false},
        {memoryName: 'Other', memoryIsChecked: false},
        /*{memoryName: 'HP', memoryIsChecked: false},
        {memoryName: 'ACER', memoryIsChecked: false},
        {memoryName: 'MAC', memoryIsChecked: false},
        {memoryName: 'HUAWEI', memoryIsChecked: false},
        {memoryName: 'DELL', memoryIsChecked: false},*/
        // Add more checkboxes as needed
    ];

    const [memorycheckboxStates, setMemorycheckboxStates]
        = useState<MemoryCheckboxData[]>(initialMemoryCheckboxes);

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        setMemorycheckboxStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index].memoryIsChecked = event.target.checked;




            switch (newStates[index]) {

                case newStates[0]:
                    console.log(newStates[0].memoryName);
                    break;
                case newStates[1]:
                    console.log(newStates[1].memoryName);

                    break;
                case newStates[2]:
                    console.log(newStates[2].memoryName);
                    break;

               /* case newStates[3]:
                    console.log(newStates[3].memoryName);
                    break;

                case newStates[4]:
                    console.log(newStates[4].memoryName);
                    break;

                case newStates[5]:
                    console.log(newStates[5].memoryName);
                    break;

                case newStates[6]:
                    console.log(newStates[6].memoryName);
                    break;*/
                default:
                    console.log("None selected");
                    break;
            }




            return newStates;
        });

        };


    return (
        <div className={'filter_css'}>
            <h2 className={'relative left-[25px] text-[20px] text-amber-50'}>MANUFACTURER</h2>
            {memorycheckboxStates.map((checkbox, index) => (
                <div key={index}>
                    <input
                        className="w-5 h-5 m-4 rounded-md]"
                        id={`memorycheckbox${index + 1}`}
                        type="checkbox"
                        value=""
                        checked={checkbox.memoryIsChecked}
                        onChange={handleCheckboxChange(index)}
                    />
                    <label  className={'text-center cursor-pointer'} htmlFor={`memorycheckbox${index + 1}`}>{checkbox.memoryName}</label>
                </div>
            ))}
        </div>
    );


}

export default Component_Catagorees_Memory_Filter_by_Brand;