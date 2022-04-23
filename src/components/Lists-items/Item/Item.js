import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
const { Meta } = Card;

const Item = ({ product }) => {
  const { category, id, image, price, title } = product;
  return (
    <div className="item-card">
      <Link to={`/item/${id}`}>
        <Card
          key={id}
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
      </Link>
    </div>
  );
};

export default Item;
