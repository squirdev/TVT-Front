import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header";
import Banner from "../components/Banner";
import FlowChart from "../components/FlowChart";
import Product from "../components/Product";
import Footer from "../components/Footer";
import SignUp from "../components/SignUp";
export default function AllCarsScene() {
    const navigate = useNavigate();

    return (
        <div className=" w-full bg-white dark:bg-black overflow-hidden">
            <Header />
            <Banner />
            <FlowChart />
            <Product />
            <SignUp />
            <Footer />
        </div>
    )
}