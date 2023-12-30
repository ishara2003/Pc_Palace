import {ChangeEvent, useEffect, useState} from "react";

interface CheckboxData {
    name: string;
    isChecked: boolean;
}

function Laptop_Filer_by_Brand() {

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

    const [brandcheckboxStates, setCheckboxStates]
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
            {brandcheckboxStates.map((isChecked, index) => (
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

    const initialBrandCheckboxes: CheckboxData[] = [
        {name: 'ASUS', isChecked: false},
        {name: 'LENOVO', isChecked: false},
        {name: 'MSI', isChecked: false},
        {name: 'HP', isChecked: false},
        {name: 'ACER', isChecked: false},
        {name: 'MAC', isChecked: false},
        {name: 'HUAWEI', isChecked: false},
        {name: 'DELL', isChecked: false},
        // Add more checkboxes as needed
    ];

    const [brandcheckboxStates, setBrandcheckboxStates]
        = useState<CheckboxData[]>(initialBrandCheckboxes);

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        setBrandcheckboxStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index].isChecked = event.target.checked;


            if (newStates[index].name == 'ASUS') {
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


            return newStates;
        });

        // console.log(`${brandcheckboxStates[index].name} checkbox is checked:`, event.target.checked);
    };


    return (
        <div className={'text-left text-[20px] mb-3'}>
            <h2 className={'relative left-[25px] text-[23px]'}><b>BRAND</b></h2>
            {brandcheckboxStates.map((checkbox, index) => (
                <div key={index}>
                    <input
                        className="w-5 h-5 m-4 rounded-md]"
                        id={`brandcheckbox${index + 1}`}
                        type="checkbox"
                        value=""
                        checked={checkbox.isChecked}
                        onChange={handleCheckboxChange(index)}
                    />
                    <label htmlFor={`brandcheckbox${index + 1}`}>{checkbox.name}</label>
                </div>
            ))}
        </div>
    );

}

export default Laptop_Filer_by_Brand;