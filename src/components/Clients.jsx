import React, { useState, useEffect } from 'react';

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useLanguage } from '../context/LanguageContext';
import { clients } from '../lang/languages';

import 'swiper/css';
import 'swiper/css/pagination';
import axios from "axios";

const Clients = () => {
    const { language, switchLanguage } = useLanguage();
    const [clientItems, setClientItems] = useState([]);

    useEffect(() => {
        const getClientItems = async () => {
            await axios.get(`/db/clients.json`)
                .then((res) => {
                    // console.log(res.data);
                    setClientItems(res.data);
                });
        }

        getClientItems();
    }, []);

    return (
        <section className="bg-main backdrop-blur-md mb-auto mt-16">
            <div className="container">
                <div
                    className="flex h-20 flex-col items-start justify-between gap-32 lg:h-28 lg:flex-row lg:items-center">
                    <h1 className="heading hidden whitespace-nowrap lg:block">{clients[language].title}</h1>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={0}
                        breakpoints={{
                            576: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 50,
                            },
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Autoplay]}
                        className="logoSwiper"
                    >
                        {clientItems && Array.isArray(clientItems) &&
                            clientItems?.map(({ img, title }, index) => (
                                <SwiperSlide key={index}>
                                    <div className="swiper-slide">
                                        <img src={img} alt={title} width="140" height="26" />
                                    </div>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Clients;