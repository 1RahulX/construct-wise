import Image from "next/image"
interface profileProp{
    imageUrl?:any,
    name?:string,
    duration?:any,
    price?:number,
    comment?:string
}

const MessageProfile = ({imageUrl, name, duration,price, comment}:profileProp) =>{
    return(
        <div className="flex gap-2">
            <div>
                <Image src={imageUrl} alt="user" width={60} height={60} className="rounded-full"/>
            </div>
            <div className="w-full">
                <div className="flex justify-between font-bold">
                    <h3 className="text-lg">{name}</h3>
                    <span>{duration}</span>
                </div>
                <p className="font-semibold">on item - ₹{price}</p>
                <p className="mt-4">{comment}</p>
                <div className="flex justify-between mt-8">
                    <Image src={"/svg/message.svg"} alt="message" width={24} height={24} className="cursor-pointer" />
                    <Image src={"/svg/heart-dark.svg"} alt="dark" width={24} height={24} className="cursor-pointer" />
                    <Image src={"/svg/attach.svg"} alt="attach" width={24} height={24} className="cursor-pointer" />
                </div>
            </div>
        </div>
    )
}
export default MessageProfile