import React, {useEffect} from 'react'
// import background from '../../img/logo.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const Hero = () => {

    useEffect(() => {
        Aos.init({duration: 1500})
    }, [])
    return (
        <div>
            <div data-aos='fade-down'>
                <img clasName='background' src='img/background.jpg' alt='background' />
            </div>
        </div>
    )
}