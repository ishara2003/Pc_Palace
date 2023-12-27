import Product from "./Product.tsx";
import './CSS/MainContent.css';
import { useEffect, useState } from "react";
import axios from "axios";

interface Data {
    title: string,
    fixed_price: number,
    discount_price: number
}

function Product_Content() {
    const [data, setProps] = useState<Data[]>([]);

    const fetchData = (): void => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            console.log(response.data);
            setProps(response.data);
        }).catch(err => {
            console.log(err);
        });
    };

    useEffect(() => {
        console.log("Pakaya");
        fetchData();
    }, []);

    return (
        <div className={'special_offer mt-6 text-4xl '}>
            <h1 className={''}>SPECIAL OFFERS</h1>
            <div className={'w-full border-2 border-amber-950 mt-6'}>
                <div className={'grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-fit relative m-auto'}>
                    {
                        data.map((r: Data, index: number) => {
                            return <Product title={r.title} fixed_price={r.fixed_price} discount_price={r.discount_price} key={index} />;
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Product_Content;
