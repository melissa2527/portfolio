import React, {useState} from 'react';
import './navbar.scss';
import {Link} from 'react-router-dom';
import {Button} from '../Button';

export const NavBar = () => {
    const [clicked, setClicked] = useState(false);
    const [button, setButton] = useState(true);

    const closeMenu = () => setClicked(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton);

    return (
        <div>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        <img src='img/logo.jpg' alt=''/>
                    </Link>
                    <div className='menu-icon' onClick={() => setClicked(!clicked)}>
                        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link' onClick={closeMenu}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/projects' className='nav-link' onClick={closeMenu}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact' className='nav-link' onClick={closeMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonSytle='btn--outline'>More Info</Button>}
                </div>
            </nav>
        </div>
    )
}
