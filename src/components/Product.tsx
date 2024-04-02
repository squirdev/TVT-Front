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
import ProductInfo from "./common/ProductInfo";


export default function Product(props: any) {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1028px)' })
    const { theme } = useTheme()

    return (
        <div className="flex flex-col items-center w-full bg-white dark:bg-black mt-[160px]">
            <ProductInfo />
        </div>
    )
}