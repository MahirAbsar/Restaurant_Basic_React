import React from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from "reactstrap";

const MenuItem = (props) => {
  console.log(props);

  return (
    <Card style={{ margin: "10px" }}>
      <CardBody>
        <CardImg
          style={{ opacity: "0.5" }}
          top
          width="100%"
          src={props.dish.image}
          alt="New Dish"
        ></CardImg>
        <CardImgOverlay>
          <CardTitle style={{ cursor: "pointer" }} onClick={props.selectDish} className="fst-italic fs-1">
            {props.dish.name}
          </CardTitle>
        </CardImgOverlay>
      </CardBody>
    </Card>
  );
};

export default MenuItem;
