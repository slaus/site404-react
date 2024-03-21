import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogItem = ({ title, intro, img, even, id, date, thumbnail, text }) => {
    const navigate = useNavigate();

    return (
        <div className={`bg-main flex w-full flex-col-reverse items-center justify-between gap-6 rounded p-6 gallery-item ${even ? 'lg:flex-row-reverse' : 'lg:flex-row'} xl:gap-36 reveal-effect`}>
            <div className="lg:ml-5 reveal-effect">
                <div className="flex flex-wrap gap-2 reveal-effect">
                    <span className="gradient rounded-full px-4 py-[3px] text-xs font-medium text-white">{date}</span>
                </div>
                <h1 className="heading my-2 !text-3xl !font-extrabold xl:mt-3 reveal-effect">{title}</h1>
                <div
                        className="paragraph reveal-effect"
                        dangerouslySetInnerHTML={{ __html: intro }}
                    />
                <div className="item-center mb-6 mt-4 flex gap-7 lg:mb-7 lg:mt-5 reveal-effect">
                <a onClick={(e) => navigate(`/blog/${id}`, { state: { title, intro, img, even, date, thumbnail, text } })} className="button shadow-2xl pointer">
                        <span>Читати повну статтю</span>
                    </a>
                </div>
            </div>
            {thumbnail && img &&
            <div className="zoom-gallery group flex w-full lg:w-min gallery-image">
                <a onClick={(e) => navigate(`/blog/${id}`, { state: { title, intro, img, even, date, thumbnail, text } })} className="w-full lg:w-[400px] xl:w-[467px] pointer">
                    <img 
                        src={img} 
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

export default BlogItem;