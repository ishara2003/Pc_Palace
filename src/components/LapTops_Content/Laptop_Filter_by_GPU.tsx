import { ChangeEvent, useState } from "react";
import '../Components/CSS/Filter_CSS.css'

interface GpuCheckboxData {
    gpuName: string;
    gpuIsChecked: boolean;
}

interface Props {
    onSelectedGPU: (gpu: any) => void;
}

function Laptop_Filter_by_GPU({ onSelectedGPU }: Props) {


    const initialGPUcheckboxes: GpuCheckboxData[] = [
        { gpuName: 'GTX 1650 4GB', gpuIsChecked: false },
        { gpuName: 'RTX 2025 4GB', gpuIsChecked: false },
        { gpuName: 'RTX 3050 4GB', gpuIsChecked: false },
        { gpuName: 'RTX 3050 6GB', gpuIsChecked: false },
        { gpuName: 'RTX 3060 6GB', gpuIsChecked: false },
        { gpuName: 'RTX 4050 6GB', gpuIsChecked: false },
        { gpuName: 'RTX 4060 8GB', gpuIsChecked: false },
        { gpuName: 'RTX 4070 8GB', gpuIsChecked: false },
        { gpuName: 'RTX 4070 16GB', gpuIsChecked: false },
        { gpuName: 'RTX 4090 16GB', gpuIsChecked: false },

        // Add more checkboxes as needed
    ];

    const [gpucheckboxStates, setGpucheckboxStates]
        = useState<GpuCheckboxData[]>(initialGPUcheckboxes);

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {

        const gpuIsChecked = event.target.checked;
        const tempGpu = gpucheckboxStates[index].gpuName;

        setGpucheckboxStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index].gpuIsChecked = event.target.checked;

            if(gpuIsChecked){

                onSelectedGPU({gpu:tempGpu,gpuIsChecked:true});

            }else{
                onSelectedGPU({gpu:tempGpu,gpuIsChecked:false});
            }


            return newStates;
        });

        // console.log(`${gpucheckboxStates[index].name} checkbox is checked:`, event.target.checked);
    };


    return (
        <div className={'filter_css'}>
            <h2 className={'relative left-[25px] text-[20px] text-white'}><b>GPU</b></h2>
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