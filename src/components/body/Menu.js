import React, { Component } from "react";
import DISHES from "../data/dishes.js";
import MenuItem from "./MenuItem.js";
import DishDetails from "./DishDetails.js";

class Menu extends Component {
  state = {
    dishes: DISHES,
    selectedDish: null,
  };

  onDishSelect = (item) => {
    this.setState({
      selectedDish: item,
    });
  };

  render() {
    let menuDetails = null;
    if (this.state.selectedDish != null) {
      menuDetails = <DishDetails dish={this.state.selectedDish}/>;
    }

    const menu = this.state.dishes.map((item) => {
      return (
        <MenuItem
          dish={item}
          key={item.id}
          selectDish={() => this.onDishSelect(item)}
        />
      );
    });

    console.log(menu);

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-6">{menu}</div>
            <div className="col-6">{menuDetails}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
