import React from 'react'

const UserInfo = () => {
    return (
        <div className='logout bg-[#F7FAFC] border	border-[#D3DEE9] rounded-[20px] px-[39px] py-[37px] flex align-center mb-[50px]'>
            <div className='user-n w-[90px] h-[90px] rounded-full bg-[#EDF2F7] mr-[26px] flex items-center justify-center	 '>
                <p className='text-4xl text-[#262626] font-bold	'>J</p>
            </div>
            <div className='user-name text-left'>
                <p className='text-4xl text-[#262626] font-semibold mb-1'>John</p>
                <p className='font-medium	text-[26px] mb-0 text-[#718096]'>(88) 99602-2404</p>
            </div>
            <div className='logout-button ml-auto'>
                <button className='font-semibold text-[#262626] text-[26px] bg-[#EDF2F7] border-0	py-7 px-6'>Log out</button>
            </div>
        </div>
    )
}

export default UserInfo