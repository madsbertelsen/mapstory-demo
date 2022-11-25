import { StyleSheet, Text, View, Image, Pressable } from "react-native";

import React, { useEffect, useMemo, useState } from "react";
import Map from "react-map-gl";
import { Icon, IconButton, NativeBaseProvider } from "native-base";
import DeckGL from "@deck.gl/react";
import { GeoJsonLayer, IconLayer } from "@deck.gl/layers";

import "maplibre-gl/dist/maplibre-gl.css";
import { useRef } from "react";
import WebMercatorViewport from "viewport-mercator-project";
function renderTooltip(info) {
  const { object, x, y } = info;

  if (info.objects) {
    return (
      <div className="tooltip interactive" style={{ left: x, top: y }}>
        {info.objects.map(({ name, year, mass, class: meteorClass }) => {
          return (
            <div key={name}>
              <h5>{name}</h5>
              <div>Year: {year || "unknown"}</div>
              <div>Class: {meteorClass}</div>
              <div>Mass: {mass}g</div>
            </div>
          );
        })}
      </div>
    );
  }

  if (!object) {
    return null;
  }

  return object.cluster ? (
    <div className="tooltip" style={{ left: x, top: y }}>
      {object.point_count} records
    </div>
  ) : (
    <div className="tooltip" style={{ left: x, top: y }}>
      {object.name} {object.year ? `(${object.year})` : ""}
    </div>
  );
}
const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic21peWFrYXdhIiwiYSI6ImNqcGM0d3U4bTB6dWwzcW04ZHRsbHl0ZWoifQ.X9cvdajtPbs9JDMG-CMDsA";
const INITIAL_VIEW_STATE = {
  longitude: -100.4,
  latitude: 38.74,
  zoom: 2.5,
  maxZoom: 20
};
export const RouteEmbed = ({
  styles,
  attributes,
  id,
  setFullscreen
}: {
  styles: any;
  attributes: any;
  id: string;
  setFullscreen: (full: boolean) => void;
}) => {
  const [layout, setLayout] = useState<any>();

  const [hoverInfo, setHoverInfo] = useState({});
  const expandTooltip = (info) => {
    console.log(info);
    if (info.picked) {
      setHoverInfo(info);
    } else {
      setHoverInfo({});
    }
  };
  const viewState = useMemo(() => {
    if (!layout) return;
    const viewport = new WebMercatorViewport({
      width: layout.width,
      height: layout.height
    });

    const [minLon, minLat, maxLon, maxLat] = attributes.feature.properties.box;
    return viewport.fitBounds(
      [
        [minLon, minLat],
        [maxLon, maxLat]
      ],
      { padding: -100 }
    );
  }, [layout]);

  const ICON_MAPPING = {
    marker: { x: 0, y: 0, width: 128, height: 128, mask: true }
  };
  const iconLayer = useMemo(() => {
    const l = new IconLayer({
      id: "icon-layer",

      data: fetch(
        "https://strapi.mapstory.app/api/points?" +
          attributes.pois
            .map((p: any, idx: number) => `filters[id][$in][${idx}]=${p}`)
            .join("&")
      )
        .then((response) => response.json())
        .then((data) =>
          data.data.map((d) => ({
            position: d.attributes.feature.geometry.coordinates,
            properties: {
              name: d.attributes.name
            }
          }))
        ),
      pickable: true,
      // iconAtlas and iconMapping are required
      // getIcon: return a string

      getIcon: (d) => ({
        url:
          "https://mapstory-strapi-images.s3.eu-central-1.amazonaws.com/hoejskoleruten_logo_d57d8eee97.png?updated_at=2022-11-01T14:20:29.363Z",
        width: 128,
        height: 128,
        anchorY: 128
      }),
      sizeScale: 8,
      getPosition: (d) => d.position,
      getSize: (d) => 5,
      getColor: (d) => [Math.sqrt(d.exits), 140, 0]
    });
    return l;
  }, []);

  const layer = new GeoJsonLayer({
    id: "GeoJsonLayer",
    data: { type: "FeatureCollection", features: [attributes.feature] },
    /*
    data:
      "https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart.geo.json",
*/
    /* props from GeoJsonLayer class */

    // elevationScale: 1,
    extruded: true,
    filled: true,
    getElevation: 30,
    getFillColor: [160, 160, 180, 200],
    // getIconAngle: 0,
    // getIconColor: [0, 0, 0, 255],
    // getIconPixelOffset: [0, 0],
    // getIconSize: 1,
    getLineColor: (f) => {
      const hex = f.properties.color;
      // convert to RGB
      return hex
        ? hex.match(/[0-9a-f]{2}/g).map((x) => parseInt(x, 16))
        : [0, 0, 0];
    },
    getLineWidth: 2,
    getPointRadius: 4,
    getText: (f) => f.properties.name,
    // getTextAlignmentBaseline: 'center',
    // getTextAnchor: 'middle',
    // getTextAngle: 0,
    // getTextBackgroundColor: [255, 255, 255, 255],
    // getTextBorderColor: [0, 0, 0, 255],
    // getTextBorderWidth: 0,
    // getTextColor: [0, 0, 0, 255],
    // getTextPixelOffset: [0, 0],
    getTextSize: 12,
    // iconAlphaCutoff: 0.05,
    // iconAtlas: null,
    // iconBillboard: true,
    // iconMapping: {},
    // iconSizeMaxPixels: Number.MAX_SAFE_INTEGER,
    // iconSizeMinPixels: 0,
    // iconSizeScale: 1,
    // iconSizeUnits: 'pixels',
    // lineBillboard: false,
    // lineCapRounded: false,
    // lineJointRounded: false,
    // lineMiterLimit: 4,
    // lineWidthMaxPixels: Number.MAX_SAFE_INTEGER,
    lineWidthMinPixels: 2,
    // lineWidthScale: 1,
    // lineWidthUnits: 'meters',
    // material: true,
    // pointAntialiasing: true,
    // pointBillboard: false,
    // pointRadiusMaxPixels: Number.MAX_SAFE_INTEGER,
    // pointRadiusMinPixels: 0,
    // pointRadiusScale: 1,
    pointRadiusUnits: "pixels",
    pointType: "circle+text",
    stroked: false,
    // textBackground: false,
    // textBackgroundPadding: [0, 0, 0, 0],
    // textBillboard: true,
    // textCharacterSet: [' ', '!', '"', '#', '$', '%', '&', ''', '(', ')', '*', '+', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?', '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\', ']', '^', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{', '|', '}', '~', ''],
    // textFontFamily: 'Monaco, monospace',
    // textFontSettings: {},
    // textFontWeight: 'normal',
    // textLineHeight: 1,
    // textMaxWidth: -1,
    // textOutlineColor: [0, 0, 0, 255],
    // textOutlineWidth: 0,
    // textSizeMaxPixels: Number.MAX_SAFE_INTEGER,
    // textSizeMinPixels: 0,
    // textSizeScale: 1,
    // textSizeUnits: 'pixels',
    // textWordBreak: 'break-word',
    // wireframe: false,

    /* props inherited from Layer class */

    // autoHighlight: false,
    // coordinateOrigin: [0, 0, 0],
    // coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
    // highlightColor: [0, 0, 128, 128],
    // modelMatrix: null,
    // opacity: 1,
    pickable: true
    // visible: true,
    // wrapLongitude: false,
  });

  return (
    <View
      style={{ height: 400, width: "100%" }}
      onLayout={(ev) => {
        setLayout(ev.nativeEvent.layout);
      }}
    >
      {viewState && iconLayer && (
        <DeckGL
          initialViewState={viewState}
          controller={true}
          layers={[layer, iconLayer]}
          onClick={expandTooltip}
          getTooltip={
            (prop) => {
              return prop.object && prop.object.properties.name;
            }

            /*            object.properties &&
            `${object.properties.NAME}: ${object.properties.HR60}`
            */
          }
        >
          {renderTooltip(hoverInfo)}
          <Map
            mapboxApiAccessToken={MAPBOX_TOKEN}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          />
        </DeckGL>
      )}
    </View>
  );
};
