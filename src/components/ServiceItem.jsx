
import React from 'react';
import { TiTicket, TiPuzzleOutline, TiImageOutline, TiDeviceLaptop, TiArrowMaximiseOutline, TiLightbulb } from "react-icons/ti";

const ServiceItem = ({ title, text, icon }) => {
    const iconComponents = {
        TiTicket,
        TiPuzzleOutline,
        TiImageOutline,
        TiDeviceLaptop,
        TiArrowMaximiseOutline,
        TiLightbulb
    };
    const IconComponent = iconComponents[icon];

    return (
        <div className="bg-main group flex flex-col items-center justify-center rounded p-7 lg:items-start lg:justify-start reveal-effect service-item">
            <div className="gradient m-auto rounded p-3 text-white transition-all duration-700 group-hover:!rotate-[360deg] lg:m-0 reveal-effect icon-block">
                {
                    <IconComponent className="h-7 w-7" size={26} />
                }
            </div>
            <h1 className="heading mb-3 mt-4 !text-2xl reveal-effect">{title}</h1>
            <p className="paragraph reveal-effect">{text}</p>
        </div>
    );
};

export default ServiceItem;