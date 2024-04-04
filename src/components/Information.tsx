import { useMediaQuery } from "react-responsive"
import { useTheme } from "../context/ThemeProvider"
import CheckImg from "../assets/check.svg"
import Particle from "./common/Particles";

export default function Information(props: any) {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1028px)' })
    const { theme } = useTheme()

    return (
        <div className="w-full flex flex-col items-center mt-[150px] px-[20px]">
            {
                theme == "dark" ?
                    <h1 className=" flex flex-row items-start text-[26px] md:text-[50px] text-center mt-[16px] font-[400] bg-gradient-to-b from-white  to-[#B3ACBE]   text-transparent bg-clip-text">
                        Reliable, secure and transparent
                    </h1>
                    :
                    <h1 className=" flex flex-row items-start text-[26px] md:text-[50px] text-center mt-[16px] font-[400] bg-gradient-to-b from-[#393939]  to-[#B3ACBE]   text-transparent bg-clip-text">
                        Reliable, secure and transparent
                    </h1>
            }
            {
                theme == "dark" ?
                    <h1 className=" flex flex-row items-start text-[12px] md:text-[16px] text-center mt-[16px] font-[400] bg-gradient-to-b from-white  to-[#B3ACBE]   text-transparent bg-clip-text">
                        Power of Blockchain
                    </h1>
                    :
                    <h1 className=" flex flex-row items-start text-[12px] md:text-[16px] text-center mt-[16px] font-[400] bg-gradient-to-b from-[#393939]  to-[#B3ACBE]   text-transparent bg-clip-text">
                        Power of Blockchain
                    </h1>
            }

            <div className="relative w-full md:w-[1000px]  h-[1020px] md:h-[500px] mt-[50px]">
                <Particle />
                <div className="absolute w-full top-[30px] md:top-[100px] gap-10 grid grid-cols-1 md:grid-cols-2 items-center">

                    <div className="w-full md:w-[510px]  md:h-[92px] z-10 bg-[#252525] border-[1px] border-white border-opacity-10 rounded-[12px] p-4 bg-opacity-40">
                        <div className="flex flex-row text-white text-[14px] font-[400] gap-2">
                            <img src={CheckImg} alt="checkimg" />
                            Increased Transparency
                        </div>
                        <div className="text-[#C7C3D2] text-[10px] font-[400] mt-2">
                            Every transaction is permanently recorded on the blockchain and accessible to all authorized participants. This enables full visibility into the movement of products across the supply chain.
                        </div>
                    </div>
                    <div className="w-full md:w-[510px]  md:h-[92px] z-10 bg-[#252525] border-[1px] border-white border-opacity-10 rounded-[12px] p-4 bg-opacity-40">
                        <div className="flex flex-row text-white text-[14px] font-[400] gap-2">
                            <img src={CheckImg} alt="checkimg" />
                            Traceability
                        </div>
                        <div className="text-[#C7C3D2] text-[10px] font-[400] mt-2">
                            Thanks to the immutable records on the blockchain, it's possible to quickly and accurately trace the origin of products, the various stages of their transformation, as well as the parties involved at each step.
                        </div>
                    </div>
                    <div className="w-full md:w-[510px]  md:h-[92px] z-10 bg-[#252525] border-[1px] border-white border-opacity-10 rounded-[12px] p-4 bg-opacity-40 ">
                        <div className="flex flex-row text-white text-[14px] font-[400] gap-2">
                            <img src={CheckImg} alt="checkimg" />
                            Data Security
                        </div>
                        <div className="text-[#C7C3D2] text-[10px] font-[400] mt-2">
                            Data stored on a blockchain is encrypted and secured using advanced cryptographic techniques.
                            This significantly reduces the risks of fraud, counterfeiting, or manipulation of information in the supply chain.
                        </div>
                    </div>

                    <div className="w-full md:w-[510px]  md:h-[92px] z-10 bg-[#252525] border-[1px] border-white border-opacity-10 rounded-[12px] p-4 bg-opacity-40">
                        <div className="flex flex-row text-white text-[14px] font-[400] gap-2">
                            <img src={CheckImg} alt="checkimg" />
                            Cost and Time Savings
                        </div>
                        <div className="text-[#C7C3D2] text-[10px] font-[400] mt-2">
                            By eliminating paper-based processes and intermediaries, blockchain can streamline and expedite supply chain verification, leading to cost savings and reduced time delays
                        </div>
                    </div>
                    <div className="w-full md:w-[510px]  md:h-[92px] z-10 bg-[#252525] border-[1px] border-white border-opacity-10 rounded-[12px] p-4 bg-opacity-40 mt-4">
                        <div className="flex flex-row text-white text-[14px] font-[400] gap-2">
                            <img src={CheckImg} alt="checkimg" />
                            Enhanced Consumer Trust
                        </div>
                        <div className="text-[#C7C3D2] text-[10px] font-[400] mt-2">
                            By providing transparent and verifiable traceability, blockchain enhances consumer trust in the quality, authenticity, and sustainability of the products they purchase
                        </div>
                    </div>
                    <div className="w-full md:w-[510px]  md:h-[92px] z-10 bg-[#252525] border-[1px] border-white border-opacity-10 rounded-[12px] p-4 bg-opacity-40 mt-4">
                        <div className="flex flex-row text-white text-[14px] font-[400] gap-2">
                            <img src={CheckImg} alt="checkimg" />
                            Regulatory Compliance
                        </div>
                        <div className="text-[#C7C3D2] text-[10px] font-[400] mt-2">
                            For industries subject to strict regulations regarding product traceability (such as food, pharmaceuticals, etc.), using blockchain can simplify compliance by providing verifiable evidence of compliance at any given time
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}