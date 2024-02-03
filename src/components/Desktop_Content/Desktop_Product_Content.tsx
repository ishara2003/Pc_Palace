import {useEffect, useState} from "react";
import axios from "axios";
import Product from "../All_Type_Products/Product.tsx";

interface Data {
    _id: number,
    title: string,
    file: {
        filename: string;
        contentType: string;
        s3Key: string;
    },
    price: number,
    type: string,
    discount:number
}

function Desktop_Product_Content({ score }:any) {
    const [data, setProps] = useState<Data[]>([]);
    console.log("function Laptop_Product_Content : ",score);
    const fetchData = (): void => {
        axios.get(`http://localhost:5050/products/filter_by_type?req_type=DESKTOP&size=20&page=${score}`).then(response => {
            console.log("Object data: ",response.data);

            setProps(response.data.data);
        }).catch(err => {
            console.log('error : '+err);
        });
    };

    useEffect(() => {
        console.log("");
        fetchData();
    }, [score]);

    return (
        <div className={' mt-6 text-4xl '}>

            <div className={'w-full mt-6'}>
                <div
                    className={'grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-fit relative m-auto'}>
                   {data.map((product: Data) => {
                        console.log(data);
                        
const dis:number = product.price - (product.price / product.discount)
console.log(dis);


                           if (product.type==="DESKTOP"){
                            if(product.discount){
                                //@ts-ignore
                                return <Product title={product.title} file={product.file} discount_price={dis.toFixed(0)}
                                fixed_price={product.price} _id={product._id} />
                            }else{

                                return <Product title={product.title} file={product.file} discount_price={product.price}
                                fixed_price={0} _id={product._id} />

                            }
                          
                            }

                         })}


                </div>
            </div>
        </div>
    );
}

export default Desktop_Product_Content;
