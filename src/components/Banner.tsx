import { useMediaQuery } from "react-responsive"
import ChainImg from "../assets/chain.svg"
import NormalBtn from "./common/NormalBtn"
import RightImg from "../assets/right.svg"
import TVTImg from "../assets/TVT.svg"
import SolanaImg from "../assets/solana.svg"
import { useTheme } from "../context/ThemeProvider"
import ChainImgDark from "../assets/chain_dark.svg";
import ChainImgLight from "../assets/chain_light.svg";



export default function Banner(props: any) {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1028px)' })


    const { theme } = useTheme()

    return (
        <div className=" flex flex-col items-center w-full bg-white dark:bg-black ">
            <div className="flex flex-row items-center gap-4 p-3 rounded-full border-[1px] border-[#DFE1E71A] mt-[200px]">
                {
                    theme == "dark" ?
                        <img src={ChainImgDark} alt="dark" />
                        :
                        <img src={ChainImgLight} alt="light" />
                }

                <p className="text-[#393939] dark:text-[#C7C3D2] text-[16px]">
                    Unmatched tracking for consumers and businesses at scale
                </p>
            </div>
            {
                theme == "dark" ?
                    <h1 className=" flex flex-row items-start text-[56px] font-[400] bg-gradient-to-b from-white  to-[#B3ACBE]  text-transparent bg-clip-text mt-[10px]">
                        Track Verify Trust
                        <span className="text-[14px] ml-4 mt-4">
                            TM
                        </span>
                    </h1>
                    :
                    <h1 className=" flex flex-row items-start text-[56px] font-[400] bg-gradient-to-b from-[#393939] to-[#B3ACBE]  text-transparent bg-clip-text mt-[10px]">
                        Track Verify Trust
                        <span className="text-[14px] ml-4 mt-4">
                            TM
                        </span>
                    </h1>
            }
            <NormalBtn className="mt-5">
                <span className="flex flex-row items-center gap-4">
                    Register Now
                    <img src={RightImg} alt="right" />
                </span>
            </NormalBtn>
            <img src={TVTImg} alt="tvt" className="mt-[80px]" />
            <div className="flex flex-row items-center mt-[40px] gap-[60px]">
                <p className="font-Conthrax text-[23px] font-[600] bg-gradient-to-r from-[#124968] via-[#3AE7ED]  to-[#139BD7]  text-transparent bg-clip-text">
                    P O W E R E D  B Y
                </p>
                <img src={SolanaImg} />
            </div>
        </div>
    )
}