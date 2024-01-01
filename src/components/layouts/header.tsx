import React from "react";
import {Link} from "react-router-dom";

function Header() {

    return (

        <div className={'mb-3 bg-green-950'}>

            <header className={'h-full'}>
                <nav className={'flex justify-between items-center bg-transparent p-[0.5rem] w-full'}>
                    <Link to={'/home'}>
                    <img src="https://logodix.com/logo/1597040.png" title="logo" alt="logo" className={'w-[40px]'}/>
                    </Link>
                    <div className={'w-2/3 h-[46px] rounded-3xl relative '}>

                        <input
                            className="w-full h-[46px] bg-gray-500 rounded-3xl placeholder:italic placeholder:text-amber-50 py-2 pl-9 pr-3 focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                            placeholder="Search for anything..." type="text" name="search"/>

                        <div className={'absolute right-0 top-0 h-[46px] flex items-center pr-3 bg-gray-600 rounded-e-3xl w-[6vw]'}>
                            <img src="src/assets/icons/loupe.png" alt="Close" className={'w-[2vw] h-[40px] absolute right-1/3'}/>
                        </div>

                    </div>
                    <ul className={'flex gap-[2vw]'}>


                        <li><img src="src/assets/icons/account.png" alt="cart" className={'w-[40px]'}/></li>
                        <li><img src="src/assets/icons/shopping-cart.png" alt="cart" className={'w-[40px]'}/></li>

                    </ul>
                </nav>

                <div className={' w-full h-[46px] bg-white mt-3 flex justify-between items-center'}>

                    <div className={'w-full bg-gray-600 ml-1'}>

                        <Link to={'/laptop'}>
                    <button className={'w-full h-[46px] bg-[#D9D9D9] focus:outline-none'}>
                        LAPTOPS
                    </button>
                        </Link>

                </div>

                <div className={'w-full bg-gray-600 ml-1'}>
                    <Link to={'/desktop'}>
                    <button className={'w-full h-[46px] bg-[#D9D9D9] focus:outline-none'}>
                        DESKTOPS
                    </button>
                    </Link>
                </div>

                    <div className="w-full ml-1 flex items-center bg-[#D9D9D9]">
                        <Link className={'w-full'} to="/components">
                            <button className="w-full h-[46px] bg-[#D9D9D9] focus:outline-none">
                                COMPONENTS
                            </button>
                        </Link>
                        <img src="src/assets/icons/down-arrow.png" alt="/" className="ml-1 w-[30px]" />
                    </div>

                    <div className={'w-full bg-[#D9D9D9] ml-1 flex items-center'}>
                        <button className={'w-full h-[46px] bg-[#D9D9D9] focus:outline-none'}>
                            GAMING
                        </button>
                        <img src="src/assets/icons/down-arrow.png" alt="/" className="ml-1 w-[30px]" />
                    </div>

                <div className={'w-full bg-gray-600 ml-1'}>
                    <button className={'w-full h-[46px] bg-[#D9D9D9] focus:outline-none'}>
                        PRINTERS
                    </button>
                </div>

                <div className={'w-full bg-gray-600 ml-1 mr-1'}>
                    <button className={'w-full h-[46px] bg-[#D9D9D9] focus:outline-none'}>
                        MAKE YOUR OWN PC
                    </button>
                </div>

                </div>

            </header>

        </div>

    );


}

export default Header;