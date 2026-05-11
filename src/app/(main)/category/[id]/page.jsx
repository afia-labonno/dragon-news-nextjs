import LeftSidebar from '@/components/hompage/news/LeftSidebar';
import NewsCard from '@/components/hompage/news/NewsCard';
import RightSidebar from '@/components/hompage/news/RightSidebar';
import { getCategories, getNewsByCategoryID } from '@/lib/data';
import React from 'react';

export const metadata = {
  title: "The Dragon News",
};

const NewsCategoryPage = async ({ params }) => {
    const { id } = await params;
    // console.log("paramsResponse: ", id);

    const categories = await getCategories();
    const news = await getNewsByCategoryID(id);
    // console.log("news: ", news );


    return (
        <div className="grid grid-cols-12 gap-5 my-[60px] container mx-auto">

            <div className="bg-base-100 col-span-3 Shadow-md">
                <LeftSidebar categories={categories} activeId={id} />
            </div>

            <div className="bg-base-100 shadow-md col-span-6">

                <h2 className="font-bold text-lg mb-6">
                    News by category
                </h2>
                <div className="space-y-4">
                    {news.length > 0 ? news.map((n) => {
                            return (
                                <NewsCard key={n._id} news={n}>
                                    {n.title}
                                </NewsCard>  
                            );
                        }): <h2 className='text-4xl font-bold text-center my-7'>No news found!</h2>}
                </div>
            </div>

            <div className="bg-base-100 shadow-md col-span-3">
                <RightSidebar />
            </div>

        </div>
    );
};

export default NewsCategoryPage;