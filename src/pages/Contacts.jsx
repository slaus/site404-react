import React, {useEffect} from 'react';
import {
    TiSocialFacebook,
    TiSocialTwitter,
    TiSocialGithub,
    TiPhoneOutline,
    TiMail,
    TiLocationOutline,
    TiDevicePhone
} from 'react-icons/ti';
import {ContactForm} from "../components";
import { useLanguage } from '../context/LanguageContext';
import { contacts } from '../lang/languages';
import Preloader from '../components/Preloader';

const Contacts = () => {
    const { language, switchLanguage } = useLanguage();
    const [loading, setLoading] = React.useState(true);

    const telVodafon = contacts[language].vodafon;
    const telLife = contacts[language].life;
    const address = contacts[language].address;
    const emailAddress = "MisterDDOTSlausGAVgmailDDOTcom";
    const clickOnEmail = (e) => {
        return e.target.href = e.target.href.replace(/GAV/,'@').replace(/DDOT/,'.').toLowerCase();
    }

    const menuItems = [
        {
            "link": contacts[language].facebook,
            "title": "Facebook",
            "icon": TiSocialFacebook
        },
        {
            "link": contacts[language].twitter,
            "title": "Twitter",
            "icon": TiSocialTwitter
        },
        {
            "link": contacts[language].github,
            "title": "Github",
            "icon": TiSocialGithub
        },
    ];

    useEffect(() => {
        document.title = contacts[language].title;
    }, [language]);

    return (
        <>
        {loading && <Preloader />}
        <section id="contact" className="text-white my-auto">
            <div className="container">
                <div className="flex flex-col justify-start gap-8">
                    <div className="flex flex-col items-start justify-between gap-8 md:flex-row lg:gap-5">
                        <div className="reveal-effect">
                            <h1 className="heading reveal-effect">{contacts[language].heading}</h1>
                            <p className="paragraph my-4 lg:my-8 reveal-effect lg:w-[400px]">{contacts[language].intro}</p>
                            <div className="flex flex-col gap-3 text-sm lg:text-base reveal-effect">
                                <a href={`tel:${telVodafon}`} className="flex items-center gap-3 text-paragraph hover:text-heading hover:underline">
                                    <TiDevicePhone className="h-6 w-6 text-paragraph" size={26}/>
                                    <span>{telVodafon}</span>
                                </a>
                                <a href={`tel:${telLife}`} className="flex items-center gap-3 text-paragraph hover:text-heading hover:underline">
                                    <TiPhoneOutline className="h-6 w-6 text-paragraph" size={26}/>
                                    <span>{telLife}</span>
                                </a>
                                <a href={`mailto:${emailAddress}`} onClick={clickOnEmail} className="flex items-center gap-3 text-paragraph hover:text-heading hover:underline">
                                    <TiMail className="h-6 w-6 text-paragraph" size={26}/>
                                    <span>{`info{at}site404.in.ua`}</span>
                                </a>
                                <a className="flex items-center gap-3 text-paragraph hover:text-heading hover:underline">
                                    <TiLocationOutline className="h-6 w-6 text-paragraph" size={26}/>
                                    <span>{address}</span>
                                </a>
                                {menuItems.map(({link,title, icon},index) => (
                                    <a key={index} href={link ? link : (e) => e.preventDefault()} className="flex items-center gap-3 text-paragraph hover:text-heading hover:underline" target="_blank">
                                        {React.createElement(icon, { className: "h-6 w-6 text-paragraph", size: 26 })}
                                        <span>{title}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="bg-main w-full rounded p-4 sm:p-6 lg:w-[55%] reveal-effect relative">
                            <p className="paragraph mb-4 !text-sm italic lg:mb-8">{contacts[language].feedback}</p>
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Contacts;