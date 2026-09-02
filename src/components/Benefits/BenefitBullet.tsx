import React from "react";
import { motion } from "framer-motion";

import { IBenefitBullet } from "@/types";
import { childVariants } from "./BenefitSection";

const BenefitBullet: React.FC<IBenefitBullet> = ({ title, description, icon }: IBenefitBullet) => {
    return (
        <motion.div
            className="flex flex-col items-center lg:items-start text-center lg:text-left mt-6 gap-3.5 lg:flex-row"
            variants={childVariants}
        >
            <div className="w-11 h-11 rounded-xl bg-brand-yellow text-brand-blue flex items-center justify-center p-2.5 shadow-glow-yellow shrink-0 group-hover:scale-105 transition-transform">
                {icon}
            </div>
            <div>
                <h4 className="text-base sm:text-lg font-subheading uppercase tracking-wider text-brand-white font-bold">
                    {title}
                </h4>
                <p className="text-sm sm:text-base text-brand-white/80 font-sans font-light leading-relaxed mt-1">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

export default BenefitBullet;