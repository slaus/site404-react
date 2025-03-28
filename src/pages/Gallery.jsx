import React, { useState, useEffect } from 'react';

import { GalleryItem, PaginationNav, Testimonial } from "../components";
import axios from "axios";
import { useLanguage } from '../context/LanguageContext';
import { gallery } from '../lang/languages';
import Preloader from '../components/Preloader';

const Gallery = ({ setParams }) => {
    const { language, switchLanguage } = useLanguage();
    const [loading, setLoading] = React.useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    const [galleryItems, setGalleryItems] = useState([]);

    useEffect(() => {
        const getGalleryItems = async () => {
            await axios.get(`/db/gallery.json`)
                .then((res) => {
                    // console.log(res.data);
                    setGalleryItems(res?.data[language]);
                });
        }

        getGalleryItems();
    }, [language]);

    const totalItems = galleryItems.length;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = galleryItems.slice().reverse().slice(startIndex, endIndex);

    useEffect(() => {
        document.title = gallery[language].title;
    }, [language]);

    return (
        <>
            {loading && <Preloader />}
            <section id="projects" className="my-auto">
                <div className="container">
                    <div className="flex flex-col justify-start gap-8">
                        <h1 className="heading text-center lg:text-left reveal-effect">{gallery[language].heading}</h1>
                        {totalItems > itemsPerPage &&
                            <div className="flex flex-col justify-start">
                                <PaginationNav
                                    itemsPerPage={itemsPerPage}
                                    totalItems={totalItems}
                                    onPageChange={onPageChange}
                                    currentPage={currentPage}
                                    setCurrentPage={setCurrentPage}
                                />
                            </div>
                        }
                        <div className="flex flex-col gap-3 lg:gap-6">
                            {currentItems && Array.isArray(currentItems) &&
                                currentItems.map(({ ...props }) => (
                                    <GalleryItem key={props.id} even={!!!(props.id % 2)} setParams={setParams} {...props} />
                                ))}
                        </div>
                        {totalItems > itemsPerPage &&
                            <div className="flex flex-col justify-start">
                                <PaginationNav
                                    itemsPerPage={itemsPerPage}
                                    totalItems={totalItems}
                                    onPageChange={onPageChange}
                                    currentPage={currentPage}
                                    setCurrentPage={setCurrentPage}
                                />
                            </div>
                        }
                    </div>
                </div>
            </section>
            
            <Testimonial/>
        </>
    );
};

export default Gallery;