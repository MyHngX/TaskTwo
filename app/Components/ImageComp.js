import { useEffect, useState } from "react";
export default function ImageComp({ id, src, alt, width, height, className }) {
  const [imageExists, setImageExists] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageExists(true);
    };
    img.onerror = () => {
      setImageExists(false);
    };
    img.src = src;
  }, [src]);

  return imageExists ? (
    <img
      alt={alt}
      src={src}
      width={width}
      height={height}
      className={className}
      data-testid={id}
    />
  ) : (
    <div className={className}></div>
  );
}
