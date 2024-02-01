import React, {useState} from "react";
import {FaStar} from "react-icons/fa";
import '../Main_Content/CSS/Product_CSS.css'
  // import { useNavigate } from 'react-router-dom';
import {Routes, Route, useNavigate, createSearchParams} from 'react-router-dom';
import ProductDetail from "./ProductDetails";

interface Data {
    _id           ?: any,
    title          : string,
    fixed_price    : number,
    discount_price : number,
    file           : {
        filename   : string;
        contentType: string;
        s3Key      : string;
    };
}

function Product({title, file, fixed_price, discount_price,_id}: Data) {
    const [rating, setRating] = useState<any>(null);
    const [hover, setHover]   = useState<any>(null);


    const navigate = useNavigate();

    const navigateToProductDetailPage = (_id:any )=> {
        console.log(_id);
        const data = { title, fixed_price, discount_price, file, _id };

       navigate({
            pathname: "/productdetails",
            search  : createSearchParams({
              productID: _id
            }).toString()
          })
      
        console.log("data12345", data);
    };
   
      // Assuming you're using the productImage.s3Key as the filename
    const imageUrl = `https://pc-palace-images.s3.eu-north-1.amazonaws.com/${file.s3Key}`;

    return (


<div className = {'hover_effect_for_all_click_events m-5 text-end cursor-pointer'} onClick = {()=>navigateToProductDetailPage(_id)}>
        <div >
            
            <div className = {'h-1/2 w-full '}>
            <div className = "h-[284px]">
            <img src       = {imageUrl} alt = "Pc_001"/>
                </div>
                

                <div className = {'product_text'}>
                <p   className = {'text-2xl'}>{title}</p>
                <p   className = {'text-2xl'}>Reviews</p>

                    <div className = "App flex">
                        {[...Array(5)].map((star, index) => {
                            const current = index + 1;
                            return (
                                <label  key       = {index}>
                                <input  type      = "radio" name  = "rating" value = {current}
                                        onClick   = {() => setRating(rating)}/>
                                <FaStar className = {'star'} size = {15}
                                        color     = {current <= (hover || rating) ? "#00ffde" : "#e4e5e9"}
                                        onClick   = {() => setHover(current)}
                                    />
                                </label>
                            );
                        })}
                    </div>

                    <p className = {'text-2xl line-through'}>RS: {fixed_price}</p>
                    <p className = {'text-2xl'}>RS: {discount_price}</p>
                </div>
            </div>
            
        </div></div>
    );
}

export default Product;
