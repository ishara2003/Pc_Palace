import { ChangeEvent, useState } from "react";

interface casingCheckboxData {
  casingName: string;
  casingIsChecked: boolean;
}

function Component_Catagorees_Casing_Filter_by_Brand() {
  const initialcasingCheckboxes: casingCheckboxData[] = [
    { casingName: "ASUS", casingIsChecked: false },
    { casingName: "MSI", casingIsChecked: false },
    { casingName: "COOLER MASTER", casingIsChecked: false },
    { casingName: "GFIELD", casingIsChecked: false },
    { casingName: "NZXT", casingIsChecked: false },
    { casingName: "ANTEC", casingIsChecked: false },
    { casingName: "LIAN LI", casingIsChecked: false },
    { casingName: "Other", casingIsChecked: false },
    /*{memoryName: 'HUAWEI', memoryIsChecked: false},
        {memoryName: 'DELL', memoryIsChecked: false},*/
    // Add more checkboxes as needed
  ];

  const [casingcheckboxStates, setCasingcheckboxStates] = useState<
    casingCheckboxData[]
  >(initialcasingCheckboxes);

  const handleCheckboxChange =
    (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
      setCasingcheckboxStates((prevStates) => {
        const newStates = [...prevStates];
        newStates[index].casingIsChecked = event.target.checked;

        switch (newStates[index]) {
          case newStates[0]:
            console.log(newStates[0].casingName);
            break;
          case newStates[1]:
            console.log(newStates[1].casingName);

            break;
          case newStates[2]:
            console.log(newStates[2].casingName);
            break;

          case newStates[3]:
            console.log(newStates[3].casingName);
            break;

          case newStates[4]:
            console.log(newStates[4].casingName);
            break;

          case newStates[5]:
            console.log(newStates[5].casingName);
            break;

          case newStates[6]:
            console.log(newStates[6].casingName);
            break;
          default:
            console.log("None selected");
            break;
        }

        return newStates;
      });
    };

  return (
    <div className={"filter_css"}>
      <h2 className={"relative left-[25px] text-[20px] text-amber-50"}>
        MANUFACTURER
      </h2>
      {casingcheckboxStates.map((checkbox, index) => (
        <div key={index}>
          <input
            className="w-5 h-5 m-4 rounded-md]"
            id={`casingcheckbox${index + 1}`}
            type="checkbox"
            value=""
            checked={checkbox.casingIsChecked}
            onChange={handleCheckboxChange(index)}
          />
          <label
            className={"text-center cursor-pointer"}
            htmlFor={`casingcheckbox${index + 1}`}
          >
            {checkbox.casingName}
          </label>
        </div>
      ))}
    </div>
  );
}

export default Component_Catagorees_Casing_Filter_by_Brand;
