import Image from 'next/image';
import React from 'react';
import { GiSouthAfricaFlag } from 'react-icons/gi';

interface IProps {
    imageUrl: string;
    title: string;
    name: string;
    image2: string;
    index: number;
}
const Card = ({ imageUrl, title, name, image2, index }: IProps) => {
    return (
        <div
            className={`${
                index % 2 === 0 ? 'bg-[#efefef]' : 'bg-[#ffffff]'
            } gap-2 w-full max-w-96 flex text-black justify-between items-center p-2`}
        >
            <Image
                src={imageUrl}
                alt={name}
                width={80}
                height={80}
                className='rounded-xl'
            />
            <div className='w-full'>
                <p className='line-clamp-1 text-sm'>{title}</p>
                <p className='flex'>
                    <GiSouthAfricaFlag size={20} />
                    <span className=' line-clamp-1 '>{name}</span>
                </p>
            </div>
            <Image
                src={image2}
                alt={title}
                width={80}
                height={80}
                className='rounded-xl '
            />
        </div>
    );
};

export default Card;
