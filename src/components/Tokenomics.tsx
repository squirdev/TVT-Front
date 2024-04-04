import { useMediaQuery } from "react-responsive"
import { useTheme } from "../context/ThemeProvider"
import TVTCoinImg from "../assets/tvt-coin.png";
import ClipboardImg from "../assets/clipboard.svg";
import { HoverBorderGradient } from "./common/HoverBorderGradient";

export default function Tokenomics(props: any) {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1028px)' })
    const { theme } = useTheme()

    return (
        <div className="w-full flex flex-col items-center mt-[150px] px-[20px]">
            {
                theme == "dark" ?
                    <h1 className=" flex flex-row items-start text-[30px] md:text-[50px] text-center mt-[16px] font-[400] bg-gradient-to-b from-white  to-[#B3ACBE]   text-transparent bg-clip-text">
                        Tokenomics
                    </h1>
                    :
                    <h1 className=" flex flex-row items-start text-[30px] md:text-[50px] text-center mt-[16px] font-[400] bg-gradient-to-b from-[#393939]  to-[#B3ACBE]   text-transparent bg-clip-text">
                        Tokenomics
                    </h1>
            }
            {
                theme == "dark" ?
                    <h1 className=" flex flex-row items-start text-[12px] md:text-[16px] text-center mt-[16px] font-[400] bg-gradient-to-b from-white  to-[#B3ACBE]   text-transparent bg-clip-text">
                        Discover our TVT Token on Solana
                    </h1>
                    :
                    <h1 className=" flex flex-row items-start text-[12px] md:text-[16px] text-center mt-[16px] font-[400] bg-gradient-to-b from-[#393939]  to-[#B3ACBE]   text-transparent bg-clip-text">
                        Discover our TVT Token on Solana
                    </h1>
            }
            <div className="w-full md:w-[1024px] flex flex-col md:flex-row items-center justify-between">
                <div className="w-full md:w-[308px] flex flex-col items-start">
                    <p className="text-[30px] bg-gradient-to-b text-start from-white  to-[#B3ACBE]   text-transparent bg-clip-text">
                        TVT
                    </p>
                    <p className=" text-[12px] md:text-[17px] bg-gradient-to-b text-start from-white  to-[#B3ACBE]   text-transparent bg-clip-text">
                        TVT is our SPL Token on Solana with 0% Fees. There will be a percentage of the company's profits buyback each month on it
                    </p>
                    <div className="p-[12px_16px] w-full md:w-[510px] h-[328px] mt-[37px] rounded-[12px] border-[1px] border-white border-opacity-10">
                        <p className="text-white font-[500] text-[14px]">
                            TVT
                        </p>
                        <div className="flex flex-row items-center justify-between mt-[34px]">
                            <p className="text-white font-[500] text-[14px]">
                                Contract address:
                            </p>
                            <p className="text-[#3275F8] max-w-[180px] font-[400] text-[12px] break-words">
                                2TUXo6TGPWjutmCdjzNt8DdWCMSNmyMgxpMkCFseXW9e
                            </p>
                            <img src={ClipboardImg} alt="clipboard" />
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="flex flex-col items-start mt-[26px]">
                                <p className="text-[#85898F] text-[11px] font-[400]">
                                    Token name:
                                </p>
                                <p className="text-white font-[500] text-[14px]">
                                    TVT
                                </p>
                            </div>
                            <div className="flex flex-col items-start mt-[26px]">
                                <p className="text-[#85898F] text-[11px] font-[400]">
                                    Symbol :
                                </p>
                                <p className="text-white font-[500] text-[14px]">
                                    TVT
                                </p>
                            </div>
                            <div className="flex flex-col items-start mt-[26px]">
                                <p className="text-[#85898F] text-[11px] font-[400]">
                                    Total Supply :
                                </p>
                                <p className="text-white font-[500] text-[14px]">
                                    100.000.000
                                </p>
                            </div>
                            <div className="flex flex-col items-start mt-[26px]">
                                <p className="text-[#85898F] text-[11px] font-[400]">
                                    Available on :
                                </p>
                                <p className="text-white font-[500] text-[14px]">
                                    Solana
                                </p>
                            </div>

                        </div>
                        <div className="flex flex-row items-center justify-center gap-[30px] mt-[28px]">
                            <HoverBorderGradient
                                containerClassName="rounded-[12px]"
                                as="button"
                                className="w-[140px] md:w-[180px] flex flex-col items-center rounded-[12px]  justify-center dark:bg-black bg-white text-black dark:text-white  space-x-2  gap-4"
                            >
                                Whitepaper
                            </HoverBorderGradient>
                            <HoverBorderGradient
                                containerClassName="rounded-[12px]"
                                as="button"
                                className="w-[140px] md:w-[180px] flex flex-col items-center justify-center rounded-[12px] dark:bg-black bg-white text-black dark:text-white  space-x-2 gap-4"
                            >
                                Audit
                            </HoverBorderGradient>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={TVTCoinImg} alt="tvt-coin" />
                </div>
            </div>
        </div>
    )
}