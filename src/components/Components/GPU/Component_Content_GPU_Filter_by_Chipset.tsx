import {ChangeEvent, useState} from "react";
import '../CSS/Filter_CSS.css'

interface gpuVRamsizeCheckboxData {
    gpuVRameName: string;
    gpuVRamIsChecked: boolean;
}

function Component_Content_GPU_Filter_by_Chipset() {


    const initialgpuVRamcheckboxes: gpuVRamsizeCheckboxData[] = [
        {gpuVRameName: 'GT 1030', gpuVRamIsChecked: false},
        {gpuVRameName: 'GTX 1650', gpuVRamIsChecked: false},
        {gpuVRameName: 'RTX 3050', gpuVRamIsChecked: false},
        {gpuVRameName: 'RTX 4060 TI', gpuVRamIsChecked: false},
        {gpuVRameName: 'RTX 4070 TI', gpuVRamIsChecked: false},
        {gpuVRameName: 'RX 6400', gpuVRamIsChecked: false},

        // Add more checkboxes as needed
    ];

    const [gpuVRamcheckboxStates, setGpuVRamcheckboxStates]
        = useState<gpuVRamsizeCheckboxData[]>(initialgpuVRamcheckboxes);

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        setGpuVRamcheckboxStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index].gpuVRamIsChecked = event.target.checked;


            switch (newStates[index]) {

                case newStates[0]:
                    console.log(newStates[0].gpuVRameName);
                    break;
                case newStates[1]:
                    console.log(newStates[1].gpuVRameName);

                    break;
                case newStates[2]:
                    console.log(newStates[2].gpuVRameName);
                    break;

                case newStates[3]:
                    console.log(newStates[3].gpuVRameName);
                    break;
                case newStates[4]:
                    console.log(newStates[4].gpuVRameName);
                    break;
                case newStates[5]:
                    console.log(newStates[5].gpuVRameName);
                    break;
                default:
                    console.log("None selected");
                    break;

            }

            return newStates;
        });

        // console.log(`${gpuVRamcheckboxStates[index].name} checkbox is checked:`, event.target.checked);
    };


    return (
        <div className={'filter_css'}>
            <h2 className={'relative left-[25px] text-[20px] text-amber-50'}>CHIPSET</h2>
            {gpuVRamcheckboxStates.map((checkbox, index) => (
                <div key={index}>
                    <input
                        className="w-5 h-5 m-4 rounded-md]"
                        id={`gpuchipsetcheckbox${index + 1}`}
                        type="checkbox"
                        value=""
                        checked={checkbox.gpuVRamIsChecked}
                        onChange={handleCheckboxChange(index)}
                    />
                    <label  className={'text-center cursor-pointer'}
                           htmlFor={`gpuchipsetcheckbox${index + 1}`}>{checkbox.gpuVRameName}</label>
                </div>
            ))}
        </div>
    )

}

export default Component_Content_GPU_Filter_by_Chipset;