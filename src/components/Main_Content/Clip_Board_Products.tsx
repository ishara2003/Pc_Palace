import {BiSolidSearch} from "react-icons/bi";
import './CSS/MainContent.css'

interface Props {

    backgroundImage: any,
    productImage: any,
    title: string

}

function Clip_Board_Products({image, productImage, title}) {

    return (
        <div className={'flex items-center w-full h-[695.25px]'}>

            <img src={image} alt="Image 1"
                 className={'h-[695px] w-fit  absolute'}/>

            <div className={'relative w-1/4 h-[430px] left-60'}>
                <img src={productImage} alt="Image 1" className={'w-[450px] '}/>

            </div>

            <button
                className={'view_btn '}>
                <b>VIEW </b><BiSolidSearch className={''}/></button>
            <h1 className={'relative text-8xl left-[700px] w-96'}><b>{title}</b></h1>


        </div>
    );

}

export default Clip_Board_Products;