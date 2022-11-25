import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import defstyle from "./basic";
import DeckGL from "@deck.gl/react";
import { GeoJsonLayer } from "@deck.gl/layers";
import { StaticMap } from "react-map-gl";

import { useRef } from "react";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic21peWFrYXdhIiwiYSI6ImNqcGM0d3U4bTB6dWwzcW04ZHRsbHl0ZWoifQ.X9cvdajtPbs9JDMG-CMDsA";

// The geojson data
const DATA_URL = `https://webgeoda.github.io/data/natregimes.geojson`;

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: -100.4,
  latitude: 38.74,
  zoom: 2.5,
  maxZoom: 20
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center"
  }
});

function App() {
  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      getTooltip={({ object }) =>
        object && `${object.properties.NAME}: ${object.properties.HR60}`
      }
    >
      <StaticMap mapboxApiAccessToken={MAPBOX_TOKEN} />
    </DeckGL>
  );
}

export default App;
