/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/layouts/header.tsx";
import Footer from "./components/layouts/footer.tsx";
import Main_Content from "./components/Main_Content/Main_Content.tsx";
import LapTop_Main_Content from "./components/LapTops_Content/LapTop_Main_Content.tsx";

function App() {


    return (
        <div>


            <BrowserRouter>

                <Header/>

                <Routes>

                    <Route path={"/home"} element={<Main_Content/>}/>
                    <Route path={"/laptop"} element={<LapTop_Main_Content/>}/>

                </Routes>

                <Footer/>

            </BrowserRouter>

        </div>


    )
}

export default App
