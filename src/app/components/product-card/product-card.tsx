import Image from "next/image"
import ThemeButton from "../theme-button/theme-button"
interface productProp{
    productImage?:any,
    alt?:any,
    productName?:string,
    price?:number,
    unit?:any,
}

const ProductCard = ({productImage, alt, productName, price, unit}:productProp)=>{
    return(
        <div className="p-2.5 rounded-lg bg-secondary-500 min-w-[220px] w-fit">
            <div className="h-[150px]">
                <Image src={productImage} alt={alt} width={200} height={150} className="rounded-md h-full" />
            </div>
            <div className="text-primary-500">
                <h3 className="font-semibold my-2">{productName}</h3>
                <div className="flex justify-between">
                    <div className="font-semibold text-sm">
                        <span>₹{price}</span>
                        <span>/{unit}</span>
                    </div>
                    <div className="bg-[#e5e5e5] w-fit flex px-2 rounded-md">
                        <span className="text-sm pr-2">1</span>
                        <div className="grid gap-1 py-1">
                            <Image src={"/svg/up.svg"} alt="up" width={6} height={6} className="cursor-pointer" />
                            <Image src={"/svg/down.svg"} alt="down" width={6} height={6} className="cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <ThemeButton text="Add to cart" />
                </div>
            </div>
        </div>
    )
}
export default ProductCard