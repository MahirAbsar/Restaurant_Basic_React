import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

import LoadComments  from "./LoadComments.js"

const DishDetails = (props) => {
  return (
    <div>
      <Card style={{ margin: "10px" }}>
        <CardImg
          top
          width="100%"
          src={props.dish.image}
          alt="Random Dish"
        ></CardImg>
        <CardBody>
          <CardTitle>
            <h2 className="fst-italic fw-bolder">{props.dish.name}</h2>
          </CardTitle>
          <CardText className="text-start">
            <p className="lead">{props.dish.description}</p>
            <h4>
              Price:{" "}
              <span className="badge bg-secondary">{props.dish.price} /-</span>
            </h4>
            <hr/>
            <LoadComments comments={props.dish.comments} />
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default DishDetails;
