import {ChangeEvent, useState} from "react";
import '../Components/CSS/Filter_CSS.css'

interface GpuCheckboxData {
    gpuName: string;
    gpuIsChecked: boolean;
}

interface Props{

    onGpuChange:(gpu: any) => void;

}

function Desktop_Filter_by_GPU({onGpuChange}:Props) {


    const initialGPUcheckboxes: GpuCheckboxData[] = [
        {gpuName: 'GTX 1650 4GB', gpuIsChecked: false},
        {gpuName: 'RTX 2025 4GB', gpuIsChecked: false},
        {gpuName: 'RTX 3050 4GB', gpuIsChecked: false},
        {gpuName: 'RTX 3050 6GB', gpuIsChecked: false},
        {gpuName: 'RTX 3060 6GB', gpuIsChecked: false},
        {gpuName: 'RTX 3060 8GB', gpuIsChecked: false},
        {gpuName: 'RTX 4050 6GB', gpuIsChecked: false},
        {gpuName: 'RTX 4060 8GB', gpuIsChecked: false},
        {gpuName: 'RTX 4070 8GB', gpuIsChecked: false},

        // Add more checkboxes as needed
    ];

    const [gpucheckboxStates, setGpucheckboxStates]
        = useState<GpuCheckboxData[]>(initialGPUcheckboxes);

        const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
            const isChecked = event.target.checked;
            let gpuTemp = initialGPUcheckboxes[index].gpuName;
    
            setGpucheckboxStates(prevStates => {
                const newStates = [...prevStates];
                newStates[index].gpuIsChecked = isChecked;
    
                if (isChecked) {                
                    console.log("Added to processor checkbox States");
                    
                    onGpuChange({gpuName:gpuTemp,gpuIsChecked:true});
                } else {
                    onGpuChange({gpuName:gpuTemp,gpuIsChecked:false});
    
                }
    
                return newStates;
            });
        };
    



    return (
        <div className={'filter_css'}>
            <h2 className={'relative left-[25px] text-[20px]    text-white'}><b>GPU</b></h2>
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

export default Desktop_Filter_by_GPU;