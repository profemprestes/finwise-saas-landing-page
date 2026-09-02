import React from 'react';

interface SectionTitleProps {
    children: React.ReactElement<{ className?: string }>;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
    const existingClassName = children.props.className ?? "";
    return React.cloneElement(children, {
        className: (existingClassName ? `${existingClassName} ` : "") + "font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-brand-white leading-tight"
    });
};

export default SectionTitle;