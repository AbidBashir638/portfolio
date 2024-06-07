import React from 'react'
import './ContactInfoCard.css'

export const ContactInfoCard = ({iconUrl, text}) => {
  return (
    <div className='contact-detail-card'>
      <div className='icon'>
        <img src={iconUrl} alt={text} />
      </div>
      <p>{text}</p>
    </div>
  )
}
