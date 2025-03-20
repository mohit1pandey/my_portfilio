import React from 'react'

import JournalAppBakend from '../assets/Projects/JournalAppBakend.png';
import SCM from '../assets/Projects/SCM.png';
import Movie from '../assets/Projects/Movie.png';
import MyPortfolio from '../assets/Projects/Portfolio.png';

const Portfolio = () => {

    const cardItems = [
        {
            id: 1,
            logo: JournalAppBakend,
            title: "JournalAppBakend",
            link: "https://example.com/journal-app",
            souceCode: "https://github.com/mohit1pandey/Journal_app.git",
            details: "Technologies: Spring Boot & Security, Redis, MongoDB"
        },
        {
            id: 2,
            logo: SCM,
            title: "Smart Contact Manager",
            link: "https://example.com/smart-contact-manager",
            souceCode: "https://github.com/mohit1pandey/smartContactManager.git",
            details: "Technologies: Spring Boot, Spring Security, Thymeleaf, MySQL"
        },
        {
            id: 3,
            logo: Movie,
            title: "Movie APP",
            link: "https://example.com/movie-app",
            souceCode: "https://github.com/mohit1pandey/movie_app.git",
            details: "Technologies: React, Redux, Movie API"
        },
        {
            id: 4,
            logo: MyPortfolio,
            title: "My Portfolio",
            link: "https://example.com/portfolio",
            souceCode: "https://github.com/username/portfolio",
            details: "Technologies: React, Tailwind CSS , React Forms"
        },
    ];
    


    return (
        <div name='PortFolio'
            className='max-w-screen-3xl w-full container mx-auto px-4 md:px-20 my-16'>
            <div>
                <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
                <span className='underline font-semibold' > <h4>Featured : </h4> </span> Below are some projects I made recently 

                {/* map items */}
                {/* <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'> */}
                <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-x-1 gap-y-6 my-5 '>


                    {
                        cardItems.map(({ id, logo, title, link, souceCode, details}) => {

                            return (
                                <div key={id} className='md:w-[300px] md:h-[310px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-200 content-around'>
                                    <img src={logo} alt="" className='w-[120px] h-[120px] p-1 rounded-full border-[2px] object-cover' />
                                    <div>
                                        <div className='font-bold text-lg mb-2 px-2'>{title}</div>
                                        <p className='px-2 text-gray-700'>{details}</p>
                                    </div>

                                    <div className='px-6 py-3 space-x-5'>
                                        <a href={link || "#"} target="_blank" rel="noopener noreferrer">
                                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-3 rounded'>Visit</button>
                                        </a>
                                        <a href={souceCode || "#"} target="_blank" rel="noopener noreferrer">
                                            <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-3 rounded'>SourceCode</button>
                                        </a>

                                    </div>
                                </div>

                            )
                        })
                    }

                </div>
            </div>

        </div>
    )
}

export default Portfolio