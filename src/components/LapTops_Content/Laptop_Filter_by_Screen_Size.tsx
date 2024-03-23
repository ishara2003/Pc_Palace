import { ChangeEvent, useState } from "react";
import '../Components/CSS/Filter_CSS.css'

interface ScreenSizeCheckboxData {
    sizeName: string;
    sizeIsChecked: boolean;
}

interface Props {

    onSelectedScreenSize: (screenSize:any) => void;
}

function Laptop_Filter_by_Screen_Size({onSelectedScreenSize}: Props) {


    const initialScreenSizeCheckboxes: ScreenSizeCheckboxData[] = [
        { sizeName: '13 INCHES', sizeIsChecked: false },
        { sizeName: '14 INCHES', sizeIsChecked: false },
        { sizeName: '15 INCHES', sizeIsChecked: false },
        { sizeName: '16 INCHES', sizeIsChecked: false },

        // Add more checkboxes as needed
    ];

    const [screensizecheckboxStates, setScreensizecheckboxStates]
        = useState<ScreenSizeCheckboxData[]>(initialScreenSizeCheckboxes);

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {

        const isScreenSizeChecked = event.target.checked;
        const tempScreenSize = screensizecheckboxStates[index].sizeName



        setScreensizecheckboxStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index].sizeIsChecked = event.target.checked;

            if(isScreenSizeChecked){
                onSelectedScreenSize({screenSize:tempScreenSize,screenSizeIsChecked:true})
            }else{

                onSelectedScreenSize({screenSize:tempScreenSize,screenSizeIsChecked:false})
            }




            return newStates;
        });

        // console.log(`${screensizecheckboxStates[index].name} checkbox is checked:`, event.target.checked);
    };


    return (
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