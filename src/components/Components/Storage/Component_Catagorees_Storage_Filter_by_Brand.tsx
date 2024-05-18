import {ChangeEvent, useState} from "react";
import '../CSS/Filter_CSS.css'

interface StorageCheckboxData {
    brandyName: string;
    brandyIsChecked: boolean;
}

function Component_Catagorees_Storage_Filter_by_Brand() {


    const initialstorageCheckboxes: StorageCheckboxData[] = [
        {brandyName: 'ADATA', brandyIsChecked: false},
        {brandyName: 'ADDLINK', brandyIsChecked: false},
        {brandyName: 'KINGSTON', brandyIsChecked: false},
        {brandyName: 'SAMSUNG', brandyIsChecked: false},
        {brandyName: 'SEAGATE', brandyIsChecked: false},
        {brandyName: 'LEXAR', brandyIsChecked: false},
        {brandyName: 'TOSHIBA', brandyIsChecked: false},
        {brandyName: 'Other', brandyIsChecked: false},
        // {memoryName: 'DELL', memoryIsChecked: false},
        // Add more checkboxes as needed
    ];

    const [storagecheckboxStates, setStoragecheckboxStates]
        = useState<StorageCheckboxData[]>(initialstorageCheckboxes);

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        setStoragecheckboxStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index].brandyIsChecked = event.target.checked;




            switch (newStates[index]) {

                case newStates[0]:
                    console.log(newStates[0].brandyName);
                    break;
                case newStates[1]:
                    console.log(newStates[1].brandyName);

                    break;
                case newStates[2]:
                    console.log(newStates[2].brandyName);
                    break;

                case newStates[3]:
                    console.log(newStates[3].brandyName);
                    break;

                case newStates[4]:
                    console.log(newStates[4].brandyName);
                    break;

                case newStates[5]:
                    console.log(newStates[5].brandyName);
                    break;

                case newStates[6]:
                    console.log(newStates[6].brandyName);
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
            {storagecheckboxStates.map((checkbox, index) => (
                <div key={index}>
                    <input
                        className="w-5 h-5 m-4 rounded-md]"
                        id={`storagecheckbox${index + 1}`}
                        type="checkbox"
                        value=""
                        checked={checkbox.brandyIsChecked}
                        onChange={handleCheckboxChange(index)}
                    />
                    <label className={'text-center cursor-pointer'} htmlFor={`storagecheckbox${index + 1}`}>{checkbox.brandyName}</label>
                </div>
            ))}
        </div>
    );


}

export default Component_Catagorees_Storage_Filter_by_Brand;