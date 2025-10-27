# Bahá'ís of San Carlos

A modern, responsive website for the Bahá'í community of San Carlos, California, built with Next.js and deployed on Firebase Hosting.

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-Hosting-FFCA28?style=flat-square&logo=firebase)](https://firebase.google.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](https://opensource.org/licenses/MIT)
[![Deployment](https://img.shields.io/badge/Deployment-sancarlosbahai.org-orange?style=flat-square)](https://sancarlosbahai.org)

## 🌟 Features

- **Modern Design**: Clean, elegant interface with regal typography using Crimson Text and Inter fonts
- **Responsive Layout**: Optimized for all devices from mobile to desktop
- **Static Site Generation**: Fast loading with Next.js static export
- **SEO Optimized**: Proper metadata and semantic HTML structure
- **Accessibility**: WCAG compliant with proper alt text and keyboard navigation
- **Performance**: Optimized images and efficient code splitting
- **Community Focus**: Showcases local Bahá'í activities and community building

## 🏗️ Tech Stack

- **Framework**: Next.js 15.5.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Fonts**: Crimson Text (serif) and Inter (sans-serif)
- **Icons**: Lucide React
- **Deployment**: Firebase Hosting
- **Package Manager**: pnpm

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vramdhanie/sancarlosbahais.git
cd sancarlosbahais
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
pnpm build
# or
npm run build
```

The static files will be generated in the `out/` directory, ready for deployment.

## 📁 Project Structure

```
sancarlosbahais/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css        # Global styles and font definitions
│   │   ├── layout.tsx         # Root layout with metadata
│   │   └── page.tsx           # Home page
│   └── components/            # Reusable React components
│       ├── Header.tsx         # Hero section with logo
│       ├── WelcomeSection.tsx # Community introduction
│       ├── ActivitiesSection.tsx # Core activities showcase
│       ├── AboutSection.tsx   # Bahá'í Faith information
│       ├── ContactSection.tsx # Contact information
│       ├── Footer.tsx         # Footer with links
│       └── index.ts           # Component exports
├── public/                    # Static assets
│   ├── logo.png              # Bahá'í community logo
│   └── favicon.png           # Site favicon
├── .github/workflows/         # GitHub Actions for deployment
├── firebase.json             # Firebase Hosting configuration
├── next.config.ts            # Next.js configuration
└── package.json              # Dependencies and scripts
```

## 🎨 Design Philosophy

The website embodies the principles of the Bahá'í Faith through its design:

- **Unity in Diversity**: Clean, inclusive design that welcomes all visitors
- **Service to Humanity**: Clear call-to-action for community involvement
- **Spiritual Growth**: Elegant typography that conveys gravitas and warmth
- **Community Building**: Focus on local activities and connection

## 🌐 Deployment

The site is automatically deployed to Firebase Hosting via GitHub Actions:

- **Production**: Pushes to `main` branch deploy to [sancarlosbahai.org](https://sancarlosbahai.org)
- **Preview**: Pull requests create preview deployments
- **Configuration**: Managed through `firebase.json` and GitHub Actions workflows

### Manual Deployment

```bash
# Build the project
pnpm build

# Deploy to Firebase (requires Firebase CLI)
firebase deploy
```

## 🤝 Contributing

We welcome contributions from the community! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain component modularity
- Ensure accessibility compliance
- Test on multiple devices and browsers

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lucide React](https://lucide.dev/) for beautiful icons
- [Firebase](https://firebase.google.com/) for hosting and deployment
- The Bahá'í community of San Carlos for inspiration and content

## 📞 Contact

For questions about this website or the Bahá'í community of San Carlos:

- **Email**: info@sancarlosbahai.org
- **Website**: [sancarlosbahai.org](https://sancarlosbahai.org)
- **Repository**: [vramdhanie/sancarlosbahais](https://github.com/vramdhanie/sancarlosbahais)

---

*"The earth is but one country, and mankind its citizens."* — Bahá'u'lláh