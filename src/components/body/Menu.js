import React, {Component} from "react"
import DISHES from "../data/dishes.js"
import MenuItem from "./MenuItem.js"

class Menu extends Component {

    state = {
        dishes:DISHES,
    }

    render(){
        const menu = this.state.dishes.map(item => {
            return <MenuItem dish={item} key = {item.id} />

        }
        )
        
        console.log(menu);

        return (
            <div>
                {menu}
            </div>
        ) 
    }
}

export default Menu;
