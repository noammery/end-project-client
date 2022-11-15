import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



function SendEmail() {
 const send = (e) => {
    e.preventDefualt();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    .then((result) =>{
        console.log(result.next);
    }, (error) =>{
        console.log(error.text);
    })
 }

  return (
    <form ref={form} onSubmit={send}>
        <label>Name</label>
        <input type="text" />
    </form>
  )
}

export default SendEmail