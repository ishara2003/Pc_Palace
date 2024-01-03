import {ChangeEvent, useState} from "react";

interface speedCheckboxData {
    ramsizeName: string;
    ramsizeIsChecked: boolean;
}

function Component_Catagorees_GPU_Filters_by_VRam() {

    const initialVramcheckboxes: speedCheckboxData[] = [
        {ramsizeName: '2GB', ramsizeIsChecked: false},
        {ramsizeName: '4GB', ramsizeIsChecked: false},
        {ramsizeName: '6GB', ramsizeIsChecked: false},
        {ramsizeName: '8GB', ramsizeIsChecked: false},
        {ramsizeName: '16GB',ramsizeIsChecked: false},
        {ramsizeName: '32GB',ramsizeIsChecked: false},

        // Add more checkboxes as needed
    ];

    const [VRamcheckboxStates, setVRamcheckboxStates]
        = useState<speedCheckboxData[]>(initialVramcheckboxes);

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        setVRamcheckboxStates((prevStates) => {
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

                case newStates[5]:
                    console.log(newStates[5].speedName);
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

        // console.log(`${VRamcheckboxStates[index].name} checkbox is checked:`, event.target.checked);
    };


    return (
        <div className={'text-left text-[20px] mb-8'}>
            <h2 className={'relative left-[25px] text-[20px] text-amber-50'}>V-RAM</h2>
            {VRamcheckboxStates.map((checkbox, index) => (
                <div key={index}>
                    <input
                        className="w-5 h-5 m-4 rounded-md cursor-pointer"
                        id={`vramcheckbox${index + 1}`}
                        type="checkbox"
                        value=""
                        checked={checkbox.speedIsChecked}
                        onChange={handleCheckboxChange(index)}
                    />
                    <label className={'text-center cursor-pointer'}
                           htmlFor={`vramcheckbox${index + 1}`}>{checkbox.ramsizeName}</label>
                </div>
            ))}
        </div>
    )


}

export default Component_Catagorees_GPU_Filters_by_VRam;