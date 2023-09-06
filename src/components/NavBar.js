import React from "react";
import {Link} from "react-scroll";

const NavBar = () => {

    return (
        <div className='nav'>
            <nav>
                <ul className='nav__menu'>
                    <li className='nav__item'>
                       <Link to='hero' smooth={true} duration={250}>Start</Link>
                    </li>
                    <li className='nav__item'>
                        <Link to='whatIsAbout' smooth={true} duration={250}>O co chodzi ?</Link>
                    </li>
                    <li className='nav__item'>
                        <Link to='aboutUs' smooth={true} duration={250}>O nas</Link>
                    </li>
                    <li className='nav__item'>
                        <Link to='organizations' smooth={true} duration={250}>Fundacja i organizacje</Link>
                    </li>
                    <li className='nav__item'>
                        <Link to='contact' smooth={true} duration={250}>Kontakt</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar