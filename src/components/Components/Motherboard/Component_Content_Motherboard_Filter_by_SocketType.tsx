import {ChangeEvent, useState} from "react";

interface boardSocketCheckboxData {
    boardSocketName: string;
    boardSocketIsChecked: boolean;
}

function Component_Content_Motherboard_Filter_by_SocketType() {


    const initialBoardcheckboxes: boardSocketCheckboxData[] = [
        {boardSocketName: 'AMD AM4', boardSocketIsChecked: false},
        {boardSocketName: 'AMD AM5', boardSocketIsChecked: false},
        {boardSocketName: 'INTEL 1200 10TH/11TH GEN', boardSocketIsChecked: false},
        {boardSocketName: 'INTEL 1700 11TH/ 13TH/14TH GEN', boardSocketIsChecked: false},
        /*{boardSocketName: 'SOCKET AM4', boardSocketIsChecked: false},
        {boardSocketName: 'SOCKET AM5', boardSocketIsChecked: false},
        {socketName: 'RTX 4060 8GB', socketIsChecked: false},
        {socketName: 'RTX 4070 8GB', socketIsChecked: false},*/

        // Add more checkboxes as needed
    ];

    const [boardSocketcheckboxStates, setBoardSocketcheckboxStates]
        = useState<boardSocketCheckboxData[]>(initialBoardcheckboxes);

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        setBoardSocketcheckboxStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index].boardSocketIsChecked = event.target.checked;


            switch (newStates[index]) {

                case newStates[0]:
                    console.log(newStates[0].boardSocketName);
                    break;
                case newStates[1]:
                    console.log(newStates[1].boardSocketName);

                    break;
                case newStates[2]:
                    console.log(newStates[2].boardSocketName);
                    break;

                case newStates[3]:
                    console.log(newStates[3].boardSocketName);
                    break;

                default:
                    console.log("None selected");
                    break;

            }

            return newStates;
        });

        // console.log(`${boardSocketcheckboxStates[index].name} checkbox is checked:`, event.target.checked);
    };


    return (
        <div className={'text-left text-[20px] mb-8'}>
            <h2 className={'relative left-[25px] text-[20px] text-amber-50'}>SOCKET TYPE</h2>
            {boardSocketcheckboxStates.map((checkbox, index) => (
                <div key={index}>
                    <input
                        className="w-5 h-5 m-4 rounded-md]"
                        id={`boardSocketcheckbox${index + 1}`}
                        type="checkbox"
                        value=""
                        checked={checkbox.boardSocketIsChecked}
                        onChange={handleCheckboxChange(index)}
                    />
                    <label className={'text-center'} htmlFor={`boardSocketcheckbox${index + 1}`}>{checkbox.boardSocketName}</label>
                </div>
            ))}
        </div>
    )

}

export default Component_Content_Motherboard_Filter_by_SocketType;