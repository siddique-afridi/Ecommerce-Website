import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency,addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false); //false acts like placeholder telling react i had nothing right now to render
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);       //here false is replaced bcz now we have data to render
        setImage(item.image[0]); 
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-8 transition-opacity-0 ease-in duration-500 opacity-100">
      {/* product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* image of prod */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row ">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, i) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={i}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer hover:scale-110 transition-all"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="" />
          </div>
        </div>
        {/* product info */}
        <div className="flex-1">
          <h1 className="font-medium tet-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} className="w-3.5 " alt="" />
            <img src={assets.star_icon} className="w-3.5 " alt="" />
            <img src={assets.star_icon} className="w-3.5 " alt="" />
            <img src={assets.star_icon} className="w-3.5 " alt="" />
            <img src={assets.star_dull_icon} className="w-3.5 " alt="" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, i) => (
                <button
                  onClick={() => setSize(item)}
                  key={i}
                  className={`border py-2 px-4 bg-gray-100 hover:bg-opacity-30 transition-all ease-in-out duration-300 ${item === size ? "border-gray-700": ""} `}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={()=> addToCart(productData._id, size)} className="py-3 px-8 bg-orange-500 text-white text-sm active:bg-gray-700 hover:bg-orange-600 hover:rounded-lg transition-all">ADD TO CART
          </button>
            <hr className="mt-8 sm:w-4/5" />
            <div className="tex-sm text-gray-500 mt-5 flex flex-col gap-1">
              <p>100% Original product.</p>
              <p>Cash on delivery is available on this product</p>
              <p>Easy return and exchange policy within 7 days.</p>
            </div>
        </div>
      </div>

      {/* description and review */}
      <div className="mt-10">
        <div className="flex ">
          <p className="border px-5 py-3 text-sm"> Description</p>
          <p className="border px-5 py-3 text-sm"> Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, repellat.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, repellat.</p>
        </div>
      </div>

      {/*  related products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;