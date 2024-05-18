import { ChangeEvent, useState } from "react";
import '../CSS/Filter_CSS.css'

interface CoolerCheckboxData {
    coolerName: string;
    coolerIsChecked: boolean;
}

function Component_Catagorees_Cooler_Filter_by_Brand() {


    const initialcoolerCheckboxes: CoolerCheckboxData[] = [
        { coolerName: 'ASUS', coolerIsChecked: false },
        { coolerName: 'MSI', coolerIsChecked: false },
        { coolerName: 'COOLER MASTER', coolerIsChecked: false },
        { coolerName: 'SADES', coolerIsChecked: false },
        { coolerName: 'NZXT', coolerIsChecked: false },
        { coolerName: 'ADATA', coolerIsChecked: false },
        { coolerName: "Other", coolerIsChecked: false },
        /*{memoryName: 'HUAWEI', memoryIsChecked: false},
      {memoryName: 'DELL', memoryIsChecked: false},*/
        // Add more checkboxes as needed
    ];

    const [coolercheckboxStates, setCoolercheckboxStates]
        = useState<CoolerCheckboxData[]>(initialcoolerCheckboxes);

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        setCoolercheckboxStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index].coolerIsChecked = event.target.checked;




            switch (newStates[index]) {

                case newStates[0]:
                    console.log(newStates[0].coolerName);
                    break;
                case newStates[1]:
                    console.log(newStates[1].coolerName);

                    break;
                case newStates[2]:
                    console.log(newStates[2].coolerName);
                    break;

                case newStates[3]:
                    console.log(newStates[3].coolerName);
                    break;

                case newStates[4]:
                    console.log(newStates[4].coolerName);
                    break;

                case newStates[5]:
                    console.log(newStates[5].coolerName);
                    break;

                /* case newStates[6]:
                   console.log(newStates[6].memoryName);
                   break;*/
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
            {coolercheckboxStates.map((checkbox, index) => (
                <div key={index}>
                    <input
                        className="w-5 h-5 m-4 rounded-md]"
                        id={`coolercheckbox${index + 1}`}
                        type="checkbox"
                        value=""
                        checked={checkbox.coolerIsChecked}
                        onChange={handleCheckboxChange(index)}
                    />
                    <label className={'text-center cursor-pointer'} htmlFor={`coolercheckbox${index + 1}`}>{checkbox.coolerName}</label>
                </div>
            ))}
        </div>
    );


}

export default Component_Catagorees_Cooler_Filter_by_Brand;