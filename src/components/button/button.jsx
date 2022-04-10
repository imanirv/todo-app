const Button = ({type, text}) => {
    return(
        <button type={type} className="bg-red-200 hover:bg-red-300 transition-all p-1 px-3.5 rounded-full min-w-max ml-3 text-red-800 mt-3 md:mt-0">{text}</button>
    )
}
export default Button