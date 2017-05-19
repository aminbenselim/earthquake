import React, { Component } from "react";
class Data extends Component {
  componentWillMount() {
    this.props.fetchData();
  }

  render() {
    let { data, error, loading } = this.props;
    if (loading == null) {
      loading = true;
    }
    if (error) return <p> {error}</p>;
    return loading ? <span> loading</span> : { data };
  }
}

export default Data;
