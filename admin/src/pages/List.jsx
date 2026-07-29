import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const List = ({token}) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const res = await axios.get(backendUrl + "/api/product/list");
      if (res.data.success) {
        setList(res.data.products);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const removeProduct = async(id)=> {
    try{
      const res = await axios.post(backendUrl+
        '/api/product/remove',
        {id},
        {headers:{token}}
      )
      if(res.data.success){
        toast.success(res.data.message)

        await fetchList()
      }else{
        toast.error(res.data.message)
      }

    }catch(error){
 console.error(error);
      toast.error(error.message);
    }

  }


  useEffect(() => {
    fetchList();
  }, []);

 return (
  <div className="mx-auto w-full max-w-7xl space-y-6">
    {/* Header */}
    <div>
      <h1 className="font-display text-4xl text-foreground">
        Products
      </h1>
      <p className="mt-2 text-muted">
        Manage your product catalog and inventory.
      </p>
    </div>

    {/* Table */}
    <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-card">

      {/* Table Header */}
      <div className="hidden grid-cols-[90px_2fr_1fr_1fr_80px] border-b border-border bg-background px-6 py-4 text-sm font-semibold text-muted md:grid">
        <p>Image</p>
        <p>Product</p>
        <p>Category</p>
        <p>Price</p>
        <p className="text-center">Remove</p>
      </div>

      {/* Product Rows */}
      {list.map((item) => (
        <div
          key={item._id}
          className="grid gap-4 border-b border-border p-5 transition hover:bg-background md:grid-cols-[90px_2fr_1fr_1fr_80px] md:items-center"
        >
          {/* Image */}
          <div>
            <img
              src={item.image[0]}
              alt={item.name}
              className="h-20 w-20 rounded-xl border border-border object-cover"
            />
          </div>

          {/* Product */}
          <div>
            <h3 className="font-medium text-foreground">
              {item.name}
            </h3>

            <p className="mt-1 text-sm text-muted">
              Product
            </p>
          </div>

          {/* Category */}
          <div>
            <span className="inline-flex rounded-full bg-paper-200 px-3 py-1 text-sm text-foreground">
              {item.category}
            </span>
          </div>

          {/* Price */}
          <div className="font-mono text-foreground">
            {currency}
            {item.price}
          </div>

          {/* Delete */}
          <button
            onClick={() => removeProduct(item._id)}
            className="mx-auto flex h-10 w-10 items-center justify-center rounded-full text-danger transition hover:bg-danger-subtle"
          >
            ✕
          </button>
        </div>
      ))}

      {/* Empty State */}
      {list.length === 0 && (
        <div className="py-20 text-center">
          <img
            src={assets.parcel_icon}
            alt=""
            className="mx-auto mb-4 w-16 opacity-40"
          />

          <h3 className="font-display text-2xl text-foreground">
            No Products Found
          </h3>

          <p className="mt-2 text-muted">
            Start by adding your first product.
          </p>
        </div>
      )}
    </div>
  </div>
);
};

export default List;
