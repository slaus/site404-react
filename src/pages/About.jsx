import React, { useEffect } from 'react';
import about from '../img/about/about.webp';
import { TiArrowRight } from "react-icons/ti";
import { Skills, Wrapper } from "../components";
import { Link } from "react-router-dom";

const About = () => {
    useEffect(() => {
        document.title = "Сторінка про мене";
    }, []);

    return (
        <>
            <section id="about" className="text-center lg:text-left mt-4 py-8">
                <div className="container">
                    <div className="flex flex-col items-center justify-start gap-5 lg:flex-row xl:gap-20">

                        <div className="reveal-effect">
                            <h1 className="heading reveal-effect">Ласкаво просимо на мій сайт</h1>
                            <p className="paragraph mb-7 mt-6 lg:mb-10 lg:mt-8 reveal-effect">
                                З 2006 року активно працюю в Інтернеті. З перших робіт упор при створенні сайтів робився на високу якість веб-дизайну та технічного виконання. Для кожного замовника унікальний веб-дизайн, хоча можна вибрати вже готовий. Це мій принцип при створенні сайтів будь-якої цінової категорії. Однією з переваг співпраці зі мною є те, що я готовий надати Вам повний комплекс послуг. Від вибору та покупки доменного імені до розміщення на сервері в Європі. Я завжди сподіваюся на довгострокову співпрацю з нашими клієнтами. Готовий взяти на себе всю роботу, пов'язану з розміщенням сайту в мережі Інтернет та його функціонуванням, пошуковою оптимізацією та просуванням сайту в мережі Інтернет. Звичайно, технічна підтримка та адміністрування сайту
                            </p>
                            <div className="flex items-center justify-center gap-8 lg:justify-start reveal-effect">
                                <Link to="/contacts" className="button shadow-2xl">Будемо на зв'язку!</Link>
                                <Link to="/gallery"
                                    className="group flex items-center gap-2 text-sm font-medium text-heading hover:underline lg:text-base"><span>Готові проекти</span>
                                    <TiArrowRight className="h-5 w-5 group-hover:scale-125" />
                                </Link>
                            </div>
                        </div>
                        {/* <img src={about} className="w-4/5 sm:w-3/5 lg:-ml-7 reveal-effect" alt="I am" width="445" height="465" /> */}
                    </div>
                </div>
            </section>

            <Skills />
        </>
    );
};

export default About;