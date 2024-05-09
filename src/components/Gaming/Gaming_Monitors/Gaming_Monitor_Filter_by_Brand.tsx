import {ChangeEvent, useState} from "react";
import '../../Components/CSS/Filter_CSS.css'

interface MonitorBrandCheckboxData {
    monitorBrandName: string;
    monitorBrandisChecked: boolean;
}

function Gaming_Monitor_Filter_by_Brand() {


    const initialmonitorBrandCheckboxes: MonitorBrandCheckboxData[] = [
        {monitorBrandName: 'ASUS', monitorBrandisChecked: false},
        {monitorBrandName: 'ACER', monitorBrandisChecked: false},
        {monitorBrandName: 'MSI', monitorBrandisChecked: false},
        {monitorBrandName: 'MI', monitorBrandisChecked: false},
        {monitorBrandName: 'LENOVO', monitorBrandisChecked: false},
        {monitorBrandName: 'DELL', monitorBrandisChecked: false},
        {monitorBrandName: 'SAMSUNG', monitorBrandisChecked: false},
        {monitorBrandName: 'VIEWSONIC', monitorBrandisChecked: false},
        {monitorBrandName: 'Other', monitorBrandisChecked: false},

        // Add more checkboxes as needed
    ];

    const [monitorBrandcheckboxStates, setMonitorBrandcheckboxStates]
        = useState<MonitorBrandCheckboxData[]>(initialmonitorBrandCheckboxes);

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        setMonitorBrandcheckboxStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index].monitorBrandisChecked = event.target.checked;


            switch (newStates[index]) {

                case newStates[0]:
                    console.log(newStates[0].monitorBrandName);
                    break;
                case newStates[1]:
                    console.log(newStates[1].monitorBrandName);

                    break;
                case newStates[3]:
                    console.log(newStates[3].monitorBrandName);
                    break;

                case newStates[4]:
                    console.log(newStates[4].monitorBrandName);
                    break;

                case newStates[5]:
                    console.log(newStates[5].monitorBrandName);
                    break;

                case newStates[6]:
                    console.log(newStates[6].monitorBrandName);
                    break;
                case newStates[7]:
                    console.log(newStates[7].monitorBrandName);
                    break;
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
            {monitorBrandcheckboxStates.map((checkbox, index) => (
                <div key={index}>
                    <input
                        className="w-5 h-5 m-4 rounded-md]"
                        id={`monitorBrandcheckbox${index + 1}`}
                        type="checkbox"
                        value=""
                        checked={checkbox.monitorBrandisChecked}
                        onChange={handleCheckboxChange(index)}
                    />
                    <label className={'text-center cursor-pointer'}
                           htmlFor={`monitorBrandcheckbox${index + 1}`}>{checkbox.monitorBrandName}</label>
                </div>
            ))}
        </div>
    );


}

export default Gaming_Monitor_Filter_by_Brand;