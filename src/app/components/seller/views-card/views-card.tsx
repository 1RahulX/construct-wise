import Image from "next/image"
import ThemeButton from "../../theme-button/theme-button"

interface productProp{
    productImage?:any,
    alt?:any,
    productName?:string,
    price?:number,
    unit?:string,
}
const ViewsCard = ({productImage, alt, productName, price, unit}:productProp) =>{
    return(
        <div className="p-2.5 rounded-lg bg-secondary-500 min-w-[220px] w-fit border border-[#c1c1c1] relative">
            <div className="h-[150px]">
                <Image src={productImage} alt={alt} width={200} height={150} className="rounded-md h-full" />
            </div>
            <div className="text-primary-500 flex justify-between">
                <h3 className="font-semibold my-2 line-clamp-1">{productName}</h3>
                <div className="flex justify-between items-center">
                    <div className="font-semibold text-sm whitespace-nowrap">
                        <span>₹{price}</span>
                        <span>/{unit}</span>
                    </div>
                    
                </div>
                
            </div>
            <div className="flex justify-between mt-2">
                <ThemeButton text="53 views" className={"!py-[3px] rounded-full px-2.5"} />
                <ThemeButton text="3k sold" className={"!py-[3px] rounded-full px-2.5"} />
            </div>
        </div>
    )
}
export default ViewsCard