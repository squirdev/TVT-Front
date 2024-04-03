import { useEffect, useState } from "react"
import { Button } from "./Moving-Border"

export default function NormalBtn(props: any) {
    const { children, className } = props;

    return (
        <div>
            <Button
                className="bg-[#124968] dark:bg-black text-white  border-[#ffffff0d] border-[2px] rounded-[12px] h-[40px] text-[16px] font-[500]"
                containerClassName={className}>
                {children}
            </Button>
        </div>
    )
}