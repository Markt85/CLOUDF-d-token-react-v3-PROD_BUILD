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

		 
		<div class="container px-4 py-5">
		<div class="row align-items-center g-lg-5 py-5">
			  <div class="col-lg-7 text-center text-lg-start">
				<h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">Say hello</h1>
			
				<p class="col-lg-10 fs-4">Email us at hello@d-token.io or send a message. </p>
			  </div>
			  <div class="col-md-10 mx-auto col-lg-5">
				<form onSubmit={sendEmail} class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
				  <div class="form-floating mb-3">
					<input type="text" class="form-control" id="from_name" name="from_name" placeholder="Your name.." required/>
					<label for="from_name">Name</label>
				  </div>
				  <div class="form-floating mb-3">
					<input type="email" class="form-control" id="user_email" name="user_email" placeholder="name@example.com" required/>
					<label for="user_email">Email address</label>
				  </div>
				  <div class="form-floating mb-5">
					
					<input type="message" class="form-control" id="message" name="message" placeholder="Type your message"/>
					<label for="message">Message</label>
				  </div>
				  <div class="checkbox mb-3">
				  </div>
				  <button class="w-100 btn btn-lg btn-primary" type="submit" value="Send" >Send</button>
				  <hr class="my-4"/>
				  <small class="text-body-secondary">{stateMessage && <p> </p>}
       			 <p>{stateMessage}</p></small>
				</form>
				</div>
				</div></div>
	);
};

export default Contact;
