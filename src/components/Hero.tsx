import React from 'react';
import Image from 'next/image';

import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';

import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-12 pt-32 sm:pt-40 px-4 sm:px-6 lg:px-8 overflow-hidden bg-brand-blue"
        >
            {/* Background Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
                <span className="font-display uppercase text-[15vw] leading-none text-brand-white/[0.04] tracking-tighter whitespace-nowrap">
                    FINWISE PLATFORM
                </span>
            </div>

            <div className="text-center relative z-10 max-w-5xl mx-auto">
                {/* Badge Chip */}
                <div className="inline-flex justify-center mb-6">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-subheading font-bold uppercase tracking-widest bg-brand-yellow text-brand-blue shadow-glow-yellow border border-brand-yellow">
                        Smart Financial Management & Logistics
                    </span>
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display uppercase tracking-tight text-brand-white leading-[0.98] max-w-4xl mx-auto">
                    {heroDetails.heading}
                </h1>

                <p className="mt-5 text-base sm:text-lg text-brand-white/90 max-w-2xl mx-auto font-sans font-light leading-relaxed">
                    {heroDetails.subheading}
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-fit mx-auto">
                    <AppStoreButton />
                    <PlayStoreButton dark />
                </div>

                <div className="relative mt-12 md:mt-16 mx-auto z-10 max-w-[420px] rounded-[28px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-2xl">
                    <Image
                        src={heroDetails.centerImageSrc}
                        width={384}
                        height={340}
                        quality={100}
                        sizes="(max-width: 768px) 100vw, 384px"
                        priority={true}
                        unoptimized={true}
                        alt="app mockup"
                        className='rounded-[20px] w-full h-auto object-contain transform transition-transform duration-500 hover:scale-[1.02]'
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
