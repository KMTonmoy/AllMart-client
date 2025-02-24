'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { TableDemo } from "./ProductsTable";

const Page = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="w-full  flex flex-col p-4">
      <TableDemo products={products} />
    </div>
  );
};

export default Page;
