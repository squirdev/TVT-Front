import { useMediaQuery } from "react-responsive"
import { useTheme } from "../context/ThemeProvider"
import RightImg from "../assets/right.svg"
import { HoverBorderGradient } from "./common/HoverBorderGradient";
import SolanaViewImg from "../assets/solana_view.png";
import TVTMarkImg from "../assets/tvt-mark.png";
import SolscanImg from "../assets/solscan.svg"

export default function SolanaView(props: any) {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1028px)' })
    const { theme } = useTheme()

    return (
        <div className="w-full flex flex-col items-center mt-[150px]">
            {
                theme == "dark" ?
                    <h1 className=" flex flex-row items-start text-[50px] text-center mt-[16px] font-[400] bg-gradient-to-b from-white  to-[#B3ACBE]   text-transparent bg-clip-text">
                        Your certified NFT is deployed on Solana
                    </h1>
                    :
                    <h1 className=" flex flex-row items-start text-[50px] text-center mt-[16px] font-[400] bg-gradient-to-b from-[#393939]  to-[#B3ACBE]   text-transparent bg-clip-text">
                        Your certified NFT is deployed on Solana
                    </h1>
            }
            {
                theme == "dark" ?
                    <h1 className=" flex flex-row items-start text-[16px] text-center mt-[16px] font-[400] bg-gradient-to-b from-white  to-[#B3ACBE]   text-transparent bg-clip-text">
                        Check the certification of each actor in real time.
                    </h1>
                    :
                    <h1 className=" flex flex-row items-start text-[16px] text-center mt-[16px] font-[400] bg-gradient-to-b from-[#393939]  to-[#B3ACBE]   text-transparent bg-clip-text">
                        Check the certification of each actor in real time.
                    </h1>
            }
            <div className="mt-[20px]">
                <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2  flex-row  gap-4"
                >
                    See Explorer Now
                    <img src={RightImg} alt="right" />
                </HoverBorderGradient>
            </div>
            <div className="flex flex-row items-center justify-between gap-6">
                <img src={SolanaViewImg} alt="solanaview" />
                <div className="w-[360px] h-[300px] border-[1px] border-white border-opacity-10 rounded-[20px] p-[24px]">
                    <p className="text-white font-[400] text-[18px]">
                        Scan ID:
                    </p>
                    <div className="flex flex-row items-center justify-between">
                        <div className="w-[154px] text-[14px] break-words text-[#C7C3D2] mt-2">
                            5487q2342387g23487374t14234e25475
                        </div>
                        <img src={TVTMarkImg} alt="tvt-mark" />
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}