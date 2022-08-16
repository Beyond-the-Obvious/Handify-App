import React from "react";
import axios from "axios";
import ProductCardHome from "../component/ProductCardHome";
import Row from "react-bootstrap/Row";
import "../css/homepage.css";

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
        <h1 className="contactTxt">Check out our new Products!</h1>

        <div className="cards">
          {this.state.handify.map((item, idx) => (
            <div key={idx}>
              <ProductCardHome itemData={item} getProduct={this.getProduct} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
