import {ChangeEvent, useState} from "react";

interface chipsetCheckboxData {
    chipName: string;
    chipIsChecked: boolean;
}

function Component_Catagorees_Motherboard_Filters_by_Chipset() {

    const initialChipcheckboxes: chipsetCheckboxData[] = [
        {chipName: 'AMD A320', chipIsChecked: false},
        {chipName: 'AMD A520', chipIsChecked: false},
        {chipName: 'AMD B450', chipIsChecked: false},
        {chipName: 'AMD B550', chipIsChecked: false},
        {chipName: 'AMD B650', chipIsChecked: false},
        {chipName: 'AMD X570', chipIsChecked: false},
        {chipName: 'INTEL B560', chipIsChecked: false},
        {chipName: 'INTEL B660', chipIsChecked: false},
        {chipName: 'INTEL B760', chipIsChecked: false},
        {chipName: 'INTEL H310', chipIsChecked: false},
        {chipName: 'INTEL H510', chipIsChecked: false},

        // Add more checkboxes as needed
    ];

    const [chipcheckboxStates, setChipcheckboxStates]
        = useState<chipsetCheckboxData[]>(initialChipcheckboxes);

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        setChipcheckboxStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index].chipIsChecked = event.target.checked;


            switch (newStates[index]) {

                case newStates[0]:
                    console.log(newStates[0].chipName);
                    break;
                case newStates[1]:
                    console.log(newStates[1].chipName);

                    break;
                case newStates[2]:
                    console.log(newStates[2].chipName);
                    break;

                case newStates[3]:
                    console.log(newStates[3].chipName);
                    break;

                case newStates[4]:
                    console.log(newStates[4].chipName);
                    break;

                case newStates[5]:
                    console.log(newStates[5].chipName);
                    break;

                case newStates[6]:
                    console.log(newStates[6].chipName);
                    break;
                case newStates[7]:
                    console.log(newStates[7].chipName);
                    break;
                case newStates[8]:
                    console.log(newStates[8].chipName);
                    break;
                case newStates[9]:
                    console.log(newStates[9].chipName);
                    break;

                default:
                    console.log("None selected");
                    break;

            }

            return newStates;
        });

        // console.log(`${chipcheckboxStates[index].name} checkbox is checked:`, event.target.checked);
    };


    return (
        <div className={'text-left text-[20px] mb-8'}>
            <h2 className={'relative left-[25px] text-[20px] text-amber-50'}>CHIPSET</h2>
            {chipcheckboxStates.map((checkbox, index) => (
                <div key={index}>
                    <input
                        className="w-5 h-5 m-4 rounded-md cursor-pointer"
                        id={`chipcheckbox${index + 1}`}
                        type="checkbox"
                        value=""
                        checked={checkbox.chipIsChecked}
                        onChange={handleCheckboxChange(index)}
                    />
                    <label className={'text-center cursor-pointer'}
                           htmlFor={`chipcheckbox${index + 1}`}>{checkbox.chipName}</label>
                </div>
            ))}
        </div>
    )


}

export default Component_Catagorees_Motherboard_Filters_by_Chipset;