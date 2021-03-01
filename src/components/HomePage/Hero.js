import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import {Button} from '../Button';

export const Hero = () => {

    useEffect(() => {
        Aos.init({duration: 1500})
    }, [])
    return (
        <div className='homepage-container'>
            <div data-aos='fade-down'>
                <h1>Melissa Genger</h1>
                <h2>Web Developer</h2>
                <div className='hero-btns'>
                    <Button 
                        className='btn'
                        buttonStyle='btn--outline'
                        buttonSize='btn--lge'
                    >
                        SEE MORE
                    </Button>
                </div>
                {/* <img clasName='background' src='img/background.jpg' alt='background' /> */}
            </div>
    </div>
    )
}