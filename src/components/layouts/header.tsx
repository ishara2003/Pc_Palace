import React, {useState} from "react";
import {Link} from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import '../Main_Content/CSS/MainContent.css';
import {FaRegUserCircle} from "react-icons/fa";
import './CSS/FooterCss.css';
import { BiSolidDownArrow } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";







function Header() {
    // State to manage the visibility of the div
    const [showDiv, setShowDiv] = useState(false);

    // Function to handle the button click
    const handleClick = () => {
        console.log("Clicked");
        // Set showDiv to true when the button is clicked
        setShowDiv(true);
    };
    return (

        <div className={'mb-3 bg-[#002E35]'}>

            <header className={'h-full pt-3'}>
                <nav className={'flex justify-between items-center bg-transparent p-[0.5rem] w-full'}>
                    <Link to={'/'}>
                        <img src="https://logodix.com/logo/1597040.png" title="logo" alt="logo" className={'w-[80px] h-[40px]'}/>
                    </Link>
                    <div className={'w-2/3 h-[46px] rounded-3xl relative shadow-2xl shadow-[#0af3f3]'}>

                        <input
                            className=" w-full h-[46px] header_nav_bar header_nav_bar_color rounded-3xl placeholder:italic
                            placeholder:text-amber-50 py-2 pl-9 pr-3 text-lg"
                            placeholder="Search for anything..." type="text" name="search"/>

                        <div className={'absolute right-0 top-0 h-[46px] flex items-center pr-3 header_nav_bar header_nav_bar_color rounded-e-3xl w-[6vw]'}>

                            <IoIosSearch className={'w-[2vw] h-[40px] absolute right-1/3 cursor-pointer'} />
                        </div>

                    </div>
                    <ul className={'flex gap-[3vw] mr-10'}>


                        <li onClick={handleClick}>
                            <FaRegUserCircle
                                className={'w-[40px] h-[40px] cart_SVG'}
                            />
                            {showDiv && <div className={"text-amber-400 absolute w-1/4 h-48 border-2"}>New div created after button click</div>}
                        </li>
                        <Link to={'/cart'}>
                        
                        <li><FaCartShopping className={'w-[40px] h-[40px] cart_SVG'} /></li>
                        </Link>
                    </ul>
                </nav>

                <div className={' w-full h-[46px]  mt-3 flex justify-between items-center'}>

                    <div className={' w-full  ml-1'}>

                        <Link to={'/laptop'}>
                            <button className={' w-full h-[46px] header_nav_bar header_nav_bar_color  focus:outline-none'}>
                                <b>  LAPTOPS</b>
                            </button>
                        </Link>

                    </div>

                    <div className={'w-full  ml-1'}>
                        <Link to={'/desktop'}>
                            <button className={'w-full h-[46px] header_nav_bar header_nav_bar_color focus:outline-none'}>
                                <b>  DESKTOPS</b>
                            </button>
                        </Link>
                    </div>

                    <div className="w-full ml-1 flex items-center header_nav_bar header_nav_bar_color ">
                        <Link className={'w-full'} to="/components">
                            <button className="w-full h-[46px] header_nav_bar header_nav_bar_color focus:outline-none">
                                <b>ACCESSORIES</b>
                            </button>
                        </Link>
                        <BiSolidDownArrow  className="ml-1 w-[30px]" />
                        {/*<img src="src/assets/icons/down-arrow.png" alt="/" className="ml-1 w-[30px]" />*/}
                    </div>

                    <div className={'w-full  ml-1 flex items-center header_nav_bar header_nav_bar_color'}>

                      <Link className={'w-full'} to={"/gaming"}>
                        <button className={'w-full h-[46px]  focus:outline-none  header_nav_bar_color header_nav_bar'}>
                            <b> GAMING</b>
                        </button>
                      </Link>
                        <BiSolidDownArrow  className="ml-1 w-[30px]" />
                        {/*<img src="src/assets/icons/down-arrow.png" alt="/" className="ml-1 w-[30px] " />*/}
                    </div>

                    <div className={'w-full  ml-1'}>
                        <Link to={'/printers'}>
                        <button className={'w-full h-[46px] header_nav_bar header_nav_bar_color focus:outline-none'}>
                            <b>PRINTERS</b>
                        </button>
                        </Link>
                    </div>

                    {/* <div className={'w-full  ml-1 mr-1'}>
                        <button className={'w-full h-[46px] header_nav_bar header_nav_bar_color focus:outline-none'}>
                            <b>MAKE YOUR OWN PC</b>
                        </button>
                    </div> */}

                </div>

            </header>

        </div>

    );


}

export default Header;