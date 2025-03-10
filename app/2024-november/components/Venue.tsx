import Link from 'next/link';
import React from 'react';

const Venue = () => {
    return (
        <div className="nav-link-outline w-full flex flex-col items-center justify-center text-center mt-2">
            <h3 className="text-2xl text-[#d4e20b] pt-3 mx-4">Happening On</h3>
            <p className="w-full h-full p-4 text-lg md:text-xl">
                Saturday <span className="text-[#9fb2b2] whitespace-nowrap">23rd November, 2024</span>&nbsp;at&nbsp;<Link href="https://maps.app.goo.gl/bB6HwqDftS4Nq1LT7" target="_blank" rel="noopener noreferrer" className='underline'>UniCourt</Link> Mangaluru organised by&nbsp;<Link href="/" target="_blank" className='underline'>Hackers Mang</Link>.
            </p>
        </div>
    );
};

export default Venue;
