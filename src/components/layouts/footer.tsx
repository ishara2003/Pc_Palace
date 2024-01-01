import React from "react";
import './CSS/FooterCss.css';

function Footer() {

    return (

        <div>


                <h1 className={'contact_us m-2 text-4xl'}>CONTACT US</h1>


            <footer className={'bg-green-950 text-white p-5 '}>

                <img src="https://logodix.com/logo/1597040.png" title="logo" alt="logo" className={'w-[50px]'}/>
                <div className={'contact_details flex items-center'}>
                    <div className={'grid'}>
                        <div className={'flex'}>

                            <img className={'w-11 mb-8 mt-6 ml-5'} src="src/assets/icons/support.png" alt=""/>

                            <p className={'mt-6 ml-5'}>Having Problems? Call us 12/7
                                <br/>
                                0772285353,0710931755 </p>
                        </div>

                        <p className={'mt-6 mb-8'}>PC Palace (Pvt) Ltd,
                            <br/>
                            NO-227 Panadura road,
                            <br/>
                            Horana,
                            <br/>
                            Sri Lanka.
                            <br/>
                            pcpalace.horana@gmail.com</p>

                    </div>

                    <div className={'w-1/2 h-1/2  ml-[15vw] mb-4 lg:block hidden'}>
                        <a href="https://www.google.com/maps/place/PC+Palace/@6.7188616,80.0589805,17z/data=!4m6!3m5!1s0x3ae24b76eb81a221:0xe852ab5bc564e1e8!8m2!3d6.7190716!4d80.0573085!16s%2Fg%2F11c2q30n8q?entry=ttu">

                            <img className={'w-full h-full rounded shadow-2xl shadow-green-400'} src="src/assets/images/img.png" alt="location"/>
                        </a>

                    </div>
                </div>

                <div className={'mt-5 text-center'}>
                    <p>

                    Monday 9.00 - 20.00 | Tuesday 9.00 - 20.00 | Wednesday 9.00 - 20.00
                    |
                    Thursday 9.00 - 20.00 | Friday 9.00 - 20.00 | Saturday 9.00 - 20.00 | Sunday 9.00 - 20.00
                    </p>
                <img className={'w-[3vw] ml-16 sm:block hidden'} src="src/assets/icons/whatsapp(1).png" alt="whatsapp"/>
                </div>
            </footer>

        </div>

    );


}

export default Footer;