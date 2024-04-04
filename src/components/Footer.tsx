import { useMediaQuery } from "react-responsive"
import TelegramImg from "../assets/social/telegram.svg";
import DiscordImg from "../assets/social/discord.svg";
import TwitterImg from "../assets/social/twitter.svg";
import LinkedinImg from "../assets/social/linkedin.svg";
import DownFooterImg from "../assets/down_footer.svg"

import { Link } from "react-router-dom";


export default function Footer(props: any) {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1028px)' })


    return (
        <div className="relative bg-footer w-full h-[400px] md:h-[513px] md:px-[360px] py-[50px]">

            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-7">
                    <img src={TelegramImg} alt="telegram" />
                    <img src={DiscordImg} alt="telegram" />
                    <img src={TwitterImg} alt="telegram" />
                    <img src={LinkedinImg} alt="telegram" />
                </div>


                <div className="flex flex-col md:flex-row items-start md:gap-[130px]">
                    <div className="flex flex-col items-start mt-[64px] md:mt-0">
                        <div className="w-[120px] flex flex-row items-center justify-between gap-[20px]">
                            <a className="text-[18px] font-[500] text-white">
                                Company
                            </a>
                            {isTabletOrMobile &&
                                <img src={DownFooterImg} alt="downfooter" />
                            }
                        </div>
                        {
                            isTabletOrMobile ? <></> :
                                <>
                                    <a className="text-[16px] font-[500] text-white mt-[24px]">
                                        About Us
                                    </a>
                                    <a className="text-[16px] font-[500] text-white mt-[24px]">
                                        Contact Us
                                    </a>
                                    <a className="text-[16px] font-[500] text-white mt-[24px]">
                                        FAQs
                                    </a>
                                </>
                        }
                    </div>

                    <div className="flex flex-col items-start mt-[20px] md:mt-0">
                        <div className="w-[120px] flex flex-row items-center justify-between gap-[20px]">
                            <a className="text-[18px] font-[500] text-white">
                                Resources
                            </a>
                            {isTabletOrMobile &&
                                <img src={DownFooterImg} alt="downfooter" />
                            }
                        </div>
                        {
                            isTabletOrMobile ? <></> :
                                <>
                                    <a className="text-[16px] font-[500] text-white mt-[24px]">
                                        Roadmap
                                    </a>
                                    <a className="text-[16px] font-[500] text-white mt-[24px]">
                                        Whitepaper
                                    </a>
                                </>}
                    </div>
                </div>
            </div>
            <div className="w-full md:w-[1124px] md:absolute bottom-[50px] flex flex-col md:flex-row items-center justify-between ">
                <div className="flex flex-col md:flex-row items-center">
                    <p className=" text-[#C7C3D2] text-[14px] font-[400] mt-[58px] md:mt-0 text-center">
                        Email Address: &nbsp;
                        <span className="text-white text-[14px] font-[600]">
                            contact@trackverifytrust.com
                        </span> &nbsp; &nbsp; &nbsp;
                    </p>
                    <p className="  text-[#C7C3D2] text-[14px] font-[400] text-center mt-[13px] md:mt-0">
                        Privacy Policy
                    </p>
                </div>

                <p className="text-[#C7C3D2] text-[14px] font-[400] text-center mt-[13px] md:mt-0">
                    © Copyright trackverifytrust.com, inc
                </p>
            </div>



        </div>
    )
}