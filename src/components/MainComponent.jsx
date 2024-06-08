import React from 'react'
import { CardProductComponent } from './CardProductComponent'
import { CTACardComponent } from './CTACardComponent'

export default function MainComponent() {
  return (
    <>
    <div className='flex flex-col gap-10 my-10'>
        <section className='flex justify-center gap-5'>
      <CardProductComponent/>
      <CardProductComponent/>
      <CardProductComponent/>
      <CardProductComponent/>
      </section>
      <section className='flex justify-center gap-5'>
        <CTACardComponent/>
        <CTACardComponent/>
        <CTACardComponent/>
        <CTACardComponent/>
      </section>
      </div>
    </>
  )
}

