import React from 'react'
import Image from './image'
import milkMobile from '../assets/images/mobile/image-gallery-milkbottles.jpg'
import milkDesktop from '../assets/images/desktop/image-gallery-milkbottles.jpg'
import coneMobile from '../assets/images/mobile/image-gallery-cone.jpg'
import conedesktop from '../assets/images/desktop/image-gallery-cone.jpg'
import orangeMobile from '../assets/images/mobile/image-gallery-orange.jpg'
import orangedesktop from '../assets/images/desktop/image-gallery-orange.jpg'
import sugarMobile from '../assets/images/mobile/image-gallery-sugar-cubes.jpg'
import sugardesktop from '../assets/images/desktop/image-gallery-sugarcubes.jpg'

const Gallary = () => {
  return (
    <div  className='grid grid-cols-2 sm:flex'>
      <Image imgMobile={milkMobile} imgDesktop={milkDesktop} />
      <Image imgMobile={orangeMobile} imgDesktop={orangedesktop} />
      <Image imgMobile={coneMobile} imgDesktop={conedesktop} />
      <Image imgMobile={sugarMobile} imgDesktop={sugardesktop} />
    </div>
  )
}

export default Gallary 
