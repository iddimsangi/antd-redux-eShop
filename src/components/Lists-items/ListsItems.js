import React, { useEffect } from "react";
import Item from "./Item/Item";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/actions";

const ListsItems = () => {
  const products = useSelector((state) => state.allProducts.products);

  const dispatch = useDispatch();
  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch(setProducts(response.data));
    console.log("useefect called", response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="lists-items">
      {products.map((product) => (
        <Item product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ListsItems;
