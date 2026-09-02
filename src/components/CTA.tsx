import React from "react";
import { ctaDetails } from "@/data/cta";

import AppStoreButton from "./AppStoreButton";
import PlayStoreButton from "./PlayStoreButton";

const CTA: React.FC = () => {
    return (
        <section id="cta" className="my-12 sm:my-20">
            <div className="relative w-full rounded-[32px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-2xl">
                <div className="rounded-[24px] py-12 sm:py-20 px-6 sm:px-12 bg-brand-blue-deep relative overflow-hidden text-center">
                    {/* Background glow decoration */}
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
                    <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-blue/30 rounded-full blur-3xl pointer-events-none -z-0"></div>

                    <div className="relative z-10 flex flex-col items-center justify-center text-brand-white">
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-subheading font-bold uppercase tracking-widest bg-brand-yellow text-brand-blue mb-5 shadow-glow-yellow">
                            Get Started Today
                        </span>
                        
                        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-brand-white leading-tight mb-4 max-w-3xl">
                            {ctaDetails.heading}
                        </h2>

                        <p className="mx-auto max-w-xl text-base sm:text-lg text-brand-white/85 font-sans font-light leading-relaxed mb-8">
                            {ctaDetails.subheading}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-fit mx-auto">
                            <AppStoreButton />
                            <PlayStoreButton dark />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA