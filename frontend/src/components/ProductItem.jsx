import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/product/${id}`}
      className="group block cursor-pointer"
    >
      {/* Product Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-paper-200">
        <img
          src={image[0]}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-ink-950/90 px-4 py-3 transition-transform duration-300 group-hover:translate-y-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-paper-100">
            View product
          </p>
        </div>
      </div>

      {/* Product Details */}
      <div className="pt-4">
        <h3 className="line-clamp-2 text-sm leading-5 text-foreground transition-colors group-hover:text-bottle-600">
          {name}
        </h3>

        <p className="mt-2 font-mono text-xs tracking-wide text-muted">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;