import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Clip_Board_Products from "../All_Type_Products/Clip_Board_Products.tsx";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Data {
  _id: number;
  title: string;
  file: {
    filename: string;
    contentType: string;
    s3Key: string;
  };
  productImage:{
    filename   : string;
    contentType: string;
    s3Key      : string;
};
  price: number;
  type: string;
  qty: number;
  isSpecial:boolean;
  toClip_board:boolean;
  caled:any;

}

function Clip_Board() {
  const [data, setProps] = useState<Data[]>([]);

  // const products = () => [
  //   {
  //     backgroundImg: "src/assets/products/MSI-laptops.jpeg",
  //     productImg: "src/assets/products/PC.png",
  //     title: "MSI LAPTOP LIMITED OFFER",
  //   },
  //   {
  //     backgroundImg:
  //       "src/assets/products/msi-assassins-creed-mirage-promotion-featureed.jpg",
  //     productImg: "src/assets/products/PC.png",
  //     title: "MSI LAPTOP LIMITED OFFER",
  //   },
  //   {
  //     backgroundImg: "src/assets/products/msi-logo-06-.jpg",
  //     productImg: "src/assets/products/PC.png",
  //     title: "MSI LAPTOP LIMITED OFFER",
  //   },
  //   // Add more products as needed
  // ];

  const fetchData = (): void => {
    
    axios
      .get("http://localhost:5050/products/all")
      .then((response) => {
        console.log("Object data: ", response.data);

        setProps(response.data.data);
      })
      .catch((err) => {
        console.log("error : " + err);
      });
  };

  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  return (
    <div className={"w-full h-[695.25px]"}>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay={true}
        autoPlaySpeed={5000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={true}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={10}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable={true}
      >
       
        {data.map((r: Data, index: number) => {
          const id = r._id;
          const title = r.title;
          const price = r.price;
          const file = r.file.s3Key;
          // const bgImage = r.productImage.s3Key;
          const qty = r.qty;

         console.log("12345",r.file.s3Key);
        //  console.log("12345",r.productImage.s3Key);
         

          if(r.toClip_board){
            return (
              <div>
                <Clip_Board_Products
                  key={index}
                
                  file={r.productImage}
                  productImage={r.file}
                  title={r.title}
                  _id={r._id}
                />
                
              </div>
            );
          }
               
        })}
      </Carousel>
    </div>
  );
}

export default Clip_Board;
