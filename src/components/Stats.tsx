import React from "react";
import { stats } from "@/data/stats";

const Stats: React.FC = () => {
    return (
        <section id="stats" className="py-12 sm:py-16">
            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
                {stats.map(stat => (
                    <div
                        key={stat.title}
                        className="rounded-[28px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
                    >
                        <div className="rounded-[20px] p-6 sm:p-8 bg-brand-blue-deep/95 text-brand-white flex flex-col justify-between h-full">
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-brand-yellow text-brand-blue flex items-center justify-center p-3 shadow-glow-yellow mb-5 group-hover:scale-105 transition-transform">
                                    {stat.icon}
                                </div>
                                <h3 className="font-mono text-4xl sm:text-5xl font-black text-brand-yellow tabular-nums tracking-tight mb-2">
                                    {stat.title}
                                </h3>
                                <p className="text-sm sm:text-base text-brand-white/80 font-sans font-light leading-relaxed">
                                    {stat.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;