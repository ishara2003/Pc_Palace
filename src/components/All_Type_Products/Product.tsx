import React, {useState} from "react";
import {FaStar} from "react-icons/fa";
import '../Main_Content/CSS/Product_CSS.css'

interface Data {

    title: string,
    fixed_price: number,
    discount_price: number,
    file: {
        filename: string;
        contentType: string;
        s3Key: string;
    };
}

function Product({title, file, fixed_price, discount_price}: Data) {
    const [rating, setRating] = useState<any>(null);
    const [hover, setHover] = useState<any>(null);


    const check = () => {
        console.log("Clicked Special_Offers_Products");

    }
    // Assuming you're using the productImage.s3Key as the filename
    const imageUrl = `https://pc-palace-images.s3.eu-north-1.amazonaws.com/${file.s3Key}`;

    return (



        <div className={'hover_effect_for_all_click_events m-5'}>
            <button onClick={check}>
            <div className={'h-1/2 w-full '}>
                <img src={imageUrl} alt="Pc_001"/>

                <div className={'product_text'}>
                    <p className={'text-2xl'}>{title}</p>
                    <p className={'text-2xl'}>Reviews</p>

                    <div className="App flex">
                        {[...Array(5)].map((star, index) => {
                            const current = index + 1;
                            return (
                                <label key={index}>
                                    <input type="radio" name="rating" value={current}
                                           onClick={() => setRating(rating)}/>
                                    <FaStar className={'star'} size={15}
                                            color={current <= (hover || rating) ? "#00ffde" : "#e4e5e9"}
                                            onClick={() => setHover(current)}
                                    />
                                </label>
                            );
                        })}
                    </div>

                    <p className={'text-2xl line-through'}>RS: {fixed_price}</p>
                    <p className={'text-2xl'}>RS: {discount_price}</p>
                </div>
            </div>
            </button>
        </div>
    );
}

export default Product;
