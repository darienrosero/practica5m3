import Image from "./image"
import eggImgMobile from '../assets/images/mobile/image-transform.jpg'
 import eggImgDesktop from '../assets/images/desktop/image-transform.jpg'
 import glassImgMobile from '../assets/images/mobile/image-stand-out.jpg'
 import glassImgDesktop from '../assets/images/desktop/image-stand-out.jpg'
 import graficMobile from '../assets/images/mobile/image-graphic-design.jpg'
 import graficDesktop from '../assets/images/desktop/image-graphic-design.jpg'
 import photoMobile from '../assets/images/mobile/image-photography.jpg'
 import photodesktop from '../assets/images/desktop/image-photography.jpg'
import Text from "./text"
import ImageText from "./imageText"
const Services = () => {
  return (
    <section className=" tablet:grid tablet:grid-cols-2">
        <Image order='order-2' imgMobile={eggImgMobile} imgDesktop={eggImgDesktop} />

        <Text order='order-1' title='  Transform your brand' text=' We are a full-service creative agency specializing in helping brands grow fast. 
  Engage your clients through compelling visuals that do most of the marketing for you.' color='bg-Yellow' />

        <Image oreder='order-3' imgMobile={glassImgMobile} imgDesktop={glassImgDesktop} />

        <Text order='order-4' title='  Stand out to the right audience' text='   Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.' color='bg-Soft-red' />
        <ImageText oreder='order-5' imgDesktop={graficDesktop} imgMobile={graficMobile} title='Graphic design' text='  Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.' />
        <ImageText oreder='order-6' imgDesktop={photodesktop} imgMobile={photoMobile} title=' Photography' text='  Increase your credibility by getting the most stunning, high-quality photos that improve your business image.' />
    </section>
  )
}

export default Services
