import React, {useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Page = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    const handleGoBack = (e) => {
        e.preventDefault();
        navigate(-1);
    };

    useEffect(() => {
        document.title = "Сторінка сайту";
    }, []);

    return (
        <section id="page" className="text-center lg:text-left my-auto py-8">
            <div className="container">
                <div className="item-center mb-6 mt-4 flex gap-7 lg:mb-7 lg:mt-5 reveal-effect">
                    <a href="#" onClick={handleGoBack} className="button shadow-2xl"><span>Повернутися назад</span></a>
                </div>
                <div className="flex flex-col justify-start gap-8 paragraph">
                    <h1 className="heading reveal-effect">{state.title}</h1>
                    {(state.type || state.tags) &&
                    <div className="flex flex-wrap gap-2 reveal-effect">
                        {state.type && state.type.map((item, index) => (
                            <span key={index} className="gradient rounded-full px-4 py-[3px] text-xs font-medium text-white">{item}</span>
                        ))}
                        {state.tags && state.tags.map((item, index) => (
                            <span key={index} className="gradient rounded-full px-4 py-[3px] text-xs font-medium text-white">{item}</span>
                        ))}
                    </div>
                    }
                    {state.date &&
                    <div className="flex flex-wrap gap-2 reveal-effect">
                        <span className="gradient rounded-full px-4 py-[3px] text-xs font-medium text-white">{state.date}</span>
                    </div>
                    }
                    <div
                        className="flex flex-col gap-3 lg:gap-6"
                        dangerouslySetInnerHTML={{ __html: state.intro }}
                    />
                    <img src={state.img} alt={state.title} />
                    <div
                        className="flex flex-col gap-3 lg:gap-6"
                        dangerouslySetInnerHTML={{ __html: state.text }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Page;