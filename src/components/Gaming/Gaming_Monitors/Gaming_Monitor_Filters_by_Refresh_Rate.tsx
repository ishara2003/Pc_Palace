import {ChangeEvent, useState} from "react";

interface RefreshRateCheckboxData {
    refreshRateName: string;
    refreshRateIsChecked: boolean;
}

function Gaming_Monitor_Filters_by_Refresh_Rate() {

    const initialrefreshRatecheckboxes: RefreshRateCheckboxData[] = [
        {refreshRateName: '60HZ', refreshRateIsChecked: false},
        {refreshRateName: '75HZ', refreshRateIsChecked: false},
        {refreshRateName: '100HZ', refreshRateIsChecked: false},
        {refreshRateName: '120HZ', refreshRateIsChecked: false},
        {refreshRateName: '144HZ', refreshRateIsChecked: false},
        {refreshRateName: '165HZ', refreshRateIsChecked: false},
        {refreshRateName: '170HZ ', refreshRateIsChecked: false},
        {refreshRateName: '180HZ', refreshRateIsChecked: false},

        // Add more checkboxes as needed
    ];

    const [refreshRatecheckboxStates, setRefreshRatecheckboxStates]
        = useState<RefreshRateCheckboxData[]>(initialrefreshRatecheckboxes);

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        setRefreshRatecheckboxStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index].refreshRateIsChecked = event.target.checked;


            switch (newStates[index]) {

                case newStates[0]:
                    console.log(newStates[0].refreshRateName);
                    break;
                case newStates[1]:
                    console.log(newStates[1].refreshRateName);

                    break;
                case newStates[2]:
                    console.log(newStates[2].refreshRateName);
                    break;

                case newStates[3]:
                    console.log(newStates[3].refreshRateName);
                    break;

                case newStates[4]:
                    console.log(newStates[4].refreshRateName);
                    break;

                case newStates[5]:
                    console.log(newStates[5].refreshRateName);
                    break;

                case newStates[6]:
                    console.log(newStates[6].refreshRateName);
                    break;
                case newStates[7]:
                    console.log(newStates[7].refreshRateName);
                    break;
                default:
                    console.log("None selected");
                    break;

            }

            return newStates;
        });

        // console.log(`${refreshRatecheckboxStates[index].name} checkbox is checked:`, event.target.checked);
    };


    return (
        <div className={'filter_css'}>
            <h2 className={'relative left-[25px] text-[23px] text-amber-50'}>REFRESH RATE</h2>
            {refreshRatecheckboxStates.map((checkbox, index) => (
                <div key={index}>
                    <input
                        className="w-5 h-5 m-4 rounded-md cursor-pointer"
                        id={`refreshRatecheckbox${index + 1}`}
                        type="checkbox"
                        value=""
                        checked={checkbox.refreshRateIsChecked}
                        onChange={handleCheckboxChange(index)}
                    />
                    <label className={'text-center cursor-pointer'} htmlFor={`refreshRatecheckbox${index + 1}`}>{checkbox.refreshRateName}</label>
                </div>
            ))}
        </div>
    )


}

export default Gaming_Monitor_Filters_by_Refresh_Rate;