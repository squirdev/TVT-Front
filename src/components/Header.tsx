import { useMediaQuery } from "react-responsive"
import LogoImg from "../assets/logo.svg"
import Switch from "./common/Switch"
import SignUpBtn from "./common/SignUpBtn"


export default function Header(props: any) {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1028px)' })

    const menuList = [
        {
            name: "Products",
            href: "products"
        },
        {
            name: "Resources",
            href: "resources"
        },
        {
            name: "Company",
            href: "company"
        },
        {
            name: "Whitepaper",
            href: "whitepaper"
        }
    ]

    return (
        <div className=" w-full flex flex-row items-center z-50 justify-evenly fixed bg-black top-0 py-[10px]">
            <img src={LogoImg} alt="logo" />

            <ul className="flex flex-row items-center gap-10 ">
                {
                    menuList.map((item, index) => {
                        return (
                            <li key={index} className="flex flex-col justify-center">
                                <a href={item.href} className="text-white hover:text-white text-[14px] font-[500] font-">
                                    {item.name}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
            <Switch />
            <SignUpBtn />
        </div>
    )
}