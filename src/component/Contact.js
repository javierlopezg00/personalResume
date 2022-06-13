import React, { useRef } from 'react';
import '../styles/Contact.css';
import emailjs from '@emailjs/browser';
import Footer from './footer';

//Bootsrap
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wvcirk2', 'template_lxt9tii', form.current, 'mFXZBP8nBjqv7kX-4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
    alert("Message sent/Mensaje enviado");

  };

    return(
        <div className="contactContainer">
            <div className="subContainer">
                <h1 className='principalTitle'>contact me! :-)</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <br />
                        <InputGroup>
                            <InputGroup.Text id="inputGroup-sizing-default">
                            name
                            </InputGroup.Text>
                            <Form.Control
                            name="user_name"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            />  
                        </InputGroup>
                    <br />
                        <InputGroup>
                            <InputGroup.Text id="inputGroup-sizing-default">
                                email
                                </InputGroup.Text>
                                <Form.Control
                                name="user_email"
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                    <br />
                        <InputGroup>
                            <InputGroup.Text id="inputGroup-sizing-default-text-area">message</InputGroup.Text>
                            <Form.Control as="textarea" aria-label="With textarea" name="message" />
                        </InputGroup>
                    <br />

                    <input type="submit" value="Send Message" className='contactButton'/>
                </form>
            </div>
            <Footer
             text="Resume"
             linkTo=""/>
        </div>
    )
}
export default Contact;

