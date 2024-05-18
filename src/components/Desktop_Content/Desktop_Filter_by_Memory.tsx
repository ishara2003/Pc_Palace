import {ChangeEvent, useState} from "react";
import '../Components/CSS/Filter_CSS.css'

interface RamCheckboxData {
    ramName: string;
    ramIsChecked: boolean;
}

interface Props {
    onRamChange: (ram: any) => void;
      
}
function Desktop_Filter_by_Memory({onRamChange}:Props) {


    const initialMemorycheckboxes: RamCheckboxData[] = [
        {ramName: '4GB', ramIsChecked: false},
        {ramName: '8GB', ramIsChecked: false},
        {ramName: '16GB', ramIsChecked: false},
        {ramName: '32GB', ramIsChecked: false},


        // Add more checkboxes as needed
    ];

    const [ramcheckboxStates, setRamcheckboxStates] = useState<RamCheckboxData[]>(initialMemorycheckboxes);

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        let ramTemp = initialMemorycheckboxes[index].ramName;




        setRamcheckboxStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index].ramIsChecked = isChecked;

            if (isChecked) {       
                console.log("Added to ramcheckboxStates");  
                console.log("TEMP RAM : ",ramTemp);       
                onRamChange({ramName:ramTemp,isChecked:true});
            } else {

                onRamChange({ramName:ramTemp,isChecked:false});

            }

            return newStates;
        });
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

export default Desktop_Filter_by_Memory;