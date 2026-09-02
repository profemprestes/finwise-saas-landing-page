import React from "react";
import clsx from "clsx";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { IPricing } from "@/types";

interface Props {
    tier: IPricing;
    highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
    const { name, price, features } = tier;

    return (
        <div
            className={clsx(
                "w-full max-w-sm mx-auto rounded-[28px] p-2 transition-all duration-300 lg:max-w-full relative",
                {
                    "bg-brand-yellow/20 border-2 border-brand-yellow shadow-2xl shadow-glow-yellow lg:-translate-y-2 z-10": highlight,
                    "bg-brand-white/10 border border-brand-white/20 shadow-xl hover:-translate-y-1": !highlight
                }
            )}
        >
            <div className="rounded-[20px] p-6 sm:p-8 bg-brand-blue-deep text-brand-white flex flex-col justify-between h-full">
                <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                        <h3 className="font-subheading text-2xl uppercase tracking-wider text-brand-white font-bold">
                            {name}
                        </h3>
                        {highlight && (
                            <span className="px-3 py-1 rounded-full text-[10px] font-subheading font-bold uppercase tracking-widest bg-brand-yellow text-brand-blue shadow-sm">
                                Popular
                            </span>
                        )}
                    </div>

                    <div className="mb-6 flex items-baseline gap-1.5">
                        <span className="font-mono text-4xl sm:text-5xl font-black text-brand-yellow tabular-nums">
                            {typeof price === 'number' ? `$${price}` : price}
                        </span>
                        {typeof price === 'number' && (
                            <span className="text-sm font-sans text-brand-white/70">/mo</span>
                        )}
                    </div>

                    <a
                        href="https://wa.me/542236602699"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={clsx(
                            "w-full block text-center py-3.5 px-6 rounded-full font-subheading uppercase tracking-wider text-xs font-bold transition-all duration-300 mb-8 cursor-pointer",
                            {
                                "bg-brand-yellow text-brand-blue hover:bg-brand-yellow-hover hover:shadow-glow-yellow shadow-md": highlight,
                                "bg-brand-white/10 hover:bg-brand-white/20 text-brand-white border border-brand-white/30": !highlight
                            }
                        )}
                    >
                        Solicitar Servicio
                    </a>

                    <div className="pt-4 border-t border-brand-white/15">
                        <p className="font-subheading uppercase tracking-wider text-xs font-bold text-brand-white/70 mb-1">
                            FEATURES
                        </p>
                        <p className="text-xs text-brand-white/60 mb-5 font-sans">
                            {highlight ? "Everything in basic, plus..." : "Core platform essentials"}
                        </p>
                        <ul className="space-y-3.5">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <BsFillCheckCircleFill className="h-4 w-4 text-brand-yellow shrink-0 mt-0.5 mr-2.5" />
                                    <span className="text-brand-white/85 text-sm font-sans font-light leading-snug">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingColumn;