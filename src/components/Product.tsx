import { useMediaQuery } from "react-responsive"
import { useTheme } from "../context/ThemeProvider"
import ProductInfo from "./common/ProductInfo";
import CertifyFlow from "./CertifiyFlow";
import CertifyProduct from "./CertifiyProduct";
import ProductFlow from "./ProductFlow";
import ProductTrack from "./ProductTrack";

export default function Product(props: any) {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1028px)' })
    const { theme } = useTheme()

    return (
        <div className="flex flex-row items-start justify-center gap-6 w-full bg-white dark:bg-black mt-[160px]">
            <div className="flex flex-col items-center">
                <ProductInfo />
                <ProductFlow />
            </div>
            <div className="flex flex-col items-center gap-4">
                <CertifyFlow />
                <CertifyProduct />
                <ProductTrack />
            </div>
        </div>
    )
}