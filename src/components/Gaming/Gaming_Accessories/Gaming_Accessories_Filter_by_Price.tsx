import React, {useState} from "react";
//@ts-ignore
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import '../../LapTops_Content/CSS/Laptop_Main_Contnt_CSS.css';

export default function Gaming_Accessories_Filter_by_Price() {
    const [minprice, setMinprice] = useState<number>(7000);
    const [maxPrice, setMaxPrice] = useState<number>(15000);

    const handleInputChange = (value: any) => {
        console.log(value[0]);
        // value.toFixed(1)
        setMinprice(value[0]);
        setMaxPrice(value[1])
    };

    return (
        <div className={'mb-8 w-64'}>
            <div className={'relative top-[25px]'}>
            <h2 className={'mb-3 relative left-[-80px] text-[20px] text-white'}><b>Price</b></h2>

                <h1 className={'text-amber-50'}>{minprice.toFixed(0)} LKR -
                    {maxPrice.toFixed(0)} LKR</h1>

            </div>
            <RangeSlider
                id="range-slider-gradient"
                className="margin-lg"
                step={"any"}
                onInput={handleInputChange}
                min={7000}
                max={150000}
            />


        </div>
    );
}

// mongodb+srv://sankalpaishara4:<My Password here password (Ishara076>@sankalpa.fwqh9gc.mongodb.net/?retryWrites=true&w=majority
