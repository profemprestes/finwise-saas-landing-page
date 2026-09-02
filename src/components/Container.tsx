import React from "react";

interface Props {
    className?: string;
    children?: React.ReactNode;
}

const Container: React.FC<Props> = ({ children, className }: Props) => {
    return (
        <div className={`px-5 w-full max-w-7xl mx-auto ${className ? className : ""}`}>{children}</div>
    );
};

export default Container;