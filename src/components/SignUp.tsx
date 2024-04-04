import { useMediaQuery } from "react-responsive"
import { useTheme } from "../context/ThemeProvider"
import NormalBtn from "./common/NormalBtn";
import RightImg from "../assets/right.svg"
import { HoverBorderGradient } from "./common/HoverBorderGradient";

export default function SignUp(props: any) {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1028px)' })
    const { theme } = useTheme()

    return (
        <div className="w-full flex flex-col items-center py-[50px] md:py-[160px] px-[20px]">
            <div className="flex flex-col items-center w-full md:w-[1125px] h-[194px] xl:h-[600px] bg-signup bg-cover rounded-[20px] border-[1px] border-white border-opacity-10 px-[20px]">
                <h1 className=" flex flex-row items-start text-[18px] xl:text-[56px] font-[400] bg-gradient-to-b from-white  to-[#B3ACBE] text-center  text-transparent bg-clip-text mt-[40px] xl:mt-[180px]">
                    Authenticate your product now!
                </h1>
                <p className="text-[#C7C3D2] text-center text-[10px] xl:text-[18px] font-[400] mt-[15px]">
                    Submit, verify and deploy your NFT that is certified by the TVT label
                </p>
                <button className="bg-white bg-opacity-10 h-[30px] md:h-[48px] text-[10px] md:text-[16px] text-white border-[1px] border-white border-opacity-10 mt-[23px] md:mt-[36px] flex flex-row items-center">
                    Sign Up Now
                    <img src={RightImg} alt="right" className="ml-2 w-[10px] h-[10px]" />
                </button>
                {/* <HoverBorderGradient
                    containerClassName="rounded-[12px] mt-[36px]"
                    as="button"
                    className="dark:bg-black text-[12px] md:text-[14px] bg-white rounded-[12px] text-black dark:text-white flex items-center space-x-2  flex-row  gap-4"
                >
                    Register Now
                    <img src={RightImg} alt="right" />
                </HoverBorderGradient> */}
            </div>
        </div>
    )
}