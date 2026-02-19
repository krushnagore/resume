import React from "react";
import { resumeData } from "@/data/resume";
import { Section } from "./Section";

export const Experience = () => {
    const { experience } = resumeData;

    return (
        <Section title="Professional Experience" id="experience">
            <div className="space-y-6">
                {experience.map((job, index) => (
                    <div key={index} className="break-inside-avoid">
                        <div className="flex flex-col md:flex-row justify-between mb-2">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">
                                    {job.role}
                                </h3>
                                <p className="text-lg font-semibold text-slate-700">
                                    {job.company}
                                </p>
                            </div>
                            <div className="text-slate-600 text-sm md:text-right">
                                <p>{job.location} | {job.type}</p>
                                <p className="font-medium">{job.period}</p>
                            </div>
                        </div>
                        <ul className="list-disc list-outside ml-5 space-y-1 text-slate-700">
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
