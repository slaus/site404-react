import React, { useState, useEffect } from 'react';
import { ServiceItem } from '../components';
import { useLanguage } from '../context/LanguageContext';
import { services } from '../lang/languages';

import axios from "axios";

const Services = () => {
    const { language, switchLanguage } = useLanguage();
    const [serviceItems, setServiceItems] = useState([]);

    useEffect(() => {
        const getServiceItems = async () => {
            await axios.get(`/db/services.json`)
                .then((res) => {
                    // console.log(res.data[language]);
                    setServiceItems(res?.data[language]);
                });
        }

        getServiceItems();
    }, [language]);
    
    useEffect(() => {
        document.title = services[language].title;
    }, [language]);

    return (
        <section id="services" className="text-center lg:text-left my-auto py-8">
            <div className="container">
                <div className="flex flex-col justify-start gap-8">
                    <h1 className="heading reveal-effect">{services[language].heading}</h1>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                        {serviceItems && Array.isArray(serviceItems) &&
                            serviceItems?.map(({ ...props }) => (
                                <ServiceItem key={props.id} {...props} />
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;