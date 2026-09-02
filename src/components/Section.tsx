import React from "react";
import SectionTitle from "./SectionTitle";

interface Props {
    id: string;
    title: string;
    description: string;
    children: React.ReactNode;
}

const Section: React.FC<Props> = ({ id, title, description, children }: Props) => {
    return (
        <section id={id} className="py-6 sm:py-10">
            <div className="text-center mb-10 sm:mb-14">
                <SectionTitle>
                    <h2 className="text-center mb-3 font-display uppercase tracking-tight text-3xl sm:text-4xl lg:text-5xl text-brand-white">
                        {title}
                    </h2>
                </SectionTitle>
                <p className="text-center text-brand-white/85 text-base sm:text-lg max-w-2xl mx-auto font-sans font-light leading-relaxed">
                    {description}
                </p>
            </div>
            {children}
        </section>
    );
};

export default Section;