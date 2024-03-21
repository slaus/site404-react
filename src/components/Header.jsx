import React, {useState} from 'react';
import {ColorStyle, SocialIcons, Nav, Logo} from "./index";
import {Link} from "react-router-dom";

const Header = () => {
    const [isHamburgerActive, setIsHamburgerActive] = useState(false);

    const hideHamburger = () => {
        setIsHamburgerActive(false);
    }

    return (
        <header className="absolute left-0 top-0 z-10 flex w-full items-center bg-transparent py-4 lg:py-6 navbar-fixed">
            <div className="container">
                <div className="relative flex items-center justify-between">
                    <Link to="/" onClick={hideHamburger} className="logo-color -mt-2 font-darker text-4xl font-black !leading-none lg:-mt-3 lg:text-5xl">
                        <Logo/>
                    </Link>
                    <div className="flex items-center px-4 lg:px-0">
                        <Nav isHamburgerActive={isHamburgerActive} setIsHamburgerActive={setIsHamburgerActive} />
                    </div>
                    <div className="flex items-center gap-6">
                        <SocialIcons/>
                        <ColorStyle/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;