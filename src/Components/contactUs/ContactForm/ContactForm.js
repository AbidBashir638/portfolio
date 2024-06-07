import React from 'react'
import "./ContactForm.css"

function ContactForm() {
  return (
    <div className='contact-form-content'>
        <form >
            <div className='name-container'>
                <input type='text' placeholder='frist name' name='frist name'></input>
                <input type='text' placeholder='last name' name='last name'></input>
            </div>
            <input type="text" name='email' placeholder='email' />
            <textarea type="text" name='message' placeholder='massege' rows={3} />
            <button >send</button>

        </form>
    </div>
  )
}

export default ContactForm