import { useMediaQuery } from "react-responsive"
import { useTheme } from "../context/ThemeProvider"
import Line5Img from "../assets/line/line5.svg";
import Line6Img from "../assets/line/line6.svg";
import Line7Img from "../assets/line/line7.svg";
import { motion } from "framer-motion"
import SolanaImg from "../assets/solana_icon.svg"
import { useState } from "react";

export default function ProductTrack(props: any) {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1028px)' })
    const { theme } = useTheme()
    const [isTapped, setIsTapped] = useState(false);
    const variants = {
        initial: {
            y: 0,
            transition: { duration: 1 },
        },
        tapped: {
            y: -20,
            transition: { duration: 1 },
        },
    };
    const onTapStart = () => {
        setIsTapped(true); // Set the tapped state to true when tapped
        setTimeout(() => {
            setIsTapped(false); // Reset tapped state after 3 seconds
        }, 1000);
    };
    return (
        <div className="w-full md:w-[552px] h-[240px]  flex flex-col items-center dark:bg-black bg-[#FFFFFF01] border-[1px] border-solid dark:border-white dark:border-opacity-10 overflow-hidden  p-[26px]  rounded-[20px]  relative mt-3">
            <div className="text-[18px] font-[400] text-[#C7C3D2]">
                Track each product with <span className="bg-gradient-to-r from from-[#BFE8FF] via-[#85FFFF] to-[#4E95FF] text-transparent bg-clip-text">
                    Solana
                </span>
            </div>
            <div className="text-[#C7C3D2] text-[14px] font-[400] mt-[5px]" >
                Blazing fast and secure transactions on Solana Chain
            </div>
            <motion.div
                onTap={onTapStart}
                animate={isTapped ? "tapped" : "initial"}
                variants={variants}
                whileTap="tapped"
                initial="initial"
                whileHover={{
                    y: -20,
                    transition: { duration: 1 },
                }} className="w-[242px] min-h-[150px] border-[1px] border-solid dark:border-white dark:border-opacity-10 rounded-[8px] mt-6 p-[8px_17px]">

                <div className="flex flex-row items-center gap-2 text-white text-[12px] font-[400]">
                    Certificate
                    <span>
                        <img src={SolanaImg} alt="solana" />
                    </span>
                </div>
                <div className="w-full h-[13px] rounded-[4px]  border-[1px] border-solid dark:border-white dark:border-opacity-10 mt-1">
                </div>
                <div className="w-full h-[13px] rounded-[4px]  border-[1px] border-solid dark:border-white dark:border-opacity-10 mt-1">
                </div>
                <div className="w-full h-[13px] rounded-[4px]  border-[1px] border-solid dark:border-white dark:border-opacity-10 mt-1">
                </div>
                <div className="w-full h-[13px] rounded-[4px]  border-[1px] border-solid dark:border-white dark:border-opacity-10 mt-1">
                </div>
                <div className="w-full h-[13px] rounded-[4px]  border-[1px] border-solid dark:border-white dark:border-opacity-10 mt-1">
                </div>
                <div className="w-full h-[13px] rounded-[4px]  border-[1px] border-solid dark:border-white dark:border-opacity-10 mt-1">
                </div>
                <div className="w-full h-[13px] rounded-[4px]  border-[1px] border-solid dark:border-white dark:border-opacity-10 mt-1">
                </div>

            </motion.div>
        </div>
    )
}