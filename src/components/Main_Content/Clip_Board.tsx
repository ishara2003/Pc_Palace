import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Clip_Board_Products from "./Clip_Board_Products.tsx";
import React, {useEffect, useState} from "react";
import Product from "./Product.tsx"; // Import the carousel styles


interface Data {

    backgroundImg:any,
    productImg:any,
    title:string

}

function Clip_Board() {

    const [data, setData] = useState<Data[]>([]);

    const products = () => [
        {
            backgroundImg: 'src/assets/images/MSI-laptops.jpeg',
            productImg: 'src/assets/images/PC.png',
            title: 'MSI LAPTOP LIMITED OFFER',
        },{
            backgroundImg: 'src/assets/images/msi-assassins-creed-mirage-promotion-featureed.jpg',
            productImg: 'src/assets/images/PC.png',
            title: 'MSI LAPTOP LIMITED OFFER',
        },{
            backgroundImg: 'src/assets/images/msi-logo-06-.jpg',
            productImg: 'src/assets/images/PC.png',
            title: 'MSI LAPTOP LIMITED OFFER',
        },
        // Add more products as needed
    ];

    useEffect(() => {
        setData(products());
    }, []);

    return (
        <div className={'w-full h-[695.25px]'}>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={5000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={10}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 1,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >


                {data.map((r: Data, index: number) => (
                    <Clip_Board_Products
                        key={index}
                        image={r.backgroundImg}
                        productImage={r.productImg}
                        title={r.title}
                    />
                ))}


               {/* <div>
                    <img src={"src/assets/images/MSI-laptops.jpeg"} alt="Image 3" className={'h-[695px] w-fit '}/>
                    <img src={"src/assets/images/PC.png"} alt="Image 1" className={'w-[250px] '}/>

                </div>
                <div>
                    <img src={"src/assets/images/msi-logo-06-.jpg"} alt="Image 2" className={'h-[695px] w-fit '}/>
                    <img src={"src/assets/images/PC.png"} alt="Image 1" className={'w-[250px] '}/>

                </div>*/}
            </Carousel>
        </div>
    );
}

export default Clip_Board;
