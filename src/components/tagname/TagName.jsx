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

TagName.propTypes = {
  tag: PropTypes.string.isRequired,
};
