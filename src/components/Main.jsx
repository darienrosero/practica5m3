import React from 'react'
import imgMovile from '../assets/images/mobile/image-header.jpg'
import imgDesktop from '../assets/images/desktop/image-header.jpg'
import arrow from '../assets/images/icon-arrow-down.svg'

const Main = () => {
  return (
    <section>
      <picture>
        <source media='(max-width:639px)' srcSet={imgMovile} />
        <source media='(min-width:640px)' srcSet={imgDesktop}/>
        <img src={imgMovile} alt="background header" />
      </picture>
      <p className=' absolute font-Fraunces text-[40px] uppercase top-[80px] left-0 right-0 mx-auto w-[327px] text-white tracking-[6.25px] text-center
       sm:w-[600px] '>  We are creatives </p>
      <img className=' absolute top-[220px] left-0 right-0 mx-auto sm:top-[175px] ' src={arrow} alt="" />
    </section>
  )
}

export default Main
