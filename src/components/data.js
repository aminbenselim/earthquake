import React, { Component } from "react";
import Table from "./table";
import 'react-table/react-table.css'


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
    if (loading) {
      return <span> loading</span>;
    } else {
      return <Table data={data.features} />;
    }
  }
}

export default Data;
