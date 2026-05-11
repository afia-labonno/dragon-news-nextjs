import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({categories, activeId}) => {
    return (
        <div>
            <h2 className="font-bold text-lg ">
                All Cattegories
            </h2>

            <ul className="flex flex-col gap-3 mt-6">
                {
                    categories.news_category.map((category) => {
                        return <li key={category.category_id}
                            className={`${activeId === category.category_id && "bg-purple-500 text-white"} rounded-md shadow-xs font-semibold text-md text-center text-gray-700`}>

                            <Link href={`/category/${category.category_id}`} className='p-2 block'>
                                
                                {category.category_name}
                            </Link>

                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default LeftSidebar;