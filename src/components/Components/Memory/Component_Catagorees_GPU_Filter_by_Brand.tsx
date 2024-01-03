import {ChangeEvent, useState} from "react";

interface GPUCheckboxData {
    GPUName: string;
    GPUIsChecked: boolean;
}

function Component_Catagorees_GPU_Filter_by_Brand() {


    const initialGPUCheckboxes: GPUCheckboxData[] = [
        {GPUName: 'ASUS', GPUIsChecked: false},
        {GPUName: 'MSI', GPUIsChecked: false},
        {GPUName: 'SOLORFUL', GPUIsChecked: false},
        /*{memoryName: 'HP', memoryIsChecked: false},
        {memoryName: 'ACER', memoryIsChecked: false},
        {memoryName: 'MAC', memoryIsChecked: false},
        {memoryName: 'HUAWEI', memoryIsChecked: false},
        {memoryName: 'DELL', memoryIsChecked: false},*/
        // Add more checkboxes as needed
    ];

    const [GPUcheckboxStates, setGPUcheckboxStates]
        = useState<GPUCheckboxData[]>(initialGPUCheckboxes);

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        setGPUcheckboxStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index].GPUIsChecked = event.target.checked;




            switch (newStates[index]) {

                case newStates[0]:
                    console.log(newStates[0].GPUName);
                    break;
                case newStates[1]:
                    console.log(newStates[1].GPUName);

                    break;
                case newStates[2]:
                    console.log(newStates[2].GPUName);
                    break;

               /* case newStates[3]:
                    console.log(newStates[3].memoryName);
                    break;

                case newStates[4]:
                    console.log(newStates[4].memoryName);
                    break;

                case newStates[5]:
                    console.log(newStates[5].memoryName);
                    break;

                case newStates[6]:
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
        <div className={'text-left text-[20px] mb-8'}>
            <h2 className={'relative left-[25px] text-[20px] text-amber-50'}>MANUFACTURER</h2>
            {GPUcheckboxStates.map((checkbox, index) => (
                <div key={index}>
                    <input
                        className="w-5 h-5 m-4 rounded-md]"
                        id={`gpucheckbox${index + 1}`}
                        type="checkbox"
                        value=""
                        checked={checkbox.GPUIsChecked}
                        onChange={handleCheckboxChange(index)}
                    />
                    <label htmlFor={`gpucheckbox${index + 1}`}>{checkbox.GPUName}</label>
                </div>
            ))}
        </div>
    );


}

export default Component_Catagorees_GPU_Filter_by_Brand;