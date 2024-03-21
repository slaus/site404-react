import React from 'react';
import {Container, Row} from "./index";

const Footer = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

    return (
        <footer className="bg-main mt-auto py-8 text-center backdrop-blur-md lg:text-left">
            <div className="container flex flex-col items-center justify-between gap-5 lg:flex-row">
                <p className="text-xs text-paragraph sm:text-sm">Copyright &copy; 2006-{getCurrentYear()} | Всі права захищені.</p>
                <div className="flex gap-6">
                    <a href="#" className="text-xs text-disable hover:text-heading hover:underline sm:text-sm">Правила та умови</a>
                    <a href="#" className="text-xs text-disable hover:text-heading hover:underline sm:text-sm">Політика конфіденційності</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
