import propType from 'prop-types';

import './styles.css';

export const Button = ({ text, onClick, disabled = false }) => (
  <button className="button" onClick={onClick} disabled={disabled}>
    {text}
  </button>
);

Button.defaultProps = {
  disable: false,
};

Button.propTypes = {
  text: propType.string.isRequired,
  onClick: propType.func.isRequired,
  disabled: propType.bool,
};
