import { useEffect, useState } from "react"
import { Button } from "./Moving-Border"


export default function RegisterProduct(props: any) {

    return (
        <div className="flex flex-col items-center w-[360px] h-[300px] rounded-[20px] bg-black border-[1px] border-white border-opacity-10 p-6">
            <div className="text-[18px] font-[400] text-[#C7C3D2]">
                Get Your <span className="bg-gradient-to-r from from-[#BFE8FF] via-[#85FFFF] to-[#4E95FF] text-transparent bg-clip-text">
                    Reputation Score
                </span>
            </div>
            <div className="text-[#C7C3D2] text-[18px] font-[400] mt-[40px]">
                Register your information, we check the process if everything is compliant we validate the certification and issue an NFT of your product on the blockchain
            </div>
        </div>
    )
}