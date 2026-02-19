import React from "react";
import { resumeData } from "@/data/resume";
import { Section } from "./Section";

export const Experience = () => {
    const { experience } = resumeData;

    return (
        <Section title="Experience" id="experience">
            <div className="space-y-6 print:space-y-4">
                {experience.map((job, index) => (
                    <div key={index} className="break-inside-avoid">
                        <div className="flex flex-col md:flex-row justify-between mb-2 print:mb-1">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 print:text-base">
                                    {job.role}
                                </h3>
                                <p className="text-lg font-semibold text-slate-700 print:text-sm">
                                    {job.company}
                                </p>
                            </div>
                            <div className="text-slate-600 text-sm md:text-right print:text-xs">
                                <p>{job.location} | {job.type}</p>
                                <p className="font-medium">{job.period}</p>
                            </div>
                        </div>
                        <ul className="list-disc list-outside ml-5 space-y-1 text-slate-700 print:text-sm">
                            {job.achievements.map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
};
