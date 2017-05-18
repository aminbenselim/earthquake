import React, { Component } from "react";
class Data extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    console.log(this.props.data);
    return <div />;
  }
}

export default Data;
