import React, { useState, useEffect } from 'react';

import {
    TiChevronLeft,
    TiChevronRight
} from 'react-icons/ti';

import { BlogItem, PaginationNav } from "../components";
import axios from "axios";
import { useLanguage } from '../context/LanguageContext';
import { blog } from '../lang/languages';

const Blog = ({ setParams }) => {
    const { language, switchLanguage } = useLanguage();

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const onPageChange = (page) => {
        setCurrentPage(page);
    };

    const [blogItems, setBlogItems] = useState([]);

    useEffect(() => {
        const getBlogItems = async () => {
            await axios.get(`/db/blog.json`)
                .then((res) => {
                    // console.log(res.data);
                    setBlogItems(res?.data[language]);
                });
        }

        getBlogItems();
    }, [language]);

    const totalItems = blogItems.length;
    console.log(totalItems)
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = blogItems.slice().reverse().slice(startIndex, endIndex);

    useEffect(() => {
        document.title = blog[language].title;
    }, []);

    return (
        <section id="blog" className="my-auto">
            <div className="container">
                <div className="flex flex-col justify-start gap-8">
                    <h1 className="heading text-center lg:text-left reveal-effect">{blog[language].heading}</h1>
                    <div className="flex flex-col gap-3 lg:gap-6">
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
                                currentItems?.map(({ ...props }) => (
                                    <BlogItem key={props.id} even={!!!(props.id % 2)} setParams={setParams} {...props} />
                                ))
                            }
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
            </div>
        </section>
    );
};

export default Blog;