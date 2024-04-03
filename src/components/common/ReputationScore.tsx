import { useEffect, useState } from "react"
import ScoreImg from "../../assets/score.svg"
import { useTheme } from "../../context/ThemeProvider"


export default function ReputationScore(props: any) {
    const { theme } = useTheme();

    return (
        <div className="w-[360px] h-[300px] flex flex-col items-center rounded-[20px] bg-black border-[1px] border-white border-opacity-10 p-6">
            <div className="text-[18px] font-[400] text-[#C7C3D2]">
                Get Your <span className="bg-gradient-to-r from from-[#BFE8FF] via-[#85FFFF] to-[#4E95FF] text-transparent bg-clip-text">
                    Reputation Score
                </span>
            </div>
            <div className="relative flex flex-col items-center">
                <img src={ScoreImg} alt="score" className="mt-[40px]" />
                <p className="absolute top-[86px] text-[#C7C3D2] text-[18px]">
                    Percentage
                </p>
                {
                    theme == "dark" ?
                        <h1 className="absolute top-[90px] flex flex-row items-start text-[50px] text-center mt-[16px] font-[400] bg-gradient-to-b from-white  to-[#B3ACBE]   text-transparent bg-clip-text">
                            %99
                        </h1>
                        :
                        <h1 className=" absolute top-[90px] flex flex-row items-start text-[50px] text-center mt-[16px] font-[400] bg-gradient-to-b from-[#393939]  to-[#B3ACBE]   text-transparent bg-clip-text">
                            %99
                        </h1>
                }
            </div>
            <button className="rounded-full bg-[#3275F8] h-[33px] w-[76px] flex items-center justify-center text-white mt-[10px] ">
                HIGH
            </button>
        </div>
    )
}