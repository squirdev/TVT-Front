import { useMediaQuery } from "react-responsive"
import { useTheme } from "../context/ThemeProvider"
import NFT2Img from "../assets/nft-2.png";
import NFT3Img from "../assets/nft-3.png";
import ReputationScore from "./common/ReputationScore";
import RegisterProduct from "./common/RetisterProduct";
import GetNFT from "./common/GetNFT";
import ConnectServices from "./ConnectServices";

export default function OurTechnology(props: any) {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1028px)' })
    const { theme } = useTheme()

    return (
        <div className="w-full flex flex-col items-center">
            {
                isTabletOrMobile ?
                    <img src={NFT3Img} alt="nft" className="" />
                    :
                    <img src={NFT2Img} alt="nft" className="" />
            }
            {
                theme == "dark" ?
                    <h1 className=" flex flex-row items-start text-[30px] md:text-[50px] text-center mt-[16px] font-[400] bg-gradient-to-b from-white  to-[#B3ACBE]   text-transparent bg-clip-text">
                        Use our Technology
                    </h1>
                    :
                    <h1 className=" flex flex-row items-start text-[30px] md:text-[50px] text-center mt-[16px] font-[400] bg-gradient-to-b from-[#393939]  to-[#B3ACBE]   text-transparent bg-clip-text">
                        Use our Technology
                    </h1>
            }
            {
                theme == "dark" ?
                    <h1 className=" flex flex-row items-start text-[12px] md:text-[16px] text-center mt-[16px] font-[400] bg-gradient-to-b from-white  to-[#B3ACBE]   text-transparent bg-clip-text">
                        Stand out from your competitors
                    </h1>
                    :
                    <h1 className=" flex flex-row items-start text-[12px] md:text-[16px] text-center mt-[16px] font-[400] bg-gradient-to-b from-[#393939]  to-[#B3ACBE]   text-transparent bg-clip-text">
                        Stand out from your competitors
                    </h1>
            }
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-[80px] gap-6">
                <ReputationScore />
                <RegisterProduct />
                <GetNFT />
            </div>

            <ConnectServices />
        </div>
    )
}