import Product from "../Main_Content/Product.tsx";
// import './CSS/MainContent.css';
import {useEffect, useState} from "react";
import axios from "axios";

interface Data {
    id: number,
    title: string,
    body: string,
    fixed_price: string,
    discount_price: string
}

function Desktop_Product_Content() {
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
        <div className={' mt-6 text-4xl '}>

            <div className={'w-full mt-6'}>
                <div
                    className={'grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 w-fit relative m-auto'}>
                    {
                        data.map((r: Data, index: number) => {
                            // return <Product title={r.title} fixed_price={r.fixed_price} body={r.content}  discount_price={r.discount_price} key={index} />;
                            return <Product title={r.title} content={r.body} discount_price={r.id}
                                            fixed_price={r.id}/>
                        })
                    }



                </div>
            </div>
        </div>
    );
}

export default Desktop_Product_Content;
