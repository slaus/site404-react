import React from 'react';
import axios from "axios";
import { useLanguage } from '../context/LanguageContext';
import { contacts } from '../lang/languages';
import captcha from '../img/captcha.png';

const ContactForm = () => {
    const { language, switchLanguage } = useLanguage();

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [honeypot, setHoneypot] = React.useState('');
    const [captchaAnswer, setCaptchaAnswer] = React.useState('');
    const [isCaptchaError, setIsCaptchaError] = React.useState(false);
    const [isSent, setIsSent] = React.useState(false);
    const [isError, setIsError] = React.useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (honeypot) {
            return;
        }

        if (parseInt(captchaAnswer) != 5) {
            setIsCaptchaError(true);
            setTimeout(() => setIsCaptchaError(false), 2000);
            return;
        }

        const data = new FormData();
        data.append('name', name);
        data.append('email', email);
        data.append('phone', phone);
        data.append('message', message);

        axios.post('/feedback.php', data)
            .then(response => {
                console.log(response.data);
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
                setHoneypot('');
                setCaptchaAnswer('');
                setIsSent(true);
                setTimeout(() => {
                    setIsSent(false);
                }, 5000);
            })
            .catch(error => {
                setIsError(true);
                setTimeout(() => {
                    setIsError(false);
                }, 5000);
                console.log(error);
            });

    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 mt-1 reveal-effect">
                    <label htmlFor="name" className="text-sm text-heading lg:text-base">{contacts[language].name}</label>
                    <div className="mt-2">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            placeholder={contacts[language].namePh}
                            className="bg-main w-full rounded px-3 py-2.5 text-sm !text-paragraph outline-none lg:text-base"
                            required
                        />
                    </div>
                </div>
                <div className="col-span-2 mt-1 reveal-effect">
                    <label htmlFor="email" className="text-sm text-heading lg:text-base">{contacts[language].email}</label>
                    <div className="mt-2">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder={contacts[language].emailPh}
                            className="bg-main w-full rounded px-3 py-2.5 text-sm !text-paragraph outline-none lg:text-base"
                            required
                        />
                    </div>
                </div>
                <div className="col-span-2 mt-1 reveal-effect">
                    <label htmlFor="phone" className="text-sm text-heading lg:text-base">{contacts[language].tel}</label>
                    <div className="mt-2">
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                            placeholder={contacts[language].telPh}
                            className="bg-main w-full rounded px-3 py-2.5 text-sm !text-paragraph outline-none lg:text-base"
                            required
                        />
                    </div>
                </div>
                <div className="col-span-2 mt-1 reveal-effect">
                    <label htmlFor="message" className="text-sm text-heading lg:text-base">{contacts[language].message}</label>
                    <div className="mt-2">
                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            className="bg-main w-full rounded px-3 py-2.5 text-sm !text-paragraph outline-none lg:text-base"
                            placeholder={contacts[language].messagePh}
                            rows="4"
                            required
                        />
                    </div>
                </div>
                <div className="col-span-2 mt-1 reveal-effect" style={{ display: 'none' }}>
                    <label htmlFor="honeypot" className="text-sm text-heading lg:text-base">Leave this field empty</label>
                    <input
                        type="text"
                        name="honeypot"
                        style={{ display: 'none' }}
                        value={honeypot}
                        onChange={(event) => setHoneypot(event.target.value)}
                    />
                </div>
                <div className="col-span-2 mt-1 reveal-effect flex flex-row w-full gap-2">
                    <img src={captcha} />
                    <input
                        type="text"
                        id="captcha"
                        value={captchaAnswer}
                        onChange={(event) => setCaptchaAnswer(event.target.value)}
                        placeholder={contacts[language].captchaPh}
                        className="bg-main w-full rounded px-3 py-2.5 text-sm !text-paragraph outline-none lg:text-base"
                        required
                    />
                </div>
            </div>
            <button type="submit" className="button mt-4 reveal-effect" disabled={honeypot}>{contacts[language].send}</button>
            {isSent && <div className="alert contactform__loader pt-3 text-center paragraph"><p>{contacts[language].success}</p></div>}
            {isError && <div className="alert contactform__loader pt-3 text-center paragraph error"><p>{contacts[language].error}</p></div>}
            {isCaptchaError && <div className="alert contactform__loader pt-3 text-center paragraph error"><p>{contacts[language].captchaError}</p></div>}
        </form>
    );
};

export default ContactForm;