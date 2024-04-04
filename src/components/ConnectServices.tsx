import { useMediaQuery } from "react-responsive"
import { useTheme } from "../context/ThemeProvider"
import CustomerImg from "../assets/services/customer.svg";
import ProducerImg from "../assets/services/producer.svg";
import WholesalerImg from "../assets/services/wholesaler.svg";
import CarrierImg from "../assets/services/carrier.svg";
import SupplierImg from "../assets/services/supplier.svg";
import StorefrontImg from "../assets/services/storefront.svg";
import BadgeImg from "../assets/services/badge.svg"


export default function ConnectServices(props: any) {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1028px)' })
    const { theme } = useTheme()

    return (
        <div className="flex flex-col items-center justify-center gap-6 w-full md:w-[1128px] rounded-[20px] h-full  xl:h-[240px] bg-white border-[1px] border-white border-opacity-10 dark:bg-black mt-[27px] p-[20px]">
            <p className="text-white text-[19px] font-[400]">
                Connect services
            </p>
            <div className="grid grid-cols-2  md:grid-cols-3 xl:grid-cols-6 mt-[14px] gap-4">
                <div className="relative flex flex-col items-center w-[157px] h-[140px] rounded-[20px] p-[15px] bg-[#0a0a0a] border-[1px] border-white border-opacity-10">
                    <p className="text-white test-[14px] font-[400] text-center  ">
                        Customer
                    </p>
                    <div className="absolute top-[22px] right-[20px] bg-[#8B0796] w-[12px] h-[12px] rounded-full">

                    </div>
                    <img src={CustomerImg} alt="customer" />
                    <div className="flex flex-row items-center justify-between mt-[18px] w-full h-[28px] rounded-[6px] p-[8px_12px]  border-[1px] border-white border-opacity-10">
                        <p className="text-white text-[10px] font-[400]">
                            TVT Certified
                        </p>
                        <img src={BadgeImg} alt="badge" />
                    </div>
                </div>
                <div className="relative flex flex-col items-center w-[157px] h-[140px] rounded-[20px] p-[15px] bg-[#0a0a0a] border-[1px] border-white border-opacity-10">
                    <p className="text-white test-[14px] font-[400] text-center  ">
                        Producer
                    </p>
                    <div className="absolute top-[22px] right-[20px] bg-[#079669] w-[12px] h-[12px] rounded-full">

                    </div>
                    <img src={ProducerImg} alt="customer" />
                    <div className="flex flex-row items-center justify-between mt-[18px] w-full h-[28px] rounded-[6px] p-[8px_12px]  border-[1px] border-white border-opacity-10">
                        <p className="text-white text-[10px] font-[400]">
                            TVT Certified
                        </p>
                        <img src={BadgeImg} alt="badge" />
                    </div>
                </div>
                <div className="relative flex flex-col items-center w-[157px] h-[140px] rounded-[20px] p-[15px] bg-[#0a0a0a] border-[1px] border-white border-opacity-10">
                    <p className="text-white test-[14px] font-[400] text-center  ">
                        Wholesaler
                    </p>
                    <div className="absolute top-[22px] right-[20px] bg-[#674605] w-[12px] h-[12px] rounded-full">

                    </div>
                    <img src={WholesalerImg} alt="customer" />
                    <div className="flex flex-row items-center justify-between mt-[18px] w-full h-[28px] rounded-[6px] p-[8px_12px]  border-[1px] border-white border-opacity-10">
                        <p className="text-white text-[10px] font-[400]">
                            TVT Certified
                        </p>
                        <img src={BadgeImg} alt="badge" />
                    </div>
                </div>
                <div className="relative flex flex-col items-center w-[157px] h-[140px] rounded-[20px] p-[15px] bg-[#0a0a0a] border-[1px] border-white border-opacity-10">
                    <p className="text-white test-[14px] font-[400] text-center  ">
                        Carrier
                    </p>
                    <div className="absolute top-[22px] right-[20px] bg-[#595959] w-[12px] h-[12px] rounded-full">

                    </div>
                    <img src={WholesalerImg} alt="customer" />
                    <div className="flex flex-row items-center justify-between mt-[18px] w-full h-[28px] rounded-[6px] p-[8px_12px]  border-[1px] border-white border-opacity-10">
                        <p className="text-white text-[10px] font-[400]">
                            TVT Certified
                        </p>
                        <img src={BadgeImg} alt="badge" />
                    </div>
                </div>
                <div className="relative flex flex-col items-center w-[157px] h-[140px] rounded-[20px] p-[15px] bg-[#0a0a0a] border-[1px] border-white border-opacity-10">
                    <p className="text-white test-[14px] font-[400] text-center  ">
                        Supplier
                    </p>
                    <div className="absolute top-[22px] right-[20px] bg-[#C4FF1B] w-[12px] h-[12px] rounded-full">

                    </div>
                    <img src={SupplierImg} alt="customer" />
                    <div className="flex flex-row items-center justify-between mt-[18px] w-full h-[28px] rounded-[6px] p-[8px_12px]  border-[1px] border-white border-opacity-10">
                        <p className="text-white text-[10px] font-[400]">
                            TVT Certified
                        </p>
                        <img src={BadgeImg} alt="badge" />
                    </div>
                </div>
                <div className="relative flex flex-col items-center w-[157px] h-[140px] rounded-[20px] p-[15px] bg-[#0a0a0a] border-[1px] border-white border-opacity-10">
                    <p className="text-white test-[14px] font-[400] text-center  ">
                        Storefront
                    </p>
                    <div className="absolute top-[22px] right-[20px] bg-[#FEC25B] w-[12px] h-[12px] rounded-full">

                    </div>
                    <img src={StorefrontImg} alt="customer" />
                    <div className="flex flex-row items-center justify-between mt-[18px] w-full h-[28px] rounded-[6px] p-[8px_12px]  border-[1px] border-white border-opacity-10">
                        <p className="text-white text-[10px] font-[400]">
                            TVT Certified
                        </p>
                        <img src={BadgeImg} alt="badge" />
                    </div>
                </div>
            </div>
        </div>
    )
}