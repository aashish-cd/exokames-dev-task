import Link from 'next/link';
import React from 'react';

const NogFound = () => {
    return (
        <div className='flex flex-col gap-5 justify-center items-center h-screen'>
            <h1 className='text-4xl'>This route is not yet available.</h1>
            <button className='outline outline-1 px-5 py-2'>
                <Link href={'/'}>Go to home {'->'}</Link>
            </button>
        </div>
    );
};

export default NogFound;
