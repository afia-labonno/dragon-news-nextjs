import Image from 'next/image';
import userImage from '@/assets/user.png'
import Link from 'next/link';
import React from 'react';
import Navlink from './Navlink';

const Navbar = () => {
    return (
        <div className='container mx-auto py-6 flex justify-between gap-4'>
            <div></div>
            <ul className='flex gap-4 justify-between items-center text-gray-700'>
                <li>
                    <Navlink href={'/'}>Home</Navlink>
                </li>
                <li>
                    <Navlink href={'/about'}>About</Navlink>
                </li>
                <li>
                    <Navlink href={'/career'} className={'text-green-300'}>Career</Navlink>
                </li>
            </ul>

            <div className='flex gap-2'>
                <Image src={userImage} width={40} height={40} alt='user-image'/>
                <button className='bg-gray-600 text-white px-4 py-2'>
                    <Link href={'/login'}>Login</Link>
                </button>

            </div>
        </div>
    );
};

export default Navbar;