import React from "react"

interface buttonProp{
    className?:string,
    text?:string,
    parentClass?:string
}
const ThemeButton : React.FC<buttonProp> = ({className, text,parentClass}) =>{
    return(
        <div className={parentClass}>
            <button className={`bg-primary-500 text-white w-full rounded-[8px] py-2 pb-2.5 px-2 text-[14px] ${className}`}>{text}</button>
        </div>
    )
}
export default ThemeButton