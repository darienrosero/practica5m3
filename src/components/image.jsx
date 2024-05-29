import React from 'react'

const Image = ({oreder='', imgMobile, imgDesktop}) => {
  return (
    <picture className={oreder}>
        <source media='(max-width:639px)' srcSet={imgMobile} />
        <source media='(min-width:640px)' srcSet={imgDesktop} />
        <img src={imgMobile} alt="servicios" />
    </picture>
  )
}

export default Image
