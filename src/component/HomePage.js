import React from "react";
import axios from "axios";
import "../css/homepage.css";
import LandingPage from "./LandingPage";



import ProductModal from "./ProductModal";

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [],
      handify: [],
    };
  }

  getProduct = async () => {
    const res = await axios.get(`${process.env.REACT_APP_HEROKU}/item`);
    this.setState({
      handify: res.data,
    });
  };

  componentDidMount() {
    this.getProduct();
  }

  

  render() {
    return (
      <div className="login-body">
        <LandingPage/>
        <h1 className="contactTxt">Check out our new Products!</h1>

        <div className="cards">
          {this.state.handify.map((item, idx) => (
            <div key={idx}>
              <ProductModal itemData={item} getProduct={this.getProduct} createCart={this.createCart} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
