import React, { useEffect } from 'react';
import about from '../img/about/about.webp';
import { TiArrowRight } from "react-icons/ti";
import { Skills, Wrapper } from "../components";
import { Link } from "react-router-dom";
import { useLanguage } from '../context/LanguageContext';
import { aboutMe } from '../lang/languages';
import Preloader from '../components/Preloader';

const About = () => {
    const { language, switchLanguage } = useLanguage();
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        document.title = aboutMe[language].title;
    }, [language]);

    return (
        <>
            {loading && <Preloader />}
            <section id="about" className="text-center lg:text-left mt-4 py-8">
                <div className="container">
                    <div className="flex flex-col items-center justify-start gap-5 lg:flex-row xl:gap-20">

                        <div className="reveal-effect">
                            <h1 className="heading reveal-effect">{aboutMe[language].welcome}</h1>
                            <p className="paragraph mb-7 mt-6 lg:mb-10 lg:mt-8 reveal-effect">{aboutMe[language].about}</p>
                            <div className="flex xs:flex-col sm:flex-row items-center justify-center gap-8 lg:justify-start reveal-effect">
                                <Link to="/contacts" className="button shadow-2xl">{aboutMe[language].contact}</Link>
                                <Link to="/gallery"
                                    className="group flex items-center gap-2 text-sm font-medium text-heading hover:underline lg:text-base"><span>{aboutMe[language].projects}</span>
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