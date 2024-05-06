import "./tagName.scss";

// eslint-disable-next-line react/prop-types
export default function TagName({ tag }) {
  return (
    <>
      <div className="tagName">
        <p>{tag}</p>
      </div>
    </>
  );
}
