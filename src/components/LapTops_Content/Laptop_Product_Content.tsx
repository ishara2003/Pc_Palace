// import './CSS/MainContent.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Product from "../All_Type_Products/Product.tsx";

interface Data {
    _id: number,
    title: string,
    file:  {
        filename: string;
        contentType: string;
        s3Key: string;
    },
    price: number,
    type:string
    // discount_price: string
}

function Laptop_Product_Content() {
    const [data, setProps] = useState<Data[]>([]);

    const fetchData = (): void => {
        axios.get('http://localhost:5050/products/all').then(response => {
            console.log("Object data: ",response.data);

            setProps(response.data.data);
        }).catch(err => {
            console.log('error : '+err);
        });
    };

    useEffect(() => {
        console.log("useEffect called");
        fetchData();
    }, []);

    return (
        <div className={' mt-6 text-4xl '}>

            <div className={'w-full mt-6'}>
                <div
                    className={'grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-fit relative m-auto'}>
                    {
                        data.map((r: Data, index: number) => {
                            if (r.type==="LAPTOP"){
                            return <Product title={r.title} file={r.file} discount_price={r.price}
                                            fixed_price={r._id}/>
                            }

                        })
                    }



                </div>
            </div>
        </div>
    );
}

export default Laptop_Product_Content;
