import React from 'react';
import Image from 'next/image';
import { testimonials } from '@/data/testimonials';

const Testimonials: React.FC = () => {
    return (
        <div className="grid gap-6 sm:gap-8 max-w-lg w-full mx-auto lg:grid-cols-3 lg:max-w-full">
            {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    className="rounded-[28px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
                >
                    <div className="rounded-[20px] p-6 sm:p-7 bg-brand-blue-deep/95 text-brand-white flex flex-col justify-between h-full">
                        <div className="mb-5">
                            <div className="flex items-center gap-3.5 mb-4">
                                <div className="relative shrink-0">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={`${testimonial.name} avatar`}
                                        width={48}
                                        height={48}
                                        className="rounded-full border-2 border-brand-yellow shadow-glow-yellow object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-subheading text-lg uppercase tracking-wider text-brand-yellow font-bold leading-tight">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-xs text-brand-white/70 font-sans">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                            <p className="text-brand-white/90 text-sm sm:text-base font-sans font-light leading-relaxed">
                                &quot;{testimonial.message}&quot;
                            </p>
                        </div>

                        <div className="pt-4 border-t border-brand-white/10 flex items-center gap-1 text-brand-yellow text-xs font-mono">
                            ★★★★★ <span className="text-brand-white/50 text-[10px] ml-1">Verified Partner</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Testimonials;
