import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header";
import Banner from "../components/Banner";
import FlowChart from "../components/FlowChart";
import Product from "../components/Product";
import Footer from "../components/Footer";
import SignUp from "../components/SignUp";
import { GlobeDemo } from "../components/common/GlobeDemo";
import Information from "../components/Information";
import OurTechnology from "../components/OurTechnology";
import Tokenomics from "../components/Tokenomics";
import SolanaView from "../components/SolanaView";
export default function AllCarsScene() {
    const navigate = useNavigate();

    return (
        <div className=" w-full bg-white dark:bg-black overflow-hidden">
            <Header />
            <Banner />
            <FlowChart />
            <Product />
            <Information />
            <OurTechnology />
            <Tokenomics />
            <SolanaView />
            <SignUp />
            <Footer />
        </div>
    )
}