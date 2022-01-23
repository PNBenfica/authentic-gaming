import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import './box.scss';

const Box = forwardRef(({ children, className }, ref) => {
  return (
    <div ref={ref} className={`box ${className}`}>
      { children }
    </div>
  );
});

Box.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Box.defaultProps = {
  className: '',
};

export default Box;
