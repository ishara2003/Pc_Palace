import {ChangeEvent, useState} from "react";
import '../Components/CSS/Filter_CSS.css'

interface RamCheckboxData {
    ramName: string;
    ramIsChecked: boolean;
}

interface Props{

    OnSelectedRAM:(ram:any)=> void

}

function Laptop_Filter_by_Memory({OnSelectedRAM}:Props) {


    const initialMemorycheckboxes: RamCheckboxData[] = [
        {ramName: '4GB', ramIsChecked: false},
        {ramName: '8GB', ramIsChecked: false},
        {ramName: '16GB', ramIsChecked: false},
        {ramName: '32GB', ramIsChecked: false},
        {ramName: '64GB', ramIsChecked: false},


        // Add more checkboxes as needed
    ];

    const [ramcheckboxStates, setRamcheckboxStates]
        = useState<RamCheckboxData[]>(initialMemorycheckboxes);

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {

        const isRAMChecked = event.target.checked;
        const tempRam = ramcheckboxStates[index].ramName;

        setRamcheckboxStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index].ramIsChecked = event.target.checked;

            if(isRAMChecked){
                OnSelectedRAM({ram:tempRam,ramIsChecked:true})
            }else{
                OnSelectedRAM({ram:tempRam,ramIsChecked:false})
            }

            return newStates;
        });

        // console.log(`${ramcheckboxStates[index].name} checkbox is checked:`, event.target.checked);
    };


    return (
        <div className={'filter_css'}>
            <h2 className={'relative left-[25px] text-[20px] text-white'}><b>MEMORY (RAM)</b></h2>
            {ramcheckboxStates.map((checkbox, index) => (
                <div key={index}>
                    <input
                        className="w-5 h-5 m-4 rounded-md]"
                        id={`ramcheckbox${index + 1}`}
                        type="checkbox"
                        value=""
                        checked={checkbox.ramIsChecked}
                        onChange={handleCheckboxChange(index)}
                    />
                    <label htmlFor={`ramcheckbox${index + 1}`}>{checkbox.ramName}</label>
                </div>
            ))}
        </div>
    )

}

export default Laptop_Filter_by_Memory;