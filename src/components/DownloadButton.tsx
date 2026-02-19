"use client";

import React from "react";
import { Download } from "lucide-react";

export const DownloadButton = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <button
            onClick={handlePrint}
            className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2 rounded hover:bg-slate-800 transition-colors font-medium cursor-pointer"
            aria-label="Download CV as PDF"
        >
            <Download size={18} />
            Download CV
        </button>
    );
};
