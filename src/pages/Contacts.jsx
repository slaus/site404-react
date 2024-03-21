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

const Contacts = () => {
    const telVodafon = "+380 (95) 166-7070";
    const telLife = "+380 (93) 004-3739";
    const address = "Одеська область, Україна";
    const emailAddress = "MisterDDOTSlausGAVgmailDDOTcom";
    const clickOnEmail = (e) => {
        return e.target.href = e.target.href.replace(/GAV/,'@').replace(/DDOT/,'.').toLowerCase();
    }

    const menuItems = [
        {
            "link": "https://facebook.com/",
            "title": "Facebook",
            "icon": TiSocialFacebook
        },
        {
            "link": "https://twitter.com/",
            "title": "Twitter",
            "icon": TiSocialTwitter
        },
        {
            "link": "https://github.com/slaus",
            "title": "Github",
            "icon": TiSocialGithub
        },
    ];

    useEffect(() => {
        document.title = "Сторінка контактів";
    }, []);

    return (
        <section id="contact" className="text-white my-auto">
            <div className="container">
                <div className="flex flex-col justify-start gap-8">
                    <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:gap-0">
                        <div className="reveal-effect">
                            <h1 className="heading reveal-effect">Давайте зв'яжемось!</h1>
                            <p className="paragraph my-4 lg:my-8 reveal-effect lg:w-[400px]">Завжди доступний для фрілансу, якщо з’являється потрібний проект. Не соромтеся зв’язуватися зі мною через WhatsApp, Telegram або Viber.</p>
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
                        <div className="bg-main w-full rounded p-7 lg:w-[55%] reveal-effect relative">
                            <p className="paragraph mb-4 !text-sm italic lg:mb-8">
                                *Зв’яжіться зі мною та заповніть контактну форму нижче.
                            </p>
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;