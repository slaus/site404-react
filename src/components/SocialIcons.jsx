import React from 'react';
import {TiSocialFacebook,TiSocialTwitter,TiSocialGithub} from 'react-icons/ti';

const SocialIcons = () => {

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

    return (
        <>
            {
                menuItems.map(({link,title,icon}, index) => (
                    <a key={index} href={link} target="_blank" className="hidden lg:block" title={title}>
                        {React.createElement(icon, { className: "fill-paragraph hover:fill-heading", size: 30 })}
                    </a>
                ))
            }
        </>
    );
};

export default SocialIcons;
