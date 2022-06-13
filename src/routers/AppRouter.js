import React from 'react'
import Contact from '../component/Contact';
import Home from '../component/Home';

import { Routes, Route } from "react-router-dom";

export default function AppRouter() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<h1>404 Not Found</h1>}/>
                   
            </Routes>
        </div>
    )
}
  