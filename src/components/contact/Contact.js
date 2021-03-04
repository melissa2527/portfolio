import React, {useState, useEffect} from 'react';
import './contact.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';

export const Contact = () => {
    const [successMsg, setSuccessMsg] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b7ppc7e', 'template_9x0vdbi', e.target, 'user_AACX6A2cAhpsiQTYgGUce')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      setSuccessMsg(true);
  }

  useEffect(() => {
      Aos.init({duration: 1500})
  }, [])

  return (
        <div className='contact-container'>
          <h2>Contact</h2>
          {successMsg ? <div className='success-msg'>Your message has been sent</div> : null }
        <form onSubmit={sendEmail}>
            <div className='form'>
                <div className='form-group'>
                    <input type='text' className='form-control' placeholder='Your Name' name='name' required min={3}/>
                </div>

                <div className='form-group'>
                    <input type='email' className='form-control' placeholder='Your Email (for response)' name='email'/>
                </div>
                
                <div className='form-group'>
                    <input type='text' className='form-control' placeholder='Subject' name='subject' required min={3}/>
                </div>

                <div className='form-group'>
                    <textarea className='form-control' cols='30' rows='8' placeholder='Message' name='message'required/>
                </div>

                <div className='form-group'>
                    <input type='Submit' className='button' value='Send message'/>
                </div>
            </div>
        </form>
        </div>
  );
}