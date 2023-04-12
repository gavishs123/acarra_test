import React from 'react'

const PaymentSelection = () => {
    return (
        <div className='way-to-pay text-left'>
            <p className='#262626 text-[50px] font-bold	my-[50px]'>Choose a way to pay</p>
            <div className='pay-buttons flex items-center	flex-wrap gap-[20px]'>
                <button className='w-[280px] h-[100px] text-[#262626] text-3xl	font-semibold	border-r bg-[#fff] rounded-xl	 border-[#262626]'>Cash</button>
                <button className='w-[280px] h-[100px] text-[#262626] text-3xl	font-semibold	border-r bg-[#EDF2F7] rounded-xl	 border-[transparent]'>Credit card</button>
                <button className='w-[280px] h-[100px] text-[#262626] text-3xl	font-semibold	border-r bg-[#EDF2F7]  rounded-xl	border-[transparent]'>eWallet/Virtual bank</button>
            </div>
            <div className='check-box flex gap-[25px] pt-[50px] items-start	'>
                <input id="check" type='checkbox' className='w-[30px] h-[30px] mt-2.5'></input>
                <label htmlFor="check">
                    <p className='font-medium	text-[26px] text-[#262626]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <a href='#' className='font-medium	text-[26px] text-[#1E21FF] underline'>do eiusmod</a></p>
                </label>
            </div>
        </div>
    )
}

export default PaymentSelection