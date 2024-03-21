import React from 'react';
import { Link } from 'react-router-dom';
import { TiDocument, TiImage, TiBook, TiContacts, TiHomeOutline, TiCogOutline } from 'react-icons/ti';

const TabButtons = () => {
    const menuItems = [
        {
            "link": "/",
            "title": "Головна"
        },
        {
            "link": "/about",
            "title": "Про мене"
        },
        {
            "link": "/resume",
            "title": "Резюме"
        },
        {
            "link": "/services",
            "title": "Послуги"
        },
        {
            "link": "/gallery",
            "title": "Галерея"
        },
        {
            "link": "/contacts",
            "title": "Контакти"
        }
    ];

    return (
        <>
            <div className="col-lg-8 col-md-9 col-sm-8">
                <ul className="tab-buttons">
                    {menuItems.map(({ title, link }, index) => (
                        <li key={index}>
                            <Link to={link} data-rel="item-two">
                                <span>{title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <ul className="tab-buttons tab-buttons-mobile">
                <li className="selected">
                    <Link to="/home" data-rel="item-one"><TiHomeOutline size={24} /></Link>
                </li>
                <li>
                    <Link to="/document" data-rel="item-two"><TiDocument size={24} /></Link>
                </li>
                <li>
                    <Link to="/cog" data-rel="item-three"><TiCogOutline size={24} /></Link>
                </li>
                <li>
                    <Link to="/image" data-rel="item-four"><TiImage size={24} /></Link>
                </li>
                <li>
                    <Link to="/book" data-rel="item-five"><TiBook size={24} /></Link>
                </li>
                <li>
                    <Link to="/contacts" data-rel="item-six"><TiContacts size={24} /></Link>
                </li>
            </ul>
        </>
    );
};

export default TabButtons;
