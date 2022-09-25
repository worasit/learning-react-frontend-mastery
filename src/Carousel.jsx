import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [active] = useState(0);

  if (!images) {
    images = ["http://pets-images.dev-apis.com/pets/none.jpg"];
  }

  return (
    <div className="carousel">
      <img src={images[active]} alt="animal" />
      <div className="carousel-smaller">
        {images.map((photo, index) => {
          return (
            <img
              src={photo}
              key={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
