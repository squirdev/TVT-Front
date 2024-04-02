import { useMediaQuery } from "react-responsive"
import TelegramImg from "../assets/social/telegram.svg";
import DiscordImg from "../assets/social/discord.svg";
import TwitterImg from "../assets/social/twitter.svg";
import LinkedinImg from "../assets/social/linkedin.svg";
import { Link } from "react-router-dom";


export default function Footer(props: any) {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1028px)' })


    return (
        <div className="relative bg-footer w-full h-[513px] px-[360px] py-[50px]">

            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-7">
                    <img src={TelegramImg} alt="telegram" />
                    <img src={DiscordImg} alt="telegram" />
                    <img src={TwitterImg} alt="telegram" />
                    <img src={LinkedinImg} alt="telegram" />
                </div>


                <div className="flex flex-row items-start gap-[130px]">
                    <div className="flex flex-col items-start">
                        <a className="text-[18px] font-[500] text-white">
                            Company
                        </a>
                        <a className="text-[16px] font-[500] text-white mt-[24px]">
                            About Us
                        </a>
                        <a className="text-[16px] font-[500] text-white mt-[24px]">
                            Contact Us
                        </a>
                        <a className="text-[16px] font-[500] text-white mt-[24px]">
                            FAQs
                        </a>
                    </div>

                    <div className="flex flex-col items-start">
                        <a className="text-[18px] font-[500] text-white">
                            Resources
                        </a>
                        <a className="text-[16px] font-[500] text-white mt-[24px]">
                            Roadmap
                        </a>
                        <a className="text-[16px] font-[500] text-white mt-[24px]">
                            Whitepaper
                        </a>
                    </div>
                </div>
            </div>

            <p className="absolute bottom-[50px] text-[#C7C3D2] text-[14px] font-[400] ">
                Email Address: &nbsp;
                <span className="text-white text-[14px] font-[600]">
                    contact@trackverifytrust.com
                </span> &nbsp; &nbsp; &nbsp;
                Privacy Policy
            </p>

            <p className="absolute bottom-[50px] right-[360px] text-[#C7C3D2] text-[14px] font-[400] ">
                © Copyright trackverifytrust.com, inc
            </p>



        </div>
    )
}