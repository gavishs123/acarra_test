import React from 'react'

const InputField = ({ label, placeholder, type, ...rest }) => {
    return (
        <div className='location mt-10 text-left'>
            <label htmlFor={label}>
                <p className='mb-0 pb-5 text-[#262626] text-3xl font-semibold	'>Enter your location</p>
            </label>
            <input {...rest} id={label} type={type ?? 'text'} placeholder={placeholder} className='border border-[#D3DEE9] w-full rounded-xl py-[30px] px-[26px] text-3xl'></input>
        </div>
    )
}

export default InputField