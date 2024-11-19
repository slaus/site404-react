import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { gallery } from '../lang/languages';

import {
    TiLinkOutline
} from 'react-icons/ti';

const GalleryItem = ({type, title, intro, preview, thumbnail, tags, even, id, img, text}) => {
    const { language, switchLanguage } = useLanguage();
    const navigate = useNavigate();

    return (
        <div className={`bg-main flex w-full flex-col-reverse items-center justify-between gap-6 rounded p-4 sm:p-6 gallery-item ${even ? 'lg:flex-row-reverse' : 'lg:flex-row'} xl:gap-36 reveal-effect`}>
            <div className="lg:ml-5 reveal-effect">
                <div className="flex flex-wrap gap-2 reveal-effect">
                    {type.map((item, index) => (
                        <span key={index} className="gradient rounded-full px-4 py-[3px] text-xs font-medium text-white">{item}</span>
                    ))}
                </div>
                <h1 className="heading my-2 !text-3xl !font-extrabold xl:mt-3 reveal-effect">{title}</h1>
                <p className="paragraph reveal-effect">{intro}</p>
                <div className="item-center mb-6 mt-4 flex gap-5 lg:gap-7 lg:mb-7 lg:mt-5 xs:flex-col sm:flex-row lg:flex-row reveal-effect">
                    <div className="item-center mb-6 mt-4 flex gap-7 reveal-effect">
                        <a className="button shadow-2xl pointer" onClick={(e) => navigate(`/gallery/${id}`, { state: { type, title, intro, preview, thumbnail, tags, even, img, text } })}><span>{gallery[language].case}</span></a>
                    </div>
                    {preview &&
                        <a href={preview} className="flex items-center gap-2 whitespace-nowrap text-xs font-medium text-heading hover:underline lg:text-sm" target="_blank">
                            <TiLinkOutline size={26}/>
                            <span>{gallery[language].preview}</span>
                        </a>
                    }
                </div>
                <div className="flex flex-wrap gap-2 reveal-effect mt-4">
                    <h5 className="heading !text-1xl !font-extrabold">{gallery[language].skills}:</h5>
                    {tags.map((item, index) => (
                        <span key={index} className="gradient rounded-full px-4 py-[3px] text-xs font-medium text-white">#{item}</span>
                    ))}
                </div>
            </div>
            {thumbnail && img &&
                <div className="zoom-gallery flex w-full lg:w-min gallery-image">
                    <a onClick={(e) => navigate(`/gallery/${id}`, { state: { type, title, intro, preview, thumbnail, tags, even, img, text } })} className="w-full lg:w-[400px] xl:w-[467px] pointer">
                        <img 
                            src={thumbnail} 
                            className="rounded object-cover transition-all duration-200 w-full reveal-effect" 
                            alt={title} 
                            onError={(e) => {e.target.closest('.gallery-image').style.display = 'none';}}
                        />
                    </a>
                </div>
            }
        </div>
    );
};

export default GalleryItem;