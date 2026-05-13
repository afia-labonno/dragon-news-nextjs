'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

const RightSidebar = () => {

    const handleGoogleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }

    const handleGitHubSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "github",
        });
    }

    return (
            <div>
                <h2 className='font-bold text-lg'>Login with</h2>
                <div className='flex flex-col gap-2 mt-4'>
                    <button onClick={handleGoogleSignin}
                        className='btn border border-blue-500 text-blue-500'>
                            <FaGoogle />
                            Login with Google
                    </button>
                    
                    <button onClick={handleGitHubSignin}
                        className='btn'>
                        <FaGithub />
                        Login with Github
                    </button>
                </div>

                <h2 className='text-lg font-semibold mt-8'>Find Us On</h2>
                <div className='flex flex-col gap-2 mt-4 text-start'>
                    <button className='btn'><FaFacebook />Facebook</button>
                    <button className='btn'><FaTwitter />Twitter</button>
                    <button className='btn'><FaInstagram />Instagram</button>
                </div>
            </div>
        );
    };

    export default RightSidebar;