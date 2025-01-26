import React, { useEffect, useState } from "react";
import { getProducts } from "../apis/apis";
import Productcard from "./Productcard";
import { useContext } from "react";
import { Filterdatacontext } from "../Context/FilteredData";

export default function Products() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const data = useContext(Filterdatacontext);
  const filteredData = data.filteredData;
  console.log(filteredData, "filtered Data in products page");
  // useEffect(()=>{
  //     const getAllProducts=async()=>{
  //       const result =await getProducts();
  //       setProducts(result.data);
  //       setIsLoading(false);

  //     }
  //     getAllProducts();

  //   },[])

  return (
    <div className="flex  justify-center items-center flex-wrap gap-[30px] ml-[100px] mt-[100px]">
      {filteredData.length > 0 ? (
        filteredData.map((product) => (
          <Productcard
            productid={product.id}
            title={product.title}
            price={product.price}
            rating={product.rating.rate}
            image={product.image}
          />
        ))
      ) : (
        <p className="font-bold text-xl mt-[60px]">No products found </p>
      )}
    </div>
  );
}
