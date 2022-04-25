import propType from 'prop-types';
import './styles.css';

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input
      className="text-input"
      onChange={handleChange}
      value={searchValue}
      type="search"
      placeholder="Type your search"
      name=""
      id=""
    />
  );
};

TextInput.propTypes = {
  searchValue: propType.string.isRequired,
  handleChange: propType.func.isRequired,
};
