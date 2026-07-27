import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (!products.length || !category || !subCategory) return;

    const relatedProducts = products
      .filter(
        (item) =>
          item.category === category && item.subCategory === subCategory,
      )
      .slice(0, 5);

    setRelated(relatedProducts);
  }, [products, category, subCategory]);

  if (!related.length) return null;

  return (
    <section className="mt-6 border-t border-border pt-6">
      {/* Section Header */}{" "}
      <div className="mb-6 flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-end sm:justify-between">
        {" "}
        <div>
          {" "}
          <p className="mb-3 font-mono text-[10px] uppercase tracking-mega text-accent">
            You may also like{" "}
          </p>
          <h2 className="font-display text-4xl text-foreground">
            Related
            <span className="ml-2 italic text-bottle-500">pieces.</span>
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-6 text-muted">
          More from the same collection, selected to complement your choice.
        </p>
      </div>
      {/* Products */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {related.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
