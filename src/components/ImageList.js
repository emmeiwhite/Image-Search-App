import React from "react";
import ImageShow from "./ImageShow";

export default function ImageList({ images }) {
  return (
    <div>
      {images.map((image) => (
        <ImageShow
          image={image}
          key={image.id}
        />
      ))}
    </div>
  );
}
