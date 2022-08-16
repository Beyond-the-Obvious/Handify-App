import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";


export default class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }
 
  getCart = async () => {
    const res = await axios.get(`${process.env.REACT_APP_HEROKU}/cart`);
    this.setState({
      cart: res.data,
    });
    // console.log(this.state.cart);
  };

  deleteCart = async (id) => {
    await axios.delete(`${process.env.REACT_APP_HEROKU}/cart/${id}`);
    this.getCart();
    // console.log(id);
  };

  componentDidMount() {
    console.log("we are inside componentDidMount");
    this.getCart();
  }
  
  render() {
    return (

      <div>

        {this.state.cart.map((item, idx) => (
  
          <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Image</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td><img src={item.imgURL} alt={this.title} width="100"/></td>
              <td><Button onClick={() => this.deleteCart(item._id)}>Delete</Button></td>
            </tr>
          </tbody>
        </table>
  
            ))}

      </div>
  )
}
}