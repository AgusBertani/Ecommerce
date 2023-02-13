import { useState } from "react";

const ItemDetailGallery = ({ imagen }) => {
  const [imagePreview, setImagePreview] = useState(imagen);

  const pushImagePreview = (index) => {
    setImagePreview(imagen[index]);
  };
  return (
    <div className="lightbox">
      <img
        src={imagePreview}
        alt="imagen de producto"
        className="product-here"
      />
      <div className="thumb-gallery">
        {imagen.map((image, index) => (
          <div className="pic">
            <img
              key={index}
              src={image}
              alt="imagen de producto"
              className="pic"
              onClick={() => pushImagePreview(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ItemDetailGallery;
