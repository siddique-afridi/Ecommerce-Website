import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    const latest = products.filter((item) => item.category).slice(0, 20);
    setLatestProducts(latest);
  }, [products]);

  return (
    <section className="mx-auto my-20 max-w-container px-5 sm:px-8 lg:px-12">
      {/* Section Header */}
      <div className="mb-12 flex flex-col gap-6 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-4 font-mono text-[10px] uppercase tracking-mega text-accent">
            New arrivals
          </p>

          <h2 className="font-display text-4xl leading-none text-foreground sm:text-5xl">
            Latest
            <span className="ml-3 italic text-bottle-500">
              Collections
            </span>
          </h2>
        </div>

        <p className="max-w-md text-sm leading-6 text-muted">
          A considered selection of our newest pieces, chosen for everyday
          living and designed to last beyond the season.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {latestProducts.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            image={item.image}
            price={item.price}
            name={item.name}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestCollection;