interface layoutPRop{
    children?:any,
    className?:any
}
const CardLayout = ({children, className}:layoutPRop)=>{
    return(
        <div className={`px-4 py-6 rounded-xl bg-secondary-500 ${className}`}>
            {children}        
        </div>
    )
}
export default CardLayout