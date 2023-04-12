import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import UserInfo from './components/UserInfoCard/UserInfo'
import ServiceCard from './components/ServiceCard/ServiceCard'
import Button from './components/Button/Button'
import InputField from './components/InputField/InputField'
import PaymentSelection from './components/PaymentSelection/PaymentSelection'

function App() {

  return (
    <div className="App max-w-[750px] w-full">
      <Header title="Choose the form of payment" />
      <div className='payment-page p-[50px]'>
        <UserInfo />
        <div className='service'>
          <div className='service-heading text-left'>
            <p className='text-[#262626] font-bold	text-[40px] pb-[40px]'>Selected service</p>
          </div>
        </div>
        <ServiceCard />
        <InputField placeholder="Enter Address" label="Enter your location" />
        <InputField placeholder="Enter Text here" label="Note (optional)" />
        <PaymentSelection />
      </div>
      <div className='footer border-t border-[#D3DEE9] py-[30px] px-[50px] flex items-center justify-between'>
        <div className='Previous'>
          <Button text="Previous" />
        </div>
        <div className='next'>
          <Button text="Next" varient="primary" />
        </div>
      </div>
    </div>
  )
}

export default App
