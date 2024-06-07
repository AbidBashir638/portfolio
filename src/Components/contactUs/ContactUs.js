import React from 'react'
import './contactUs.css'
import { ContactInfoCard } from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

export default function ContactUs() {
  return (
    <section className='contact-container'>
      <h5>Contact Us</h5>
      <div className='contact-content'>
      <div style={{flex:1}}>
        <ContactInfoCard iconUrl="./assest/" text={"devcoitsol@gmail.com"}/>
        <ContactInfoCard iconUrl="./assest/" text={"githu"}/>
      </div>

      <div style={{flex:1}}>
      <ContactForm />
      </div>
      </div>

    </section>
  )
}
