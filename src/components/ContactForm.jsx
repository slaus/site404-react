import React from 'react';
import axios from "axios";

const ContactForm = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [isSent, setIsSent] = React.useState(false);
    const [isError, setIsError] = React.useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
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
                    <label htmlFor="name" className="text-sm text-heading lg:text-base">Ваше ім'я</label>
                    <div className="mt-2">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            placeholder="Введіть своє ім'я *"
                            className="bg-main w-full rounded border-none px-3 py-2.5 text-sm !text-paragraph outline-none lg:text-base"
                            required
                        />
                    </div>
                </div>
                <div className="col-span-2 mt-1 reveal-effect">
                    <label htmlFor="email" className="text-sm text-heading lg:text-base">Ваш e-mail</label>
                    <div className="mt-2">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="Введіть свій e-mail *"
                            className="bg-main w-full rounded border-none px-3 py-2.5 text-sm !text-paragraph outline-none lg:text-base"
                            required
                        />
                    </div>
                </div>
                <div className="col-span-2 mt-1 reveal-effect">
                    <label htmlFor="phone" className="text-sm text-heading lg:text-base">Ваш номер телефону</label>
                    <div className="mt-2">
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                            placeholder="Введіть свій номер телефону *"
                            className="bg-main w-full rounded border-none px-3 py-2.5 text-sm !text-paragraph outline-none lg:text-base"
                            required
                        />
                    </div>
                </div>
                <div className="col-span-2 mt-1 reveal-effect">
                    <label htmlFor="message" className="text-sm text-heading lg:text-base">Ваше повідомлення</label>
                    <div className="mt-2">
                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            className="bg-main w-full rounded border-none px-3 py-2.5 text-sm !text-paragraph outline-none lg:text-base"
                            placeholder="Введіть своє повідомлення *"
                            rows="4"
                            required
                        />
                    </div>
                </div>
            </div>
            <button type="submit" className="button mt-4 reveal-effect">Надіслати повідомлення</button>
            {isSent && <div className="alert contactform__loader pt-3 text-center paragraph"><p>Повідомлення було відправлено!</p></div>}
            {isError && <div className="alert contactform__loader pt-3 text-center paragraph error"><p>Помилка. Щось пішло не так!</p></div>}
        </form>
    );
};

export default ContactForm;