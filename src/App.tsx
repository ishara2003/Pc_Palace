/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/layouts/header.tsx";
import Footer from "./components/layouts/footer.tsx";
import Main_Content from "./components/Main_Content/Main_Content.tsx";
import LapTop_Main_Content from "./components/LapTops_Content/LapTop_Main_Content.tsx";
import Desktop_Main_Content from "./components/Desktop_Content/Desktop_Main_Content.tsx";
import Components_Main_Content from "./components/Components/Components_Main_Content.tsx";
import Component_Catagorees_Motherboard from "./components/Components/Motherboard/Component_Catagorees_Motherboard.tsx";
import React from "react";
import Gaming_Main_Content from "./components/Gaming/Gaming_Main_Content.tsx";
import Printer_Product_Content from "./components/Printer_Content/Printer_Product_Content.tsx";
import Printer_Main_Content from "./components/Printer_Content/Printer_Main_Content.tsx";
import ProductDetail from './components/All_Type_Products/ProductDetails.tsx';
import Cart from './components/layouts/Cart.tsx';

function App() {


    return (
        <div>


            <BrowserRouter>

                <Header/>

                <Routes>

                    <Route path = {"/"} element         = {<Main_Content/>}/>
                    <Route path = {"/laptop"} element       = {<LapTop_Main_Content/>}/>
                    <Route path = {"/desktop"} element      = {<Desktop_Main_Content/>}/>
                    <Route path = {"/components"} element   = {<Components_Main_Content/>}/>
                    <Route path = {"/gaming"} element       = {<Gaming_Main_Content/>}></Route>
                    <Route path = {"/printers"} element     = {<Printer_Main_Content/>}></Route>
                    <Route path = "/productdetails" element = {<ProductDetail/>} />
                    <Route path = {"/cart"} element = {<Cart/>} />
  

                </Routes>

                <Footer/>

            </BrowserRouter>

        </div>


    )
}

export default App
