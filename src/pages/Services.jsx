import React, { useState, useEffect } from 'react';
import { ServiceItem } from '../components';

import axios from "axios";

const Services = () => {
    const [serviceItems, setServiceItems] = useState([]);

    useEffect(() => {
        const getServiceItems = async () => {
            await axios.get(`/db/services.json`)
                .then((res) => {
                    // console.log(res.data);
                    setServiceItems(res.data);
                });
        }

        getServiceItems();
    }, []);
    
    useEffect(() => {
        document.title = "Сторінка моїх послуг";
    }, []);

    return (
        <section id="services" className="text-center lg:text-left my-auto py-8">
            <div className="container">
                <div className="flex flex-col justify-start gap-8">
                    <h1 className="heading reveal-effect">Послуги</h1>
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