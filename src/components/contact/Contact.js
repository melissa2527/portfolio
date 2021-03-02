import React, {useState, useEffect} from 'react';
import './contact.scss';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    // const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    }
        // setLoading(true);

    //     db.collection('users').add({
    //         name: name,
    //         email: email,
    //         message: message
    //     })
    //     .then(() => {
    //         // alert('Message has been submitted!');
    //         setSuccessMsg(true);
    //         // setLoader(false);
    //     })
    //     .catch(error => {
    //         console.error('Error', error);
    //         setErrorMsg(true);
    //         // setLoader(false);
    //     });
    //     setName('');
    //     setEmail('');
    //     setMessage('');
        
    // }

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    return (
        <div className='contact-container'>
    
            <h1 data-aos='fade-down'>Contact Us</h1>
            {
                successMsg ? <div className='success'>Your message has been submitted!  Have a caffeinated day ☕</div> : 
                errorMsg ? <div className='error'>There was an error. Please try again or call us.</div> : null
            }
            <form className='contact-form' onSubmit={handleSubmit} data-aos='fade-up'>
                <label>Name</label>
                <input type='text' minLength={3} value={name} min-length='3' onChange={(e) => setName(e.target.value)} placeholder='name'required/>

                <label>Email</label>
                <input type='email' minLength={8} value={email} onChange={(e) => setEmail(e.target.value)} id='email' placeholder='email'required/>

                <label>Message</label>
                <textarea minLength={8} value={message} onChange={(e) => setMessage(e.target.value)} required />

                <button value='Submit' type='submit'>Submit</button>
            </form>
        </div>
    )
}