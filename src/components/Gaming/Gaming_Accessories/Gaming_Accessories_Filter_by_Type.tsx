import {ChangeEvent, useState} from "react";

interface AccessoriesTypeCheckboxData {
    accessoriesTypeName: string;
    accessoriesTypeIsChecked: boolean;
}

function Gaming_Accessories_Filter_by_Type() {

    const initialaccessoriesTypeCheckboxes: AccessoriesTypeCheckboxData[] = [
        {accessoriesTypeName: 'MOUSE', accessoriesTypeIsChecked: false},
        {accessoriesTypeName: 'KEY BOARD', accessoriesTypeIsChecked: false},
        {accessoriesTypeName: 'HEAD PHONE', accessoriesTypeIsChecked: false},
        {accessoriesTypeName: 'JOYSTICK', accessoriesTypeIsChecked: false},
       /* {accessoriesTypeName: 'NZXT', accessoriesTypeIsChecked: false},
        {accessoriesTypeName: 'ANTEC', accessoriesTypeIsChecked: false},
        {accessoriesTypeName: 'LIAN LI', accessoriesTypeIsChecked: false},*/
        /*{memoryName: 'HUAWEI', memoryIsChecked: false},
        {memoryName: 'DELL', memoryIsChecked: false},*/
        // Add more checkboxes as needed
    ];

    const [accessoriesTypecheckboxStates, setAccessoriesTypecheckboxStates]
        = useState<AccessoriesTypeCheckboxData[]>(initialaccessoriesTypeCheckboxes);

    const handleCheckboxChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        setAccessoriesTypecheckboxStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index].accessoriesTypeIsChecked = event.target.checked;


            switch (newStates[index]) {

                case newStates[0]:
                    console.log(newStates[0].accessoriesTypeName);
                    break;
                case newStates[1]:
                    console.log(newStates[1].accessoriesTypeName);

                    break;
                case newStates[2]:
                    console.log(newStates[2].accessoriesTypeName);
                    break;

                case newStates[3]:
                    console.log(newStates[3].accessoriesTypeName);
                    break;
/*
                case newStates[4]:
                    console.log(newStates[4].accessoriesTypeName);
                    break;

                case newStates[5]:
                    console.log(newStates[5].accessoriesTypeName);
                    break;

                case newStates[6]:
                    console.log(newStates[6].accessoriesTypeName);
                    break;*/
                default:
                    console.log("None selected");
                    break;
            }


            return newStates;
        });

    };

    return (
        <div className={'filter_css'}>
            <h2 className={'relative left-[25px] text-[20px] text-amber-50'}>TYPE</h2>
            {accessoriesTypecheckboxStates.map((checkbox, index) => (
                <div key={index}>
                    <input
                        className="w-5 h-5 m-4 rounded-md]"
                        id={`accessoriesTypecheckbox${index + 1}`}
                        type="checkbox"
                        value=""
                        checked={checkbox.accessoriesTypeIsChecked}
                        onChange={handleCheckboxChange(index)}
                    />
                    <label className={'text-center cursor-pointer'}
                           htmlFor={`accessoriesTypecheckbox${index + 1}`}>{checkbox.accessoriesTypeName}</label>
                </div>
            ))}
        </div>
    );

}

export default Gaming_Accessories_Filter_by_Type;