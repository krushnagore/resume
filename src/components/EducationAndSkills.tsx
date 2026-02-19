import React from "react";
import { resumeData } from "@/data/resume";
import { Section } from "./Section";

export const EducationAndSkills = () => {
    const { education, skills } = resumeData;

    return (
        <>
            <Section title="Education" id="education">
                <div className="flex flex-col md:flex-row justify-between break-inside-avoid">
                    <div>
                        <h3 className="text-xl font-bold text-slate-900">
                            {education.degree}
                        </h3>
                        <p className="text-lg text-slate-700">{education.college}</p>
                    </div>
                    <div className="text-slate-600 text-sm md:text-right">
                        <p>{education.university}</p>
                        <p className="font-medium">{education.year}</p>
                    </div>
                </div>
            </Section>

            <Section title="Technical Skills" id="skills">
                <div className="space-y-4">
                    <div>
                        <h3 className="font-bold text-slate-900 mb-1">NetSuite Development & Customization:</h3>
                        <p className="text-slate-700">{skills.netsuite.join(", ")}</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 mb-1">Programming:</h3>
                        <p className="text-slate-700">{skills.programming.join(", ")}</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 mb-1">Integrations:</h3>
                        <p className="text-slate-700">{skills.integrations.join(", ")}</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 mb-1">Tools:</h3>
                        <p className="text-slate-700">{skills.tools.join(", ")}</p>
                    </div>
                </div>
            </Section>
        </>
    );
};
