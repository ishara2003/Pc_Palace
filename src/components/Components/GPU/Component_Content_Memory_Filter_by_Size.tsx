import {ChangeEvent, useState} from "react";

interface ramsizeCheckboxData {
    ramsizeName: string;
    ramsizeIsChecked: boolean;
}

function Component_Content_Memory_Filter_by_Size() {


    const initialramsizecheckboxes: ramsizeCheckboxData[] = [
        {ramsizeName: '8GB', ramsizeIsChecked: false},
        {ramsizeName: '16GB', ramsizeIsChecked: false},
        {ramsizeName: '32GB', ramsizeIsChecked: false},
        // {ramsizeName: 'INTEL 1700 11TH/ 13TH/14TH GEN', ramsizeIsChecked: false},
        /*{boardSocketName: 'SOCKET AM4', boardSocketIsChecked: false},
        {boardSocketName: 'SOCKET AM5', boardSocketIsChecked: false},
        {socketName: 'RTX 4060 8GB', socketIsChecked: false},
        {socketName: 'RTX 4070 8GB', socketIsChecked: false},*/

        // Add more checkboxes as needed
    ];

    const [ramsizecheckboxStates, setRamsizecheckboxStates]
        = useState<ramsizeCheckboxData[]>(initialramsizecheckboxes);

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        setRamsizecheckboxStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index].ramsizeIsChecked = event.target.checked;


            switch (newStates[index]) {

                case newStates[0]:
                    console.log(newStates[0].ramsizeName);
                    break;
                case newStates[1]:
                    console.log(newStates[1].ramsizeName);

                    break;
                case newStates[2]:
                    console.log(newStates[2].ramsizeName);
                    break;

             /*   case newStates[3]:
                    console.log(newStates[3].ramsizeName);
                    break;
*/
                default:
                    console.log("None selected");
                    break;

            }

            return newStates;
        });

        // console.log(`${ramsizecheckboxStates[index].name} checkbox is checked:`, event.target.checked);
    };


    return (
        <div className={'text-left text-[20px] mb-8'}>
            <h2 className={'relative left-[25px] text-[20px] text-amber-50'}>SIZE</h2>
            {ramsizecheckboxStates.map((checkbox, index) => (
                <div key={index}>
                    <input
                        className="w-5 h-5 m-4 rounded-md]"
                        id={`ramSizecheckbox${index + 1}`}
                        type="checkbox"
                        value=""
                        checked={checkbox.ramsizeIsChecked}
                        onChange={handleCheckboxChange(index)}
                    />
                    <label className={'text-center'} htmlFor={`ramSizecheckbox${index + 1}`}>{checkbox.ramsizeName}</label>
                </div>
            ))}
        </div>
    )

}

export default Component_Content_Memory_Filter_by_Size;