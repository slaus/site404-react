import React from 'react';

const LanguageContext = React.createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = React.useState('uk'); // Default language

    const switchLanguage = () => {
        setLanguage(prevLanguage => (prevLanguage === 'uk' ? 'en' : 'uk'));
    };

    return (
        <LanguageContext.Provider value={{ language, switchLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    return React.useContext(LanguageContext);
};
