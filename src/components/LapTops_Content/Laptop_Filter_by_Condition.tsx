import { ChangeEvent, useEffect, useState } from "react";
import '../Components/CSS/Filter_CSS.css'
interface CheckboxData {
    name: string;
    isChecked: boolean;
}


interface Props {

    onConditionChecked: (condition: any) => void


}

function Laptop_Filer_by_Condition({ onConditionChecked }: Props) {



    const initialConditionCheckboxes: CheckboxData[] = [
        { name: 'USED', isChecked: false },
        { name: 'BRAND NEW', isChecked: false },
        
        // Add more checkboxes as needed
    ];

    const [conditioncheckboxStates, setConditioncheckboxStates]
        = useState<CheckboxData[]>(initialConditionCheckboxes);

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {

        const isConditionChecked = event.target.checked;
        const temp_condition = conditioncheckboxStates[index].name;

        setConditioncheckboxStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index].isChecked = event.target.checked;

            if (isConditionChecked) {
                console.log("Brand is clicked : ", isConditionChecked);

                onConditionChecked({ condition: temp_condition, conditionIsChecked: true })

            } else {
                onConditionChecked({ condition: temp_condition, conditionIsChecked: false })

            }


            return newStates;
        });

    };


    return (
        <div className={'filter_css'}>
            <h2 className={'relative left-[25px] text-[20px] text-white'}><b>CONDITION</b></h2>
            {conditioncheckboxStates.map((checkbox, index) => (
                <div key={index}>
                    <input
                        className="w-5 h-5 m-4 rounded-md]"
                        id={`conditioncheckbox${index + 1}`}
                        type="checkbox"
                        value=""
                        checked={checkbox.isChecked}
                        onChange={handleCheckboxChange(index)}
                    />
                    <label htmlFor={`conditioncheckbox${index + 1}`}>{checkbox.name}</label>
                </div>
            ))}
        </div>
    );

}

export default Laptop_Filer_by_Condition;