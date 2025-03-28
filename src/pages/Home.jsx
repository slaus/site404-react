import React, {useEffect} from 'react';
import hero from '../img/home/hero.webp';

import resume from '../Bantysh-Vyacheslav__cv.pdf';
import { Clients } from '../components';
import { useLanguage } from '../context/LanguageContext';
import { home } from '../lang/languages';
import Preloader from '../components/Preloader';

const Home = () => {
    const { language, switchLanguage } = useLanguage();
    const [loading, setLoading] = React.useState(true);

    const getAllYears = () => {
        const currentYear = new Date().getFullYear();
        return currentYear - 2006;
    };

    const getAllClients = () => {
        const startDate = new Date('June 1, 2006');
        const currentDate = new Date();

        const diffInMonths = ((currentDate.getFullYear() - startDate.getFullYear()) * 12 +
            (currentDate.getMonth() - startDate.getMonth())) * 2;

        return diffInMonths;
    };

    useEffect(() => {
        document.title = home[language].title;
      }, [language]);

    return (
        <>
            {loading && <Preloader />}
            <section id="home" className="!text-center lg:!text-left my-auto py-8">
                <div className="container">
                    <div
                        className="flex flex-col-reverse items-center justify-center gap-8 lg:flex-row lg:justify-between lg:gap-32">
                        <div className="reveal-effect">
                            <h1 className="mb-3 font-darker text-2xl font-bold text-heading">{home[language].hello}</h1>
                            <h2 className="heading">{home[language].iam}</h2>
                            <p className="paragraph mb-7 mt-5 w-80 sm:mb-10 sm:mt-8 sm:w-[420px]">{home[language].intro1} {getAllYears()} {home[language].intro2}</p>
                            <a href={resume} target="_blank" className="button shadow-2xl">{home[language].cv}</a>
                            <div className="mt-9 xs:flex-col sm:flex-row flex justify-center gap-3 sm:justify-start sm:gap-10 reveal-effect f-full">
                                <div className="flex items-center justify-center gap-3">
                                    <h3 className="heading !font-inter !font-semibold">{getAllYears()}+</h3><span
                                        className="paragraph !text-left !text-xs !leading-normal sm:!text-sm">{home[language].years}<br />{home[language].experience}</span>
                                </div>
                                <span className="w-[0.5px] bg-disable"></span>
                                <div className="flex items-center justify-center gap-3">
                                    <h3 className="heading !font-inter !font-semibold">{getAllClients()}+</h3><span
                                        className="paragraph !text-left !text-xs !leading-normal sm:!text-sm">{home[language].finished}<br />{home[language].projects}</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-[80%] sm:w-3/5 lg:w-auto reveal-effect">
                            <img src={hero} alt="Hero image" width="473" height="463" />
                        </div>
                    </div>
                </div>
            </section>

            <Clients />
        </>
    );
};

export default Home;