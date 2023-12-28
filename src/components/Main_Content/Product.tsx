import './CSS/Product_CSS.css'
import React, {useState} from "react";
import {FaStar} from "react-icons/fa";

interface Data {

    title: string,
    fixed_price: string,
    discount_price: string,
    content: string
}

function Product({title, content, fixed_price, discount_price}: Data) {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div className={'w-72 p-5 border-solid border-2 m-5'}>
            <div className={'h-1/2 w-full '}>
                <img src="src/assets/images/PC.png" alt="Pc_001"/>

                <div className={'text-left product_text'}>
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
                                            color={current <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                            onClick={() => setHover(current)}
                                    />
                                </label>
                            );
                        })}
                    </div>

                    <p className={'text-2xl line-through'}>RS: {content}</p>
                    <p className={'text-2xl'}>RS: {content}</p>
                </div>
            </div>
        </div>
    );
}

export default Product;
