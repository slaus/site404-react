import React, { useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { useLanguage } from '../context/LanguageContext';
import { menu } from '../lang/languages';
import uaImg from '../img/ua.png';
import enImg from '../img/us.png';

const Nav = ({ isHamburgerActive, setIsHamburgerActive}) => {
    const location = useLocation();
    const { language, switchLanguage } = useLanguage();

    const menuItems = [
        { link: '/', title: menu[language].home },
        { link: '/about', title: menu[language].about },
        { link: '/services', title: menu[language].services },
        { link: '/gallery', title: menu[language].gallery },
        { link: '/calc', title: menu[language].prices },
        { link: '/blog', title: menu[language].blog },
        { link: '/contacts', title: menu[language].contacts },
    ];

    const handleHamburgerClick = () => {
        setIsHamburgerActive(!isHamburgerActive);
    };

    const hideHamburger = () => {
        setTimeout(() => {
            setIsHamburgerActive(false);
        }, 250);
    };

    return (
        <>
            <button onClick={handleHamburgerClick} id="hamburger" name="hamburger" type="button" aria-label="Menu toggle" className={`absolute right-4 block lg:hidden ${isHamburgerActive ? 'hamburger-active' : ''}`}>
                <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
            </button>
            <nav id="nav-menu" className={`absolute right-0 left-0 top-[56px] w-full-- rounded border border-disable bg-body p-5 shadow-sm !backdrop-blur-3xl lg:static lg:block lg:max-w-full lg:rounded-none lg:border-none lg:bg-transparent lg:p-0 lg:shadow-none lg:!backdrop-blur-0 ${isHamburgerActive ? '' : 'hidden'}`} style={{ boxShadow: "rgba(50,50,93,.25) 0 50px 100px -20px,rgba(0,0,0,.3) 0 30px 60px -30px" }}>
                <div className="flex flex-col gap-5-- lg:flex-row lg:gap-8-- menu">
                    {menuItems.map(({ title, link }, index) => (
                        <div className={`group group-${index + 1}`} key={index}>
                            <NavLink to={link} onClick={hideHamburger} className="w-full text-disable group-hover:text-heading">
                                {title}
                            </NavLink>
                        </div>
                    ))}
                </div>
            </nav>
            <div className='group lang' onClick={switchLanguage}>
                {language === 'uk' ? <img src={enImg} /> : <img src={uaImg} />}
            </div>
        </>
    );
};

export default Nav;