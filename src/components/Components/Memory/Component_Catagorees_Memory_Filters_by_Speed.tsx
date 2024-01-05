import {ChangeEvent, useState} from "react";
import '../CSS/Filter_CSS.css'

interface speedCheckboxData {
    speedName: string;
    speedIsChecked: boolean;
}

function Component_Catagorees_Memory_Filters_by_Speed() {

    const initialSpeedcheckboxes: speedCheckboxData[] = [
        {speedName: 'DDR4-3000', speedIsChecked: false},
        {speedName: 'DDR4-3200', speedIsChecked: false},
        {speedName: 'DDR4-3600', speedIsChecked: false},
        {speedName: 'LAPTOP DDR4-3200', speedIsChecked: false},
        {speedName: 'LAPTOP DDR5-4800', speedIsChecked: false},
       /* {chipName: 'AMD X570', chipIsChecked: false},
        {chipName: 'INTEL B560', chipIsChecked: false},
        {chipName: 'INTEL B660', chipIsChecked: false},
        {chipName: 'INTEL B760', chipIsChecked: false},
        {chipName: 'INTEL H310', chipIsChecked: false},
        {chipName: 'INTEL H510', chipIsChecked: false},*/

        // Add more checkboxes as needed
    ];

    const [speedcheckboxStates, setSpeedcheckboxStates]
        = useState<speedCheckboxData[]>(initialSpeedcheckboxes);

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        setSpeedcheckboxStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index].speedIsChecked = event.target.checked;


            switch (newStates[index]) {

                case newStates[0]:
                    console.log(newStates[0].speedName);
                    break;
                case newStates[1]:
                    console.log(newStates[1].speedName);

                    break;
                case newStates[2]:
                    console.log(newStates[2].speedName);
                    break;

                case newStates[3]:
                    console.log(newStates[3].speedName);
                    break;

                case newStates[4]:
                    console.log(newStates[4].speedName);
                    break;

             /*   case newStates[5]:
                    console.log(newStates[5].speedName);
                    break;

                case newStates[6]:
                    console.log(newStates[6].speedName);
                    break;
                case newStates[7]:
                    console.log(newStates[7].speedName);
                    break;
                case newStates[8]:
                    console.log(newStates[8].speedName);
                    break;
                case newStates[9]:
                    console.log(newStates[9].speedName);
                    break;*/

                default:
                    console.log("None selected");
                    break;

            }

            return newStates;
        });

        // console.log(`${speedcheckboxStates[index].name} checkbox is checked:`, event.target.checked);
    };


    return (
        <div className={'filter_css'}>
            <h2 className={'relative left-[25px] text-[20px] text-amber-50'}>SPEED</h2>
            {speedcheckboxStates.map((checkbox, index) => (
                <div key={index}>
                    <input
                        className="w-5 h-5 m-4 rounded-md cursor-pointer"
                        id={`speedcheckbox${index + 1}`}
                        type="checkbox"
                        value=""
                        checked={checkbox.speedIsChecked}
                        onChange={handleCheckboxChange(index)}
                    />
                    <label className={'text-center cursor-pointer'}
                           htmlFor={`speedcheckbox${index + 1}`}>{checkbox.speedName}</label>
                </div>
            ))}
        </div>
    )


}

export default Component_Catagorees_Memory_Filters_by_Speed;