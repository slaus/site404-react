import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Preloader = () => {
    const { language, switchLanguage } = useLanguage();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 150);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`preloader ${loading ? 'show' : ''}`}>
            <div className="loader"></div>
        </div>
    );
};

export default Preloader;
