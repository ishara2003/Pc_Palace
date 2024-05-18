import {ChangeEvent, useState} from "react";
import '../CSS/Filter_CSS.css'

interface CheckboxData {
    name: string;
    isChecked: boolean;
}

function Component_Catagorees_Processor_Filter_by_Brand() {


    const initialBrandCheckboxes: CheckboxData[] = [
        {name: 'AMD', isChecked: false},
        {name: 'INTEL', isChecked: false},
        // {name: 'Other', isChecked: false},

        // Add more checkboxes as needed
    ];

    const [brandcheckboxStates, setBrandcheckboxStates]
        = useState<CheckboxData[]>(initialBrandCheckboxes);

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        setBrandcheckboxStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index].isChecked = event.target.checked;




            switch (newStates[index]) {

                case newStates[0]:
                    console.log(newStates[0].name);
                    break;
                case newStates[1]:
                    console.log(newStates[1].name);

                    break;

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
            {brandcheckboxStates.map((checkbox, index) => (
                <div key={index}>
                    <input
                        className="w-5 h-5 m-4 rounded-md]"
                        id={`brandcheckbox${index + 1}`}
                        type="checkbox"
                        value=""
                        checked={checkbox.isChecked}
                        onChange={handleCheckboxChange(index)}
                    />
                    <label  className={'text-center cursor-pointer'} htmlFor={`brandcheckbox${index + 1}`}>{checkbox.name}</label>
                </div>
            ))}
        </div>
    );


}

export default Component_Catagorees_Processor_Filter_by_Brand;