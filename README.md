
# 🚀 Vyom Dubey's Portfolio

Welcome to my personal portfolio! This repository contains the source code for my portfolio website, showcasing my projects, skills, and professional journey as a Software Development Engineer II at NetApp.

## 📌 Live Demo
Check out my portfolio: [vyomdubey.com](https://vyomdubey.com) 

---

## 🎨 2026 Redesign - Midnight Cloud Theme

This portfolio features a modern, minimalist design inspired by the 2026 tech aesthetic with a professional **Midnight Cloud** color palette:

- 🟣 **Royal Purple** (#6366f1) - Primary brand color
- 🟡 **Champagne Gold** (#d4af37) - Secondary accent
- 🌑 **Deep Midnight** (#0b1220) - Background
- ✨ Minimalistic animations showing maturity
- 📱 Fully responsive design optimized for all devices
- 🎭 Smooth transitions with Framer Motion

---

## �️ Tech Stack

### **Frontend**
- ⚛️ **React 19** – Latest React with modern hooks
- 🚀 **Vite 6** – Lightning-fast build tool and dev server
- 🎨 **Tailwind CSS 3** – Utility-first CSS framework
- 🎭 **Framer Motion 12** – Production-ready motion library
- 🧭 **React Router 7** – Client-side routing
- � **React Icons 5** – Popular icon library

### **Performance & SEO**
- 📊 **Performance Monitoring** – Core Web Vitals tracking
- 🔍 **SEO Optimized** – Meta tags, structured data, sitemap
- ♿ **Accessibility** – WCAG AA compliant
- 🌐 **PWA Ready** – Progressive Web App features

### **Deployment**
- 📦 **GitHub Pages** – Automated deployment
- 🐳 **Docker** – Containerized deployment option

---

## 📂 Project Structure
```
📦 portfolio-app
├── 📁 public              # Static assets
│   ├── 📄 photo.jpg       # Profile photo
│   ├── 📄 sitemap.xml     # SEO sitemap
│   ├── 📄 robots.txt      # SEO robots file
│   └── 🖼️  certificates   # Certificate images
├── 📁 src
│   ├── 📁 components      # Reusable UI components
│   │   ├── 📁 ui          # Button, Card, SectionHeader
│   │   ├── Header.jsx     # Navigation header
│   │   ├── Footer.jsx     # Site footer
│   │   ├── SEO.jsx        # SEO component
│   │   └── StructuredData.jsx
│   ├── 📁 pages           # Page components
│   │   ├── HomeRedesign.jsx      # Landing page
│   │   ├── AboutRedesign.jsx     # About + Certificates
│   │   ├── ProjectsRedesign.jsx  # Project showcase
│   │   └── ContactRedesign.jsx   # Contact info
│   ├── 📁 context         # React context
│   │   └── ThemeContext.jsx
│   ├── � utils           # Utility functions
│   │   ├── seoConfig.js
│   │   └── schemas.js
│   ├── �📄 App.jsx         # Main app component
│   ├── 📄 main.jsx        # Entry point
│   └── 📄 index.css       # Global styles
├── 📄 tailwind.config.js  # Tailwind configuration
├── 📄 vite.config.js      # Vite configuration
├── 📄 package.json        # Dependencies
└── 📄 dockerfile          # Docker configuration
```

---

## 🎯 Features

### **Design & UX**
✅ **Midnight Cloud Theme** – Professional royal purple and gold palette  
✅ **Minimalist Animations** – Purposeful motion, no infinite loops  
✅ **Responsive Design** – Mobile-first approach with breakpoints  
✅ **Dark Mode** – Optimized for reduced eye strain  
✅ **Custom Scrollbar** – Branded purple scrollbar styling  

### **Content Sections**
✅ **Hero Section** – Gradient name with animated background  
✅ **Tech Stack Terminal** – Unique terminal-style tech visualization (25+ technologies)  
✅ **Project Showcase** – Filterable projects with categories  
✅ **About Me** – Professional photo, skills, timeline, certifications  
✅ **Certifications** – 7 professional certifications (GCP, AWS, NVIDIA)  
✅ **Contact Page** – Clean contact info, social links, resume download  

### **Technical Features**
✅ **SEO Optimized** – Meta tags, Open Graph, Twitter Cards, Schema.org  
✅ **Performance Monitored** – Core Web Vitals tracking  
✅ **Fast Loading** – Optimized images and code splitting  
✅ **Accessibility** – Semantic HTML, ARIA labels, keyboard navigation  

---

## 📬 Contact Me
📧 Email: [vyomdubeykp@gmail.com](mailto:vyomdubeykp@gmail.com)  
� LinkedIn: [linkedin.com/in/vyom-dubey](https://www.linkedin.com/in/vyom-dubey/)  
✖️ X (Twitter): [@dubey_vyom_](https://x.com/dubey_vyom_)  
💻 GitHub: [github.com/VMOYD](https://github.com/VMOYD)  
🎥 YouTube: [My Channel](https://www.youtube.com/channel/UCpjxHechB6BeyMo4Lcsm9zw)  
📝 LeetCode: [VMOY](https://leetcode.com/u/VMOY/)  

---

## ⚙️ Installation & Setup

### **Prerequisites**
- Node.js 18+ and npm/yarn
- Git

### **Using Node.js**
1. Clone the repository:
   ```bash
   git clone https://github.com/VMOYD/portfolio-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd portfolio-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:5173` in your browser.

### **Build for Production**
```bash
npm run build
```

### **Preview Production Build**
```bash
npm run preview
```

### **Deploy to GitHub Pages**
```bash
npm run deploy
```

### **Using Docker**
1. Build the Docker image:
   ```bash
   docker build -t portfolio-app .
   ```
2. Run the container (mapping port 8080 on host to port 80 in container):
   ```bash
   docker run -d -p 8080:80 portfolio-app
   ```
3. Open `http://localhost:8080/` in your browser.

---

## � Deployment

This portfolio is deployed on **GitHub Pages** with automated CI/CD:

1. Push changes to the `main` branch
2. Run deployment:
   ```bash
   npm run deploy
   ```
3. GitHub Pages automatically builds and deploys to `https://vyomdubey.com`

---

## 🎨 Design System

### **Colors**
- **Brand Primary**: `#6366f1` (Royal Purple)
- **Brand Secondary**: `#d4af37` (Champagne Gold)
- **Background Primary**: `#0b1220` (Deep Midnight)
- **Background Secondary**: `#0f1523`
- **Background Elevated**: `#1a1f2e`
- **Text Primary**: `#e5e7eb`
- **Text Secondary**: `#9ca3af`
- **Border**: `#1f2937`

### **Typography**
- **Headings**: Inter Tight (700-900 weight)
- **Body**: Inter (400-600 weight)

### **Animations**
- **Principle**: Motion with purpose
- **Duration**: 0.3s - 0.8s
- **Easing**: easeInOut, easeOut

---

## 📊 Performance

- ⚡ **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- 🚀 **First Contentful Paint**: < 1.5s
- 📱 **Mobile Optimized**: 100% responsive
- ♿ **WCAG AA**: Accessible to all users

---

## �📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙌 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/VMOYD/portfolio-app/issues).

---

## 🌟 Acknowledgments
- Design inspiration: 2026 minimalist tech aesthetic
- Icons: React Icons, Font Awesome, Bootstrap Icons
- Animations: Framer Motion
- Hosting: GitHub Pages

---

**Built with ❤️ by Vyom Dubey**

Happy coding! 🚀
