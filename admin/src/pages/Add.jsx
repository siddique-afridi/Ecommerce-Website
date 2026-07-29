import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({token}) => {
  const [image1,setImage1]= useState(false);
  const [image2,setImage2]= useState(false);
  const [image3,setImage3]= useState(false);
  const [image4,setImage4]= useState(false);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('Men')
  const [subCategory, setSubCategory] = useState('Topwear')
  const [bestSeller, setBestSeller] = useState(false)
  const [sizes, setSizes] = useState([])

  const onSubmitHandler = async(e)=> {
      e.preventDefault();

      try{
        const formData = new FormData();

        formData.append("name", name)
        formData.append("description", description)
        formData.append("price", price)
        formData.append("category", category)
        formData.append("subCategory", subCategory)
        formData.append("bestSeller", bestSeller)
        formData.append("sizes", JSON.stringify(sizes))

        image1 && formData.append("image1", image1)
        image2 && formData.append("image2", image2)
        image3 && formData.append("image3", image3)
        image4 && formData.append("image4", image4)

        const response = await axios.post(backendUrl +
           "/api/product/add", 
           formData,
           {headers:{token}}
          )

        if(response.data.success === true){
          toast.success(response.data.message)
          setName('')
          setDescription('')
          setImage1(false)
          setImage2(false)
          setImage3(false)
          setImage4(false)
          setPrice('')
          
        }
        

      }catch(error){
        console.error(error)
        toast.error(error.message)

      }
  }


return (
  <form
    onSubmit={onSubmitHandler}
    className="mx-auto w-full max-w-7xl space-y-8"
  >
    {/* Header */}
    <div>
      <h1 className="font-display text-4xl text-foreground">
        Add New Product
      </h1>
      <p className="mt-2 text-muted">
        Create and publish a new product to your catalog.
      </p>
    </div>

    {/* Images + Details */}
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Images */}
      <div className="rounded-2xl border border-border bg-surface p-6 shadow-card">
        <h2 className="mb-6 text-lg font-semibold text-foreground">
          Product Images
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <label
            htmlFor="image1"
            className="group flex aspect-[4/5] cursor-pointer items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-border bg-background transition hover:border-accent"
          >
            <img
              src={
                !image1
                  ? assets.upload_area
                  : URL.createObjectURL(image1)
              }
              alt=""
              className="h-full w-full object-cover transition group-hover:scale-105"
            />
            <input
              hidden
              id="image1"
              type="file"
              onChange={(e) => setImage1(e.target.files[0])}
            />
          </label>

          <label
            htmlFor="image2"
            className="group flex aspect-[4/5] cursor-pointer items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-border bg-background transition hover:border-accent"
          >
            <img
              src={
                !image2
                  ? assets.upload_area
                  : URL.createObjectURL(image2)
              }
              alt=""
              className="h-full w-full object-cover transition group-hover:scale-105"
            />
            <input
              hidden
              id="image2"
              type="file"
              onChange={(e) => setImage2(e.target.files[0])}
            />
          </label>

          <label
            htmlFor="image3"
            className="group flex aspect-[4/5] cursor-pointer items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-border bg-background transition hover:border-accent"
          >
            <img
              src={
                !image3
                  ? assets.upload_area
                  : URL.createObjectURL(image3)
              }
              alt=""
              className="h-full w-full object-cover transition group-hover:scale-105"
            />
            <input
              hidden
              id="image3"
              type="file"
              onChange={(e) => setImage3(e.target.files[0])}
            />
          </label>

          <label
            htmlFor="image4"
            className="group flex aspect-[4/5] cursor-pointer items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-border bg-background transition hover:border-accent"
          >
            <img
              src={
                !image4
                  ? assets.upload_area
                  : URL.createObjectURL(image4)
              }
              alt=""
              className="h-full w-full object-cover transition group-hover:scale-105"
            />
            <input
              hidden
              id="image4"
              type="file"
              onChange={(e) => setImage4(e.target.files[0])}
            />
          </label>
        </div>
      </div>

      {/* Product Details */}
      <div className="rounded-2xl border border-border bg-surface p-6 shadow-card space-y-6">
        <h2 className="text-lg font-semibold text-foreground">
          Product Details
        </h2>

        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">
            Product Name
          </label>

          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter product name"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition focus:border-accent"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">
            Description
          </label>

          <textarea
            required
            rows={7}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write product description..."
            className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition focus:border-accent"
          />
        </div>
      </div>
    </div>

    {/* Configuration */}
    <div className="rounded-2xl border border-border bg-surface p-6 shadow-card">
      <h2 className="mb-6 text-lg font-semibold text-foreground">
        Product Configuration
      </h2>

      <div className="grid gap-6 lg:grid-cols-3">
        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">
            Category
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-accent"
          >
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">
            Sub Category
          </label>

          <select
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-accent"
          >
            <option>Top Wear</option>
            <option>Bottom Wear</option>
            <option>Winter Wear</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-foreground">
            Price
          </label>

          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="e.g. 25"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-accent"
          />
        </div>
      </div>

      {/* Sizes */}
      <div className="mt-8">
        <label className="mb-3 block text-sm font-medium text-foreground">
          Available Sizes
        </label>

        <div className="flex flex-wrap gap-3">
          {["S", "M", "L", "XL", "XXL"].map((size) => (
            <button
              type="button"
              key={size}
              onClick={() =>
                setSizes((prev) =>
                  prev.includes(size)
                    ? prev.filter((item) => item !== size)
                    : [...prev, size]
                )
              }
              className={`rounded-lg border px-5 py-2 transition ${
                sizes.includes(size)
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-muted hover:border-accent hover:text-foreground"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Bestseller */}
      <div className="mt-8 flex items-center gap-3">
        <input
          id="bestseller"
          type="checkbox"
          checked={bestSeller}
          onChange={() => setBestSeller((prev) => !prev)}
          className="h-5 w-5 accent-primary"
        />

        <label
          htmlFor="bestseller"
          className="cursor-pointer text-foreground"
        >
          Add to Bestseller
        </label>
      </div>
    </div>

    {/* Submit */}
    <div className="flex justify-end">
      <button
        type="submit"
        className="rounded-xl bg-primary px-8 py-3 font-medium text-primary-foreground transition hover:bg-primary-hover"
      >
        Add Product
      </button>
    </div>
  </form>
);
}

export default Add