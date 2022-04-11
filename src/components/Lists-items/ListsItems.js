import React, { useEffect } from "react";
import Item from "./Item/Item";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/actions";
import LoadingSpinner from "../loading-spinner/LoadingSpinner";
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

  // const listsItems =;
  return (
    <div className="lists-items">
      {products.length === 0 ? (
        <LoadingSpinner />
      ) : (
        products.map((product) => <Item product={product} key={product.id} />)
      )}
    </div>
  );
};

export default ListsItems;
