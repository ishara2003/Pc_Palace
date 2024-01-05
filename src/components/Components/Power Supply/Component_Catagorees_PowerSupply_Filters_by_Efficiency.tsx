import {ChangeEvent, useState} from "react";
import '../CSS/Filter_CSS.css'

interface UPSEfficiencyCheckboxData {
    upsEfficiencyName: string;
    upsEfficiencyIsChecked: boolean;
}

function Component_Catagorees_PowerSupply_Filters_by_Efficiency() {

    const initialupsEfficiencycheckboxes: UPSEfficiencyCheckboxData[] = [
        {upsEfficiencyName: '80+ BRONZE', upsEfficiencyIsChecked: false},
        {upsEfficiencyName: '80+ GOLD', upsEfficiencyIsChecked: false},
        {upsEfficiencyName: '80+ PLATINUM', upsEfficiencyIsChecked: false},
        {upsEfficiencyName: '80+ TITANIUM', upsEfficiencyIsChecked: false},
        // {upsEfficiencyName: 'LAPTOP DDR5-4800', upsEfficiencyIsChecked: false},
       /* {chipName: 'AMD X570', chipIsChecked: false},
        {chipName: 'INTEL B560', chipIsChecked: false},
        {chipName: 'INTEL B660', chipIsChecked: false},
        {chipName: 'INTEL B760', chipIsChecked: false},
        {chipName: 'INTEL H310', chipIsChecked: false},
        {chipName: 'INTEL H510', chipIsChecked: false},*/

        // Add more checkboxes as needed
    ];

    const [upsEfficiencycheckboxStates, setUpsEfficiencycheckboxStates]
        = useState<UPSEfficiencyCheckboxData[]>(initialupsEfficiencycheckboxes);

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        setUpsEfficiencycheckboxStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index].upsEfficiencyIsChecked = event.target.checked;


            switch (newStates[index]) {

                case newStates[0]:
                    console.log(newStates[0].upsEfficiencyName);
                    break;
                case newStates[1]:
                    console.log(newStates[1].upsEfficiencyName);

                    break;
                case newStates[2]:
                    console.log(newStates[2].upsEfficiencyName);
                    break;

                case newStates[3]:
                    console.log(newStates[3].upsEfficiencyName);
                    break;

                case newStates[4]:
                    console.log(newStates[4].upsEfficiencyName);
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

        // console.log(`${upsEfficiencycheckboxStates[index].name} checkbox is checked:`, event.target.checked);
    };


    return (
        <div className={'filter_css'}>
            <h2 className={'relative left-[25px] text-[20px] text-amber-50'}>EFFICIENCY</h2>
            {upsEfficiencycheckboxStates.map((checkbox, index) => (
                <div key={index}>
                    <input
                        className="w-5 h-5 m-4 rounded-md cursor-pointer"
                        id={`upsEfficiencyheckbox${index + 1}`}
                        type="checkbox"
                        value=""
                        checked={checkbox.upsEfficiencyIsChecked}
                        onChange={handleCheckboxChange(index)}
                    />
                    <label className={'text-center cursor-pointer'}
                           htmlFor={`upsEfficiencyheckbox${index + 1}`}>{checkbox.upsEfficiencyName}</label>
                </div>
            ))}
        </div>
    )


}

export default Component_Catagorees_PowerSupply_Filters_by_Efficiency;