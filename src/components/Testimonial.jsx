import React, { useState, useEffect } from 'react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import axios from "axios";
import { useLanguage } from '../context/LanguageContext';
import { testimonials } from '../lang/languages';

const Testimonial = () => {
    const { language, switchLanguage } = useLanguage();

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return `<span className="${className}"></span>`;
        },
    };

    const [testimonialItems, setTestimonialItems] = useState([]);

    useEffect(() => {
        const getTestimonialItems = async () => {
            await axios.get(`/db/testimonial.json`)
                .then((res) => {
                    // console.log(res.data[language]);
                    setTestimonialItems(res.data[language]);
                });
        }

        getTestimonialItems();
    }, [language]);

    return (
        <section id="testimonials" className="text-center lg:text-left mt-auto py-8">
                <div className="container">
                    <div className="flex flex-col justify-center gap-8 lg:justify-start">
                        <h1 className="heading reveal-effect">{testimonials[language].title}</h1>
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            pagination={pagination}
                            modules={[Autoplay, Pagination]}
                            className="testimonialSwiper"
                        >
                            {testimonialItems.map(({ id, img, text, name, position }) => (
                                <SwiperSlide key={id}
                                    className="flex-col justify-center gap-4 !bg-transparent lg:flex-row lg:gap-14">
                                    <img src={img} className="!h-[200px] !w-[200px] rounded lg:!h-[250px] lg:!w-[250px]"
                                        alt={`Testimonial ${id}`} width="250" height="250" />
                                    <div
                                        className="flex flex-col items-center justify-center gap-4 lg:items-start lg:justify-start lg:gap-8 paragraph reveal-effect">
                                        <h3 className="text-center font-medium lg:text-left lg:!text-3xl-">{`${text}`}</h3>
                                        <div className="text-center text-white lg:text-left">
                                            <h2 className="heading !text-2xl text-sm !font-bold text-heading lg:text-base">{name}</h2>
                                            <span className="text-sm text-paragraph">{position}</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
    );
};

export default Testimonial;