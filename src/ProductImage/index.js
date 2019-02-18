import React from "react";

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  onLoad = () => {
    this.setState({
      loaded: true
    });
  };

  render() {
    const { src } = this.props;
    return (
      <div className={!this.state.loaded ? "notLoaded" : ""}>
        <img src={src} onLoad={this.onLoad} />
      </div>
    );
  }
}

export default Image;
