# Support Portfolio Website

## Overview

This is my professional portfolio website as a Technical Customer Support Specialist focused on SaaS, crypto, fintech, P2P, and digital platform support.

The website presents my support background, tools, experience areas, ticket examples, knowledge base articles, troubleshooting workflows, and support-related projects.

## Purpose

The purpose of this project is to show my ability to combine customer communication, technical troubleshooting, documentation, and support operations in a clear professional portfolio.

## Main Sections

- Home
- About
- Experience
- Resume
- Certificates
- Support Portfolio
- Ticket Examples
- Knowledge Base Articles
- Troubleshooting Workflows
- Crypto & P2P Support
- Projects
- Contact

## Features

- Responsive single-page layout
- Sticky navigation with mobile menu
- Smooth scrolling section links
- Editable portfolio content in one data file
- Professional portrait hero image
- Resume snapshot section
- Google Drive resume link and local PDF resume option
- Certificate upload space using `public/certificates`
- Support ticket examples
- Knowledge base article cards
- Troubleshooting workflow cards
- Crypto and P2P support case studies
- Project cards with placeholder live and GitHub links

## Skills Demonstrated

- Customer support positioning
- Technical support documentation
- Crypto/P2P support knowledge
- Portfolio presentation
- Support project organization
- Help center writing
- Troubleshooting workflow design
- Basic frontend development

## Tools Used

- React
- Vite
- Tailwind CSS
- Lucide React
- GitHub Pages or Vercel

## Running Locally

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Resume and Certificates

- The resume section links to the Google Drive resume and the local PDF at `public/resume/Surafel_Getachew_Resume.pdf`.
- Add certificate PDFs or images to `public/certificates`.
- Update the `certificates` array in `src/data/portfolioData.js` to make uploaded certificates visible on the website.

## Deploying to Vercel

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Keep the build command as `npm run build`.
4. Keep the output directory as `dist`.
5. Deploy.

For Vercel, the `base` value in `vite.config.js` can remain `/`.

## Deploying to GitHub Pages

1. Push this repository to GitHub.
2. In `vite.config.js`, change `base: "/"` to `base: "/support-portfolio-website/"` if the repository name is `support-portfolio-website`.
3. Run `npm run build`.
4. Deploy the `dist` folder using your preferred GitHub Pages workflow.

## Author

Surafel Getachew  
Technical Customer Support Specialist | Crypto, SaaS, Fintech & P2P Support
