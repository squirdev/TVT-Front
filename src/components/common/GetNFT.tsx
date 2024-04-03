import { useEffect, useState } from "react"
import SolanaImg from "../../assets/solana_icon.svg"
import { motion } from "framer-motion"


export default function GetNFT(props: any) {

    return (
        <div className="flex flex-col items-center p-6 w-[360px] h-[300px] rounded-[20px] bg-black border-[1px] border-white border-opacity-10">
            <div className="text-[18px] font-[400] text-[#C7C3D2]">
                Get Your <span className="bg-gradient-to-r from from-[#BFE8FF] via-[#85FFFF] to-[#4E95FF] text-transparent bg-clip-text">
                    NFT
                </span>
            </div>
            <div className="text-[#7B7C8E] text-[11px] font-[400] uppercase mt-[10px]">
                Authenticity NFT created
            </div>
            <motion.div whileHover={{
                y: -20,
                transition: { duration: 1 },
            }} className="w-[242px] min-h-[190px] overflow-hidden border-[1px] border-solid dark:border-white dark:border-opacity-10 rounded-[8px] mt-6 p-[8px_17px]">

                <div className="flex flex-row items-center gap-2 text-white text-[12px] font-[400]">
                    Certificate
                    <span>
                        <img src={SolanaImg} alt="solana" />
                    </span>
                </div>
                <div className="w-full h-[13px] rounded-[4px]  border-[1px] border-solid dark:border-white dark:border-opacity-10 mt-1">
                </div>
                <div className="w-full h-[13px] rounded-[4px]  border-[1px] border-solid dark:border-white dark:border-opacity-10 mt-1">
                </div>
                <div className="w-full h-[13px] rounded-[4px]  border-[1px] border-solid dark:border-white dark:border-opacity-10 mt-1">
                </div>
                <div className="w-full h-[13px] rounded-[4px]  border-[1px] border-solid dark:border-white dark:border-opacity-10 mt-1">
                </div>
                <div className="w-full h-[13px] rounded-[4px]  border-[1px] border-solid dark:border-white dark:border-opacity-10 mt-1">
                </div>
                <div className="w-full h-[13px] rounded-[4px]  border-[1px] border-solid dark:border-white dark:border-opacity-10 mt-1">
                </div>
                <div className="w-full h-[13px] rounded-[4px]  border-[1px] border-solid dark:border-white dark:border-opacity-10 mt-1">
                </div>
                <div className="w-full h-[13px] rounded-[4px]  border-[1px] border-solid dark:border-white dark:border-opacity-10 mt-1">
                </div>
                <div className="w-full h-[13px] rounded-[4px]  border-[1px] border-solid dark:border-white dark:border-opacity-10 mt-1">
                </div>
                <div className="w-full h-[13px] rounded-[4px]  border-[1px] border-solid dark:border-white dark:border-opacity-10 mt-1">
                </div><div className="w-full h-[13px] rounded-[4px]  border-[1px] border-solid dark:border-white dark:border-opacity-10 mt-1">
                </div>

            </motion.div>
        </div>
    )
}