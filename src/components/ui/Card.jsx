import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  ...props 
}) => {
  const baseStyles = 'bg-bg-elevated rounded-lg border border-border p-6 transition-all duration-300';
  const hoverStyles = hover ? 'hover:border-border-light hover:shadow-lg' : '';
  
  return (
    <motion.div
      className={`${baseStyles} ${hoverStyles} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -4 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hover: PropTypes.bool,
};

export default Card;
