import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import classes from "../Header/Header.module.css";
import { categoryInfos } from "../Category/catagoryFullInfos";

const Search = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearch = () => {
    if (selectedCategory) {
      navigate(`/category/${selectedCategory}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div className={classes.search}>
      <select
        name="category"
        id="category"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All</option>
        {categoryInfos.map((category) => (
          <option key={category.name} value={category.name}>
            {category.title}
          </option>
        ))}
      </select>
      <input type="text" placeholder={selectedCategory} />
      <BsSearch size={38} onClick={handleSearch} />
    </div>
  );
};

export default Search;
