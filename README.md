# Shohan - Portfolio Website

A modern, responsive portfolio website showcasing web development skills and projects.

## 🚀 Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Scrolling**: Navigation with smooth scroll to sections
- **Component-Based**: Built with reusable React components
- **Performance Optimized**: Next.js Image optimization and best practices
- **SEO Ready**: Meta tags and structured data for better search visibility

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.6
- **Frontend**: React 19.1.0
- **Styling**: Tailwind CSS v4
- **Typography**: Custom Otterco font family
- **Icons**: React Icons
- **Language**: TypeScript
- **Development**: ESLint for code quality

## 📁 Project Structure

```
shohan/
├── app/
│   ├── components/           # Reusable UI components
│   │   ├── Header.tsx       # Navigation header
│   │   ├── Hero.tsx         # Hero section with profile
│   │   ├── CompanyLogos.tsx # Infinite scrolling logos
│   │   ├── Services.tsx     # Services grid section
│   │   ├── About.tsx        # About section with timeline
│   │   ├── Portfolio.tsx    # Project showcase grid
│   │   ├── Contact.tsx      # Contact section
│   │   └── index.ts         # Component exports
│   ├── globals.css          # Global styles and fonts
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page
├── public/
│   ├── fonts/               # Custom Otterco font files
│   ├── icon/                # Service icons
│   ├── icon-sample/         # Project icons
│   ├── company-logo/        # Company logos
│   └── profile.jpg          # Profile image
└── README.md
```

## 🎨 Sections

### Header
- Responsive navigation with smooth scroll links
- Email contact and CV download buttons
- Social media icons for mobile

### Hero
- Profile image with animated greeting button
- Gradient headline text
- Call-to-action button

### Company Logos
- Infinite scrolling animation
- Responsive height adjustments

### Services
- 4-column grid (2x2 on mobile)
- UX/UI Design, Web Development, Frontend, Backend
- Service icons with descriptions

### About
- Experience badge and timeline
- Work history with border styling
- Resume download section

### Portfolio
- 8 project cards in responsive grid
- Technology stack tags
- Project descriptions and view links

### Contact
- Contact form section
- Social media links
- Footer navigation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd shohan
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Desktop**: ≥ 768px

Features mobile-specific optimizations:
- Simplified navigation with social icons
- Adjusted spacing and typography
- Touch-friendly button sizes
- Optimized image sizes

## ✨ Key Features

### Smooth Scrolling
Implemented CSS `scroll-behavior: smooth` with proper scroll padding for fixed header.

### Custom Fonts
- Otterco Regular (400)
- Otterco Medium (500)
- Otterco Display Medium (500)
- Otterco Light (300)

### Animations
- Infinite scrolling company logos
- Bouncing greeting button
- Smooth hover transitions

### Performance
- Next.js Image optimization
- Proper image sizing and formats
- Component-based architecture
- CSS custom properties for theming

## 🎨 Design System

### Colors
- **Primary**: #F1F0EF
- **Secondary**: #373737
- **Border**: #ECEBEA
- **Background**: #f6f5f4

### Typography
- **Headings**: Otterco Display Medium
- **Body**: Otterco Regular
- **Light Text**: Otterco Light

## 📄 License

This project is for portfolio purposes. All rights reserved.

## 📞 Contact

**Shohan Rahman**
- Email: shohanurrahmandev@gmail.com
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]

---

Built with ❤️ using Next.js and Tailwind CSS
