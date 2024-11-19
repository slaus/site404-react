import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";
import axios from "axios";
import { useLanguage } from '../context/LanguageContext';
import { calc } from '../lang/languages';

const Calc = () => {
    const { language, switchLanguage } = useLanguage();

    const [activeItem, setActiveItem] = useState(null);
    const [summ, setSumm] = useState(0);
    const [info, setInfo] = useState(null);
    const [other, setOther] = useState([]);
    const [calcItems, setCalcItems] = useState([]);

    useEffect(() => {
        const getCalcItems = async () => {
            await axios.get(`/db/calc.json`)
                .then((res) => {
                    // console.log(res.data);
                    setCalcItems(res?.data[language]);
                });
        }

        getCalcItems();
    }, [language]);

    const selectTypeProject = (id, price, info, other) => {
        setActiveItem(id === activeItem ? null : id);
        setSumm(id === activeItem ? 0 : price);
        setInfo(id === activeItem ? null : info);
    
        const updatedOther = other.map(item => {
            return {
                ...item,
                checked: item.selected ? true : false
            };
        });
        setOther(id === activeItem ? [] : updatedOther);
    };

    const selectOtherParams = (item) => {
        const price = item.price || 0;
        const updatedSumm = item.checked ? summ - price : summ + price;
        setSumm(updatedSumm);
        
        if (other && Array.isArray(other)) {
            setOther(prevOther => {
                const updatedOther = prevOther.map(otherItem => {
                    if (otherItem.id === item.id) {
                        return { ...otherItem, checked: !otherItem.checked };
                    }
                    return otherItem;
                });
                return updatedOther;
            });
        }
    }
    
    useEffect(() => {
        if (activeItem !== null) {
            // console.log(calcItems[activeItem - 1]?.other)
            const selectedOtherSum = other.reduce((total, item) => item.selected ? total + item.price : total, 0);
            setSumm(summ + selectedOtherSum);
        }
    }, [activeItem]);
    
    const usd = 41;

    useEffect(() => {
        document.title = calc[language].title;
    }, [language]);

    return (
        <section id="calc" className="text-center lg:text-left my-auto py-8">
            <div className="container">
                <div className="flex flex-col justify-start gap-8">
                    <h1 className="heading reveal-effect">{calc[language].heading}</h1>
                    <div className="grid gap-3 lg:gap-6 calc-block">
                        <div className='paragraph reveal-effect py-2'>{calc[language].intro}</div>
                        <div className='grid grid-cols-1 md:grid-cols-2 calc-menu gap-3 lg:gap-6'>
                            <div className='mb-6'>
                                <div className='mb-6'>
                                    <h3 className='heading mb-3 !text-2xl reveal-effect'>{calc[language].type}</h3>
                                    {calcItems && Array.isArray(calcItems) &&
                                    calcItems?.map(item => (
                                        <div
                                            key={item.id}
                                            onClick={() => selectTypeProject(item.id, item.price, item.info, item.other)}
                                            className={`calc-link text-disable group-hover:text-heading paragraph ${item.id === activeItem ? 'active' : ''}`}
                                        ><MdKeyboardArrowRight size={24}/> {item.site_type}
                                            {/* <span className='help'><FaQuestion size={9} color="#fff" /><span>{info}</span></span> */}
                                        </div>
                                    ))
                                    }
                                </div>
                                {info &&
                                    <div className='paragraph reveal-effect calc-info'>{info}</div>
                                }
                            </div>
                            <div>
                                <h3 className='heading mb-3 !text-2xl reveal-effect'>{calc[language].params}</h3>
                                <div className="mt-4 calc-params">
                                    {other && 
                                        other?.map((item, index) => (
                                            <div key={index} className={`flex gap-2 other ${item.selected ? "disabled" : ''}`}>
                                                <input 
                                                    id={item.id} 
                                                    className='other-checkbox'
                                                    type="checkbox" 
                                                    value={item.price || 0}
                                                    checked={item.checked}
                                                    onChange={() => selectOtherParams(item)}
                                                    disabled={item.selected ? "disabled" : ''}
                                                />
                                                <label className='paragraph pointer other-label' htmlFor={item.id}>{item.add} <span className='badge'>+{language === 'uk' ? item.price * usd : item.price}</span></label>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className="calc-summ mt-6 heading">{calc[language].budget}: <span className='ml-auto'>{language === 'uk' ? summ * usd : summ}</span> {language === 'uk' ? 'грн.' : 'USD'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Calc;