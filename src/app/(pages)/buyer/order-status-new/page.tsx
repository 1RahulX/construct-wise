import BadgeChip from "@/app/components/chips/chips"
import BuyerProductLayout from "@/app/components/layout/header/buyer-product-layout"
import ThemeButton from "@/app/components/theme-button/theme-button"
import Image from "next/image"
import Link from "next/link"

const OrderStatus = () =>{
    return(
        <BuyerProductLayout>
            <div className="py-12 px-16 grid grid-cols-[2.5fr_1fr] gap-12 max-w-[1450px] m-auto">
                <div>
                    <h1 className="font-bold text-4xl">Order Status</h1>
                    <div className="mt-8 flex gap-4 border-b-2 border-t-2 py-6">
                        <div className="w-[4px] h-auto rounded-full bg-secondary-500 block"></div>
                        <div className="flex gap-2">
                            <div>
                            <BadgeChip text="item" />
                            </div>
                            <div>
                                <h2 className="text-primary font-bold text-lg leading-none">Status:</h2>
                                <p className="text-[13px] mt-2 font-semibold">Out for delivery</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 border-b-2 py-6">
                        <div className="w-[4px] h-auto rounded-full bg-secondary-500 block"></div>
                        <div className="flex gap-2">
                            <div>
                            <BadgeChip text="item" />
                            </div>
                            <div>
                                <h2 className="text-primary font-bold text-lg leading-none">Current location of your item.</h2>
                                <p className="text-[13px] mt-2 font-semibold">
                                    <Image src="/map.jpeg" alt="map" width={220} height={160} />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 border-b-2 py-6">
                        <div className="w-[4px] h-auto rounded-full bg-secondary-500 block"></div>
                        <div className="flex gap-2">
                            <div>
                            <BadgeChip text="item" />
                            </div>
                            <div>
                                <h2 className="text-primary font-bold text-lg leading-none">General Information</h2>
                                <p className="text-[13px] mt-2">Driver name: <span className="font-semibold">Pradeep kumar</span></p>
                                <p className="text-[13px] mt-2">Car name: <span className="font-semibold">Hyundai Creta</span></p>
                                <p className="text-[13px] mt-2">Vehicle Number: <span className="font-semibold">UK07GS1584</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 border-b-2 py-6">
                        <div className="w-[4px] h-auto rounded-full bg-secondary-500 block"></div>
                        <div className="flex gap-2">
                            <div>
                            <BadgeChip text="item" />
                            </div>
                            <div>
                                <h2 className="text-primary font-bold text-lg leading-none">Delivery Information</h2>
                                <p className="text-[13px] mt-2">Time remaining: <span className="font-semibold">3 hours 30 minutes</span></p>
                                <p className="text-[13px] mt-2 flex gap-2">
                                    <span>Contact with delivery boy:</span> 
                                    <Link href={"tel:+919999999999"} className="font-semibold flex items-center">
                                        <Image src={"/svg/phone-dark.svg"} alt="phone" width={18} height={18} />
                                        <span className="text-[15px]">+91-9999999999</span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-[320px] w-full ml-auto">
                    <div className="text-white font-bold text-lg flex place-items-center text-center w-[120px] h-[120px] rounded-xl bg-primary-500 mx-auto mb-[-40px] z-[9] relative">
                        <p className="w-full">Track</p>
                    </div>
                <div className="bg-secondary-500 rounded-xl p-4 text-primary-500 h-fit pt-[56px]">
                    <h2 className="font-bold text-lg text-center border-b-2 pb-6 border-[#c1c2c6]">Time left for delivery</h2>
                    
                    <p className="text-center leading-[1.3] mt-6">Your product is on its way! Keep an eye on your order here.</p>
                    <div className="mt-12">
                    <ThemeButton text="Minimize status" className={"font-semibold"} />
                    </div>
                </div>
                </div>
            </div>
        </BuyerProductLayout>
    )
}


export default OrderStatus
