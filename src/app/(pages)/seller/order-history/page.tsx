import CheckBox from "@/app/components/checkbox/checkbox"
import SellerLayout from "@/app/components/layout/header/seller-layout"
import ThemeButton from "@/app/components/theme-button/theme-button"
import Image from "next/image"

const OrderHistory = ()=>{
    return(
        <SellerLayout>
            <div className="flex">
                {/* left part of the page start */}
                <div className="max-w-[300px] sticky top-[77px] bg-secondary-500 h-[89.3vh] p-4 w-full">
                    <div className="max-w-[260px] w-full">
                    <h3 className="text-2xl font-bold">Filters</h3>
                    <div className="font-semibold my-6 grid gap-4">
                        <CheckBox label="Delivered" id="delivered" className="w-[14px]" />
                        <CheckBox label="Processing" id="processing" className="w-[14px]" />
                        <CheckBox label="Cancelled" id="cancelled" className="w-[14px]" />
                    </div>
                    <div>
                        <h3 className="font-semibold mb-1">Start Date:</h3>
                        <input type="date" name="start" id="start" className="w-full bg-[#e5e5e5] px-2 py-1 rounded-xl" />
                    </div>
                    <div className="mt-4">
                        <h3 className="font-semibold mb-1">End Date:</h3>
                        <input type="date" name="end" id="end" className="w-full bg-[#e5e5e5] px-2 py-1 rounded-xl" />
                    </div>
                    </div>
                </div>
                {/* left part of the page end */}
                <div className="p-4 w-full">
                    {historyArray?.map((item,index)=>{
                        return(
                            <div className="bg-[#e5e5e6] p-4 rounded-xl mb-4" key={index}>
                            <div className="flex justify-between">
                                 <h3 className="font-bold text-xl">Order ID: #{item?.orderId}</h3>
                                <ThemeButton text="View Details" className="!py-1.5 px-3 text-xs font-semibold" />
                            </div>
                            <p className="mb-4">
                                <b className="font-semibold">Date:</b> <span>{item?.date}</span>
                            </p>
                            <p>
                                <b className="font-semibold">Buyer:</b>
                                <span> {item?.buyerName}</span>
                            </p>
                            <p>
                                <b className="font-semibold">Item:</b>
                                <span> {item?.itemName}</span>
                            </p>
                            <p>
                                <b className="font-semibold">Quantity:</b>
                                <span> {item?.quantity}</span>
                            </p>
                            <p>
                                <b className="font-semibold">Price:</b>
                                <span > ₹{item?.price}</span>
                            </p>
                            <div className="flex justify-between">
                            <div className="flex gap-4 mt-4">
                                <Image src={item?.status==="Shipped"? "/svg/shipped.svg": item?.status==="Delivered"? "/svg/delivery.svg": item?.status==="Processing"? "/svg/processing.svg":""} alt="shipped" width={28} height={28} />
                                <div>
                                    <p>
                                        <b className="font-semibold">Status: </b>
                                        <span> {item?.status}</span>
                                    </p>
                                </div>
                            </div>
                            <ThemeButton text="Track" className="text-xs font-semibold px-3 !py-1" />
                            </div>
                        </div>
                        )
                    })}
                  
                </div>
            </div>
        </SellerLayout>
    )
}
export default OrderHistory
const historyArray = [
    {
        orderId:12345,
        date:"2023-10-15",
        buyerName:"Emily Clarkson",
        itemName:"Iron Rod",
        quantity:2,
        price:63,
        status:"Shipped"
    },
    {
        orderId:12346,
        date:"2023-10-10",
        buyerName:"John Doe",
        itemName:"Bricks",
        quantity:1000,
        price:7,
        status:"Delivered"
    },
    {
        orderId:12347,
        date:"2023-10-05",
        buyerName:"Sarah Connor",
        itemName:"Cement",
        quantity:1,
        price:425,
        status:"Processing"
    },

]