import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

const Nav = ({isHamburgerActive, setIsHamburgerActive}) => {
    const menuItems = [
        {
            "link": "/about",
            "title": "Про мене"
        },
        {
            "link": "/services",
            "title": "Послуги"
        },
        {
            "link": "/gallery",
            "title": "Галерея"
        },
        {
            "link": "/calc",
            "title": "Ціни"
        },
        {
            "link": "/blog",
            "title": "Блог"
        },
        {
            "link": "/contacts",
            "title": "Контакти"
        }
    ];

    const handleHamburgerClick = () => {
        setIsHamburgerActive(!isHamburgerActive);
    }

    const hideHamburger = () => {
        setIsHamburgerActive(false);
    }

    return (
        <>
            <button onClick={handleHamburgerClick} id="hamburger" name="hamburger" type="button" aria-label="Menu toggle" className={`absolute right-4 block lg:hidden ${isHamburgerActive ? 'hamburger-active' : ''}`}>
                <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
            </button>
            <nav id="nav-menu" className={`absolute right-0 left-0 top-[56px] w-full-- rounded border border-disable bg-body p-5 shadow-sm !backdrop-blur-3xl lg:static lg:block lg:max-w-full lg:rounded-none lg:border-none lg:bg-transparent lg:p-0 lg:shadow-none lg:!backdrop-blur-0 ${isHamburgerActive ? '' : 'hidden'}`} style={{boxShadow:"rgba(50,50,93,.25) 0 50px 100px -20px,rgba(0,0,0,.3) 0 30px 60px -30px"}}>
                <ul className="flex flex-col gap-5 lg:flex-row lg:gap-8">
                    {menuItems.map(({ title, link }, index) => (
                        <li className="group" key={index}>
                            <NavLink to={link} onClick={hideHamburger} className="w-full text-disable group-hover:text-heading">
                                {title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Nav;