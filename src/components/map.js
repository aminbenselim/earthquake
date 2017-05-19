import React, { Component } from "react";
import { Map, TileLayer, GeoJSON } from "react-leaflet";

export default class SimpleExample extends Component {
  render() {
    const position = [38, -96];
    return (
      <Map
        style={{ height: "500px", width: "80%", margin: "0 auto" }}
        center={position}
        zoom={2}
      >
        <TileLayer url="https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWJlbnMyNCIsImEiOiJjajJ1bDRtMzcwMDNmMzJydHdvcjF6ODA5In0.xdZi4pmkhj1zb9Krr64CXw" />
        <GeoJSON data={this.props.data} />
      </Map>
    );
  }
}
