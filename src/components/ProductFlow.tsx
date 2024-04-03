import { useMediaQuery } from "react-responsive"
import { useTheme } from "../context/ThemeProvider"
import Line5Img from "../assets/line/line5.svg";
import Line6Img from "../assets/line/line6.svg";
import Line7Img from "../assets/line/line7.svg";

export default function ProductFlow(props: any) {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1028px)' })
    const { theme } = useTheme()

    return (
        <div className="h-[240px] w-full dark:bg-black bg-white border-[1px] border-solid dark:border-white dark:border-opacity-10 overflow-hidden  p-[26px]  rounded-[20px] dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center mt-[24px]">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            <div className="absolute top-[26px] left-[26px] flex flex-col items-center justify-center border-[0.5px] dark:border-white dark:border-opacity-10 text-white rounded-full w-[113px] h-[44px] bg-[#0E091B]">
                Customer
            </div>
            <img src={Line5Img} alt="line5" className="absolute top-[70px] left-[83px]" />
            <div className="absolute z-20 top-[98px] left-[154px] flex flex-col items-center justify-center border-[0.5px] dark:border-white dark:border-opacity-10 text-white rounded-full w-[113px] h-[44px] bg-[#0E091B]">
                NFT
            </div>
            <img src={Line6Img} alt="line6" className="absolute bottom-[48px] right-[170px] z-10" />
            <div className=" absolute bottom-[25px] left-[374px] z-20 flex flex-row items-center">
                <div className=" right-[60px] flex flex-col items-center justify-center border-[0.5px] dark:border-white dark:border-opacity-10 text-white rounded-full w-[113px] h-[44px] bg-[#0E091B]">
                    Storefront
                </div>
                <img src={Line7Img} alt="line7" className="z-10" />
            </div>
        </div>
    )
}