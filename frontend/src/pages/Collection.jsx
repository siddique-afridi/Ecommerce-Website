import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import { useMeta } from "../hooks/useMeta";

const FilterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" {...props}>
    <path d="M4 6h16M8 12h12M11 18h9" strokeLinecap="round" />
    <circle cx="4" cy="12" r="1.6" fill="currentColor" stroke="none" />
    <circle cx="8" cy="18" r="1.6" fill="currentColor" stroke="none" />
  </svg>
);

const ChevronIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" {...props}>
    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CloseIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" {...props}>
    <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
  </svg>
);

const FilterGroup = ({ title, children }) => (
  <div className="border border-border bg-surface px-5 py-4">
    <p className="mb-3 text-[11px] font-mono tracking-mega uppercase text-muted">{title}</p>
    <div className="flex flex-col gap-2.5 text-sm text-foreground">{children}</div>
  </div>
);

const FilterCheckbox = ({ label, value, onChange }) => (
  <label className="flex items-center gap-2.5 cursor-pointer group">
    <input
      type="checkbox"
      className="w-4 h-4 accent-primary cursor-pointer"
      value={value}
      onChange={onChange}
    />
    <span className="text-muted group-hover:text-foreground transition-colors">{label}</span>
  </label>
);

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  useMeta({
    title: "Collection | Sphere E-Commerce Store",
    description: "Browse our amazing collection of products at YourBrand.",
    keywords: "products, collection, shopping, YourBrand",
  });

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const clearFilters = () => {
    setCategory([]);
    setSubCategory([]);
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  const activeFilterCount = category.length + subCategory.length;

  return (
    <div className="max-w-container mx-auto px-6 lg:px-10 pt-10 pb-20 font-sans">
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 border-t border-border pt-10">
        {/* filters */}
        <aside className="sm:w-64 shrink-0">
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="w-full flex items-center justify-between sm:hidden mb-4 px-4 py-3 border border-border bg-surface text-foreground"
          >
            <span className="flex items-center gap-2 text-[13px] tracking-[0.1em] uppercase">
              <FilterIcon className="w-4 h-4" />
              Filters
              {activeFilterCount > 0 && (
                <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-primary text-primary-foreground text-[9px]">
                  {activeFilterCount}
                </span>
              )}
            </span>
            {showFilter ? <CloseIcon className="w-4 h-4" /> : <ChevronIcon className="w-4 h-4" />}
          </button>

          <div className={`flex-col gap-4 sm:flex ${showFilter ? "flex" : "hidden"}`}>
            <div className="hidden sm:flex items-center justify-between mb-1">
              <p className="text-[11px] font-mono tracking-mega uppercase text-muted-foreground">
                Refine
              </p>
              {activeFilterCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-[11px] tracking-wide uppercase text-accent hover:text-accent-hover transition-colors"
                >
                  Clear all
                </button>
              )}
            </div>

            <FilterGroup title="Category">
              <FilterCheckbox label="Men" value="Men" onChange={toggleCategory} />
              <FilterCheckbox label="Women" value="Women" onChange={toggleCategory} />
              <FilterCheckbox label="Kids" value="Kids" onChange={toggleCategory} />
            </FilterGroup>

            <FilterGroup title="Type">
              <FilterCheckbox label="Topwear" value="Topwear" onChange={toggleSubCategory} />
              <FilterCheckbox label="Bottomwear" value="Bottomwear" onChange={toggleSubCategory} />
              <FilterCheckbox label="Winterwear" value="Winterwear" onChange={toggleSubCategory} />
            </FilterGroup>
          </div>
        </aside>

        {/* results */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <Title text1={"ALL"} text2={"COLLECTIONS"} />
              <p className="text-[13px] text-muted mt-1">
                {filterProducts.length} {filterProducts.length === 1 ? "piece" : "pieces"}
              </p>
            </div>

            <div className="relative">
              <select
                onChange={(e) => setSortType(e.target.value)}
                className="appearance-none bg-surface border border-border text-foreground text-[13px] tracking-[0.05em] pl-4 pr-9 py-2.5 cursor-pointer hover:border-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30"
              >
                <option value="relevant">Sort: Relevant</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
              </select>
              <ChevronIcon className="w-3.5 h-3.5 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-muted" />
            </div>
          </div>

          {filterProducts.length === 0 ? (
            <div className="border border-border bg-surface py-20 text-center">
              <p className="font-display text-xl text-foreground mb-2">No pieces match yet</p>
              <p className="text-sm text-muted mb-5">
                Try clearing a filter or searching for something else.
              </p>
              {activeFilterCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-[13px] tracking-[0.08em] uppercase text-accent hover:text-accent-hover border-b border-accent pb-0.5"
                >
                  Clear all filters
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8">
              {filterProducts.map((item, i) => (
                <ProductItem
                  key={i}
                  name={item.name}
                  id={item._id}
                  price={item.price}
                  image={item.image}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;