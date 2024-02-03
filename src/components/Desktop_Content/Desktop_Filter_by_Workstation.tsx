import {ChangeEvent, useEffect, useState} from "react";
import '../Components/CSS/Filter_CSS.css'
interface CheckboxData {
    workstation: string;
    isChecked: boolean;
}

function Desktop_Filter_by_Workstation() {

    /*        const [isChecked, setIsChecked] = useState(false);

        const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
            setIsChecked(event.target.checked);

            if (event.target.checked){
                console.log("Hello");
            }

        };
        const [isChecked1, setIsChecked1] = useState(false);
        const [isChecked2, setIsChecked2] = useState(false);

        const handleCheckboxChange1 = (event: ChangeEvent<HTMLInputElement>) => {
            setIsChecked1(event.target.checked);
            console.log('Checkbox 1 is checked:', event.target.checked);
        };

        const handleCheckboxChange2 = (event: ChangeEvent<HTMLInputElement>) => {
            setIsChecked2(event.target.checked);
            console.log('Checkbox 2 is checked:', event.target.checked);
        };

    const [workstationckboxStates, setCheckboxStates]
        = useState<boolean[]>(Array(20).fill(false));

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        setCheckboxStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index] = event.target.checked;
            return newStates;
        });

        console.log(`Checkbox ${index + 1} is checked:`, event.target.checked);
    };

    return (
        <div>
            {workstationckboxStates.map((isChecked, index) => (
                <input
                    key={index}
                    className=""
                    id={`checkbox${index + 1}`}
                    type="checkbox"
                    value=""
                    checked={isChecked}
                    onChange={handleCheckboxChange(index)}
                />
            ))}
        </div>*/

    const initialWorkstationCheckboxes: CheckboxData[] = [
        {workstation: '3D MODELLING', isChecked: false},
        {workstation: 'VIDEO EDOTING', isChecked: false},
        {workstation: 'PHOTO EDITING', isChecked: false},

        // Add more checkboxes as needed
    ];

    const [workstationckboxStates, setWorkstationckboxStates]
        = useState<CheckboxData[]>(initialWorkstationCheckboxes);

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        setWorkstationckboxStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index].isChecked = event.target.checked;




            switch (newStates[index]) {

                case newStates[0]:
                    console.log(newStates[0].workstation);
                    break;
                case newStates[1]:
                    console.log(newStates[1].workstation);

                    break;
                case newStates[2]:
                    console.log(newStates[2].workstation);
                    break;

                default:
                    console.log("None selected");
                    break;
            }




         /*   if (newStates[index].name == 'ASUS') {
                console.log("ASUS");
            }

            if (newStates[index].name == 'MSI') {
                console.log("MSI");
            }

            if (newStates[index].name == 'LENOVO') {
                console.log("LENOVO");
            }

            if (newStates[index].name == 'HP') {
                console.log("HP");
            }

            if (newStates[index].name == 'ACER') {
                console.log("ACER");
            }

            if (newStates[index].name == 'MAC') {
                console.log("MAC");
            }

            if (newStates[index].name == 'HUAWEI') {
                console.log("HUAWEI");
            }

            if (newStates[index].name == 'DELL') {
                console.log("DELL");
            }
*/

            return newStates;
        });

        // console.log(`${workstationckboxStates[index].name} checkbox is checked:`, event.target.checked);
    };


    return (
        <div className={'filter_css'}>
            <h2 className={'relative left-[25px] text-[20px] text-white'}><b>WORKSTATION</b></h2>
            {workstationckboxStates.map((checkbox, index) => (
                <div key={index}>
                    <input
                        className="w-5 h-5 m-4 rounded-md]"
                        id={`workstationcheckbox${index + 1}`}
                        type="checkbox"
                        value=""
                        checked={checkbox.isChecked}
                        onChange={handleCheckboxChange(index)}
                    />
                    <label htmlFor={`workstationcheckbox${index + 1}`}>{checkbox.workstation}</label>
                </div>
            ))}
        </div>
    );

}

export default Desktop_Filter_by_Workstation;