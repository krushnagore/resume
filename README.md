# Krushna Gore - CV Website

High-performance, ATS-friendly personal CV website built with Next.js and Tailwind CSS.

## ⚡ Features

- **ATS-Friendly PDF Generation**: Uses native browser print functionality for structured, selectable text output.
- **Performance First**: Built on Next.js App Router with minimal client-side JavaScript.
- **Responsive**: Mobile-friendly layout.
- **SEO Optimized**: Proper metadata and semantic HTML.

## 🚀 Getting Started

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000).

3.  **Build for Production**
    ```bash
    npm run build
    npm start
    ```

## 📄 PDF Generation

To generate the PDF:
1.  Click the **Download CV** button on the homepage.
2.  The browser's print dialog will open.
3.  Ensure **Destination** is set to **Save as PDF**.
4.  Ensure **Background graphics** is checked if you want to keep styling details (though the print stylesheet is optimized for clean output regardless).
5.  Click **Save**.

The generated PDF is text-selectable and ATS-parsable.
