import {ChangeEvent, useState} from "react";
import '../Components/CSS/Filter_CSS.css'

interface ScreenSizeCheckboxData {
    sizeName: string;
    sizeIsChecked: boolean;
}

function Laptop_Filter_by_Screen_Size() {


    const initialScreenSizeCheckboxes: ScreenSizeCheckboxData[] = [
        {sizeName: '13 INCHES', sizeIsChecked: false},
        {sizeName: '14 INCHES', sizeIsChecked: false},
        {sizeName: '15 INCHES', sizeIsChecked: false},
        {sizeName: '16 INCHES', sizeIsChecked: false},

        // Add more checkboxes as needed
    ];

    const [screensizecheckboxStates, setScreensizecheckboxStates]
        = useState<ScreenSizeCheckboxData[]>(initialScreenSizeCheckboxes);

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        setScreensizecheckboxStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index].sizeIsChecked = event.target.checked;


            switch (newStates[index]) {

                case newStates[0]:
                    console.log(newStates[0].sizeName);
                    break;
                case newStates[1]:
                    console.log(newStates[1].sizeName);

                    break;
                case newStates[2]:
                    console.log(newStates[2].sizeName);
                    break;

                case newStates[3]:
                    console.log(newStates[3].sizeName);
                    break;

                default:
                    console.log("None selected");
                    break;
            }

            /*if (newStates[index].sizeName == '13 INCHES') {
                console.log("13 INCHES");
            }

            if (newStates[index].sizeName == '14 INCHES') {
                console.log("14 INCHES");
            }

            if (newStates[index].sizeName == '15 INCHES') {
                console.log("15 INCHES");
            }

            if (newStates[index].sizeName == '16 INCHES') {
                console.log("16 INCHES");
            }*/

            return newStates;
        });

        // console.log(`${screensizecheckboxStates[index].name} checkbox is checked:`, event.target.checked);
    };


    return(
        <div className={'filter_css'}>
            <h2 className={'relative left-[25px] text-[20px] text-white'}><b>SCREEN SIZE</b></h2>
            {screensizecheckboxStates.map((checkbox, index) => (
                <div key={index}>
                    <input
                        className="w-5 h-5 m-4 rounded-md]"
                        id={`scrennsizecheckbox${index + 1}`}
                        type="checkbox"
                        value=""
                        checked={checkbox.sizeIsChecked}
                        onChange={handleCheckboxChange(index)}
                    />
                    <label htmlFor={`scrennsizecheckbox${index + 1}`}>{checkbox.sizeName}</label>
                </div>
            ))}
        </div>
    )

}

export default Laptop_Filter_by_Screen_Size;