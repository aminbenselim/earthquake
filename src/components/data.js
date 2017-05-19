import React, { Component } from "react";
import Table from "./table";
import "react-table/react-table.css";

import SimpleMap from "./map";

class Data extends Component {
  componentWillMount() {
    this.props.fetchData();
  }

  render() {
    let { data, error, loading } = this.props;
    if (loading == null) {
      loading = true;
    }
    if (error) return <p> {error.message}</p>;
    if (loading) {
      return <span> loading</span>;
    } else {
      return (
        <div>
          <SimpleMap data={data} />
          <Table data={data.features} />
        </div>
      );
    }
  }
}

export default Data;
