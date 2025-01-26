import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { getProducts } from "../apis/apis";
import { useContext } from "react";
import { Filterdatacontext } from "../Context/FilteredData";
export default function Searchbar() {
  const [allproducts, setAllProducts] = useState([]);
  const data = useContext(Filterdatacontext);
  const filteredData = data.filteredData;

  const [searchedProduct, setSearchedProduct] = useState("");

  useEffect(() => {
    const getAllProducts = async () => {
      const result = await getProducts();
      data.setFilteredData(result.data);
      setAllProducts(result.data);
    };
    getAllProducts();
  }, []);

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setSearchedProduct(searchValue);

    console.log("Before", searchValue);

    data.setFilteredData(
      allproducts.filter((product) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  };
  console.log("searched product", searchedProduct);

  console.log("filtered data", filteredData);

  // setProducts(filteredProducts);

  // console.log("filteredProducts",filteredProducts)
  return (
    <div>
      <div className="flex justify-center items-center ">
        <input
          className="ml-[px] border-none h-[35px] rounded-md outline-none text-2lg"
          type="text"
          placeholder="search product"
          onChange={(e) => handleSearchChange(e)}
        />
      </div>
    </div>
  );
}
