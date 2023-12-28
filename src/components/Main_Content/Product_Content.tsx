import Product from "./Product.tsx";
import './CSS/MainContent.css';
import {useEffect, useState} from "react";
import axios from "axios";

interface Data {
    id: number,
    title: string,
    body: string,
    fixed_price: string,
    discount_price: string
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
        console.log("");
        fetchData();
    }, []);

    return (
        <div className={'special_offer mt-6 text-4xl '}>
            <h1 className={''}>SPECIAL OFFERS</h1>
            <div className={'w-full border-2 border-amber-950 mt-6'}>
                <div
                    className={'grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-fit relative m-auto'}>
                    {
                        data.map((r: Data, index: number) => {
                            // return <Product title={r.title} fixed_price={r.fixed_price} body={r.content}  discount_price={r.discount_price} key={index} />;
                            return <Product title={r.title} content={r.body} discount_price={r.body}
                                            fixed_price={r.body}/>
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Product_Content;
