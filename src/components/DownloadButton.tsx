"use client";

import React, { useState } from "react";
import { Download, Loader2, Printer } from "lucide-react";

export const DownloadButton = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleDownload = async () => {
        setIsLoading(true);
        try {
            const { pdf } = await import("@react-pdf/renderer");
            const { ResumePDF } = await import("./ResumePDF");

            const blob = await pdf(<ResumePDF />).toBlob();
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = "Krushna_Gore_Resume.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Error generating PDF:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="flex items-center gap-3 print:hidden">
            <button
                onClick={handleDownload}
                disabled={isLoading}
                className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2 rounded-md hover:bg-slate-800 transition-colors font-medium text-sm cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed shadow-sm"
                title="Download ATS-Friendly PDF"
            >
                {isLoading ? (
                    <>
                        <Loader2 size={16} className="animate-spin" /> Generating PDF...
                    </>
                ) : (
                    <>
                        <Download size={16} /> Download CV (PDF)
                    </>
                )}
            </button>

            <button
                onClick={handlePrint}
                className="flex items-center gap-2 bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300 px-4 py-2 rounded-md transition-colors font-medium text-sm cursor-pointer shadow-sm"
                title="Print or Save via Browser"
            >
                <Printer size={16} /> Print
            </button>
        </div>
    );
};
