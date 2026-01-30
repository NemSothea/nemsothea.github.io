# Nem Sothea - Personal Portfolio Website

## 🌟 Overview
A modern, responsive personal portfolio website showcasing the professional experience and skills of Nem Sothea, a Senior iOS Software Engineer and Mobile Department Leader at KOSIGN.

## 🚀 Features

### Theme System
- **Light Mode** - Clean, professional appearance
- **Dark Mode** - Modern dark theme with proper contrast
- System preference detection
- Persistent theme storage
- Smooth transitions between themes

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile navigation
- Responsive grid layouts
- Optimized for all screen sizes
- Touch-friendly interface

### Interactive Elements
- Smooth scroll navigation
- Scroll-to-top button
- Animated skill cards with hover effects
- Project cards with app store links
- Social media integration

## 👨‍💻 Professional Profile

### Current Position
**Senior iOS Software Engineer & Mobile Department Leader** at KOSIGN
- March 2017 - Present | Phnom Penh, Cambodia
- Leading enterprise-level iOS development using Swift and SwiftUI
- Overseeing team operations as Mobile Department Leader
- Implementing modern architecture patterns (MVVM, Clean Architecture)

### Key Achievements
- **CEO AWARD WINNER** (December 2024) for iOS development contributions
- **Best CEO Award** - Presented by Seol WookHwan (CEO), KOSIGN, November 2025
- LinkedIn Skill Assessments: iOS Development, Web Development
- Pioneered SwiftUI adoption across multiple projects

## 🎓 Education

### Advanced Studies
- **Master's Degree in Computer Science** - Asia Euro University (August - Present)
- **Bachelor's Degree in Computer Science** - Royal University of Phnom Penh (2011 - 2016)

### Professional Training
- Advanced Software Development - Korea Software HRD Center (2016 - 2017)
- App Development with JAVA (2015-2016)
- Web Application Development (2017)

## 💼 Featured Projects

### Mobile Applications
1. **WeCafé** - Mobile app for ordering beverages and snacks
2. **BZPEXPENSE** - BizPlay expense management service app
3. **TripPlus (트리플러스)** - Travel and expense management app
4. **BizPlay On-Premise (비즈플레이 On-Premise)** - Enterprise expense management

### Design Projects
- **Digital Library UX/UI** - Volunteer project providing free e-books and videos to children and students

## 🛠️ Technical Skills

### Core Technologies
- **Swift** - iOS development
- **SwiftUI** - Modern UI framework
- **iOS Development** - Enterprise applications
- **Project Leadership** - Team management
- **UI/UX Design** - User experience design
- **Web Development** - Full-stack capabilities
- **Team Collaboration** - Cross-functional teamwork

### Development Focus
- Enterprise iOS Application Architecture
- Modern UI Implementation (iPhone, iPad, macOS)
- Prototyping & Design Systems
- RESTful API Integration
- Backend & System Integration
- Mentoring & Team Growth

### Tools & Technologies
- **Development**: Xcode, Git, GitHub, GitLab
- **Design**: Figma (UI/UX Design)
- **Architecture**: MVVM, Clean Architecture
- **Database**: Design & Implementation

## 🌍 Languages
- **Khmer** - Native language
- **English** - Professional proficiency
- **Korean** - Intermediate level

## 🔬 Research Interests
- Artificial Intelligence integration in mobile applications
- Machine Learning for personalized user experiences
- Advanced Mobile Architecture design patterns
- Emerging Technologies in software development
- Cross-platform Development methodologies

## 📞 Contact Information
- **Phone**: 010-552-563
- **Email**: nemsothea13@gmail.com
- **LinkedIn**: [linkedin.com/in/nem-sothea](https://linkedin.com/in/nem-sothea)
- **GitHub**: [github.com/nemsothea](https://github.com/nemsothea)

## ✅ Before you push (avoid deploy errors)

Run these **before every push** so GitHub Actions can build and deploy successfully:

1. **Install dependencies** (if you added or changed packages):
   ```bash
   npm install
   ```

2. **Run the production build** (catches JS/TypeScript and build errors):
   ```bash
   npm run prepush
   ```
   Or: `npm run build`

3. **Fix any errors** – If the build fails locally, it will fail on GitHub. Fix TypeScript/JS or import errors, then run `npm run build` again until it passes.

4. **Commit and push** only after the build succeeds.

**Quick one-liner before push:**
```bash
npm run prepush && git add . && git status
```
Then commit and push if the build passed and your changes look correct.

---

## 🛠️ Technical Implementation

### Stack (JavaScript / React)
- **Next.js** - React framework with App Router, static export for GitHub Pages
- **React** - UI components and interactivity
- **TypeScript** - Typed JavaScript (TSX) for components
- **Tailwind CSS** - Utility-first styling and theming
- **Lucide React** - Icons (GitHub, LinkedIn, etc.)
- **AOS (Animate On Scroll)** - Scroll-triggered animations
- **next-themes** - Light/dark theme with system preference

### Key Features
- React components in `app/` and `components/`
- Tailwind + CSS variables for theme (light/dark)
- Responsive, mobile-first layout
- Static export (`output: 'export'`) for deployment
- Accessibility (ARIA, semantic markup) and performance-focused

### File Structure
```
├── app/                # Next.js App Router
│   ├── globals.css     # Global styles & theme variables
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components (TSX)
│   ├── hero.tsx, about.tsx, skills.tsx, experience.tsx
│   ├── projects.tsx, contact.tsx, footer.tsx
│   ├── navigation.tsx, scroll-to-top.tsx
│   └── theme-provider.tsx, aos-init.tsx
├── public/             # Static assets
│   ├── images/         # Images (profile, projects)
│   └── pdf/            # Resume/portfolio PDF
├── next.config.js      # Next config (static export, unoptimized images)
├── tailwind.config.js
├── package.json
└── README.md
```

## 🎨 Design System

### Color Palette
- **Primary**: #2d3a4b (Light) / #1a1a2e (Dark)
- **Accent**: #38b6ff
- **Background**: #f2f4f8 (Light) / #16213e (Dark)
- **Text**: #333 (Light) / #e8e8e8 (Dark)

### Typography
- **English**: Inter (Google Fonts)
- **Fallback**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif

### Animations
- Smooth transitions for theme switching
- Hover effects on interactive elements
- Scroll-triggered animations (AOS)
- Floating profile picture animation
- Skill card glow effects

## 📱 Mobile Features
- Hamburger menu navigation
- Touch-optimized interactions
- Responsive image sizing
- Optimized typography scaling
- Mobile-friendly contact information

## 🔧 Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement approach
- Graceful degradation for older browsers

## 📄 License
© 2026 Nem Sothea. All rights reserved.

---

*This portfolio showcases a blend of technical expertise, leadership experience, and commitment to innovation in mobile development.* 