import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./rating.scss";

// eslint-disable-next-line react/prop-types
export default function Rating({ rating }) {
  const stars = Array.from({ length: 5 }, (_, index) => index < rating);

  return (
    <>
      <div className="rating">
        {stars.map((filled, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            className={filled ? "redStar stars" : "greyStar stars"}
          />
        ))}
      </div>
    </>
  );
}
