import React, { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import './CSS/Laptop_Main_Contnt_CSS.css';

export default function Price() {
    const [minprice, setMinprice] = useState<number>(10000);
    const [maxPrice, setMaxPrice] = useState<number>(40000);

    const handleInputChange = (value:any) => {
        console.log(value[0]);
        // value.toFixed(1)
         setMinprice(value[0]);
         setMaxPrice(value[1])
    };

    return (
        <div className={'mb-8'}>
            <RangeSlider
                id="range-slider-gradient"
                className="margin-lg"
                step={"any"}
                onInput={handleInputChange}
                max={10000000}
            />

            <h1 className={'text-amber-50'}>MIN PRICE: {minprice.toFixed(0)}</h1>
            <br/>
            <h1 className={'text-amber-50'}>MAX PRICE: {maxPrice.toFixed(0)}</h1>
        </div>
    );
}

// mongodb+srv://sankalpaishara4:<My Password here password (Ishara076>@sankalpa.fwqh9gc.mongodb.net/?retryWrites=true&w=majority
