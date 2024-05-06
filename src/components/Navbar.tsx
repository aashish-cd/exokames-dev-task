'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
const Navbar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            name: 'Home',
            link: '/',
        },
        {
            id: 2,
            name: 'Ranking',
            link: '/ranking',
        },
        {
            id: 3,
            name: 'Teams',
            link: '/teams',
        },
        {
            id: 4,
            name: 'Blog',
            link: '/blog',
        },
        {
            id: 5,
            name: 'Gallery',
            link: '/gallery',
        },
        {
            id: 7,
            name: 'Auction',
            link: '/auction',
        },
        {
            id: 6,
            name: 'Contact',
            link: '/contact',
        },
        {
            id: 8,
            name: "T&C's",
            link: '/terms-and-conditions',
        },
        {
            id: 9,
            name: 'Portal',
            link: '/portal',
        },
    ];

    return (
        <div className='flex justify-between items-center w-full h-20 px-10 text-white bg-[#948573] sticky top-0 nav'>
            <div>
                <h1 className='text-3xl font-signature ml-2'>
                    <Link
                        className='link-underline link-underline-black'
                        href='/'
                    >
                        Logo
                    </Link>
                </h1>
            </div>

            <ul className='hidden md:flex'>
                {/* large screens only */}
                {links.map(({ id, link, name }) => (
                    <li
                        key={id}
                        className='nav-links px-3 cursor-pointer capitalize font-medium text-white hover:scale-105 hover:text-white duration-200 link-underline'
                    >
                        <Link href={link}>{name}</Link>
                    </li>
                ))}
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className='cursor-pointer pr-4 z-10  md:hidden'
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen md:hidden bg-[#948573]'>
                    {links.map(({ id, link, name }) => (
                        <li
                            key={id}
                            className='cursor-pointer capitalize py-4 text-2xl'
                        >
                            <Link onClick={() => setNav(!nav)} href={link}>
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}

            <select
                name='lang'
                id='lang'
                className=' rounded-full outline outline-1 bg-[#948573] p-2 hidden lg:block'
                style={{
                    height: '60px',
                    width: '60px',
                }}
            >
                <option value='en'>EN</option>
                <option value='af'>AF</option>
            </select>
        </div>
    );
};

export default Navbar;
