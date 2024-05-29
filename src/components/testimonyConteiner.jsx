import React from 'react'
import Testimony from './testimony'
import emilyP from '../assets/images/image-emily.jpg'
import thomas from '../assets/images/image-thomas.jpg'
import jenni from '../assets/images/image-jennie.jpg'



const TestimonyConteiner = () => {
  return (
    <section className=' bg-white pt-16'>
        <h2 className=' text-center uppercase font-Fraunces mb-16 text-Grayish-blue'> Client Testimonials</h2>
        <div className=' lg:flex lg:w-[900px] mx-auto xl:w-[1110px] '>
            <Testimony img={emilyP} testi='We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.' name='  Emily R.' position=' Marketing Director'/>
            <Testimony img={thomas} testi='  Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.' name='   Thomas S.' position=' Marketing Director'/>
            <Testimony img={jenni} testi='  Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!' name=' Jennie F..' position='   Business Owner'/>
        </div>
    </section>
  )
}

export default TestimonyConteiner
