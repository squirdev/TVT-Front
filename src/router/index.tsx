import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LandingScene from "../pages/LandingScene";


export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingScene />}></Route>
            </Routes>
        </BrowserRouter>
    )
}