import React from 'react'
import calendar from '../../assets/images/celende.svg'
import location from '../../assets/images/location.svg'
import ServiceThumbnail from '../../assets/images/index 1.png'
const ServiceCard = () => {
    return (
        <div className='service-details border border-[#D3DEE9] p-[33px] bg-[#ffffff] rounded-[20px] flex items-center	'>
            <div className='img w-[120px] h-[120px] rounded-[20px] mr-[26px]'>
                <img src={ServiceThumbnail} alt="demo" className='rounded-[20px]' />
            </div>
            <div className='username text-left'>
                <p className='text-3xl text-[#262626] font-semibold mb-0 pb-3 '>Japanese lessons</p>
                <div className='pb-[13px] flex items-center gap-[14px]'><img src={calendar} alt="demo" className='w-[20px]' /> <p className='text-[#718096] text-xl	font-medium	mb-0'>Nov 7, 2020 · 11:30</p> </div>
                <div className='pb-[13px] flex items-center gap-[14px]'><img src={location} alt="demo" className='w-[20px]' /> <p className='text-[#718096] text-xl	font-medium	mb-0'>Client`s place</p> </div>
                <p className='text-3xl	font-semibold		text-[#262626] mb-0'>Rp 350.000</p>
            </div>
        </div>
    )
}

export default ServiceCard