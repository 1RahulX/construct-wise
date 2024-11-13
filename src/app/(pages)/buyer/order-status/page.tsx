import BadgeChip from "@/app/components/chips/chips"
import BuyerProductLayout from "@/app/components/layout/header/buyer-product-layout"
import ThemeButton from "@/app/components/theme-button/theme-button"

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
                                <h2 className="text-primary font-bold text-lg leading-none">Almost Ready</h2>
                                <p className="text-[13px] mt-2 font-semibold">Preparing your order</p>
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
                                <h2 className="text-primary font-bold text-lg leading-none">Order Complete</h2>
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
                                <h2 className="text-primary font-bold text-lg leading-none">Delivered</h2>
                                <p className="text-[13px] mt-2 font-semibold">Order successfully received</p>
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