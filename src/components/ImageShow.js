import React from "react";
import "./ImageShow.css"; // Import the CSS file

export default function ImageShow({ image }) {
  return (
    <div className="image-show">
      <img
        src={image["urls"].small}
        key={image.id}
        alt={image["alt_description"]}
      />
    </div>
  );
}
