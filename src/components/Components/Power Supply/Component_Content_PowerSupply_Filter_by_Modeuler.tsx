import {ChangeEvent, useState} from "react";
import '../CSS/Filter_CSS.css'

interface UPSModeulerCheckboxData {
    upsModeulerName: string;
    upsModeulerIsChecked: boolean;
}

function Component_Content_PowerSupply_Filter_by_Modeuler() {


    const initialramsizecheckboxes: UPSModeulerCheckboxData[] = [
        {upsModeulerName: 'FULL MODULAR', upsModeulerIsChecked: false},
        {upsModeulerName: 'NO', upsModeulerIsChecked: false},
        {upsModeulerName: 'YES', upsModeulerIsChecked: false},
        // {ramsizeName: 'INTEL 1700 11TH/ 13TH/14TH GEN', ramsizeIsChecked: false},
        /*{boardSocketName: 'SOCKET AM4', boardSocketIsChecked: false},
        {boardSocketName: 'SOCKET AM5', boardSocketIsChecked: false},
        {socketName: 'RTX 4060 8GB', socketIsChecked: false},
        {socketName: 'RTX 4070 8GB', socketIsChecked: false},*/

        // Add more checkboxes as needed
    ];

    const [upsModeulercheckboxStates, setUpsModeulercheckboxStates]
        = useState<UPSModeulerCheckboxData[]>(initialramsizecheckboxes);

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        setUpsModeulercheckboxStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index].upsModeulerIsChecked = event.target.checked;


            switch (newStates[index]) {

                case newStates[0]:
                    console.log(newStates[0].upsModeulerName);
                    break;
                case newStates[1]:
                    console.log(newStates[1].upsModeulerName);

                    break;
                case newStates[2]:
                    console.log(newStates[2].upsModeulerName);
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

        // console.log(`${upsModeulercheckboxStates[index].name} checkbox is checked:`, event.target.checked);
    };


    return (
        <div className={'filter_css'}>
            <h2 className={'relative left-[25px] text-[20px] text-amber-50'}>MODULAR</h2>
            {upsModeulercheckboxStates.map((checkbox, index) => (
                <div key={index}>
                    <input
                        className="w-5 h-5 m-4 rounded-md]"
                        id={`upsModeulerecheckbox${index + 1}`}
                        type="checkbox"
                        value=""
                        checked={checkbox.upsModeulerIsChecked}
                        onChange={handleCheckboxChange(index)}
                    />
                    <label className={'text-center cursor-pointer'} htmlFor={`upsModeulerecheckbox${index + 1}`}>{checkbox.upsModeulerName}</label>
                </div>
            ))}
        </div>
    )

}

export default Component_Content_PowerSupply_Filter_by_Modeuler;