import { useEffect, useState } from "react"
import { Button } from "./Moving-Border"
import ClothLightImg from "../../assets/cloth_light.svg";
import MeatLightImg from "../../assets/meat_light.svg";
import CosmeticsLightImg from "../../assets/cosmetics_light.svg";

import ClothDarkImg from "../../assets/cloth_dark.svg";
import MeatDarkImg from "../../assets/meat_dark.svg";
import CosmeticsDarkImg from "../../assets/cosmetics_dark.svg";

import FRImg from "../../assets/flags/FR.svg";
import UKImg from "../../assets/flags/UK.svg";
import USImg from "../../assets/flags/US.svg";
import CAImg from "../../assets/flags/CA.svg";
import SPImg from "../../assets/flags/SP.svg";
import UAImg from "../../assets/flags/UA.svg";
import SelctedImg from "../../assets/selected.svg";
import UnSelctedImg from "../../assets/unselected.svg";
import { useTheme } from "../../context/ThemeProvider";
import { motion } from "framer-motion";


export default function ProductInfo(props: any) {
    const FRMark = [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0];
    const USMark = [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0];
    const UKMark = [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const UAMark = [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
    const CAMark = [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0];
    const SPMark = [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
    const { theme } = useTheme()

    return (
        <div className="w-full md:w-[552px] h-full md:h-[620px] bg-[#f0eff0]  border border-solid border-[#d6d5da] dark:bg-black dark:border-white   dark:border-opacity-10 rounded-[20px] overflow-hidden p-2 md:p-[16px]">
            <div className=" flex flex-row items-center w-full h-[26px] rounded-t-[12px]  border border-solid border-[#d6d5da] k dark:border-white   dark:border-opacity-10 p-2 gap-1">
                <div className="w-[8px] h-[8px] rounded-full bg-[#FF4848]">
                </div>
                <div className="w-[8px] h-[8px] rounded-full bg-[#FFC01E]">
                </div>
                <div className="w-[8px] h-[8px] rounded-full bg-[#50E907]">
                </div>
            </div>
            <div className="z-20 relative bg-black flex flex-row justify-center items-center w-full h-[58px]  border border-t-[0px] border-solid border-[#d6d5da] k dark:border-white   dark:border-opacity-10 p-2 gap-1 ">
                <p className="text-[18px] font-[400]  bg-gradient-to-b from-[#393939]  to-[#A2A3AA]  text-transparent bg-clip-text text-center">
                    Track
                    <span className="bg-gradient-to-r from from-[#BFE8FF] via-[#85FFFF] to-[#4E95FF] text-transparent bg-clip-text">
                        &nbsp; Your Product
                    </span>
                </p>
            </div>
            <div className=" flex z-10 flex-col items-start w-full md:h-[509px] rounded-b-[12px] border border-t-[0px] border-solid border-[#d6d5da] k dark:border-white   dark:border-opacity-10 px-[16px] pt-1 gap-1">
                <motion.div whileHover={{
                    y: -20,
                    transition: { duration: 1 },
                }} className="z-10 relative w-full" >
                    <p className="text-[#393939] dark:text-white text-[16px] font-[400] z-10">
                        Product Number or Name
                    </p>
                    <input className="w-full md:w-[400px] h-[40px] border border-solid border-[#d6d5da] dark:border-[#DFE1E71A] dark:bg-[#F0E9FF05] dark:text-[#948FA0] rounded-[10px] p-[10px] outline-none mt-[12px]" placeholder="Product Number or Name" />
                    <p className="text-[#393939] dark:text-white text-[16px] font-[400] mt-[28px]">
                        Type of Choice
                    </p>
                    <div className="flex flex-row items-center justify-between gap-2 mt-2">
                        <div className="flex flex-row items-center bg-[#F6F5F6] dark:border-[#DFE1E71A] dark:border-[1px] dark:bg-[#F0E9FF05]  w-[97px] md:w-[134px] h-[40px] rounded-[8px] p-1 md:p-[8px]">
                            {
                                theme == "dark" ?
                                    <img src={ClothDarkImg} alt="cloth" className="w-[24px] h-[24px]" />
                                    :
                                    <img src={ClothLightImg} alt="cloth" className="w-[24px] h-[24px]" />
                            }

                            <p className="text-[#393939] dark:text-white text-[12px] ml-2 font-[500]">
                                Clothing
                            </p>
                        </div>
                        <div className="flex flex-row items-center bg-[#F6F5F6] dark:border-[#DFE1E71A] dark:border-[1px] dark:bg-[#F0E9FF05] w-[97px] md:w-[134px] h-[40px] rounded-[8px] p-1 md:p-[8px]">
                            {
                                theme == "dark" ?
                                    <img src={MeatDarkImg} alt="cloth" className="w-[24px] h-[24px]" />
                                    :
                                    <img src={MeatLightImg} alt="cloth" className="w-[24px] h-[24px]" />
                            }
                            <p className="text-[#393939] dark:text-white text-[12px] ml-2 font-[500]">
                                Meet
                            </p>
                        </div>
                        <div className="flex flex-row items-center bg-[#F6F5F6] dark:border-[#DFE1E71A] dark:border-[1px] dark:bg-[#F0E9FF05] w-[97px] md:w-[134px] h-[40px] rounded-[8px] p-1 md:p-[8px]">
                            <div className="flex items-center justify-center w-[24px] h-[24px] bg-white rounded-full">
                                {
                                    theme == "dark" ?
                                        <img src={CosmeticsDarkImg} alt="cloth" className="w-[24px] h-[24px]" />
                                        :
                                        <img src={CosmeticsLightImg} alt="cloth" className="w-[24px] h-[24px]" />
                                }
                            </div>
                            <p className="text-[#393939] dark:text-white text-[12px] ml-2 font-[500]">
                                Cosmetic
                            </p>
                        </div>
                    </div>
                    <p className="text-[#393939] dark:text-white text-[16px] font-[400] mt-[28px]">
                        Choose Location
                    </p>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 mt-[10px]">
                        <div className="border-[1px] p-[12px_16px] rounded-[8px] border-[#E5E3E7] bg-[#F4F4F4] dark:border-[#DFE1E71A] dark:bg-[#431D800A] w-full md:w-[230px] h-[80px]">
                            <div className="flex flex-row items-center ">
                                <img src={FRImg} alt="France" />
                                <p className="text-[12px] text-[#393939] dark:text-white font-[500] ml-2">
                                    France
                                </p>
                            </div>
                            <p className="text-[#9B9B9B] text-[10px] font-[400] mt-[1px]">
                                9 Mark Detected
                            </p>
                            <div className="w-full flex flex-row items-center justify-between mt-2">
                                {
                                    FRMark.map((item) => {
                                        if (item == 1)
                                            return <img src={SelctedImg} alt="selected" />
                                        else
                                            return <img src={UnSelctedImg} alt="unselected" />
                                    })
                                }
                            </div>
                        </div>
                        <div className="border-[1px] p-[12px_16px] rounded-[8px] border-[#E5E3E7] bg-[#F4F4F4] dark:border-[#DFE1E71A] dark:bg-[#431D800A]  w-full md:w-[230px] h-[80px]">
                            <div className="flex flex-row items-center ">
                                <img src={UKImg} alt="France" />
                                <p className="text-[12px] text-[#393939] dark:text-white font-[500] ml-2">
                                    United Kingdom
                                </p>
                            </div>
                            <p className="text-[#9B9B9B] text-[10px] font-[400] mt-[1px]">
                                2 Mark Detected
                            </p>
                            <div className="w-full flex flex-row items-center justify-between mt-2">
                                {
                                    UKMark.map((item) => {
                                        if (item == 1)
                                            return <img src={SelctedImg} alt="selected" />
                                        else
                                            return <img src={UnSelctedImg} alt="unselected" />
                                    })
                                }
                            </div>
                        </div>
                        <div className="border-[1px] p-[12px_16px] rounded-[8px] border-[#E5E3E7] bg-[#F4F4F4] dark:border-[#DFE1E71A] dark:bg-[#431D800A]  w-full md:w-[230px] h-[80px]">
                            <div className="flex flex-row items-center ">
                                <img src={USImg} alt="France" />
                                <p className="text-[12px] text-[#393939] dark:text-white font-[500] ml-2">
                                    United States
                                </p>
                            </div>
                            <p className="text-[#9B9B9B] text-[10px] font-[400] mt-[1px]">
                                4 Mark Detected
                            </p>
                            <div className="w-full flex flex-row items-center justify-between mt-2">
                                {
                                    USMark.map((item) => {
                                        if (item == 1)
                                            return <img src={SelctedImg} alt="selected" />
                                        else
                                            return <img src={UnSelctedImg} alt="unselected" />
                                    })
                                }
                            </div>
                        </div>
                        <div className="border-[1px] p-[12px_16px] rounded-[8px] border-[#E5E3E7] bg-[#F4F4F4] dark:border-[#DFE1E71A] dark:bg-[#431D800A]  w-full md:w-[230px] h-[80px]">
                            <div className="flex flex-row items-center ">
                                <img src={UAImg} alt="France" />
                                <p className="text-[12px] text-[#393939] dark:text-white font-[500] ml-2">
                                    United Arab Emirates
                                </p>
                            </div>
                            <p className="text-[#9B9B9B] text-[10px] font-[400] mt-[1px]">
                                6 Mark Detected
                            </p>
                            <div className="w-full flex flex-row items-center justify-between mt-2">
                                {
                                    UAMark.map((item) => {
                                        if (item == 1)
                                            return <img src={SelctedImg} alt="selected" />
                                        else
                                            return <img src={UnSelctedImg} alt="unselected" />
                                    })
                                }
                            </div>
                        </div>
                        <div className="border-[1px] p-[12px_16px] rounded-[8px] border-[#E5E3E7] bg-[#F4F4F4] dark:border-[#DFE1E71A] dark:bg-[#431D800A]  w-full md:w-[230px] h-[80px]">
                            <div className="flex flex-row items-center ">
                                <img src={CAImg} alt="France" />
                                <p className="text-[12px] text-[#393939] dark:text-white font-[500] ml-2">
                                    Canada
                                </p>
                            </div>
                            <p className="text-[#9B9B9B] text-[10px] font-[400] mt-[1px]">
                                4 Mark Detected
                            </p>
                            <div className="w-full flex flex-row items-center justify-between mt-2">
                                {
                                    CAMark.map((item) => {
                                        if (item == 1)
                                            return <img src={SelctedImg} alt="selected" />
                                        else
                                            return <img src={UnSelctedImg} alt="unselected" />
                                    })
                                }
                            </div>
                        </div>
                        <div className="border-[1px] p-[12px_16px] rounded-[8px] border-[#E5E3E7] bg-[#F4F4F4] dark:border-[#DFE1E71A] dark:bg-[#431D800A]  w-full md:w-[230px] h-[80px]">
                            <div className="flex flex-row items-center ">
                                <img src={SPImg} alt="France" />
                                <p className="text-[12px] text-[#393939] dark:text-white font-[500] ml-2">
                                    Spain
                                </p>
                            </div>
                            <p className="text-[#9B9B9B] text-[10px] font-[400] mt-[1px]">
                                6 Mark Detected
                            </p>
                            <div className="w-full flex flex-row items-center justify-between mt-2">
                                {
                                    SPMark.map((item) => {
                                        if (item == 1)
                                            return <img src={SelctedImg} alt="selected" />
                                        else
                                            return <img src={UnSelctedImg} alt="unselected" />
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </div>
    )
}