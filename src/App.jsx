import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import Laboratorna1 from "./pages/Laboratorna_1.jsx";
import Laboratorna2 from "./pages/Laboratorna_2.jsx";
import Laboratorna3 from "./pages/Laboratorna_3.jsx";
import Laboratorna4 from "./pages/Laboratorna_4.jsx";
import Laboratorna5 from "./pages/Laboratorna_5.jsx";
import Laboratorna6 from "./pages/Laboratorna_6.jsx";
import Laboratorna7 from "./pages/Laboratorna_7.jsx";
import Laboratorna8 from "./pages/Laboratorna_8.jsx";
import Laboratorna9 from "./pages/Laboratorna_9.jsx";
import MainText from "./components/MainText.jsx";


const MyComponent = () => {
    return (
        <Router>
            <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
                <MainText/>
                <Navigation/>
                <Routes>
                    <Route path="/lms-reports/l1" element={<Laboratorna1/>} />
                    <Route path="/lms-reports/l2" element={<Laboratorna2/>} />
                    <Route path="/lms-reports/l3" element={<Laboratorna3/>} />
                    <Route path="/lms-reports/l4" element={<Laboratorna4/>} />
                    <Route path="/lms-reports/l5" element={<Laboratorna5/>} />
                    <Route path="/lms-reports/l6" element={<Laboratorna6/>} />
                    <Route path="/lms-reports/l7" element={<Laboratorna7/>} />
                    <Route path="/lms-reports/l8" element={<Laboratorna8/>} />
                    <Route path="/lms-reports/l9" element={<Laboratorna9/>} />
                </Routes>
            </div>
        </Router>
    );
};

export default MyComponent;