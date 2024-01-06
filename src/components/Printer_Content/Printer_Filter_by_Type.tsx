import {ChangeEvent, useEffect, useState} from "react";
import '../Components/CSS/Filter_CSS.css'
interface PrinterCheckboxData {
    printerworkstation: string;
    printerisChecked: boolean;
}

function Desktop_Filer_by_type() {

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

    const [printerckboxStates, setCheckboxStates]
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
            {printerckboxStates.map((isChecked, index) => (
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

    const initialprinterTypeCheckboxes: PrinterCheckboxData[] = [
        {printerworkstation: 'DOT MATRIX', printerisChecked: false},
        {printerworkstation: 'INK PRINTER', printerisChecked: false},
        {printerworkstation: 'LASER PRINTER', printerisChecked: false},

        // Add more checkboxes as needed
    ];

    const [printerckboxStates, setPrinterckboxStates]
        = useState<PrinterCheckboxData[]>(initialprinterTypeCheckboxes);

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        setPrinterckboxStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index].printerisChecked = event.target.checked;




            switch (newStates[index]) {

                case newStates[0]:
                    console.log(newStates[0].printerworkstation);
                    break;
                case newStates[1]:
                    console.log(newStates[1].printerworkstation);

                    break;
                case newStates[2]:
                    console.log(newStates[2].printerworkstation);
                    break;

                default:
                    console.log("None selected");
                    break;
            }




            return newStates;
        });

        // console.log(`${printerckboxStates[index].name} checkbox is checked:`, event.target.checked);
    };


    return (
        <div className={'filter_css'}>
            <h2 className={'relative left-[25px] text-[20px] text-white'}><b>TYPE</b></h2>
            {printerckboxStates.map((checkbox, index) => (
                <div key={index}>
                    <input
                        className="w-5 h-5 m-4 rounded-md]"
                        id={`printercheckbox${index + 1}`}
                        type="checkbox"
                        value=""
                        checked={checkbox.printerisChecked}
                        onChange={handleCheckboxChange(index)}
                    />
                    <label htmlFor={`printercheckbox${index + 1}`}>{checkbox.printerworkstation}</label>
                </div>
            ))}
        </div>
    );

}

export default Desktop_Filer_by_type;