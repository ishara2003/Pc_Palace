import {ChangeEvent, useState} from "react";

interface CheckboxData {
    name: string;
    isChecked: boolean;
}

function Component_Catagorees_Motherboard_Filter_by_Brand() {


    const initialBrandCheckboxes: CheckboxData[] = [
        {name: 'ASUSssssss', isChecked: false},
        {name: 'LENOVO', isChecked: false},
        {name: 'MSI', isChecked: false},
        {name: 'HP', isChecked: false},
        {name: 'ACER', isChecked: false},
        {name: 'MAC', isChecked: false},
        {name: 'HUAWEI', isChecked: false},
        {name: 'DELL', isChecked: false},
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
                case newStates[2]:
                    console.log(newStates[2].name);
                    break;

                case newStates[3]:
                    console.log(newStates[3].name);
                    break;

                case newStates[4]:
                    console.log(newStates[4].name);
                    break;

                case newStates[5]:
                    console.log(newStates[5].name);
                    break;

                case newStates[6]:
                    console.log(newStates[6].name);
                    break;
                default:
                    console.log("None selected");
                    break;
            }




            return newStates;
        });

        };


    return (
        <div className={'text-left text-[20px] mb-3'}>
            <h2 className={'relative left-[25px] text-[23px]'}><b>BRAND</b></h2>
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
                    <label htmlFor={`brandcheckbox${index + 1}`}>{checkbox.name}</label>
                </div>
            ))}
        </div>
    );


}

export default Component_Catagorees_Motherboard_Filter_by_Brand;