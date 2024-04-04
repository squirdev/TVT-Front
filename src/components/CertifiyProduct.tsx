import { useMediaQuery } from "react-responsive"
import { useTheme } from "../context/ThemeProvider"
import Line1Img from "../assets/line/line1.svg"
import Line2Img from "../assets/line/line2.svg"
import Line3Img from "../assets/line/line3.svg"
import Line4Img from "../assets/line/line4.svg"
import TVTSmallImg from "../assets/TVT_small.svg"
import { motion } from "framer-motion";
import NormalBtn from "./common/NormalBtn"
import RightImg from "../assets/right.svg"
import { GlobeDemo } from "./common/GlobeDemo"
import { Globe, World } from "./common/Globe"
import { HoverBorderGradient } from "./common/HoverBorderGradient"

export default function CertifyProduct(props: any) {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1028px)' })
    const { theme } = useTheme()
    const globeConfig = {
        pointSize: 4,
        globeColor: "#000",
        showAtmosphere: true,
        atmosphereColor: "#000",
        atmosphereAltitude: 0.1,
        emissive: "#062056",
        emissiveIntensity: 0.1,
        shininess: 0.9,
        polygonColor: "rgba(255,255,255,0.7)",
        ambientLight: "#38bdf8",
        directionalLeftLight: "#ffffff",
        directionalTopLight: "#ffffff",
        pointLight: "#ffffff",
        arcTime: 1000,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        initialPosition: { lat: 22.3193, lng: 114.1694 },
        autoRotate: true,
        autoRotateSpeed: 0.5,
    };
    const colors = ["#06b6d4", "#3b82f6", "#ffffff"];

    return (
        <div className="relative w-full md:w-[552px] h-[300px] bg-[#f0eff0] overflow-hidden border border-solid border-[#d6d5da] dark:bg-transparent z-20 dark:border-white   dark:border-opacity-10 rounded-[20px] p-[16px]">
            <div className="relative bg-gradient-to-r z-20 from from-[#BFE8FF] via-[#85FFFF] to-[#4E95FF] text-transparent bg-clip-text">
                Certify your product on the blockchain
            </div>
            <div className="relative w-[300px] z-20 text-[#C7C3D2] text-[14px] font-[400] mt-[12px]">
                Certify your product on the Decentralized Blockchain with the NFT Technology
            </div>
            <div className="mt-[20px]">
                <HoverBorderGradient
                    containerClassName="rounded-[12px]"
                    as="button"
                    className="dark:bg-black bg-white rounded-[12px] text-black dark:text-white flex items-center space-x-2  flex-row  gap-4"
                >
                    Make a request
                    <img src={RightImg} alt="right" />
                </HoverBorderGradient>
            </div>


            <div className="absolute -top-[100px] -right-[200px] w-[724px] h-[734px] -z-10">
                <World data={[]} globeConfig={globeConfig} />
            </div>
        </div>

    )
}