import React from 'react'

const Button = ({ text, varient }) => {
    return (
        <button
            className={`${varient === "primary" ? "bg-[#1E21FF] text-[#ffffff]" : "bg-inherit text-[#262626]"}
         rounded-xl border-0 font-medium text-3xl px-[85px] py-[30px]`} >
            {text}
        </button >
    )
}

export default Button