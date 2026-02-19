import React from "react";

interface SectionProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export const Section: React.FC<SectionProps> = ({
    title,
    children,
    className = "",
    id,
}) => {
    return (
        <section id={id} className={`mb-8 ${className}`}>
            {title && (
                <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-slate-200 pb-2 mb-4 uppercase tracking-wide print:text-xl print:mb-2 print:pb-1">
                    {title}
                </h2>
            )}
            {children}
        </section>
    );
};
