import {ChangeEvent, useState} from "react";

interface coresCheckboxData {
    coresName: string;
    coresIsChecked: boolean;
}

function Component_Catagorees_Processors_Filters_by_Cores() {

    const initialGPUcheckboxes: coresCheckboxData[] = [
        {coresName: '10 CORES', coresIsChecked: false},
        {coresName: '12 CORES', coresIsChecked: false},
        {coresName: '14 CORES', coresIsChecked: false},
        {coresName: '16 CORES', coresIsChecked: false},
        {coresName: '20 CORES', coresIsChecked: false},
        {coresName: '24 CORES', coresIsChecked: false},
        {coresName: '6 CORES ', coresIsChecked: false},
        {coresName: '8 CORES', coresIsChecked: false},

        // Add more checkboxes as needed
    ];

    const [corescheckboxStates, setCorescheckboxStates]
        = useState<coresCheckboxData[]>(initialGPUcheckboxes);

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        setCorescheckboxStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index].coresIsChecked = event.target.checked;


            switch (newStates[index]) {

                case newStates[0]:
                    console.log(newStates[0].coresName);
                    break;
                case newStates[1]:
                    console.log(newStates[1].coresName);

                    break;
                case newStates[2]:
                    console.log(newStates[2].coresName);
                    break;

                case newStates[3]:
                    console.log(newStates[3].coresName);
                    break;

                case newStates[4]:
                    console.log(newStates[4].coresName);
                    break;

                case newStates[5]:
                    console.log(newStates[5].coresName);
                    break;

                case newStates[6]:
                    console.log(newStates[6].coresName);
                    break;
                case newStates[7]:
                    console.log(newStates[7].coresName);
                    break;
                default:
                    console.log("None selected");
                    break;

            }

            return newStates;
        });

        // console.log(`${corescheckboxStates[index].name} checkbox is checked:`, event.target.checked);
    };


    return (
        <div className={'text-left text-[20px] mb-8'}>
            <h2 className={'relative left-[25px] text-[23px] text-amber-50'}>CORES</h2>
            {corescheckboxStates.map((checkbox, index) => (
                <div key={index}>
                    <input
                        className="w-5 h-5 m-4 rounded-md cursor-pointer"
                        id={`corescheckbox${index + 1}`}
                        type="checkbox"
                        value=""
                        checked={checkbox.coresIsChecked}
                        onChange={handleCheckboxChange(index)}
                    />
                    <label className={'text-center cursor-pointer'} htmlFor={`corescheckbox${index + 1}`}>{checkbox.coresName}</label>
                </div>
            ))}
        </div>
    )


}

export default Component_Catagorees_Processors_Filters_by_Cores;