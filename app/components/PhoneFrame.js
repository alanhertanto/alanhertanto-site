'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function PhoneFrame({ children }) {
    const searchParams = useSearchParams();
    const [isLandscape, setIsLandscape] = useState(false);

    useEffect(() => {
        const landscape = searchParams.get('landscape') === 'true';
        setIsLandscape(landscape);
    }, [searchParams]);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900">
            <div className={`flex ${isLandscape ? 'w-[1280px] h-[720px]' : 'w-[380px] h-[820px]'} rounded-[55px] overflow-hidden border-4 border-gray-600`}>
                <div className={`relative ${isLandscape ? 'w-[1270px] h-[710px]' : 'w-[375px] h-[812px]'} wallpaper1 rounded-[50px] shadow-lg overflow-hidden border-8 border-gray-800`}>
                    {children}
                </div>
            </div>
        </div>
    );
}
