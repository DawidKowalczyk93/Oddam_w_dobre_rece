import React from "react";
import {Link as ScrollLink} from "react-scroll";
import {Link as RouterLink} from 'react-router-dom';

const NavBar = () => {

    return (
        <div className='nav'>
            <nav>
                <ul className='nav__menu'>
                    <li className='nav__item'>
                       <RouterLink to='/'>Start</RouterLink>
                    </li>
                    <li className='nav__item'>
                        <ScrollLink to='whatIsAbout' smooth={true} duration={250}>O co chodzi ?</ScrollLink>
                    </li>
                    <li className='nav__item'>
                        <ScrollLink to='aboutUs' smooth={true} duration={250}>O nas</ScrollLink>
                    </li>
                    <li className='nav__item'>
                        <ScrollLink to='organizations' smooth={true} duration={250}>Fundacja i organizacje</ScrollLink>
                    </li>
                    <li className='nav__item'>
                        <ScrollLink to='contact' smooth={true} duration={250}>Kontakt</ScrollLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar