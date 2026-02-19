import React from "react";
import { resumeData } from "@/data/resume";
import { Section } from "./Section";

export const Projects = () => {
    const { projects } = resumeData;

    return (
        <Section title="Project Highlights" id="projects">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside text-slate-700">
                {projects.map((project, index) => (
                    <li key={index} className="break-inside-avoid">
                        {project}
                    </li>
                ))}
            </ul>
        </Section>
    );
};
