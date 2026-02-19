import React from "react";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { resumeData } from "@/data/resume";
import { DownloadButton } from "./DownloadButton";

export const Hero = () => {
    const { name, role, phone, email, location, linkedin, linkedinUrl, summary } = resumeData;



    return (
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b-2 border-slate-800 pb-8 print:border-b-0 print:pb-0">
            <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 uppercase tracking-tight">
                    {name}
                </h1>
                <p className="text-xl md:text-2xl text-slate-600 font-medium mb-4">
                    {role}
                </p>

                <div className="flex flex-wrap gap-4 text-sm md:text-base text-slate-600 mb-6 print:mb-2">
                    <div className="flex items-center gap-1">
                        <Phone size={16} />
                        <span>{phone}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Mail size={16} />
                        <a href={`mailto:${email}`} className="hover:text-blue-600 transition-colors">
                            {email}
                        </a>
                    </div>
                    <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Linkedin size={16} />
                        <a
                            href={linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 transition-colors"
                        >
                            {linkedin}
                        </a>
                    </div>
                </div>

                <div className="print:hidden">
                    <DownloadButton />
                </div>
            </div>
        </header>
    );
};
