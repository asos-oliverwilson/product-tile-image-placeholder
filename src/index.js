import React, { Fragment, Component } from "react";
import ReactDOM from "react-dom";
import ProductTile from "./ProductTile";
import ProductImage from "./ProductImage";
import Title from "./Title";
import TitlePlaceholder from "./TitlePlaceholder";
import AddToBagPlaceholder from "./AddToBagPlaceholder";
import AddToBag from "./AddToBag";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: undefined };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: {
          title: "Pull&Bear colour block hooded jacket in red",
          img:
            "https://images.asos-media.com/products/pullbear-colour-block-hooded-jacket-in-red/11863040-1-red?$n_320w$&wid=317&fit=constrain"
        }
      });
    }, 2000);
  }

  render() {
    const {
      state: { data }
    } = this;

    return (
      <div className="App">
        <ProductTile>
          <ProductImage src={data ? data.img : undefined} />
          {data ? (
            <Fragment>
              <Title title={data.title} />
              <AddToBag />
            </Fragment>
          ) : (
            <Fragment>
              <TitlePlaceholder />
              <AddToBagPlaceholder />
            </Fragment>
          )}
        </ProductTile>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
