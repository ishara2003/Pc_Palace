import {ChangeEvent, useState} from "react";

interface MonitorResolutionCheckboxData {
    monitorResolutionsocketName: string;
    monitorResolutionIsChecked: boolean;
}

function Component_Content_Monitor_Filter_by_Resolutions() {


    const initialmonitorResolutioncheckboxes: MonitorResolutionCheckboxData[] = [
        {monitorResolutionsocketName: '1366 X 768', monitorResolutionIsChecked: false},
        {monitorResolutionsocketName: '1920 X 1080', monitorResolutionIsChecked: false},
        {monitorResolutionsocketName: '2560 X 1440', monitorResolutionIsChecked: false},
        {monitorResolutionsocketName: '3440 X 1440', monitorResolutionIsChecked: false},
        /*{monitorResolutionsocketName: 'SOCKET AM4', monitorResolutionIsChecked: false},
        {monitorResolutionsocketName: 'SOCKET AM5', monitorResolutionIsChecked: false},
       /!* {socketName: 'RTX 4060 8GB', socketIsChecked: false},
        {socketName: 'RTX 4070 8GB', socketIsChecked: false},*!/*/

        // Add more checkboxes as needed
    ];

    const [monitorResolutioncheckboxStates, setMonitorResolutioncheckboxStates]
        = useState<MonitorResolutionCheckboxData[]>(initialmonitorResolutioncheckboxes);

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        setMonitorResolutioncheckboxStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index].monitorResolutionIsChecked = event.target.checked;


            switch (newStates[index]) {

                case newStates[0]:
                    console.log(newStates[0].monitorResolutionsocketName);
                    break;
                case newStates[1]:
                    console.log(newStates[1].monitorResolutionsocketName);

                    break;
                case newStates[2]:
                    console.log(newStates[2].monitorResolutionsocketName);
                    break;

                case newStates[3]:
                    console.log(newStates[3].monitorResolutionsocketName);
                    break;

              /*  case newStates[4]:
                    console.log(newStates[4].monitorResolutionsocketName);
                    break;

                case newStates[5]:
                    console.log(newStates[5].monitorResolutionsocketName);
                    break;

                case newStates[6]:
                    console.log(newStates[6].monitorResolutionsocketName);
                    break;
                case newStates[7]:
                    console.log(newStates[7].monitorResolutionsocketName);
                    break;*/
                default:
                    console.log("None selected");
                    break;

            }

            return newStates;
        });

        // console.log(`${monitorResolutioncheckboxStates[index].name} checkbox is checked:`, event.target.checked);
    };


    return (
        <div className={'filter_css'}>
            <h2 className={'relative left-[25px] text-[23px] text-amber-50'}>RESOLUTION</h2>
            {monitorResolutioncheckboxStates.map((checkbox, index) => (
                <div key={index}>
                    <input
                        className="w-5 h-5 m-4 rounded-md]"
                        id={`monitorResolutioncheckbox${index + 1}`}
                        type="checkbox"
                        value=""
                        checked={checkbox.monitorResolutionIsChecked}
                        onChange={handleCheckboxChange(index)}
                    />
                    <label  className={'text-center cursor-pointer'} htmlFor={`monitorResolutioncheckbox${index + 1}`}>{checkbox.monitorResolutionsocketName}</label>
                </div>
            ))}
        </div>
    )

}

export default Component_Content_Monitor_Filter_by_Resolutions;