interface chipsProp{
    text?:string,
    className?:any
}
const BadgeChip = ({text,className}:chipsProp) =>{
    return(
        <div className={`bg-gray-200 w-fit px-2 text-[11px] text-primary-500 leading-none py-[3px] rounded-full font-semibold ${className}`}>{text}</div>
    )
}
export default BadgeChip