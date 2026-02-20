"use client";

import React, { useState } from "react";
import { Download, Loader2 } from "lucide-react";

export const DownloadButton = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleDownload = async () => {
        setIsLoading(true);
        try {
            // Dynamically import html2pdf.js
            const html2pdf = (await import("html2pdf.js")).default;

            const element = document.getElementById("resume-content");
            if (!element) {
                console.error("Resume content not found");
                setIsLoading(false);
                return;
            }

            const now = new Date();
            const timestamp = now.toLocaleString().replace(/[/:]/g, "-").replace(/,/g, "");
            const fileName = `Krushna Gore ${timestamp}.pdf`;

            const opt = {
                margin: [10, 10] as [number, number], // top, left, bottom, right in mm
                filename: fileName,
                image: { type: "jpeg", quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true },
                jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
            };

            await html2pdf().set(opt).from(element).save();
        } catch (error) {
            console.error("Error generating PDF:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <button
            onClick={handleDownload}
            disabled={isLoading}
            className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2 rounded hover:bg-slate-800 transition-colors font-medium cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed print:hidden"
        >
            {isLoading ? (
                <span className="flex items-center gap-2">
                    <Loader2 size={18} className="animate-spin" /> Generating...
                </span>
            ) : (
                <span className="flex items-center gap-2">
                    <Download size={18} /> Download CV
                </span>
            )}
        </button>
    );
};
