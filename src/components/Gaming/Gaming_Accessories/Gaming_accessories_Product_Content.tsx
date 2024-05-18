import {useEffect, useState} from "react";
import axios from "axios";
import Product from "../../All_Type_Products/Product.tsx";

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

function Gaming_Accessories_Product_Content({score}:any) {
    const [data, setProps] = useState<Data[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5050/products/filter_by_type?req_type=GAMING ACCESSORIES&size=16&page=${score}`);
                setProps(response.data.data);
                console.log("888484848488484",response.data.data);
                
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [score]);

    return (
        <div className={' mt-6 text-4xl '}>

            <div className={'w-full mt-6'}>
                <div
                    className={'grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 w-fit relative m-auto'}>
                    {
                        data.map((r: Data, index: number) => {
                            const dis:number = r.price - (r.price / r.discount)
                            console.log(dis);

                            if (r.type==="GAMING ACCESSORIES"){
                                if(r.discount){
                                    //@ts-ignore
                                    return <Product title={r.title} file={r.file} discount_price={dis.toFixed(0)}
                                    fixed_price={r.price} _id={r._id} />
                                }else{
    
                                    return <Product title={r.title} file={r.file} discount_price={r.price}
                                    fixed_price={0} _id={r._id} />
    
                                }
                              
                                }
                        })
                    }



                </div>
            </div>
        </div>
    );
}

export default Gaming_Accessories_Product_Content;
