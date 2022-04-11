import React, { useEffect } from "react";
import { Card, Button } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProduct } from "../../redux/actions/actions";
import LoadingSpinner from "../loading-spinner/LoadingSpinner";
import { removeSelectedProduct } from "../../redux/actions/actions";
const { Meta } = Card;
const ItemDetails = () => {
  const paramId = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { description, image, price, title } = product;

  console.log(product);
  console.log(paramId.itemId);
  const fetchProduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${paramId.itemId}`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(setSelectedProduct(response.data));
    console.log(response.data);
  };
  useEffect(() => {
    if (paramId && paramId !== "") fetchProduct();
    dispatch(removeSelectedProduct());
  }, [paramId]);
  return Object.keys(product).length === 0 ? (
    <LoadingSpinner />
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignContent: "center",
        marginTop: "2rem",
        boxShadow:
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
        width: "700px",
        margin: "2rem auto",
      }}
      className="item-details"
    >
      <Card
        hoverable
        style={{
          width: "50%",
        }}
        cover={<img alt="example" src={image} />}
      ></Card>
      <div
        style={{
          display: "flex",
          width: "50%",
          flexDirection: "column",
          padding: "1rem",
        }}
      >
        <div className="my-card-header" style={{ marginBottom: "1.5rem" }}>
          <Meta title={title} />
          <Button
            type="default"
            style={{
              width: "40%",
              backgroundColor: "#308892",
              color: "#fff",
            }}
          >
            $ {price}
          </Button>
        </div>
        <div className="site-card-border-less-wrapper my-card">
          <Card title={title} bordered={false} style={{ width: "100%" }}>
            <p>{description}</p>
            <Button type="danger">Add to Cart</Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
