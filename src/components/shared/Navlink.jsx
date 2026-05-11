'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href, children, className}) => {

    const pathname = usePathname()
    // console.log("Pathname: ", pathname);

    const isActive = href === pathname ;

    return (
        <Link href={href} className={`${isActive ? "text-purple-700 font-bold border-b-2 border-b-cyan-300" : ""} ${className}`}>
            {children}
        </Link>
    );
};

export default Navlink;