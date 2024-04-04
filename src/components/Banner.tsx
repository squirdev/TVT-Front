import { useMediaQuery } from "react-responsive"
import ChainImg from "../assets/chain.svg"
import NormalBtn from "./common/NormalBtn"
import RightImg from "../assets/right.svg"
import TVTImg from "../assets/TVT.svg"
import SolanaImg from "../assets/solana.svg"
import { useTheme } from "../context/ThemeProvider"
import ChainImgDark from "../assets/chain_dark.svg";
import ChainImgLight from "../assets/chain_light.svg";
import { HoverBorderGradient } from "./common/HoverBorderGradient"
import { motion } from "framer-motion"
import { useRef } from "react"

export default function Banner(props: any) {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1028px)' })
    const { theme } = useTheme()
    const scrollRef = useRef(null)

    return (
        <div className=" flex flex-col items-center w-full bg-white dark:bg-black ">
            <div className="flex flex-row items-center gap-4 p-[4px_10px] md:p-3 rounded-full border-[1px] border-[#DFE1E71A] mt-[100px] md:mt-[200px]">
                {
                    theme == "dark" ?
                        <img src={ChainImgDark} alt="dark" />
                        :
                        <img src={ChainImgLight} alt="light" />
                }

                <p className="text-[#393939] dark:text-[#C7C3D2] text-[9px] md:text-[16px]">
                    Unmatched tracking for consumers and businesses at scale
                </p>
            </div>
            <motion.div ref={scrollRef}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ root: scrollRef }}
                transition={{ delay: 0.5, duration: 1 }}>
                <h1 className=" flex flex-row items-start text-[28px] md:text-[56px] font-[400] bg-gradient-to-b from-white  to-[#B3ACBE]  text-transparent bg-clip-text mt-[10px]">
                    Track Verify Trust
                    <span className="text-[10px] md:text-[14px] ml-2 md:ml-4 mt-2 md:mt-4">
                        TM
                    </span>
                </h1>
            </motion.div>

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="mt-[20px]">
                <HoverBorderGradient
                    containerClassName="rounded-[12px]"
                    as="button"
                    className="dark:bg-black text-[12px] md:text-[14px] bg-white rounded-[12px] text-black dark:text-white flex items-center space-x-2  flex-row  gap-4"
                >
                    Register Now
                    <img src={RightImg} alt="right" />
                </HoverBorderGradient>
            </motion.div>
            <motion.div whileHover={{
                scale: !isTabletOrMobile ? 1.2 : 1.1,
                transition: { duration: 1 },
            }} className="flex flex-col items-center w-[340px] md:w-[600px]">
                <img src={TVTImg} alt="tvt" className="mt-[80px]" />
                <div className="w-full  flex flex-row items-center justify-evenly mt-[40px] gap-[60px]">
                    <p className="font-Conthrax text-[12px] md:text-[23px] font-[600] bg-gradient-to-r from-[#124968] via-[#3AE7ED]  to-[#139BD7]  text-transparent bg-clip-text">
                        P O W E R E D  B Y
                    </p>
                    <img src={SolanaImg} className="w-[94px] h-[12px] md:w-[160px] md:h-[24px]" />
                </div>
            </motion.div>
        </div >
    )
}

