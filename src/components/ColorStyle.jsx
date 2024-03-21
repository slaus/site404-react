import React, {useEffect} from 'react';
import {TiWeatherNight, TiWeatherSunny} from "react-icons/ti";

const ColorStyle = () => {
    const [isDay, setIsDay] = React.useState(true);

    const selectColorStyle = (e) => {
        e.preventDefault();
        setIsDay(!isDay);
    }

    useEffect(() => {
        if (isDay) {
            document.body.classList.add('light-mode');
        } else {
            document.body.classList.remove('light-mode');
        }
    }, [isDay]);

    return (
        <>
            <button type="button" onClick={selectColorStyle} className="mr-16 flex h-9 w-9 items-center justify-center rounded border border-paragraph bg-zinc-300 !bg-opacity-20 backdrop-blur-3xl hover:border lg:mr-0">
                {isDay ? <TiWeatherNight size={26}/> : <TiWeatherSunny color="#d4d4d8" size={26}/>}
            </button>
        </>
    );
};

export default ColorStyle;
