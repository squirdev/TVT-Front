import { useMediaQuery } from "react-responsive"
import { useEffect, useState } from "react"
import { useTheme } from "../../context/ThemeProvider"
import DarkImg from "../../assets/switch_dark.svg"
import LightImg from "../../assets/switch_light.svg"


export default function Switch(props: any) {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1028px)' })
    const { theme, setTheme } = useTheme()

    const changeTheme = () => {
        if (theme == "light")
            setTheme("dark")
        else
            setTheme("light")
    }


    return (
        <div className="flex items-center justify-center w-[87px] h-[42px] rounded-full bg-light1 dark:bg-dark1 p-2" onClick={changeTheme}>
            {
                theme == "dark" ?
                    <img src={LightImg} />
                    :
                    <img src={DarkImg} />
            }
        </div>
    )
}