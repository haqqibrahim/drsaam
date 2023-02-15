import React from 'react'

import Logo from "../../assets/images/saam-gd.png"

const Header = () => {
  return (
    <div className='fixed w-full h-[60px] flex bg-white p-2 items-center justify-start'>
        <img src={Logo} alt="Dr.SAAM" className='w-[100px] h-[100px]'/>
    </div>
  )
}

export default Header