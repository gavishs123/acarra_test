import React from 'react'
import close from '../../assets/images/close.svg'

const Header = ({title}) => {
    return (
        <div className='payment-head bg-[#262626] px-[50px] pt-[34px] pb-[47px] flex justify-center items-baseline	'>
            <p className='payment-heading text-[#ffffff] font-bold	text-[50px] leading-[68px] tracking-[-0.3px] text-left'>
                {title}
            </p>
            <button className='bg-inherit border-0 p-0'><img src={close} alt="close" /></button>
        </div>
    )
}

export default Header