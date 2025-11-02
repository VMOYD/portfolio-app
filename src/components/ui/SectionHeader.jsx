import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const SectionHeader = ({ 
  title, 
  subtitle, 
  align = 'left',
  className = '' 
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  
  return (
    <motion.div 
      className={`mb-12 ${alignmentClasses[align]} ${className}`}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-text-primary mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  className: PropTypes.string,
};

export default SectionHeader;
