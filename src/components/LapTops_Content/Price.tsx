import React, { useEffect, useRef } from "react";
import "toolcool-range-slider/dist/toolcool-range-slider.min.js";
import 'toolcool-range-slider';
import '../Components/CSS/Filter_CSS.css'
interface RangeSliderProps {
    value1: string;
    value2: string;
    "generate-labels": string;
}

function Price() {
    const rangeSliderRef = useRef<any>();

    useEffect(() => {
        const handleSliderUpdate = (event: CustomEvent) => {
            const { value1, value2 } = event.detail;

            // Do something with the updated values
            console.log("Slider values updated:", value1, value2);
        };

        // Initialize the range slider when the component mounts
        if (rangeSliderRef.current) {
            rangeSliderRef.current.rtl = true;

            // Add event listener for slider update
            rangeSliderRef.current.addEventListener('update', handleSliderUpdate);
        }

        // Cleanup function (optional)
        return () => {
            // If needed, perform cleanup or remove event listeners when the component unmounts
            if (rangeSliderRef.current) {
                rangeSliderRef.current.removeEventListener('update', handleSliderUpdate);
            }
        };
    }, []);

    return (
        <div className={'filter_css'}>
            <tc-range-slider
                ref={rangeSliderRef}

                generate-labels="true"
            ></tc-range-slider>
        </div>
    );
}

export default Price;
