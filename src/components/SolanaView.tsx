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
        <div className="w-full flex flex-col items-center mt-[150px] px-[20px]">
            {
                theme == "dark" ?
                    <h1 className=" flex flex-row items-start text-[30px] md:text-[50px] text-center mt-[16px] font-[400] bg-gradient-to-b from-white  to-[#B3ACBE]   text-transparent bg-clip-text">
                        Your certified NFT is deployed on Solana
                    </h1>
                    :
                    <h1 className=" flex flex-row items-start text-[30px] md:text-[50px] text-center mt-[16px] font-[400] bg-gradient-to-b from-[#393939]  to-[#B3ACBE]   text-transparent bg-clip-text">
                        Your certified NFT is deployed on Solana
                    </h1>
            }
            {
                theme == "dark" ?
                    <h1 className=" flex flex-row items-start text-[12px] md:text-[16px] text-center mt-[16px] font-[400] bg-gradient-to-b from-white  to-[#B3ACBE]   text-transparent bg-clip-text">
                        Check the certification of each actor in real time.
                    </h1>
                    :
                    <h1 className=" flex flex-row items-start text-[12px] md:text-[16px] text-center mt-[16px] font-[400] bg-gradient-to-b from-[#393939]  to-[#B3ACBE]   text-transparent bg-clip-text">
                        Check the certification of each actor in real time.
                    </h1>
            }
            <div className="mt-[20px]">
                <HoverBorderGradient
                    containerClassName="rounded-[12px]"
                    as="button"
                    className="dark:bg-black bg-white rounded-[12px] text-black dark:text-white flex items-center space-x-2  flex-row  gap-4"
                >
                    See Explorer Now
                    <img src={RightImg} alt="right" />
                </HoverBorderGradient>
            </div>
            <div className="w-full md:w-[1124px] flex flex-col md:flex-row items-center justify-between gap-6 mt-[56px]">
                <img src={SolanaViewImg} alt="solanaview" className="w-full xl:w-[744px] xl:h-full h-[193px]" />
                <div className=" flex flex-col items-center w-full md:w-[360px] h-[300px] border-[1px] border-white border-opacity-10 rounded-[20px] p-[24px]">
                    <div className="w-full flex flex-row items-center justify-between">
                        <div className="flex flex-col items-start">
                            <p className="text-white font-[400] text-[18px]">
                                Scan ID:
                            </p>
                            <div className="w-[154px] text-[14px] break-words text-[#C7C3D2] mt-2">
                                5487q2342387g23487374t14234e25475
                            </div>
                        </div>
                        <img src={TVTMarkImg} alt="tvt-mark" />
                    </div>
                    <div className="w-full flex flex-col items-center h-[143px] border-[1px] p-4 border-white border-opacity-10 rounded-[20px] mt-[20px] bg-gradient-to-b from-[#0D0D0D] to-black">
                        <img src={SolscanImg} alt="solviewimg" className="w-[69px] h-[11px]" />
                        <p className="text-[#D2D2D2] text-[14px] font-[500] mt-[17px]">
                            NFT
                        </p>
                        <p className="text-white text-[20px] font-[500]">
                            $0.0001 &gt;Txid
                        </p>
                        <a className="bg-gradient-to-r underline from-[#BFE8FF] via-[#85FFFF] to-[#4E95FF] text-transparent bg-clip-text border-b-[1px]" >
                            See on Solscan
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}