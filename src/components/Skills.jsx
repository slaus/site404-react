import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useLanguage } from '../context/LanguageContext';
import { skills } from '../lang/languages';

const Skills = () => {
    const { language, switchLanguage } = useLanguage();
    const [skillItems, setSkillItems] = useState([]);

    useEffect(() => {
        const getSkillItems = async () => {
            await axios.get(`/db/skills.json`)
                .then((res) => {
                    // console.log(res.data);
                    setSkillItems(res?.data);
                });
        }

        getSkillItems();
    }, []);

    return (
        <section id="skills" className="text-center lg:text-left mt-4 mb-6">
                <div className="container">
                    <div className="flex flex-col justify-start gap-8">
                        <h1 className="heading reveal-effect">{skills[language].title}</h1>
                        <div className="grid grid-cols-2 sm:grid-cols-3 justify-between gap-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-6">
                            {skillItems && Array.isArray(skillItems) &&
                                skillItems?.map(({ img, title }, index) => (
                                    <div key={index} className="bg-main group service-item flex w-full flex-col items-center justify-center rounded py-8 lg:py-5 xl:py-9 reveal-effect">
                                        <img src={img} className="w-1/4 transition-all duration-700 group-hover:!rotate-[360deg] sm:w-1/5 lg:w-1/3 xl:w-1/4 reveal-effect" alt={title} width="46" height="46" />
                                        <h2 className="heading mt-4 !text-2xl lg:!text-3xl reveal-effect text-center">{title}</h2>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Skills;