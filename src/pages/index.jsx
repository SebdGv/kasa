import Thumbnail from "../components//thumbnail/Thumbnail";
import HomeBanner from "../components/banners/HomeBanner";

export default function Home() {
  return (
    <>
      <div className="pagesContainer">
        <HomeBanner />

        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </div>
    </>
  );
}
