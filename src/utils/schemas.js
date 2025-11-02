// Structured data schemas for different pages

export const PersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Vyom Dubey",
  "jobTitle": "Software Engineer",
  "worksFor": {
    "@type": "Organization",
    "name": "NetApp"
  },
  "description": "Software Engineer specializing in AI, cloud computing, and full-stack development",
  "url": "https://vyomdubey.com/",
  "image": "https://vyomdubey.com/brain-ok3.png",
  "sameAs": [
    "https://github.com/VMOYD"
  ],
  "knowsAbout": [
    "Artificial Intelligence", 
    "Cloud Computing", 
    "React.js", 
    "Python", 
    "Full Stack Development", 
    "Machine Learning",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "Express.js"
  ],
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "Vellore Institute of Technology",
      "description": "Master of Computer Applications"
    },
    {
      "@type": "EducationalOrganization", 
      "name": "Bundelkhand University",
      "description": "Bachelor of Computer Applications"
    }
  ]
};

export const WebsiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Vyom Dubey Portfolio",
  "url": "https://vyomdubey.com/",
  "description": "Personal portfolio website showcasing software engineering projects and AI specialization",
  "author": {
    "@type": "Person",
    "name": "Vyom Dubey"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://vyomdubey.com/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const ProjectSchema = (project) => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": project.name,
  "description": project.desc,
  "url": project.link || project.code,
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web Browser",
  "author": {
    "@type": "Person",
    "name": "Vyom Dubey"
  },
  "programmingLanguage": project.techstackused.split(', ')
});

export const OrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://vyomdubey.com/#organization",
  "name": "Vyom Dubey Portfolio",
  "url": "https://vyomdubey.com/",
  "logo": "https://vyomdubey.com/VD.png",
  "description": "Personal portfolio showcasing software engineering expertise and AI specialization"
};

// Breadcrumb schema generator
export const generateBreadcrumbSchema = (breadcrumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
});

// FAQ Schema for common questions
export const FAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What technologies does Vyom Dubey specialize in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vyom specializes in AI, machine learning, full-stack development with React.js, Python, Node.js, cloud computing, and modern web technologies."
      }
    },
    {
      "@type": "Question", 
      "name": "Where does Vyom Dubey currently work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vyom currently works as a Software Engineer-2 at NetApp, focusing on Cloud Volume Service and Azure NetApp Files."
      }
    },
    {
      "@type": "Question",
      "name": "What is Vyom Dubey's educational background?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vyom has completed MCA from VIT Vellore and BCA from Bundelkhand University, with specialization in AI and cloud computing."
      }
    }
  ]
};