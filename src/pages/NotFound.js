import React, {useEffect} from 'react';
import { useLanguage } from '../context/LanguageContext';
import { notFound } from '../lang/languages';

const NotFound = () => {
    const { language, switchLanguage } = useLanguage();

    useEffect(() => {
        document.title = notFound[language].title;
      }, [language]);

    return (
        <section className="!text-center lg:!text-left my-auto py-8">
            <div className="flex flex-col items-center justify-center h-screen text-center m-auto">
                <h1 className="text-4xl font-bold text-heading not-found-title">404</h1>
                <h3 className="mt-4 text-lg text-heading not-found-subtitle">{notFound[language].attention}</h3>
                <p className="px-4 mt-4 text-lg text-heading not-found-desc">{notFound[language].subtitle}</p>
            </div>
        </section>
    );
};

export default NotFound;