import Image from "next/image"

interface inputProp{
    id?:string,
    name?:string,
    labelClass?:any,
    label?:string,
    type?:string,
    placeholder?:string,
    className?:string,
    onChange?:any,
    search?:boolean
}
const InputField = ({id,name,labelClass,label,type,placeholder,className,onChange,search}:inputProp) =>{
    return(
        <div className="relative">
        <label htmlFor={id} className={`block font-semibold text-primary-500 text-sm mb-1 ${labelClass}`}>{label}</label>
        <input type={type} name={name} id={id} placeholder={placeholder} className={`${search===true? "pl-7":""} outline-none bg-gray-200 border px-2 py-1 rounded-md w-full ${className}`} onChange={onChange} />
        {search &&
            <Image src={"/svg/search.svg"} alt="search" width={22} height={22} className="absolute top-[7px] left-1" />
        }
        </div>
    )
}
export default InputField