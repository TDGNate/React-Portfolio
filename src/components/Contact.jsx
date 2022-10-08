import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import swal from 'sweetalert';
import "../styles/sweetAlert.css"
import "../styles/contact.css";

const Contact = () => {

  const form = useRef();
  
  const [formStatus, setFormStatus] = React.useState('SEND')

  const onSubmit = (e) => {
    e.preventDefault()

    const { formName, formEmail, formMessage } = e.target.elements
    
    // Check if name is empty 
    if (formName.value === "") {
      swal("Please add your name!");
      return;
    }
    
    // check if it's only one character 
    if (formName.value.length <= 1) {
      swal("Name isn't valid!");
      return;
    }
    
    // Check if email is empty 
    if (formEmail.value === "") {
      swal("Please add your email!");
      return;
    }
    
    let conFom = {
      name: formName.value,
      email: formEmail.value,
      message: formMessage.value,
    }

    console.log(conFom)

    emailjs.sendForm('service_k2icfbo', 'template_crd40yf', form.current, 'aZiPYcjt7NE2YLk9G')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    

    setFormStatus('Sending...')

    swal({
      title: "Thank You!",
      text: "I will get back to you asap!",
      icon: "success",
      button: false
    });

    borderGlow()

    setTimeout(() => {

      // send confirmation 
      setFormStatus('SEND')
      swal.close()
      
      // reset form 
      formName.value = ""
      formEmail.value = ""
      formMessage.value = ""

    }, 2000)

  }

  function borderGlow() {

    document.querySelector(".cform").classList.add("border-glow") 
    
    setTimeout(() => {
      document.querySelector(".cform").classList.remove("border-glow") 
    }, 7800)

  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contact</h2>
        <p className="contact-info">
          Christian McIlvenny
          <br />
          Perris, CA
          <br />
          <a href="mailto:email@example.com">itsnzte@gmail.com</a>
          
          <br />
        </p>

        <div className="contact-wrapper">

          <div className="contact-wrapper-left revealLeft">

            <h3>Send me a message!</h3>

            <form  ref={form} onSubmit={onSubmit} className="cform">
              {/* Name */}
              <label className="cform-label" htmlFor="name">Name</label>
              <input className="cform-name" type="text" name="user_name" id="formName" />
              {/* Email */}
              <label className="cform-label" htmlFor="email">Email</label>
              <input className="cform-email" type="email" name="user_email" id="formEmail" />
              {/* Message */}
              <label className="cform-label" htmlFor="message">Message</label>
              <textarea className="cform-message" name="message" id="formMessage" maxLength="380" required />
              {/* Button  */}
              <button className="cform-send" type="submit">{formStatus}</button>
              </form>
            
          </div>
          
          <div className="contact-wrapper-right revealRight">

            <h3>My Socials</h3>

            <div className="contact-icons">

              <a href="https://github.com/TDGNate" target="blank"><i className="bi bi-github"></i></a>

              <a href="https://www.linkedin.com/in/christian-mcilvenny/" target="blank"><i className="bi bi-linkedin"></i></a>

              <a href="https://www.instagram.com/imnzte" target="blank"><i className="bi bi-instagram"></i></a>

              <a href="mailto:email@example.com"><i className="bi bi-envelope-fill"></i></a>

              <a href="https://discordapp.com/users/276568445796220928" target="blank"><i className="bi bi-discord"></i></a>
              
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact