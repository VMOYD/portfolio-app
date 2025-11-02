// SEO constants and page-specific data

export const SITE_CONFIG = {
  baseUrl: "https://vyomdubey.com",
  siteName: "Vyom Dubey Portfolio",
  defaultTitle: "Vyom Dubey - Software Engineer & AI Specialist | Portfolio",
  defaultDescription: "Software Engineer at NetApp specializing in AI, cloud computing, and full-stack development. Explore my projects, skills, and professional journey in software development.",
  defaultImage: "https://vyomdubey.com/brain-ok3.png",
  author: "Vyom Dubey",
  twitterHandle: "@vmoyd",
  linkedinProfile: "https://linkedin.com/in/vyom-dubey",
  githubProfile: "https://github.com/VMOYD"
};

export const PAGE_SEO = {
  home: {
    title: "Vyom Dubey - Software Engineer & AI Specialist | Portfolio",
    description: "Welcome to Vyom Dubey's portfolio. Software Engineer at NetApp specializing in AI, cloud computing, and full-stack development. Explore my innovative projects and professional journey.",
    keywords: "Vyom Dubey, Software Engineer, NetApp, AI Specialist, Portfolio, Home, Full Stack Developer, React Developer",
    type: "website"
  },
  about: {
    title: "About Vyom Dubey - Software Engineer & AI Specialist | Background & Experience",
    description: "Learn about Vyom Dubey's professional journey from coding enthusiast to Software Engineer at NetApp. Discover his educational background, career milestones, and passion for AI and cloud computing.",
    keywords: "Vyom Dubey About, Software Engineer Background, NetApp Engineer, VIT Vellore, Bundelkhand University, Career Journey, AI Specialist",
    type: "profile"
  },
  projects: {
    title: "Projects by Vyom Dubey - AI, Web Development & Software Engineering",
    description: "Explore innovative projects by Vyom Dubey including AI-powered applications, web development projects, and software engineering solutions. From VisionScript to portfolio websites.",
    keywords: "Vyom Dubey Projects, AI Projects, VisionScript, Portfolio Projects, React Projects, Python Projects, Software Engineering Projects",
    type: "website"
  },
  contact: {
    title: "Contact Vyom Dubey - Software Engineer & AI Specialist",
    description: "Get in touch with Vyom Dubey for collaboration opportunities, project discussions, or professional inquiries. Software Engineer at NetApp specializing in AI and cloud computing.",
    keywords: "Contact Vyom Dubey, Software Engineer Contact, NetApp Engineer Contact, AI Specialist Contact, Professional Inquiry",
    type: "website"
  },
  certificates: {
    title: "Certifications & Achievements - Vyom Dubey | Cloud Computing & AI",
    description: "View Vyom Dubey's professional certifications and achievements in cloud computing, AI, and software development. Including Google Cloud Platform and specialized training credentials.",
    keywords: "Vyom Dubey Certificates, GCP Certifications, AI Certifications, Cloud Computing Certificates, Professional Achievements",
    type: "website"
  }
};

export const generatePageUrl = (path) => {
  return `${SITE_CONFIG.baseUrl}${path}`;
};

export const generateBreadcrumbs = (pathname) => {
  const paths = pathname.split('/').filter(Boolean);
  const breadcrumbs = [
    { name: 'Home', url: generatePageUrl('/') }
  ];

  let currentPath = '';
  paths.forEach((path) => {
    currentPath += `/${path}`;
    const pageName = path.charAt(0).toUpperCase() + path.slice(1);
    breadcrumbs.push({
      name: pageName,
      url: generatePageUrl(currentPath)
    });
  });

  return breadcrumbs;
};