import { ChangeEvent, useState } from "react";
import '../Components/CSS/Filter_CSS.css';

interface CheckboxData {
    workstation: string;
    isChecked: boolean;
}

interface Props {
    onWorkstationChange: (workstation: any) => void;
      
}

function Desktop_Filter_by_Workstation({ onWorkstationChange }: Props) {
    const initialWorkstationCheckboxes: CheckboxData[] = [
        { workstation: '3D MODELLING', isChecked: false },
        { workstation: 'VIDEO EDITING', isChecked: false },
        { workstation: 'PHOTO EDITING', isChecked: false },
    ];

    const [workstationckboxStates, setWorkstationckboxStates] = useState<CheckboxData[]>(initialWorkstationCheckboxes);

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        const isChecked = event.target.checked;
        let workstationTemp = initialWorkstationCheckboxes[index].workstation;

        setWorkstationckboxStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index].isChecked = isChecked;

            if (isChecked) {       
                console.log("Added to workstationckboxStates");         
                onWorkstationChange({workstation:workstationTemp,isChecked:true});
            } else {

                onWorkstationChange({workstation:workstationTemp,isChecked:false});

            }

            return newStates;
        });
    };

    return (
        <div className={'filter_css'}>
            <h2 className={'relative left-[25px] text-[20px] text-white'}><b>WORKSTATION</b></h2>
            {workstationckboxStates.map((checkbox, index) => (
                <div key={index}>
                    <input
                        className="w-5 h-5 m-4 rounded-md"
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
