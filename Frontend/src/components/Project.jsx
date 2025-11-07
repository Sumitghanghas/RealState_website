import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { CurrencyRupeeIcon, MapPinIcon } from '@heroicons/react/24/solid';
const projects = [
    {
        name: 'Ireo The Corridors',
        price: 'On Request',
        location: 'Sector 67A, Gurgaon',
        image: './src/assets/gallery/project/pro.jpg',
    },
    {
        name: 'Godrej Astra',
        price: 'On Request',
        location: 'Sector 84, Gurgaon',
        image: './src/assets/gallery/project/pro_2.jpg',
    },
    {
        name: 'EMAAR India Business Centre',
        price: 'On Request',
        location: 'Sector 62, Gurgaon',
        image: './src/assets/gallery/project/pro_4.jpg',
    },
    {
        name: 'Whiteland Westin Residences',
        price: 'On Request',
        location: 'Sector 103, Gurgaon',
        image: './src/assets/gallery/project/pro_5.jpg',
    },
    {
        name: 'Whiteland Westin Residences',
        price: 'On Request',
        location: 'Sector 103, Gurgaon',
        image: './src/assets/gallery/project/pro_6.jpg',
    },
    {
        name: 'Whiteland Westin Residences',
        price: 'On Request',
        location: 'Sector 103, Gurgaon',
        image: './src/assets/gallery/project/pro_7.jpg',
    },
];

const Project = () => {
    const scrollRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-scroll with pause on hover
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered && scrollRef.current) {
                scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });

                // Loop back if near end
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }
            }
        }, 4000);
        return () => clearInterval(interval);
    }, [isHovered]);

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: -320, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: 320, behavior: 'smooth' });
    };

    return (
        <section className="px-6 py-16 bg-white text-black relative">
            <div className="max-w-7xl mx-auto">
                {/* Heading and Description */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-14 gap-4">
                    <div>
                        <h2 className="text-3xl font-bold">
                            <span className="text-cyan-700">NEWLY LAUNCHED</span>{' '}
                            <span className="text-black">PROJECTS</span>
                        </h2>
                        <p className="mt-2 max-w-xl text-gray-700">
                            Our projects are a testament to the sustainable urban evolution that creates an exceptional lifestyle for many. As a leading real estate developer, we consistently strive to build projects that set a new standard for residential & commercial property.
                        </p>
                    </div>
                    <button className="bg-cyan-700 text-white px-4 py-2 rounded-md font-semibold">
                        For Query
                    </button>
                </div>

                {/* Carousel with buttons */}
                <div className="relative">
                    {/* Left Button */}
                    <button
                        onClick={scrollLeft}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
                    >
                        <ChevronLeftIcon className="h-8 w-8 text-gray-700" />
                    </button>

                    {/* Right Button */}
                    <button
                        onClick={scrollRight}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
                    >
                        <ChevronRightIcon className="h-8 w-8 text-gray-700" />

                    </button>

                    {/* Scrollable Cards */}
                    <div
                        ref={scrollRef}
                        className="overflow-x-auto hide-scrollbar scroll-smooth snap-x snap-mandatory px-10 flex gap-6 w-full"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onTouchStart={() => setIsHovered(true)}
                        onTouchEnd={() => setIsHovered(false)}
                    >
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="snap-start min-w-[320px] h-[400px] bg-gray-100 rounded-lg shadow-md overflow-hidden"
                            >
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-70 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-bold mb-1">{project.name}</h3>
                                    <div className="flex items-center gap-1 text-sm text-gray-700 mt-2">
                                        <CurrencyRupeeIcon className="h-4 w-4 text-cyan-700" />
                                        <span>{project.price}</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-sm text-gray-700">
                                        <MapPinIcon className="h-4 w-4 text-cyan-700" />
                                        <span>{project.location}</span>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;