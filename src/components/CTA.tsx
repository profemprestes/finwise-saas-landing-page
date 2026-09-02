import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi2";
import { ctaDetails } from "@/data/cta";

const CTA: React.FC = () => {
    return (
        <section id="cta" className="my-12 sm:my-20">
            <div className="relative w-full rounded-[32px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-2xl">
                <div className="rounded-[24px] py-12 sm:py-20 px-6 sm:px-12 bg-brand-blue-deep relative overflow-hidden text-center">
                    {/* Background glow decoration */}
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
                    <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-blue/30 rounded-full blur-3xl pointer-events-none -z-0"></div>

                    <div className="relative z-10 flex flex-col items-center justify-center text-brand-white">
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-subheading font-bold uppercase tracking-widest bg-brand-yellow text-brand-blue mb-5 shadow-glow-yellow border border-brand-yellow">
                            Atención Inmediata
                        </span>
                        
                        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-brand-white leading-tight mb-4 max-w-3xl">
                            {ctaDetails.heading}
                        </h2>

                        <p className="mx-auto max-w-xl text-base sm:text-lg text-brand-white/85 font-sans font-light leading-relaxed mb-8">
                            {ctaDetails.subheading}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-fit mx-auto">
                            <a
                                href={ctaDetails.whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-3 rounded-full font-subheading uppercase tracking-wider font-bold px-8 py-3.5 min-h-[52px] bg-brand-yellow text-brand-blue hover:bg-brand-yellow-hover hover:shadow-glow-yellow transition-all duration-300 text-sm sm:text-base shadow-xl"
                            >
                                <FaWhatsapp className="text-xl" />
                                <span>{ctaDetails.primaryButtonText}</span>
                                <span className="w-7 h-7 rounded-full flex items-center justify-center bg-brand-blue/15 text-brand-blue group-hover:bg-brand-blue group-hover:text-brand-yellow transition-all">
                                    <HiArrowRight className="text-xs" />
                                </span>
                            </a>

                            <Link
                                href="/cotizar/express"
                                className="group inline-flex items-center gap-2 rounded-full font-subheading uppercase tracking-wider font-bold px-8 py-3.5 min-h-[52px] bg-brand-white/10 hover:bg-brand-white/20 text-brand-white border border-brand-white/30 hover:border-brand-white transition-all duration-300 text-sm sm:text-base"
                            >
                                <span>Calcular Tarifa Online</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;