import PropTypes from 'prop-types';

const RocketBtn = () => true;

RocketBtn.propTypes = {
  className: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default RocketBtn;
