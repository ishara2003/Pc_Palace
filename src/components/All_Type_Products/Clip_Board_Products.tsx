import {BiSolidSearch} from "react-icons/bi";
import '../Main_Content/CSS/MainContent.css'

interface Props {

    image: any,
    productImage: any,
    title: string

}

function Clip_Board_Products({image, productImage, title}: Props) {
    /**
     * i didnt tell to the funtion that theeas are Props type
     */

    return (
        <div className={'flex items-center w-full h-[695.25px] '}>

            <img src={image} alt="Image 1"
                 className={'h-[695px] w-fit  absolute'}/>

            <div className={'relative w-full h-[430px] left-40 bottom-3 flex cursor-pointer'}>
                <img src={productImage} alt="Image 1" className={'pimage'}/>

            <h1 className={'absolute text-8xl right-[500px] w-80'}><b>{title}</b></h1>
            </div>




        </div>
    );

}

export default Clip_Board_Products;