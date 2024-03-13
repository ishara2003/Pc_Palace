import React, { useState } from 'react';
import { createSearchParams, useNavigate } from "react-router-dom";

interface Props {
    _id: any;
    productImage: {
        filename: string;
        contentType: string;
        s3Key: string;
    };
    title: string;
    file: {
        filename: string;
        contentType: string;
        s3Key: string;
    };
}

function Clip_Board_Products({ file, productImage, title, _id }: Props) {
    const navigate = useNavigate();

    const navigateToProductDetailPage = (_id: any) => {
        navigate({
            pathname: "/productdetails",
            search: createSearchParams({
                productID: _id
            }).toString()
        });
    };

    const background_image_Url = `https://pc-palace-images.s3.eu-north-1.amazonaws.com/${productImage.s3Key}`;
    const productImageUrl = `https://pc-palace-images.s3.eu-north-1.amazonaws.com/${file.s3Key}`;

    return (
        
        <div className="flex items-center w-full h-[695.25px] ">

            <img src={productImageUrl} alt="Image 1" className="h-[695px] w-fit  absolute" />
            <div className="relative w-full h-[430px] left-40 bottom-3 flex cursor-pointer">

                <img src={background_image_Url} alt="Image 1" className="pimage" onClick={() => navigateToProductDetailPage(_id)} />
                
                <h1 className="absolute text-8xl right-[350px] w-[850px] beautify-heading">
                    {title.split('').map((letter, index) => (
                        <span key={index} className="rounded-md  items-center justify-between">
                            {letter}
                        </span>
                    ))}
                </h1>

            </div>

        </div>
    );
}

export default Clip_Board_Products;
