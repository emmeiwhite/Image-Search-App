import React from "react";
import ImageShow from "./ImageShow";
import "./ImageList.css"; // Import the CSS file

export default function ImageList({ images }) {
  return (
    <div className="image-list">
      {images.map((image) => (
        <ImageShow
          image={image}
          key={image.id}
        />
      ))}
    </div>
  );
}
