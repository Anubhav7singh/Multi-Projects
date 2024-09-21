import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";
export default function Imageslider({ url, limit = 5, page = 1 }) {
  const [images, setimages] = useState([]);
  const [currentslede, setcurrentslide] = useState(0);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(false);
  async function fetchimages(geturl) {
    try {
      setloading(true);
      const res = await fetch(`${geturl}?page=${page}&limit=${limit}`);
      const data = await res.json();
      if (data) {
        setimages(data);
        setloading(false);
      }
    } catch (e) {
      seterror(e.message);
      setloading(false);
    }
  }
  function handleprevious() {
    setcurrentslide(currentslede === 0 ? images.length - 1 : currentslede - 1);
  }
  function handlenext() {
    setcurrentslide(currentslede === images.length - 1 ? 0 : currentslede + 1);
  }
  useEffect(() => {
    if (url !== "") fetchimages(url);
  }, [url]);
  if (loading) {
    <div>Loading data Please wait</div>;
  }
  if (error !== null) {
    <div>Error occured : {error}</div>;
  }
  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handleprevious}
      />
      {images && images.length
        ? images.map((image, index) => (
            <img
              alt={image.download_url}
              key={image.id}
              src={image.download_url}
              className={
                currentslede === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handlenext}
      />
      <span className="circle-indicator">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentslede === index
                    ? "current-indicator"
                    : "current-indicator hide-current-indicator"
                }
                onClick={() => setcurrentslide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
