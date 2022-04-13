import React, { useEffect } from "react";
import { Card, Button } from "antd";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProduct } from "../../redux/actions/actions";
const { Meta } = Card;

const ItemDetails = () => {
  const productObj = useSelector((state) => state.product);
  const { description, id, image, price, title } = productObj.product;

  const paramId = useParams();
  const dispatch = useDispatch();
  console.log(paramId);
  console.log(paramId.itemId);

  useEffect(() => {
    if (paramId && paramId !== "") dispatch(fetchProduct(paramId.itemId));
    console.log(productObj.product);
  }, [paramId]);
  return (
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
