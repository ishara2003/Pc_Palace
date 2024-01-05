import {ChangeEvent, useState} from "react";

interface ScreenSizeCheckboxData {
    screenSizesocketName: string;
    screenSizeIsChecked: boolean;
}

function Component_Content_Monitor_Filter_by_Screen_Size() {


    const initialscreenSizecheckboxes: ScreenSizeCheckboxData[] = [
        {screenSizesocketName: '19 INCH', screenSizeIsChecked: false},
        {screenSizesocketName: '22 INCH', screenSizeIsChecked: false},
        {screenSizesocketName: '24 INCH', screenSizeIsChecked: false},
        {screenSizesocketName: '25 INCH', screenSizeIsChecked: false},
        {screenSizesocketName: '27 INCH', screenSizeIsChecked: false},
        // {screenSizesocketName: 'SOCKET AM5', screenSizeIsChecked: false},
       /* {socketName: 'RTX 4060 8GB', socketIsChecked: false},
        {socketName: 'RTX 4070 8GB', socketIsChecked: false},*/

        // Add more checkboxes as needed
    ];

    const [screenSizecheckboxStates, setScreenSizecheckboxStates]
        = useState<ScreenSizeCheckboxData[]>(initialscreenSizecheckboxes);

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        setScreenSizecheckboxStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index].screenSizeIsChecked = event.target.checked;


            switch (newStates[index]) {

                case newStates[0]:
                    console.log(newStates[0].screenSizesocketName);
                    break;
                case newStates[1]:
                    console.log(newStates[1].screenSizesocketName);

                    break;
                case newStates[2]:
                    console.log(newStates[2].screenSizesocketName);
                    break;

                case newStates[3]:
                    console.log(newStates[3].screenSizesocketName);
                    break;

                case newStates[4]:
                    console.log(newStates[4].screenSizesocketName);
                    break;

                case newStates[5]:
                    console.log(newStates[5].screenSizesocketName);
                    break;

                case newStates[6]:
                    console.log(newStates[6].screenSizesocketName);
                    break;
                case newStates[7]:
                    console.log(newStates[7].screenSizesocketName);
                    break;
                default:
                    console.log("None selected");
                    break;

            }

            return newStates;
        });

        // console.log(`${screenSizecheckboxStates[index].name} checkbox is checked:`, event.target.checked);
    };


    return (
        <div className={'filter_css'}>
            <h2 className={'relative left-[25px] text-[23px] text-amber-50'}>SCREEN SIZE</h2>
            {screenSizecheckboxStates.map((checkbox, index) => (
                <div key={index}>
                    <input
                        className="w-5 h-5 m-4 rounded-md]"
                        id={`screenSizecheckbox${index + 1}`}
                        type="checkbox"
                        value=""
                        checked={checkbox.screenSizeIsChecked}
                        onChange={handleCheckboxChange(index)}
                    />
                    <label  className={'text-center cursor-pointer'} htmlFor={`screenSizecheckbox${index + 1}`}>{checkbox.screenSizesocketName}</label>
                </div>
            ))}
        </div>
    )

}

export default Component_Content_Monitor_Filter_by_Screen_Size;