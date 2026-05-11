import { getNewsDetailsByID } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye, FaStar } from 'react-icons/fa';
import { IoMdArrowBack } from 'react-icons/io';

export const generateMetadata = async({params})=> {
  const {id} = await params ;
//   console.log(id, "params");
  const news = await getNewsDetailsByID(id) ;
//   console.log(news, "news");

  return{
    title : news.title,
    description: news.details,
  }
};

const NewsDetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id , "id");

    const news = await getNewsDetailsByID(id);
    // console.log(news);


    return (
        <div className='max-w-3xl mx-auto my-6'>
            <div className="card bg-base-100 shadow-sm p-2">

                <div className="card-body">

                    {/* author */}
                    <div className='flex justify-between items-center bg-slate-200 p-4'>
                        <div className='flex gap-1 items-center'>
                            <Image src={news.author?.img}
                                alt="author-name"
                                width={40} height={40}
                                className='rounded-full'
                            />
                            <div>
                                <h2 className='font-semibold'>{news.author?.name}</h2>
                                <p className='text-xs'>{news.author?.published_date}</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center gap-2'>
                            <CiShare2 className='text-xl' />
                            <CiBookmark className='text-xl' />
                        </div>
                    </div>

                    <h2 className="card-title">{news.title}</h2>

                </div>

                <figure>
                    <Image
                        src={news.image_url}
                        alt={news.title}
                        width={300}
                        height={300}
                        className='w-full'
                    />
                </figure>
                <p>{news.details}</p>

                <div className='flex items-center justify-between gap-2 my-3'>
                    <div className='flex gap-4 items-center'>
                        <h2 className='flex gap-1 items-center'>
                            <FaStar className='text-lg text-yellow-500' />
                            {news.rating.number}
                        </h2>
                        <h2 className='flex gap-1 items-center'>
                            <FaEye className='text-lg' />
                            {news.total_view}
                        </h2>
                    </div>

                    <Link href={`/category/${news.category_id}`}>
                        <button className='btn btn-secondary'>
                            <IoMdArrowBack className='text-lg'/>
                            See other news for this category
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default NewsDetailsPage;