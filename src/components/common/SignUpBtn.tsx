import { useEffect, useState } from "react"
import { Button } from "./Moving-Border"


export default function SignUpBtn(props: any) {

    return (
        <div>
            <Button
                className="bg-black text-white  border-[#ffffff0d] border-[2px] rounded-full h-[40px] text-[16px] font-[500]">
                Sign Up
            </Button>
        </div>
    )
}