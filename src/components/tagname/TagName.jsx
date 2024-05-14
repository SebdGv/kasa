import PropTypes from "prop-types";
import "./tagName.scss";

export default function TagName({ tag }) {
  return (
    <>
      <div className="tagName">
        <p>{tag}</p>
      </div>
    </>
  );
}

// Déclaration des PropTypes
TagName.propTypes = {
  tag: PropTypes.string.isRequired,
};
