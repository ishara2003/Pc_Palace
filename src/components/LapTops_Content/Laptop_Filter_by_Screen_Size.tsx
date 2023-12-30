import {ChangeEvent, useState} from "react";

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


            if (newStates[index].sizeName == '13 INCHES') {
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
            }

            return newStates;
        });

        // console.log(`${screensizecheckboxStates[index].name} checkbox is checked:`, event.target.checked);
    };


    return(
        <div className={'text-left text-[20px] mb-3'}>
            <h2 className={'relative left-[25px] text-[23px]'}><b>SCREEN SIZE</b></h2>
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