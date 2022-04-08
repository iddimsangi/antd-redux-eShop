import React from "react";
import { Card } from "antd";

const { Meta } = Card;
const Item = () => {
  return (
    <div className="item-card">
      <Card
        hoverable
        style={{
          width: 300,
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta
          title="Mens Casual Premium Slim Fit T-shirts"
          description={`$ 22.3`}
        />
        <span style={{ color: "#ccc" }}>men clothing</span>
      </Card>
    </div>
  );
};

export default Item;
