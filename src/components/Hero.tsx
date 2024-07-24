'use client';
import React from 'react';

export default function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            <video 
                className="absolute top-0 left-0 w-full h-full object-cover" 
                src="https://v1.pinimg.com/videos/mc/720p/fe/33/a4/fe33a495df6411a9fe3423286a6e0d25.mp4" 
                autoPlay 
                loop 
                muted
            />
            <div className="absolute inset-0  bg-opacity-30 flex justify-center items-end pb-16">
               
            </div>
        </div>
    );
}
