import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { footer } from '../lang/languages';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { language, switchLanguage } = useLanguage();

    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

    return (
        <footer className="bg-main mt-auto py-8 text-center backdrop-blur-md lg:text-left">
            <div className="container flex flex-col items-center justify-between gap-5 lg:flex-row">
                <p className="text-xs text-paragraph sm:text-sm">Copyright &copy; 2006-{getCurrentYear()} | {footer[language].copyright}.</p>
                <div className="flex xs:flex-col sm:flex-row gap-6">
                    <Link to="/terms" className="text-xs text-disable hover:text-heading hover:underline sm:text-sm">{footer[language].terms}</Link>
                    <Link to="/policy" className="text-xs text-disable hover:text-heading hover:underline sm:text-sm">{footer[language].policy}</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
