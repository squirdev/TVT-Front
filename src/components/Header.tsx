import { useMediaQuery } from "react-responsive"
import LogoImg from "../assets/logo.svg"
import HamburgerImg from "../assets/hamburger.svg";
import { HoverBorderGradient } from "./common/HoverBorderGradient"


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
        <div className=" w-full flex flex-row items-center z-50 justify-between md:justify-evenly fixed bg-black top-0 py-[10px] px-[20px]">
            <img src={LogoImg} alt="logo" />
            {
                isTabletOrMobile ?
                    <button className="flex items-center justify-center bg-transparent w-[38px] h-[38px] p-0">
                        <img src={HamburgerImg} alt="hamburger" />
                    </button>
                    :
                    <>
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
                        {/* <Switch /> */}
                        <HoverBorderGradient
                            containerClassName="rounded-full"
                            as="button"
                            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2  flex-row  gap-4"
                        >
                            Presale
                        </HoverBorderGradient>
                    </>
            }
        </div>
    )
}