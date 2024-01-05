import {ChangeEvent, useState} from "react";
import '../CSS/Filter_CSS.css'

interface typeCheckboxData {
    typeName: string;
    typeIsChecked: boolean;
}

function Component_Catagorees_Storage_Filters_by_Type() {

    const initialtypecheckboxes: typeCheckboxData[] = [
        {typeName: 'DESKTOP HARD DISK', typeIsChecked: false},
        {typeName: 'LAPTOP HARD DISK', typeIsChecked: false},
        {typeName: 'NAS', typeIsChecked: false},
        {typeName: 'NAS DRIVE', typeIsChecked: false},
        {typeName: 'SSD', typeIsChecked: false},
       /* {chipName: 'AMD X570', chipIsChecked: false},
        {chipName: 'INTEL B560', chipIsChecked: false},
        {chipName: 'INTEL B660', chipIsChecked: false},
        {chipName: 'INTEL B760', chipIsChecked: false},
        {chipName: 'INTEL H310', chipIsChecked: false},
        {chipName: 'INTEL H510', chipIsChecked: false},*/

        // Add more checkboxes as needed
    ];

    const [typecheckboxStates, setTypecheckboxStates]
        = useState<typeCheckboxData[]>(initialtypecheckboxes);

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        setTypecheckboxStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index].typeIsChecked = event.target.checked;


            switch (newStates[index]) {

                case newStates[0]:
                    console.log(newStates[0].typeName);
                    break;
                case newStates[1]:
                    console.log(newStates[1].typeName);

                    break;
                case newStates[2]:
                    console.log(newStates[2].typeName);
                    break;

                case newStates[3]:
                    console.log(newStates[3].typeName);
                    break;

                case newStates[4]:
                    console.log(newStates[4].typeName);
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

        // console.log(`${typecheckboxStates[index].name} checkbox is checked:`, event.target.checked);
    };


    return (
        <div className={'filter_css'}>
            <h2 className={'relative left-[25px] text-[20px] text-amber-50'}>TYPE</h2>
            {typecheckboxStates.map((checkbox, index) => (
                <div key={index}>
                    <input
                        className="w-5 h-5 m-4 rounded-md cursor-pointer"
                        id={`typecheckbox${index + 1}`}
                        type="checkbox"
                        value=""
                        checked={checkbox.typeIsChecked}
                        onChange={handleCheckboxChange(index)}
                    />
                    <label className={'text-center cursor-pointer'}
                           htmlFor={`typecheckbox${index + 1}`}>{checkbox.typeName}</label>
                </div>
            ))}
        </div>
    )


}

export default Component_Catagorees_Storage_Filters_by_Type;