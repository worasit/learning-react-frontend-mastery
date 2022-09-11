import PropTypes from "prop-types";

const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
};

Pet.propTypes = {
  name: PropTypes.string,
  animal: PropTypes.string,
  breed: PropTypes.string,
};

export default Pet;
