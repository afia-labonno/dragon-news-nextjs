'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {

    const {register, handleSubmit, watch, formState:{errors}} = useForm();

    const handleLogin=(data)=>{
    //    console.log(data);
    }

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center py-4'>Login your account</h2>

                <div className="divider"></div>

                <form className='space-y-4' onSubmit={handleSubmit(handleLogin)}>
                    {/* Email */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold">Email address</legend>
                        <input 
                            {...register("email", {required:"Email field is required"})}
                            type="email" 
                            className="input" 
                            placeholder="Enter your email" 
                        />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </fieldset>

                    {/* Password */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold">Password</legend>
                        <input 
                            {...register("password" , {required: "Password field is required"})}
                            type="password" 
                            className="input" 
                            placeholder="Enter your password" 
                        />
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    </fieldset>

                    <button className='btn w-full bg-slate-700 text-white'>Login</button>
                    <p className='mt-2 text-center'>Don't have an account? 
                        <Link href={"/register"} 
                            className='text-blue-600 font-semibold'>
                            Register
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;