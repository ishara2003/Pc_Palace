import './CSS/MainContent.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Product from "../All_Type_Products/Product.tsx";

interface FileData {
    filename: string;
    contentType: string;
    s3Key: string;
}

interface ProductData {
    _id: number;
    title: string;
    file: FileData;
    price: number;
    type: string;
    discount:number
    isSpecial:string
}
function Product_Content() {
    const [products, setProducts] = useState<ProductData[]>([]);
    console.log(products);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5050/products/all');
                setProducts(response.data.data);
                console.log(products);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={'special_offer mt-6 text-6xl '}>
            <h1 className={''}><b><u>SPECIAL OFFERS</u></b></h1>
            <div className={'w-full mt-6'}>
                <div
                    className={'grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-fit relative m-auto'}>
                      {products.map((product: ProductData) => {
                        console.log(products);
                        
const dis:number = product.price - (product.price / product.discount)
console.log(dis);


                           if (product.isSpecial ){
                           
                            if(product._id=product._id){
                                //@ts-ignore
                                return <Product title={product.title} file={product.file} discount_price={dis.toFixed(0)}
                                fixed_price={product.price} _id={product._id}/>
                           
                            }
                        }

                         })}



                </div>
            </div>
        </div>
    );
}

export default Product_Content;
