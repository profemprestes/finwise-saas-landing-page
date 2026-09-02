"use client"
import Image from "next/image";
import clsx from "clsx";
import { motion, Variants } from "framer-motion"

import BenefitBullet from "./BenefitBullet";
import SectionTitle from "../SectionTitle";
import { IBenefit } from "@/types";

interface Props {
    benefit: IBenefit;
    imageAtRight?: boolean;
}

const containerVariants: Variants = {
    offscreen: {
        opacity: 0,
        y: 100
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.9,
            delayChildren: 0.2,
            staggerChildren: 0.1,
        }
    }
};

export const childVariants: Variants = {
    offscreen: {
        opacity: 0,
        x: -50,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 1,
        }
    },
};

const BenefitSection: React.FC<Props> = ({ benefit, imageAtRight }: Props) => {
    const { title, description, imageSrc, bullets } = benefit;

    return (
        <section className="benefit-section">
            <motion.div
                className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-16 lg:flex-nowrap mb-20 sm:mb-28"
                variants={containerVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
            >
                <div
                    className={clsx("flex flex-wrap items-center w-full max-w-xl", { "justify-start": imageAtRight, "lg:order-1 justify-end": !imageAtRight })}
                >
                    <div className="w-full text-center lg:text-left">
                        <motion.div
                            className="flex flex-col w-full"
                            variants={childVariants}
                        >
                            <SectionTitle>
                                <h3 className="lg:max-w-2xl font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-brand-white leading-tight">
                                    {title}
                                </h3>
                            </SectionTitle>

                            <p className="mt-3 mx-auto lg:ml-0 text-base sm:text-lg leading-relaxed text-brand-white/85 font-sans font-light">
                                {description}
                            </p>
                        </motion.div>

                        <div className="mx-auto lg:ml-0 w-full mt-4 space-y-2">
                            {bullets.map((item, index) => (
                                <BenefitBullet key={index} title={item.title} icon={item.icon} description={item.description} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className={clsx("mt-6 lg:mt-0 flex justify-center", { "lg:order-2": imageAtRight })}>
                    <div className="w-fit rounded-[28px] p-2 bg-brand-white/10 border border-brand-white/20 shadow-2xl backdrop-blur-sm">
                        <Image
                            src={imageSrc}
                            alt={title}
                            width={384}
                            height={762}
                            quality={100}
                            unoptimized={true}
                            className="rounded-[20px] max-h-[480px] w-auto object-contain transform transition-transform duration-500 hover:scale-[1.02]"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default BenefitSection;