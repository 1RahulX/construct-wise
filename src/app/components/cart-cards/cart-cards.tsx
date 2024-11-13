import Image from "next/image"
interface cartProp{
    imageUrl?:any,
    productName?:string,
    itemNumber?:number,
    price?:number
}
const CartCard = ({imageUrl, productName, itemNumber, price}: cartProp) =>{
    return(
        <div className="flex justify-between">
            <div className="flex gap-4">
                <div>
                    <Image src={imageUrl} alt="rod" width={80} height={80} className="rounded-xl w-[70px] h-[70px] border" />
                </div>
                <div>
                    <h3 className="font-bold text-lg">{productName}</h3>
                    <p className="font-semibold">Item Number: #{itemNumber}</p>
                </div>
            </div>
            <div>
                <h3 className="font-semibold">Total: ₹{price}</h3>
            </div>
        </div>
    )
}
export default CartCard