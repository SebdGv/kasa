import "./rating.scss";

export default function Rating() {
  return (
    <>
      <div className="rating">
        <img src="../src/assets/redStar.svg" alt="" className="starActive" />
        <img src="../src/assets/redStar.svg" alt="" className="starActive" />
        <img src="../src/assets/redStar.svg" alt="" className="starActive" />
        <img src="../src/assets/star.svg" alt="" className="starActive" />
        <img src="../src/assets/star.svg" alt="" className="starActive" />
      </div>
    </>
  );
}
