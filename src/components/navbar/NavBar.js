import React, {useState, useEffect} from 'react';
import './navbar.scss';
import {Link} from 'react-router-dom';
import {Button} from '../Button';

export const NavBar = () => {
    const [clicked, setClicked] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {setClicked(!clicked)};
    const closeMenuMobile = () => setClicked(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMenuMobile}>
                        <img src='img/logo.png' alt='' height={50}/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link' onClick={closeMenuMobile}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/projects' className='nav-link' onClick={closeMenuMobile}>
                                Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-link' onClick={closeMenuMobile}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonSytle='btn--outline'>More Info</Button>}
                </div>
            </nav>
        </>
    )
}
