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

  useEffect(() => {
    console.log(products);
  }, [products]);
  const renderedItems = () =>
    products.map((product) => <Item product={product} />);
  return <div className="lists-items">{renderedItems()}</div>;
};

export default ListsItems;
