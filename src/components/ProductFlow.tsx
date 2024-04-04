import { useMediaQuery } from "react-responsive"
import { useTheme } from "../context/ThemeProvider"
import Line5Img from "../assets/line/line5.svg";
import Line6Img from "../assets/line/line6.svg";
import Line7Img from "../assets/line/line7.svg";
import Line8Img from "../assets/line/line8.svg";
import { motion } from "framer-motion"
import FLowChartImg from "../assets/line/flow.svg"
export default function ProductFlow(props: any) {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1028px)' })
    const { theme } = useTheme()

    return (
        <div className="w-full md:w-[552px] h-[240px]  dark:bg-black bg-white border-[1px] border-solid p-[26px] dark:border-white dark:border-opacity-10 overflow-hidden  rounded-[20px] dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center mt-[24px]">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <motion.div whileHover={{
                x: -400,
                transition: { duration: 2 },
            }} className="w-full relative h-full">

                <img src={FLowChartImg} alt="flow" className="absolute min-w-[923px] h-[189px]" />
                {/* <div className="absolute top-[26px] left-[26px] flex flex-col items-center justify-center border-[0.5px] dark:border-white dark:border-opacity-10 text-white rounded-full w-[113px] h-[44px] bg-[#0E091B]">
                    Customer
                </div>
                <img src={Line5Img} alt="line5" className="absolute top-[70px] left-[83px]" />
                <div className="absolute z-20 top-[98px] left-[154px] flex flex-col items-center justify-center border-[0.5px] dark:border-white dark:border-opacity-10 text-white rounded-full w-[113px] h-[44px] bg-[#0E091B]">
                    NFT
                </div>
                <img src={Line6Img} alt="line6" className="absolute bottom-[48px] right-[170px] z-10" />
                <div className=" absolute bottom-[25px] left-[374px] z-20 flex flex-row items-center">
                    <div className=" right-[60px] flex flex-col items-center justify-center border-[0.5px] dark:border-white dark:border-opacity-10 text-white rounded-full min-w-[113px] h-[44px] bg-[#0E091B]">
                        Storefront
                    </div>
                    <img src={Line7Img} alt="line7" className="z-10" />
                </div>
                <div className="absolute bottom-[25px] right-[-174px] z-20 flex flex-row items-end">
                    <div className=" right-[60px] flex flex-col items-center justify-center border-[0.5px] dark:border-white dark:border-opacity-10 text-white rounded-full w-[113px] h-[44px] bg-[#0E091B]">
                        Provider
                    </div>
                    <img src={Line8Img} alt="line7" className="z-10 mb-[20px]" />
                </div>
                <div className=" absolute bottom-[95px] right-[-280px] z-20 flex flex-row items-center">
                    <div className=" right-[60px] flex flex-col items-center justify-center border-[0.5px] dark:border-white dark:border-opacity-10 text-white rounded-full w-[113px] h-[44px] bg-[#0E091B]">
                        Blockchain
                    </div>
                </div> */}
            </motion.div>
        </div>
    )
}