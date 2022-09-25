import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [active, setActive] = useState(0);

  if (!images) {
    images = ["http://pets-images.dev-apis.com/pets/none.jpg"];
  }

  const handleIndexClick = (event) => {
    setActive(parseInt(event.target.dataset.index));
  };

  return (
    <div className="carousel">
      <img src={images[active]} alt="animal" />
      <div className="carousel-smaller">
        {images.map((photo, index) => {
          return (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <img
              src={photo}
              key={photo}
              className={index === active ? "active" : ""}
              data-index={index}
              alt="animal thumbnail"
              onClick={handleIndexClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
