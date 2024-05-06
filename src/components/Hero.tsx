import Image from 'next/image';
import React from 'react';
import { GiSouthAfricaFlag } from 'react-icons/gi';
import Card from './sub-components/Card';
import moment from 'moment';
import Link from 'next/link';

const Hero = () => {
    return (
        <section
            className='w-full flex flex-col items-center'
            style={{
                backgroundImage:
                    'url(https://img.freepik.com/premium-photo/people-wallking-blurred-background-wallpaper_846066-14.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '90vh',
            }}
        >
            <div className='w-[90%] flex py-10 gap-10 lg:justify-around items-start lg:items-center flex-col lg:flex-row'>
                <div className='flex flex-col items-start justify-between gap-44'>
                    <div className='flex flex-col justify-center gap-20 '>
                        <h1 className='text-4xl sm:text-5xl font-bold'>
                            AFRIKAPRO 2024
                        </h1>
                        <button className='outline outline-1 py-2 px-10 w-fit text-lg hover:bg-[#000] duration-500 '>
                            2024 Entry Form {'->'}
                        </button>
                    </div>
                    <div className='flex flex-wrap justify-center sm:justify-normal gap-5 overflow-x-auto'>
                        {[
                            {
                                title: '2025 Shipment Dates',
                                date: new Date('2024/05/01'),
                            },
                            {
                                title: '2024 season launch',
                                date: new Date('2024/04/18'),
                            },
                            {
                                title: 'Final dates announcement',
                                date: new Date('2024/06/1'),
                            },
                        ].map((data, i) => (
                            <Link
                                href='/test'
                                key={i}
                                className='relative'
                                style={{
                                    width: '200px',
                                }}
                            >
                                <Image
                                    src={
                                        'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'
                                    }
                                    alt='image'
                                    width={200}
                                    height={150}
                                />
                                <h2 className='absolute top-8 left-5 text-xl'>
                                    {data.title}
                                </h2>

                                <p className=' absolute text-sm left-5 bottom-2 opacity-70'>
                                    {moment(data.date).fromNow()}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col gap-5 items-center '>
                    <Image
                        src={'/versele-logo.png'}
                        alt='people walking'
                        width={250}
                        height={250}
                    />
                    <div className='flex flex-col items-center w-full'>
                        <h2 className='py-4 bg-[#948573] w-full max-w-96 text-center'>
                            2023 Ranking
                        </h2>
                        {cardData.map((data, i) => (
                            <Card
                                key={i}
                                imageUrl={data.imageUrl}
                                title={data.title}
                                name={data.name}
                                image2={data.image2}
                                index={i}
                            />
                        ))}
                    </div>
                    <button
                        className='bg-black text-white w-full max-w-96 py-4 hover:bg-[#948573] duration-500 
                    '
                    >
                        <Link href={'/table'}>View Full Table {'->'}</Link>
                    </button>
                </div>
            </div>
        </section>
    );
};

const cardData = [
    {
        imageUrl:
            'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
        title: 'Champion Fancier',
        name: 'Du Preeze & DP',
        image2: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
    },
    {
        imageUrl:
            'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
        title: 'Ace Pigeon',
        name: 'Pieter and JL',
        image2: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
    },
    {
        imageUrl:
            'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
        title: 'Fancier of the Race',
        name: 'Feather & Co Lorem Ipsum Dolor Sit Amet',
        image2: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
    },
    {
        imageUrl:
            'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
        title: 'Champion Fancier',
        name: 'Du Preeze & DP',
        image2: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
    },
    {
        imageUrl:
            'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
        title: 'Ace Pigeon',
        name: 'Pieter and JL',
        image2: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
    },
    {
        imageUrl:
            'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
        title: 'Fancier of the Race',
        name: 'Feather & Co',
        image2: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
    },
];

export default Hero;
