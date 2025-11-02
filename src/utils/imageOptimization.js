// Image optimization utility for SEO and performance

export const optimizeImageForSEO = (imageName, alt, title = '') => {
  return {
    src: `/${imageName}`,
    alt: alt,
    title: title,
    loading: 'lazy',
    decoding: 'async',
    'aria-label': alt
  };
};

export const generateImageMeta = (imageName, alt, description) => {
  const imageUrl = `https://vyomdubey.com/${imageName}`;
  return {
    url: imageUrl,
    alt: alt,
    description: description,
    width: 1200,
    height: 630,
    type: 'image/png'
  };
};

// Common images used across the portfolio
export const PORTFOLIO_IMAGES = {
  profile: {
    ...optimizeImageForSEO('brain-ok3.png', 'Vyom Dubey - Software Engineer Profile Picture'),
    description: 'Professional profile image of Vyom Dubey, Software Engineer at NetApp'
  },
  netappLogo: {
    ...optimizeImageForSEO('icons8-netapp-logo.svg', 'NetApp Company Logo'),
    description: 'NetApp official company logo'
  },
  vitLogo: {
    ...optimizeImageForSEO('Vellore_Institute_of_Technology_seal_2017.svg.png', 'VIT Vellore University Logo'),
    description: 'Vellore Institute of Technology official seal and logo'
  },
  bundedkhandLogo: {
    ...optimizeImageForSEO('bundelkhand_university_logo.png', 'Bundelkhand University Logo'),
    description: 'Bundelkhand University official logo'
  },
  dragon: {
    ...optimizeImageForSEO('dragon.png', 'Dragon illustration representing coding journey beginning'),
    description: 'Creative dragon illustration symbolizing the start of programming journey'
  }
};

// Generate preload links for critical images
export const generatePreloadLinks = () => {
  const criticalImages = [
    PORTFOLIO_IMAGES.profile.src,
    PORTFOLIO_IMAGES.netappLogo.src,
    PORTFOLIO_IMAGES.vitLogo.src
  ];

  return criticalImages.map(src => ({
    rel: 'preload',
    as: 'image',
    href: src
  }));
};