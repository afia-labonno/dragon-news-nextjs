'use client'
import Image from 'next/image';
import userImage from '@/assets/user.png'
import Link from 'next/link';
import React from 'react';
import Navlink from './Navlink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const {data: session, isPending} = authClient.useSession();
    // console.log(session);
    const user = session?.user;
    console.log(user);

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

        
           { isPending? (<span className="loading loading-spinner text-info"></span>) : user? (
                 <div className='flex gap-2 justify-center items-center'>
                <h2>Hi, {user?.name}!</h2>
                <Image src={user?.image || userImage} width={40} height={40} alt='user-image'/>
                <button 
                onClick={async()=> await authClient.signOut()}
                className='bg-gray-600 text-white px-4 py-2'>
                    Logout
                </button>

            </div>
            ) : (
                
                <button className='bg-gray-600 text-white px-4 py-2'>
                    <Link href={'/login'}>Login</Link>
                </button>
            )}
            
        </div>
    );
};

export default Navbar;