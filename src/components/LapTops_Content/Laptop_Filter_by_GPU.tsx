import {ChangeEvent, useState} from "react";

interface GpuCheckboxData {
    gpuName: string;
    gpuIsChecked: boolean;
}

function Laptop_Filter_by_GPU() {


    const initialGPUcheckboxes: GpuCheckboxData[] = [
        {gpuName: 'GTX 1650 4GB', gpuIsChecked: false},
        {gpuName: 'RTX 2025 4GB', gpuIsChecked: false},
        {gpuName: 'RTX 3050 4GB', gpuIsChecked: false},
        {gpuName: 'RTX 3050 6GB', gpuIsChecked: false},
        {gpuName: 'RTX 3060 6GB', gpuIsChecked: false},
        {gpuName: 'RTX 4050 6GB', gpuIsChecked: false},
        {gpuName: 'RTX 4060 8GB', gpuIsChecked: false},
        {gpuName: 'RTX 4070 8GB', gpuIsChecked: false},

        // Add more checkboxes as needed
    ];

    const [gpucheckboxStates, setGpucheckboxStates]
        = useState<GpuCheckboxData[]>(initialGPUcheckboxes);

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        setGpucheckboxStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index].gpuIsChecked = event.target.checked;


            switch (newStates[index]) {

                case newStates[0]:
                    console.log(newStates[0].gpuName);
                    break;
                case newStates[1]:
                    console.log(newStates[1].gpuName);

                    break;
                case newStates[2]:
                    console.log(newStates[2].gpuName);
                    break;

                case newStates[3]:
                    console.log(newStates[3].gpuName);
                    break;

                case newStates[4]:
                    console.log(newStates[4].gpuName);
                    break;

                case newStates[5]:
                    console.log(newStates[5].gpuName);
                    break;

                case newStates[6]:
                    console.log(newStates[6].gpuName);
                    break;
                case newStates[7]:
                    console.log(newStates[7].gpuName);
                    break;
                default:
                    console.log("None selected");
                    break;

            }

            /*
                        if (newStates[index].processorName == 'INTEL CORE i3') {
                            /!* console.log("INTEL CORE i3");
                             console.log(initialGPUcheckboxes[0].processorName);*!/
                        }

                        if (newStates[index].processorName == '14 INCHES') {
                            console.log("14 INCHES");
                        }

                        if (newStates[index].processorName == '15 INCHES') {
                            console.log("15 INCHES");
                        }

                        if (newStates[index].processorName == '16 INCHES') {
                            console.log("16 INCHES");
                        }*/

            return newStates;
        });

        // console.log(`${gpucheckboxStates[index].name} checkbox is checked:`, event.target.checked);
    };


    return (
        <div className={'text-left text-[20px] mb-3'}>
            <h2 className={'relative left-[25px] text-[23px]'}><b>GPU</b></h2>
            {gpucheckboxStates.map((checkbox, index) => (
                <div key={index}>
                    <input
                        className="w-5 h-5 m-4 rounded-md]"
                        id={`gpucheckbox${index + 1}`}
                        type="checkbox"
                        value=""
                        checked={checkbox.gpuIsChecked}
                        onChange={handleCheckboxChange(index)}
                    />
                    <label htmlFor={`gpucheckbox${index + 1}`}>{checkbox.gpuName}</label>
                </div>
            ))}
        </div>
    )

}

export default Laptop_Filter_by_GPU;