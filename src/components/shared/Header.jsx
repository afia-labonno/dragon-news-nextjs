import Image from 'next/image';
import logo from '@/assets/logo.png'
import React from 'react';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='py-8 space-y-2 text-center'>
            <Image src={logo} width={300} height={200} alt='logo' className='mx-auto'/>

            <h2>Journalism Without Fear or Favour</h2>
            <p>{format(new Date(), "EEEE, MMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;