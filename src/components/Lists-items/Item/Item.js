import React from "react";
import { Card } from "antd";

const { Meta } = Card;
const Item = () => {
  return (
    <div>
      <Card
        hoverable
        style={{
          width: 240,
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </div>
  );
};

export default Item;
