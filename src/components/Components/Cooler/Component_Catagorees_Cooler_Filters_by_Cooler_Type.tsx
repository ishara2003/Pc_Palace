import {ChangeEvent, useState} from "react";
import '../CSS/Filter_CSS.css'

interface CoolerTypeCheckboxData {
    coolerTypeName: string;
    coolerTypeIsChecked: boolean;
}

function Component_Catagorees_Cooler_Filters_by_Cooler_Type() {

    const initialcoolerTypecheckboxes: CoolerTypeCheckboxData[] = [
        {coolerTypeName: '140MM CASE FAN', coolerTypeIsChecked: false},
        {coolerTypeName: 'AIR CUP COOLER', coolerTypeIsChecked: false},
        {coolerTypeName: 'LED 120MM CASE FAN', coolerTypeIsChecked: false},
        {coolerTypeName: 'LIQYID CUP COOLER', coolerTypeIsChecked: false},
        {coolerTypeName: 'THERMAN PASTE',coolerTypeIsChecked: false},
        {coolerTypeName: 'VGA RISER CABLE',coolerTypeIsChecked: false},

        // Add more checkboxes as needed
    ];

    const [coolerTypecheckboxStates, setCoolerTypecheckboxStates]
        = useState<CoolerTypeCheckboxData[]>(initialcoolerTypecheckboxes);

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        setCoolerTypecheckboxStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index].coolerTypeIsChecked = event.target.checked;


            switch (newStates[index]) {

                case newStates[0]:
                    console.log(newStates[0].coolerTypeName);
                    break;
                case newStates[1]:
                    console.log(newStates[1].coolerTypeName);

                    break;
                case newStates[2]:
                    console.log(newStates[2].coolerTypeName);
                    break;

                case newStates[3]:
                    console.log(newStates[3].coolerTypeName);
                    break;

                case newStates[4]:
                    console.log(newStates[4].coolerTypeName);
                    break;

                case newStates[5]:
                    console.log(newStates[5].coolerTypeName);
                    break;

              /*  case newStates[6]:
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
                    break;
*/
                default:
                    console.log("None selected");
                    break;

            }

            return newStates;
        });

        // console.log(`${coolerTypecheckboxStates[index].name} checkbox is checked:`, event.target.checked);
    };


    return (
        <div className={'filter_css'}>
            <h2 className={'relative left-[25px] text-[20px] text-amber-50'}>COOLER TYPE</h2>
            {coolerTypecheckboxStates.map((checkbox, index) => (
                <div key={index}>
                    <input
                        className="w-5 h-5 m-4 rounded-md cursor-pointer"
                        id={`coolerTypecheckbox${index + 1}`}
                        type="checkbox"
                        value=""
                        checked={checkbox.coolerTypeIsChecked}
                        onChange={handleCheckboxChange(index)}
                    />
                    <label className={'text-center cursor-pointer'}
                           htmlFor={`coolerTypecheckbox${index + 1}`}>{checkbox.coolerTypeName}</label>
                </div>
            ))}
        </div>
    )


}

export default Component_Catagorees_Cooler_Filters_by_Cooler_Type;