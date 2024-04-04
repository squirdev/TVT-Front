import { useMediaQuery } from "react-responsive"
import { useTheme } from "../context/ThemeProvider"
import Line1Img from "../assets/line/line1.svg"
import Line2Img from "../assets/line/line2.svg"
import Line3Img from "../assets/line/line3.svg"
import Line4Img from "../assets/line/line4.svg"
import TVTSmallImg from "../assets/TVT_small.svg"
import { motion } from "framer-motion";
import FlowChartImg from "../assets/flow-chart.svg"

export default function CertifyFlow(props: any) {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1028px)' })
    const { theme } = useTheme()

    return (
        <div className="relative w-full md:w-[552px] h-[300px] bg-[#f0eff0]  border border-solid border-[#d6d5da] dark:bg-black dark:border-white   dark:border-opacity-10 rounded-[20px] overflow-hidden p-[16px]">
            <div className="flex flex-col items-center mt-[20px]">
                <img src={FlowChartImg} alt='flowchart' className="w-full md:w-[80%]" />
            </div>
            {/* <div className="absolute top-[49px] left-[59px] md:left-[119px] z-20 flex flex-col items-center justify-center bg-[#0B0B0B] rounded-full border-[1px] border-[#fff] border-opacity-10 w-[85px] h-[35px] text-[12px] font-[500] text-white">
                Provider
            </div>
            <img src={Line1Img} alt="line" className="absolute top-[78px] left-[97px] md:left-[157px] z-10" />
            <div className="absolute top-[40px] right-[76px] z-20 flex flex-col items-center justify-center bg-[#0B0B0B] rounded-full border-[1px] border-[#fff] border-opacity-10 w-[85px] h-[35px] text-[12px] font-[500] text-white">
                Storefront
            </div>
            <img src={Line2Img} alt="line" className="absolute top-[117px] left-[156px] z-10" />
            <motion.img src={TVTSmallImg} whileHover={{
                scale: 1.2,
                transition: { duration: 1 },
            }} alt="tvt" className="absolute top-[85px] left-[198px] md:left-[228px] z-20" />
            <img src={Line3Img} alt="line" className="absolute top-[58px] right-[135px] z-10" />
            <div className="absolute bottom-[105px] left-[47px] md:left-[77px] z-20 flex flex-col items-center justify-center bg-[#0B0B0B] rounded-full border-[1px] border-[#fff] border-opacity-10 w-[85px] h-[35px] text-[12px] font-[500] text-white">
                Company
            </div>
            <img src={Line4Img} alt="line" className="absolute top-[120px] right-[137px] z-10" />
            <div className=" absolute bottom-[106px] right-[87px] z-20 flex flex-col items-center justify-center bg-[#0B0B0B] rounded-full border-[1px] border-[#fff] border-opacity-10 w-[85px] h-[35px] text-[12px] font-[500] text-white">
                Customer
            </div> */}
            <div className="absolute bottom-[20px]">
                <div className="text-[18px] font-[400] text-[#C7C3D2]">
                    TVT certifies <span className="bg-gradient-to-r from from-[#BFE8FF] via-[#85FFFF] to-[#4E95FF] text-transparent bg-clip-text">
                        Your Product
                    </span>
                </div>
                <div className="text-[#C7C3D2] text-[14px] font-[400]">
                    We verify the whole process and record it on the blockchain for each product
                </div>
            </div>
        </div>

    )
}