import React, { createContext, useContext, useEffect, useState } from 'react';
import Preloader from '../components/Preloader';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const getDefaultLanguage = () => {
        const saved = localStorage.getItem('siteLanguage');
        if (saved) return saved;
        const browserLang = navigator.language.toLowerCase();
        return browserLang.includes('uk') ? 'uk' : 'en';
    };

    const [language, setLanguage] = useState(getDefaultLanguage);
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        localStorage.setItem('siteLanguage', language);
        document.documentElement.lang = language;
        setLoading(true);
    }, [language, loading]);

    const switchLanguage = () => {
        setLanguage(prev => (prev === 'uk' ? 'en' : 'uk'));
        setLoading(false);
    };

    return (
        <LanguageContext.Provider value={{ language, switchLanguage }}>
            {loading && <Preloader />}
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
