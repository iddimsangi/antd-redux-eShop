import React from "react";
import { Card } from "antd";
import { useSelector } from "react-redux";
const { Meta } = Card;
const Item = ({ product }) => {
  const { category, description, id, image, price, title } = product;
  return (
    <div className="item-card">
      <Card
        hoverable
        style={{
          width: 300,
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
        cover={<img alt="example" src={image} />}
      >
        <Meta title={title} description={` $ ${price}`} />
        <span style={{ color: "#ccc" }}>{category}</span>
      </Card>
    </div>
  );
};

export default Item;
