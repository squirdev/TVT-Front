import { useMediaQuery } from "react-responsive"
import { useTheme } from "../context/ThemeProvider"
import HomeImg from "../assets/house.svg";
import TruckImg from "../assets/truck.svg";
import StoreImg from "../assets/store.svg";
import Chain3DImg from "../assets/chain3d.svg";
import RiseLightImg from "../assets/rise_light.svg";
import RiseDarkImg from "../assets/rise_dark.svg"
import DownLightImg from "../assets/down_light.svg";
import DownDarkImg from "../assets/down_dark.svg";
import EqualLightImg from "../assets/equal_light.svg";
import InfoDarkImg from "../assets/info_dark.svg";
import InfoLightImg from "../assets/info_light.svg";
import NormalBtn from "./common/NormalBtn";
import RightImg from "../assets/right.svg"
import { HoverBorderGradient } from "./common/HoverBorderGradient";


export default function FlowChart(props: any) {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1028px)' })
    const { theme } = useTheme()

    return (
        <div className="flex flex-col items-center w-full bg-white dark:bg-black mt-[160px] px-[20px]">
            {
                theme == "dark" ?
                    <img src={InfoDarkImg} alt="rise" />
                    :
                    <img src={InfoLightImg} alt="rise" />
            }
            {
                theme == "dark" ?
                    <h1 className="w-full md:w-[770px] flex flex-row items-start text-[28px] md:text-[50px] text-center mt-[16px] font-[400] bg-gradient-to-b from-white  to-[#B3ACBE]   text-transparent bg-clip-text">
                        Harness the power of blockchain to trace products globally
                    </h1>
                    :
                    <h1 className="w-full md:w-[770px] flex flex-row items-start text-[28px] md:text-[50px] text-center mt-[16px] font-[400] bg-gradient-to-b from-[#393939]  to-[#B3ACBE]   text-transparent bg-clip-text">
                        Harness the power of blockchain to trace products globally
                    </h1>
            }
            <div className="mt-[20px]">
                <HoverBorderGradient
                    containerClassName="rounded-[12px]"
                    as="button"
                    className="dark:bg-black text-[12px] md:text-[14px] bg-white text-black dark:text-white rounded-[12px] flex items-center space-x-2  flex-row  gap-4"
                >
                    Whitepaper
                    <img src={RightImg} alt="right" />
                </HoverBorderGradient>
            </div>
        </div>
    )
}