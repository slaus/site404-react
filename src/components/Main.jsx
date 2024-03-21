import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Gallery from "../pages/Gallery";
import Blog from "../pages/Blog";
import Contacts from "../pages/Contacts";
import Resume from "../pages/Calc";
import Page from "../pages/Page";

const Main = () => {

    useEffect(() => {
        document.body.classList.add('w-full', 'bg-body', 'font-inter');
    }, []);

    const [params, setParams] = useState({});

    return (
        <Routes>
            <Route path="/" element={<ElementWithClass className="home"><Home /></ElementWithClass>} />
            <Route path="/about" element={<ElementWithClass className="about"><About /></ElementWithClass>} />
            <Route path="/services" element={<ElementWithClass className="services"><Services /></ElementWithClass>} />
            <Route path="/calc" element={<ElementWithClass className="calc"><Resume /></ElementWithClass>} />
            <Route path="/gallery" element={<ElementWithClass className="projects"><Gallery setParams={setParams} /></ElementWithClass>} />
            <Route path="/gallery/:id" element={<ElementWithClass className="projects"><Page params={params} /></ElementWithClass>} />
            <Route path="/blog" element={<ElementWithClass className="blog"><Blog setParams={setParams} /></ElementWithClass>} />
            <Route path="/blog/:id" element={<ElementWithClass className="blog"><Page params={params} /></ElementWithClass>} />
            <Route path="/contacts" element={<ElementWithClass className="contacts"><Contacts /></ElementWithClass>} />
        </Routes >
    );
};

const ElementWithClass = ({ className, children }) => {
    const location = useLocation();

    useEffect(() => {
        const body = document.body;
        body.classList.add(className);

        return () => {
            body.classList.remove(className);
        };
    }, [className, location.pathname]);

    return children;
};

export default Main;
