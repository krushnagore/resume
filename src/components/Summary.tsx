import React from "react";
import { resumeData } from "@/data/resume";
import { Section } from "./Section";

export const Summary = () => {
    const { summary } = resumeData;

    return (
        <Section title="Professional Summary" id="summary">
            <p className="text-slate-700 leading-relaxed text-lg">
                {summary}
            </p>
        </Section>
    );
};
