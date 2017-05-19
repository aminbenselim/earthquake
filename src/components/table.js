import React, { Component } from "react";
import ReactTable from "react-table";

export default class Table extends Component {
  render() {
    const data = this.props.data;

    const columns = [
      {
        Header: "Location",
        accessor: "properties.place"
      },
      {
        Header: "Magnitude",
        accessor: "properties.mag",
        width: 100
      },
      {
        Header: "Details",
        accessor: "properties.url"
      }
    ];

    return (
      <div className="table-wrap">
        <ReactTable
          className="-striped -highlight"
          data={data}
          columns={columns}
          defaultPageSize={10}
        />
      </div>
    );
  }
}
