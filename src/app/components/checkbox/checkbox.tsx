interface checkboxProp{
    id?:string,
    name?:string,
    label?: string,
className?:string
}
const CheckBox = ({id, name,label, className}:checkboxProp)=>{
    return(
        <div className="flex gap-2">
        <input type="checkbox" id={id} name={name} className={`mt-[2px] ${className}`} />
        <label htmlFor={id}>{label}</label>
        </div>
    )
}
export default CheckBox