import { useMediaQuery } from "react-responsive"
import { useTheme } from "../context/ThemeProvider"
import NormalBtn from "./common/NormalBtn";
import RightImg from "../assets/right.svg"

export default function SignUp(props: any) {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1028px)' })
    const { theme } = useTheme()

    return (
        <div className="w-full flex flex-col items-center py-[160px]">
            <div className="flex flex-col items-center w-[1125px] h-[600px] bg-signup">
                <h1 className=" flex flex-row items-start text-[56px] font-[400] bg-gradient-to-b from-white  to-[#B3ACBE] text-center  text-transparent bg-clip-text mt-[180px]">
                    Authenticate your product now!
                </h1>
                <p className="text-[#C7C3D2] text-center text-[18px] font-[400] mt-[15px]">
                    Submit, verify and deploy your NFT that is certified by the TVT label
                </p>


            </div>

        </div>
    )
}