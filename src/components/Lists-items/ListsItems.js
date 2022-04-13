import React, { useEffect } from "react";
import Item from "./Item/Item";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/actions/actions";

const ListsItems = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
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
