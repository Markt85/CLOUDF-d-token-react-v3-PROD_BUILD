import React from "react";
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.css';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);  const sendEmail = (e) => {
      e.persist();
      e.preventDefault();
      setIsSubmitting(true);    emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          e.target,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            setStateMessage('Thanks for getting in touch.  We will contact you within 24 hours.');
            setIsSubmitting(false);
            setTimeout(() => {
              setStateMessage(null);
            }, 5000); // hide message after 5 seconds
          },
          (error) => {
            setStateMessage('Something went wrong, please try again later');
            setIsSubmitting(false);
            setTimeout(() => {
              setStateMessage(null);
            }, 5000); // hide message after 5 seconds
          }
        );
      
      // Clears the form after sending the email
      e.target.reset();
    };  return (

        
          
    <div class="container px-4 py-5 text-left">
      
    <div class="px-4 py-5 my-5 text-center">  
    <p>Please email us at <h5>hello@d-token.io</h5></p><p> or send us a message. </p>  
    <h1 class="display-5 fw-bold"></h1>    
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">
      <a id="#contact"></a> 
    

        <p><form onSubmit={sendEmail}>
        <p><td><label>Name</label></td>
        <input type="text" name="user_name" /></p>
        <p><td><label>Email</label></td>
        <input type="email" name="user_email" /></p>
        <p><td><label>Message</label></td>
        <input type="message" textarea name="message" /></p>

        <input type="submit" class="btn btn-primary" value="Send" disabled={isSubmitting} />
        {stateMessage && <p> </p>}
        <p>{stateMessage}</p>
      </form>
      </p>
      </p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        
      </div>
    </div>
  </div>

    <footer class="py-3 my-4 fixed-bottom">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3"></ul>

    <p class="text-center text-muted"><a href="/">Home </a> |  <a href="/">Web</a> | <a href="/"> dApp</a> | <a href="/"> Infra</a></p>
  </footer>
  </div>
      
    );
  };export default Contact;