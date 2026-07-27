import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import { useMeta } from "../hooks/useMeta";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  useMeta({
    title: "Product Details | Sphere E-Commerce Store",
    description:
      "Check out the detailed information about this product on Sphere E-Commerce Store.",
    keywords:
      "product details, Sphere E-Commerce Store, online shopping, e-commerce",
  });

  useEffect(() => {
    const product = products.find((item) => item._id === productId);

    if (product) {
      setProductData(product);
      setImage(product.image[0]);
      setSize("");
    }
  }, [productId, products]);

  if (!productData) {
    return (
      <div className="mx-auto max-w-container px-5 py-20 sm:px-8 lg:px-12">
        <div className="h-[600px] animate-pulse bg-paper-200" />
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!size) {
      alert("Please select a size before adding this item to your cart.");
      return;
    }

    addToCart(productData._id, size);
  };

  return (
    <main className="mx-auto max-w-container px-5 pb-20 pt-8 sm:px-8 lg:px-12">
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
        <span>Collection</span>
        <span>/</span>
        <span>{productData.category}</span>
        <span>/</span>
        <span className="text-accent">Product</span>
      </div>

      {/* Product Hero */}
      <section className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {/* Product Gallery */}
        <div className="grid grid-cols-[80px_1fr] gap-4 sm:grid-cols-[100px_1fr] sm:gap-6">
          {/* Thumbnails */}
          <div className="flex max-h-[700px] flex-col gap-3 overflow-y-auto">
            {productData.image.map((item, index) => (
              <button
                key={index}
                onClick={() => setImage(item)}
                className={`relative aspect-[4/5] w-full overflow-hidden bg-paper-200 ${
                  image === item
                    ? "ring-1 ring-accent ring-offset-2 ring-offset-background"
                    : ""
                }`}
              >
                <img
                  src={item}
                  alt={`${productData.name} view ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-paper-200">
            <img
              src={image}
              alt={productData.name}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
            />

            <div className="absolute left-5 top-5 bg-ink-950 px-4 py-2">
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-paper-100">
                Sphere / Collection
              </p>
            </div>
          </div>
        </div>

        {/* Product Information */}
        <div className="flex flex-col justify-center">
          {/* Category */}
          <p className="mb-5 font-mono text-[10px] uppercase tracking-mega text-accent">
            {productData.category}
          </p>

          {/* Name */}
          <h1 className="max-w-xl font-display text-4xl leading-[1.05] text-foreground sm:text-5xl">
            {productData.name}
          </h1>

          {/* Rating */}
          <div className="mt-6 flex items-center gap-3 border-b border-border pb-6">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4].map((star) => (
                <img
                  key={star}
                  src={assets.star_icon}
                  className="h-3.5 w-3.5"
                  alt=""
                />
              ))}

              <img
                src={assets.star_dull_icon}
                className="h-3.5 w-3.5"
                alt=""
              />
            </div>

            <span className="font-mono text-[10px] text-muted">
              4.0 / 5.0
            </span>

            <span className="text-border">|</span>

            <span className="font-mono text-[10px] text-muted">
              122 reviews
            </span>
          </div>

          {/* Price */}
          <div className="mt-7">
            <p className="font-mono text-2xl tracking-wide text-bottle-600">
              {currency}
              {Number(productData.price).toFixed(2)}
            </p>

            <p className="mt-2 text-xs text-muted-foreground">
              Taxes calculated at checkout
            </p>
          </div>

          {/* Description */}
          <p className="mt-7 max-w-xl text-sm leading-7 text-muted">
            {productData.description}
          </p>

          {/* Size Selection */}
          <div className="mt-8 border-t border-border pt-7">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-foreground">
                Select size
              </p>

              <button className="font-mono text-[10px] uppercase tracking-wider text-muted underline underline-offset-4">
                Size guide
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {productData.sizes.map((item) => (
                <button
                  key={item}
                  onClick={() => setSize(item)}
                  className={`min-w-[58px] border px-4 py-3 font-mono text-xs transition-all ${
                    item === size
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-surface text-muted hover:border-primary"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Add To Cart */}
          <button
            onClick={handleAddToCart}
            className="mt-8 w-full bg-primary px-8 py-4 font-mono text-[10px] uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            Add to cart
          </button>

          {/* Product Benefits */}
          <div className="mt-8 grid grid-cols-1 gap-4 border-t border-border pt-7 sm:grid-cols-3">
            <div>
              <p className="mb-2 font-mono text-[9px] uppercase tracking-wider text-accent">
                Authentic
              </p>

              <p className="text-xs leading-5 text-muted">
                100% original product
              </p>
            </div>

            <div>
              <p className="mb-2 font-mono text-[9px] uppercase tracking-wider text-accent">
                Delivery
              </p>

              <p className="text-xs leading-5 text-muted">
                Cash on delivery available
              </p>
            </div>

            <div>
              <p className="mb-2 font-mono text-[9px] uppercase tracking-wider text-accent">
                Returns
              </p>

              <p className="text-xs leading-5 text-muted">
                Easy 7-day returns
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Description & Reviews */}
      <section className="mt-24">
        <div className="border-b border-border">
          <div className="flex">
            <button className="border-b-2 border-primary px-5 py-4 font-mono text-[10px] uppercase tracking-[0.12em] text-foreground">
              Description
            </button>

            <button className="px-5 py-4 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
              Reviews (122)
            </button>
          </div>
        </div>

        <div className="max-w-3xl py-8 text-sm leading-7 text-muted">
          <p>
            {productData.description}
          </p>

          <p className="mt-5">
            Designed with attention to detail and made for everyday use, this
            piece reflects the considered approach behind the Sphere collection.
          </p>
        </div>
      </section>

      {/* Related Products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </main>
  );
};

export default Product;