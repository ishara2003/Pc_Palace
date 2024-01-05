import {ChangeEvent, useState} from "react";
import '../CSS/Filter_CSS.css'

interface StorageCheckboxData {
    storageName: string;
    storageIsChecked: boolean;
}

function Component_Content_Storage_Filter_by_Storageinterface() {


    const initialstoragecheckboxes: StorageCheckboxData[] = [
        {storageName: 'M.2', storageIsChecked: false},
        {storageName: 'SATA', storageIsChecked: false},
        // {storageName: '32GB', storageIsChecked: false},
        // {ramsizeName: 'INTEL 1700 11TH/ 13TH/14TH GEN', ramsizeIsChecked: false},
        /*{boardSocketName: 'SOCKET AM4', boardSocketIsChecked: false},
        {boardSocketName: 'SOCKET AM5', boardSocketIsChecked: false},
        {socketName: 'RTX 4060 8GB', socketIsChecked: false},
        {socketName: 'RTX 4070 8GB', socketIsChecked: false},*/

        // Add more checkboxes as needed
    ];

    const [storagecheckboxStates, setStoragecheckboxStates]
        = useState<StorageCheckboxData[]>(initialstoragecheckboxes);

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        setStoragecheckboxStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index].storageIsChecked = event.target.checked;


            switch (newStates[index]) {

                case newStates[0]:
                    console.log(newStates[0].storageName);
                    break;
                case newStates[1]:
                    console.log(newStates[1].storageName);

                    break;
               /* case newStates[2]:
                    console.log(newStates[2].storageName);
                    break;*/

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

        // console.log(`${storagecheckboxStates[index].name} checkbox is checked:`, event.target.checked);
    };


    return (
        <div className={'filter_css'}>
            <h2 className={'relative left-[25px] text-[20px] text-amber-50'}>INTERFACE</h2>
            {storagecheckboxStates.map((checkbox, index) => (
                <div key={index}>
                    <input
                        className="w-5 h-5 m-4 rounded-md]"
                        id={`storageInterfacecheckbox${index + 1}`}
                        type="checkbox"
                        value=""
                        checked={checkbox.storageIsChecked}
                        onChange={handleCheckboxChange(index)}
                    />
                    <label className={'text-center cursor-pointer'} htmlFor={`storageInterfacecheckbox${index + 1}`}>{checkbox.storageName}</label>
                </div>
            ))}
        </div>
    )

}

export default Component_Content_Storage_Filter_by_Storageinterface;