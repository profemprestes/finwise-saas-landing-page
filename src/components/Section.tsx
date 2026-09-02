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
        <section id={id} className="py-10 lg:py-20">
            <SectionTitle>
                <h2 className="text-center mb-4">{title}</h2>
            </SectionTitle>
            <p className="mb-12 text-center">{description}</p>
            {children}
        </section>
    );
};

export default Section;