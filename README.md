# Support Portfolio Website

## Overview

This is my professional support portfolio website as a Technical Customer Support Specialist focused on SaaS, fintech, crypto, P2P, and digital platform support.

Live site: https://surafelgetachew.com

The website presents my support background, resume, tools, experience areas, ticket examples, crypto/P2P case studies, knowledge base articles, troubleshooting workflows, support operations templates, and technical support engineer examples.

## Purpose

The purpose of this project is to show my ability to combine customer communication, technical troubleshooting, documentation, support operations, escalation judgment, and crypto/P2P support knowledge in one polished portfolio.

## Main Pages

- Home
- About
- Resume
- Showcases
- Customer Support Ticket Examples
- Crypto & P2P Support Case Studies
- Knowledge Base Articles
- Technical Troubleshooting Workflows
- Support Operations Templates
- Technical Support Engineer Examples
- Testimonials / Feedback
- Contact

## Features

- Modern routed React portfolio website
- Six detailed showcase pages
- Print-ready showcase pages for PDF export
- Sticky navigation with mobile menu
- Responsive desktop, tablet, and mobile layouts
- Professional SaaS/support-dashboard visual style
- Resume links: Google Drive and local PDF
- Certificate upload space using `public/certificates`
- Editable content in `src/data/portfolioData.js` and `src/data/showcaseData.js`
- Vercel custom domain support with SPA rewrites in `vercel.json`

## Skills Demonstrated

- Customer support positioning
- Ticket response writing
- Technical support documentation
- Crypto/P2P support knowledge
- P2P dispute handling
- Knowledge base writing
- Troubleshooting workflow design
- Support operations templates
- Technical escalation notes
- Frontend portfolio presentation

## Tools Used

- React
- Vite
- React Router
- Tailwind CSS
- Lucide React
- Vercel

## Running Locally

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## PDF Export Workflow

Open any showcase page and click **Download PDF**. In the browser print dialog, choose **Save as PDF**.

Recommended PDF files:

- Customer Support Ticket Examples.pdf
- Crypto and P2P Support Case Studies.pdf
- Knowledge Base Article Samples.pdf
- Technical Troubleshooting Workflows.pdf
- Support Operations Templates.pdf
- Technical Support Engineer Examples.pdf

## Resume and Certificates

- The resume section links to the Google Drive resume and the local PDF at `public/resume/Surafel_Getachew_Resume.pdf`.
- Add certificate PDFs or images to `public/certificates`.
- Update the `certificates` array in `src/data/portfolioData.js` to make uploaded certificates visible on the website.

## Deploying to Vercel

1. Push this repository to GitHub.
2. Import or link the repository in Vercel.
3. Keep the build command as `npm run build`.
4. Keep the output directory as `dist`.
5. Deploy.

For Vercel, the `base` value in `vite.config.js` can remain `/`.

The `vercel.json` file includes rewrites so direct links like `/showcases/customer-support-ticket-examples` work correctly.

## Deploying to GitHub Pages

1. Push this repository to GitHub.
2. In `vite.config.js`, change `base: "/"` to `base: "/support-portfolio-website/"` if the repository name is `support-portfolio-website`.
3. For GitHub Pages, consider switching from `BrowserRouter` to `HashRouter` or adding a proper Pages fallback workflow.
4. Run `npm run build`.
5. Deploy the `dist` folder using your preferred GitHub Pages workflow.

## Author

Surafel Getachew  
Technical Customer Support Specialist | Crypto, SaaS, Fintech & P2P Support
