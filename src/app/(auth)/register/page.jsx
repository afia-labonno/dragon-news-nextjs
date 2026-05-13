'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const RegisterPage = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [isShowPassword, setIsShowPassword] = useState(false)

    const handleLogin = async (data) => {
        //    console.log(data);
        const { email, name, photo, password } = data;


        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photo,
            callbackURL: "/",
        });
        console.log(res, error);
        if (error) {
            toast.error(error.message);
        }
        if (res) {
            toast.success("Sign Up Successfull")
        }
    };

    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100'>
            <div className='p-4 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center py-4'>Login your account</h2>

                <div className="divider"></div>

                <form className='space-y-4' onSubmit={handleSubmit(handleLogin)}>

                    {/* name */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold">Your Name</legend>
                        <input
                            {...register("name", { required: "Name field is required" })}
                            type="text"
                            className="input"
                            placeholder="Enter your name"
                        />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </fieldset>

                    {/* photo */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold">Photo URL</legend>
                        <input
                            {...register("photo", { required: "Photo field is required" })}
                            type="text"
                            className="input"
                            placeholder="Choose a photo"
                        />
                        {errors.photo && <p className='text-red-600'>{errors.photo.message}</p>}
                    </fieldset>

                    {/* Email */}
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold">Email address</legend>
                        <input
                            {...register("email", { required: "Email field is required" })}
                            type="email"
                            className="input"
                            placeholder="Enter your email"
                        />
                        {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </fieldset>

                    {/* Password */}
                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend font-semibold">Password</legend>
                        <input
                            {...register("password", { required: "Password field is required" })}
                            type={isShowPassword ? "text" : "password"}
                            className="input"
                            placeholder="Enter your password"
                        />

                        <span className='absolute right-2 top-5'
                            onClick={() => setIsShowPassword(!isShowPassword)}>
                            {isShowPassword ? <FaEye /> : <FaEyeSlash />}
                        </span>
                        {errors.password && <p className='text-red-600'>{errors.password.message}</p>}
                    </fieldset>

                    <button className='btn w-full bg-slate-700 text-white'>Confirm Registration</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;