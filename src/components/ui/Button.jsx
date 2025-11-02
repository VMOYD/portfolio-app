import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  onClick,
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary';
  
  const variants = {
    primary: 'bg-brand-primary text-white hover:bg-brand-primary-hover shadow-md hover:shadow-glow',
    secondary: 'bg-brand-secondary text-bg-primary hover:bg-brand-secondary-hover shadow-md hover:shadow-glow-gold',
    ghost: 'bg-transparent text-text-primary border border-border-light hover:border-brand-primary hover:text-brand-primary',
    outline: 'bg-transparent text-brand-primary border border-brand-primary hover:bg-brand-primary hover:text-white',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  const MotionButton = motion.button;
  const MotionLink = motion.a;
  
  const Component = href ? MotionLink : MotionButton;
  
  return (
    <Component
      href={href}
      onClick={onClick}
      className={buttonClasses}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </Component>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'outline']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  href: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
