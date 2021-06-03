import React from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from "reactstrap";

const MenuItem = (props) => {
  console.log(props);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <Card style={{ margin: "10px" }}>
            <CardImg
              style={{ opacity: "0.5" }}
              top
              width="100%"
              src={props.dish.image}
              alt="New Dish"
            ></CardImg>
            <CardImgOverlay>
              <CardBody>
                <CardTitle className="fst-italic fs-1">{props.dish.name}</CardTitle>
              </CardBody>
            </CardImgOverlay>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
