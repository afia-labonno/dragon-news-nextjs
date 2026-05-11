import React from 'react';
import Marquee from 'react-fast-marquee';

const news =[
    {
        id:"1",
        title:"Breaking News: Major Even Unfold in the City",
    },
    {
        id:"2",
        title:"Breaking News: New Policy Announced by the Government",
    },
    {
        id:"3",
        title:"Breaking News: Sports Team Wins Championship",
    },
]

const BreakingNews = () => {
    return (
        <div className='flex gap-4 justify-between items-center bg-gray-200 py-4 px-2 container mx-auto'>
            <button className='btn btn-secondary'>Latest News</button>
            <Marquee pauseOnHover={true} speed={50}>
                {news.map((n)=>
                    <span key={n.id} className='p-4'>{n.title}</span>
                )}
            </Marquee>
        </div>
    );
};

export default BreakingNews;