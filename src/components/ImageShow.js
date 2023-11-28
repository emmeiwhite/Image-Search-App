import React from "react";

export default function ImageShow({ image }) {
  return (
    <img
      src={image["urls"].regular}
      key={image.id}
      alt={image["slug"]}
    />
  );
}
