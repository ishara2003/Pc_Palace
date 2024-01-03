import {ChangeEvent, useState} from "react";

interface socketCheckboxData {
    socketName: string;
    socketIsChecked: boolean;
}

function Component_Content_Processor_Filter_by_SocketType() {


    const initialGPUcheckboxes: socketCheckboxData[] = [
        {socketName: 'SOCKET 1200 10th GEN', socketIsChecked: false},
        {socketName: 'SOCKET 1200 11th GEN', socketIsChecked: false},
        {socketName: 'SOCKET 1700 12TH/13TH GEN', socketIsChecked: false},
        {socketName: 'SOCKET 1700 14th GEN', socketIsChecked: false},
        {socketName: 'SOCKET AM4', socketIsChecked: false},
        {socketName: 'SOCKET AM5', socketIsChecked: false},
       /* {socketName: 'RTX 4060 8GB', socketIsChecked: false},
        {socketName: 'RTX 4070 8GB', socketIsChecked: false},*/

        // Add more checkboxes as needed
    ];

    const [socketcheckboxStates, setSocketcheckboxStates]
        = useState<socketCheckboxData[]>(initialGPUcheckboxes);

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        setSocketcheckboxStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index].socketIsChecked = event.target.checked;


            switch (newStates[index]) {

                case newStates[0]:
                    console.log(newStates[0].socketName);
                    break;
                case newStates[1]:
                    console.log(newStates[1].socketName);

                    break;
                case newStates[2]:
                    console.log(newStates[2].socketName);
                    break;

                case newStates[3]:
                    console.log(newStates[3].socketName);
                    break;

                case newStates[4]:
                    console.log(newStates[4].socketName);
                    break;

                case newStates[5]:
                    console.log(newStates[5].socketName);
                    break;

                case newStates[6]:
                    console.log(newStates[6].socketName);
                    break;
                case newStates[7]:
                    console.log(newStates[7].socketName);
                    break;
                default:
                    console.log("None selected");
                    break;

            }

            return newStates;
        });

        // console.log(`${socketcheckboxStates[index].name} checkbox is checked:`, event.target.checked);
    };


    return (
        <div className={'text-left text-[20px] mb-8'}>
            <h2 className={'relative left-[25px] text-[23px] text-amber-50'}>SOCKET TYPE</h2>
            {socketcheckboxStates.map((checkbox, index) => (
                <div key={index}>
                    <input
                        className="w-5 h-5 m-4 rounded-md]"
                        id={`socketcheckbox${index + 1}`}
                        type="checkbox"
                        value=""
                        checked={checkbox.socketIsChecked}
                        onChange={handleCheckboxChange(index)}
                    />
                    <label className={'text-center'} htmlFor={`socketcheckbox${index + 1}`}>{checkbox.socketName}</label>
                </div>
            ))}
        </div>
    )

}

export default Component_Content_Processor_Filter_by_SocketType;