export default {
  name: "Basic",
  glyphs:
    "https://api.maptiler.com/fonts/{fontstack}/{range}.pbf?key=rUWxu4V9k6ruvdGGiYRt",
  layers: [
    {
      id: "background",
      type: "background",
      paint: {
        "background-color": "hsl(47, 26%, 88%)"
      }
    },
    {
      id: "landuse-residential",
      type: "fill",
      paint: {
        "fill-color": "hsl(47, 13%, 86%)",
        "fill-opacity": 0.7
      },
      filter: [
        "all",
        ["==", "$type", "Polygon"],
        ["in", "class", "residential", "suburb", "neighbourhood"]
      ],
      layout: {
        visibility: "visible"
      },
      source: "openmaptiles",
      "source-layer": "landuse"
    },
    {
      id: "landcover_grass",
      type: "fill",
      paint: {
        "fill-color": "hsl(82, 46%, 72%)",
        "fill-opacity": 0.45
      },
      filter: ["==", "class", "grass"],
      source: "openmaptiles",
      "source-layer": "landcover"
    },
    {
      id: "landcover_wood",
      type: "fill",
      paint: {
        "fill-color": "hsl(82, 46%, 72%)",
        "fill-opacity": {
          base: 1,
          stops: [
            [8, 0.6],
            [22, 1]
          ]
        }
      },
      filter: ["==", "class", "wood"],
      source: "openmaptiles",
      "source-layer": "landcover"
    },
    {
      id: "water",
      type: "fill",
      paint: {
        "fill-color": "hsl(205, 56%, 73%)"
      },
      filter: [
        "all",
        ["==", "$type", "Polygon"],
        ["!=", "intermittent", 1],
        ["!=", "brunnel", "tunnel"]
      ],
      layout: {
        visibility: "visible"
      },
      source: "openmaptiles",
      "source-layer": "water"
    },
    {
      id: "water_intermittent",
      type: "fill",
      paint: {
        "fill-color": "hsl(205, 56%, 73%)",
        "fill-opacity": 0.7
      },
      filter: ["all", ["==", "$type", "Polygon"], ["==", "intermittent", 1]],
      layout: {
        visibility: "visible"
      },
      source: "openmaptiles",
      "source-layer": "water"
    },
    {
      id: "landcover-ice-shelf",
      type: "fill",
      paint: {
        "fill-color": "hsl(47, 26%, 88%)",
        "fill-opacity": 0.8
      },
      filter: ["==", "subclass", "ice_shelf"],
      layout: {
        visibility: "visible"
      },
      source: "openmaptiles",
      "source-layer": "landcover"
    },
    {
      id: "landcover-glacier",
      type: "fill",
      paint: {
        "fill-color": "hsl(47, 22%, 94%)",
        "fill-opacity": {
          base: 1,
          stops: [
            [0, 1],
            [8, 0.5]
          ]
        }
      },
      filter: ["==", "subclass", "glacier"],
      layout: {
        visibility: "visible"
      },
      source: "openmaptiles",
      "source-layer": "landcover"
    },
    {
      id: "landcover_sand",
      type: "fill",
      paint: {
        "fill-color": "rgba(232, 214, 38, 1)",
        "fill-opacity": 0.3,
        "fill-antialias": false
      },
      filter: ["all", ["in", "class", "sand"]],
      source: "openmaptiles",
      metadata: {},
      "source-layer": "landcover"
    },
    {
      id: "landuse",
      type: "fill",
      paint: {
        "fill-color": "#eae0d0"
      },
      filter: ["==", "class", "agriculture"],
      layout: {
        visibility: "visible"
      },
      source: "openmaptiles",
      "source-layer": "landuse"
    },
    {
      id: "landuse_overlay_national_park",
      type: "fill",
      paint: {
        "fill-color": "#E1EBB0",
        "fill-opacity": {
          base: 1,
          stops: [
            [5, 0],
            [9, 0.75]
          ]
        }
      },
      filter: ["==", "class", "national_park"],
      source: "openmaptiles",
      "source-layer": "landcover"
    },
    {
      id: "waterway-tunnel",
      type: "line",
      paint: {
        "line-color": "hsl(205, 56%, 73%)",
        "line-width": {
          base: 1.4,
          stops: [
            [8, 1],
            [20, 2]
          ]
        },
        "line-opacity": 1,
        "line-dasharray": [3, 3],
        "line-gap-width": {
          stops: [
            [12, 0],
            [20, 6]
          ]
        }
      },
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["==", "brunnel", "tunnel"]
      ],
      layout: {
        visibility: "visible"
      },
      source: "openmaptiles",
      "source-layer": "waterway"
    },
    {
      id: "waterway",
      type: "line",
      paint: {
        "line-color": "hsl(205, 56%, 73%)",
        "line-width": {
          base: 1.4,
          stops: [
            [8, 1],
            [20, 8]
          ]
        },
        "line-opacity": 1
      },
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["!in", "brunnel", "tunnel", "bridge"],
        ["!=", "intermittent", 1]
      ],
      layout: {
        visibility: "visible"
      },
      source: "openmaptiles",
      "source-layer": "waterway"
    },
    {
      id: "waterway_intermittent",
      type: "line",
      paint: {
        "line-color": "hsl(205, 56%, 73%)",
        "line-width": {
          base: 1.4,
          stops: [
            [8, 1],
            [20, 8]
          ]
        },
        "line-opacity": 1,
        "line-dasharray": [2, 1]
      },
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["!in", "brunnel", "tunnel", "bridge"],
        ["==", "intermittent", 1]
      ],
      layout: {
        visibility: "visible"
      },
      source: "openmaptiles",
      "source-layer": "waterway"
    },
    {
      id: "tunnel_railway_transit",
      type: "line",
      paint: {
        "line-color": "hsl(34, 12%, 66%)",
        "line-opacity": {
          base: 1,
          stops: [
            [11, 0],
            [16, 1]
          ]
        },
        "line-dasharray": [3, 3]
      },
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["==", "brunnel", "tunnel"],
        ["==", "class", "transit"]
      ],
      layout: {
        "line-cap": "butt",
        "line-join": "miter"
      },
      source: "openmaptiles",
      minzoom: 0,
      "source-layer": "transportation"
    },
    {
      id: "building",
      type: "fill",
      paint: {
        "fill-color": "rgba(222, 211, 190, 1)",
        "fill-opacity": {
          base: 1,
          stops: [
            [13, 0],
            [15, 1]
          ]
        },
        "fill-antialias": true,
        "fill-outline-color": {
          stops: [
            [15, "rgba(212, 177, 146, 0)"],
            [16, "rgba(212, 177, 146, 0.5)"]
          ]
        }
      },
      source: "openmaptiles",
      "source-layer": "building"
    },
    {
      id: "housenumber",
      type: "symbol",
      paint: {
        "text-color": "rgba(212, 177, 146, 1)"
      },
      filter: ["==", "$type", "Point"],
      layout: {
        "text-font": ["Noto Sans Regular"],
        "text-size": 10,
        "text-field": "{housenumber}"
      },
      source: "openmaptiles",
      minzoom: 17,
      "source-layer": "housenumber"
    },
    {
      id: "road_area_pier",
      type: "fill",
      paint: {
        "fill-color": "hsl(47, 26%, 88%)",
        "fill-antialias": true
      },
      filter: ["all", ["==", "$type", "Polygon"], ["==", "class", "pier"]],
      layout: {
        visibility: "visible"
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation"
    },
    {
      id: "road_pier",
      type: "line",
      paint: {
        "line-color": "hsl(47, 26%, 88%)",
        "line-width": {
          base: 1.2,
          stops: [
            [15, 1],
            [17, 4]
          ]
        }
      },
      filter: ["all", ["==", "$type", "LineString"], ["in", "class", "pier"]],
      layout: {
        "line-cap": "round",
        "line-join": "round"
      },
      source: "openmaptiles",
      metadata: {},
      "source-layer": "transportation"
    },
    {
      id: "road_bridge_area",
      type: "fill",
      paint: {
        "fill-color": "hsl(47, 26%, 88%)",
        "fill-opacity": 0.5
      },
      filter: ["all", ["==", "$type", "Polygon"], ["in", "brunnel", "bridge"]],
      source: "openmaptiles",
      "source-layer": "transportation"
    },
    {
      id: "road_path",
      type: "line",
      paint: {
        "line-color": "hsl(0, 0%, 97%)",
        "line-width": {
          base: 1.55,
          stops: [
            [4, 0.25],
            [20, 10]
          ]
        },
        "line-dasharray": [1, 1]
      },
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["in", "class", "path", "track"]
      ],
      layout: {
        "line-cap": "square",
        "line-join": "bevel"
      },
      source: "openmaptiles",
      "source-layer": "transportation"
    },
    {
      id: "road_minor",
      type: "line",
      paint: {
        "line-color": "hsl(0, 0%, 97%)",
        "line-width": {
          base: 1.55,
          stops: [
            [4, 0.25],
            [20, 30]
          ]
        }
      },
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["in", "class", "minor", "service"]
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round"
      },
      source: "openmaptiles",
      minzoom: 13,
      "source-layer": "transportation"
    },
    {
      id: "tunnel_minor",
      type: "line",
      paint: {
        "line-color": "#efefef",
        "line-width": {
          base: 1.55,
          stops: [
            [4, 0.25],
            [20, 30]
          ]
        },
        "line-dasharray": [0.36, 0.18]
      },
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["==", "brunnel", "tunnel"],
        ["==", "class", "minor_road"]
      ],
      layout: {
        "line-cap": "butt",
        "line-join": "miter"
      },
      source: "openmaptiles",
      "source-layer": "transportation"
    },
    {
      id: "tunnel_major",
      type: "line",
      paint: {
        "line-color": "#fff",
        "line-width": {
          base: 1.4,
          stops: [
            [6, 0.5],
            [20, 30]
          ]
        },
        "line-dasharray": [0.28, 0.14]
      },
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["==", "brunnel", "tunnel"],
        ["in", "class", "primary", "secondary", "tertiary", "trunk"]
      ],
      layout: {
        "line-cap": "butt",
        "line-join": "miter"
      },
      source: "openmaptiles",
      "source-layer": "transportation"
    },
    {
      id: "aeroway-area",
      type: "fill",
      paint: {
        "fill-color": "rgba(255, 255, 255, 1)",
        "fill-opacity": {
          base: 1,
          stops: [
            [13, 0],
            [14, 1]
          ]
        }
      },
      filter: [
        "all",
        ["==", "$type", "Polygon"],
        ["in", "class", "runway", "taxiway"]
      ],
      layout: {
        visibility: "visible"
      },
      source: "openmaptiles",
      minzoom: 4,
      metadata: {
        "mapbox:group": "1444849345966.4436"
      },
      "source-layer": "aeroway"
    },
    {
      id: "aeroway-taxiway",
      type: "line",
      paint: {
        "line-color": "rgba(255, 255, 255, 1)",
        "line-width": {
          base: 1.5,
          stops: [
            [12, 1],
            [17, 10]
          ]
        },
        "line-opacity": 1
      },
      filter: [
        "all",
        ["in", "class", "taxiway"],
        ["==", "$type", "LineString"]
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible"
      },
      source: "openmaptiles",
      minzoom: 12,
      metadata: {
        "mapbox:group": "1444849345966.4436"
      },
      "source-layer": "aeroway"
    },
    {
      id: "aeroway-runway",
      type: "line",
      paint: {
        "line-color": "rgba(255, 255, 255, 1)",
        "line-width": {
          base: 1.5,
          stops: [
            [11, 4],
            [17, 50]
          ]
        },
        "line-opacity": 1
      },
      filter: ["all", ["in", "class", "runway"], ["==", "$type", "LineString"]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible"
      },
      source: "openmaptiles",
      minzoom: 4,
      metadata: {
        "mapbox:group": "1444849345966.4436"
      },
      "source-layer": "aeroway"
    },
    {
      id: "road_trunk_primary",
      type: "line",
      paint: {
        "line-color": "#fff",
        "line-width": {
          base: 1.4,
          stops: [
            [6, 0.5],
            [20, 30]
          ]
        }
      },
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["in", "class", "trunk", "primary"]
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round"
      },
      source: "openmaptiles",
      "source-layer": "transportation"
    },
    {
      id: "road_secondary_tertiary",
      type: "line",
      paint: {
        "line-color": "#fff",
        "line-width": {
          base: 1.4,
          stops: [
            [6, 0.5],
            [20, 20]
          ]
        }
      },
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["in", "class", "secondary", "tertiary"]
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round"
      },
      source: "openmaptiles",
      "source-layer": "transportation"
    },
    {
      id: "road_major_motorway",
      type: "line",
      paint: {
        "line-color": "hsl(0, 0%, 100%)",
        "line-width": {
          base: 1.4,
          stops: [
            [8, 1],
            [16, 10]
          ]
        },
        "line-offset": 0
      },
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["==", "class", "motorway"]
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round"
      },
      source: "openmaptiles",
      "source-layer": "transportation"
    },
    {
      id: "railway-transit",
      type: "line",
      paint: {
        "line-color": "hsl(34, 12%, 66%)",
        "line-opacity": {
          base: 1,
          stops: [
            [11, 0],
            [16, 1]
          ]
        }
      },
      filter: ["all", ["==", "class", "transit"], ["!=", "brunnel", "tunnel"]],
      layout: {
        visibility: "visible"
      },
      source: "openmaptiles",
      "source-layer": "transportation"
    },
    {
      id: "railway",
      type: "line",
      paint: {
        "line-color": "hsl(34, 12%, 66%)",
        "line-opacity": {
          base: 1,
          stops: [
            [11, 0],
            [16, 1]
          ]
        }
      },
      filter: ["==", "class", "rail"],
      layout: {
        visibility: "visible"
      },
      source: "openmaptiles",
      "source-layer": "transportation"
    },
    {
      id: "waterway-bridge-case",
      type: "line",
      paint: {
        "line-color": "#bbbbbb",
        "line-width": {
          base: 1.6,
          stops: [
            [12, 0.5],
            [20, 10]
          ]
        },
        "line-gap-width": {
          base: 1.55,
          stops: [
            [4, 0.25],
            [20, 30]
          ]
        }
      },
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["==", "brunnel", "bridge"]
      ],
      layout: {
        "line-cap": "butt",
        "line-join": "miter"
      },
      source: "openmaptiles",
      "source-layer": "waterway"
    },
    {
      id: "waterway-bridge",
      type: "line",
      paint: {
        "line-color": "hsl(205, 56%, 73%)",
        "line-width": {
          base: 1.55,
          stops: [
            [4, 0.25],
            [20, 30]
          ]
        }
      },
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["==", "brunnel", "bridge"]
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round"
      },
      source: "openmaptiles",
      "source-layer": "waterway"
    },
    {
      id: "bridge_minor case",
      type: "line",
      paint: {
        "line-color": "#dedede",
        "line-width": {
          base: 1.6,
          stops: [
            [12, 0.5],
            [20, 10]
          ]
        },
        "line-gap-width": {
          base: 1.55,
          stops: [
            [4, 0.25],
            [20, 30]
          ]
        }
      },
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["==", "brunnel", "bridge"],
        ["==", "class", "minor_road"]
      ],
      layout: {
        "line-cap": "butt",
        "line-join": "miter"
      },
      source: "openmaptiles",
      "source-layer": "transportation"
    },
    {
      id: "bridge_major case",
      type: "line",
      paint: {
        "line-color": "#dedede",
        "line-width": {
          base: 1.6,
          stops: [
            [12, 0.5],
            [20, 10]
          ]
        },
        "line-gap-width": {
          base: 1.55,
          stops: [
            [4, 0.25],
            [20, 30]
          ]
        }
      },
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["==", "brunnel", "bridge"],
        ["in", "class", "primary", "secondary", "tertiary", "trunk"]
      ],
      layout: {
        "line-cap": "butt",
        "line-join": "miter"
      },
      source: "openmaptiles",
      "source-layer": "transportation"
    },
    {
      id: "bridge_minor",
      type: "line",
      paint: {
        "line-color": "#efefef",
        "line-width": {
          base: 1.55,
          stops: [
            [4, 0.25],
            [20, 30]
          ]
        }
      },
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["==", "brunnel", "bridge"],
        ["==", "class", "minor_road"]
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round"
      },
      source: "openmaptiles",
      "source-layer": "transportation"
    },
    {
      id: "bridge_major",
      type: "line",
      paint: {
        "line-color": "#fff",
        "line-width": {
          base: 1.4,
          stops: [
            [6, 0.5],
            [20, 30]
          ]
        }
      },
      filter: [
        "all",
        ["==", "$type", "LineString"],
        ["==", "brunnel", "bridge"],
        ["in", "class", "primary", "secondary", "tertiary", "trunk"]
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round"
      },
      source: "openmaptiles",
      "source-layer": "transportation"
    },
    {
      id: "admin_sub",
      type: "line",
      paint: {
        "line-color": "hsla(0, 0%, 60%, 0.5)",
        "line-dasharray": [2, 1]
      },
      filter: ["in", "admin_level", 4, 6, 8],
      layout: {
        visibility: "visible"
      },
      source: "openmaptiles",
      "source-layer": "boundary"
    },
    {
      id: "admin_country_z0-4",
      type: "line",
      paint: {
        "line-color": "hsl(0, 0%, 60%)",
        "line-width": {
          base: 1.3,
          stops: [
            [3, 0.5],
            [22, 15]
          ]
        }
      },
      filter: [
        "all",
        ["<=", "admin_level", 2],
        ["==", "$type", "LineString"],
        ["!has", "claimed_by"]
      ],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible"
      },
      source: "openmaptiles",
      maxzoom: 5,
      minzoom: 0,
      "source-layer": "boundary"
    },
    {
      id: "admin_country_z5-",
      type: "line",
      paint: {
        "line-color": "hsl(0, 0%, 60%)",
        "line-width": {
          base: 1.3,
          stops: [
            [3, 0.5],
            [22, 15]
          ]
        }
      },
      filter: ["all", ["<=", "admin_level", 2], ["==", "$type", "LineString"]],
      layout: {
        "line-cap": "round",
        "line-join": "round",
        visibility: "visible"
      },
      source: "openmaptiles",
      minzoom: 5,
      "source-layer": "boundary"
    },
    {
      id: "poi_label",
      type: "symbol",
      paint: {
        "text-color": "#666",
        "text-halo-blur": 1,
        "text-halo-color": "rgba(255,255,255,0.75)",
        "text-halo-width": 1
      },
      filter: ["all", ["==", "$type", "Point"], ["==", "rank", 1]],
      layout: {
        "icon-size": 1,
        "text-font": ["Noto Sans Regular"],
        "text-size": 11,
        "text-field": "{name:latin}\n{name:nonlatin}",
        visibility: "visible",
        "text-anchor": "top",
        "text-offset": [0, 0.5],
        "text-max-width": 8
      },
      source: "openmaptiles",
      minzoom: 14,
      "source-layer": "poi"
    },
    {
      id: "airport-label",
      type: "symbol",
      paint: {
        "text-color": "#666",
        "text-halo-blur": 1,
        "text-halo-color": "rgba(255,255,255,0.75)",
        "text-halo-width": 1
      },
      filter: ["all", ["has", "iata"]],
      layout: {
        "icon-size": 1,
        "text-font": ["Noto Sans Regular"],
        "text-size": 11,
        "text-field": "{name:latin}\n{name:nonlatin}",
        visibility: "visible",
        "text-anchor": "top",
        "text-offset": [0, 0.5],
        "text-max-width": 8
      },
      source: "openmaptiles",
      minzoom: 10,
      "source-layer": "aerodrome_label"
    },
    {
      id: "road_major_label",
      type: "symbol",
      paint: {
        "text-color": "#000",
        "text-halo-color": "hsl(0, 0%, 100%)",
        "text-halo-width": 2
      },
      filter: ["==", "$type", "LineString"],
      layout: {
        "text-font": ["Noto Sans Regular"],
        "text-size": {
          base: 1.4,
          stops: [
            [10, 8],
            [20, 14]
          ]
        },
        "text-field": "{name:latin} {name:nonlatin}",
        visibility: "visible",
        "text-transform": "uppercase",
        "symbol-placement": "line",
        "text-letter-spacing": 0.1,
        "text-rotation-alignment": "map"
      },
      source: "openmaptiles",
      minzoom: 13,
      "source-layer": "transportation_name"
    },
    {
      id: "place_label_other",
      type: "symbol",
      paint: {
        "text-color": "hsl(0, 0%, 25%)",
        "text-halo-blur": 0,
        "text-halo-color": "hsl(0, 0%, 100%)",
        "text-halo-width": 2
      },
      filter: [
        "all",
        ["==", "$type", "Point"],
        ["!in", "class", "city", "state", "country", "continent"]
      ],
      layout: {
        "text-font": ["Noto Sans Regular"],
        "text-size": {
          stops: [
            [6, 10],
            [12, 14]
          ]
        },
        "text-field": "{name:latin}\n{name:nonlatin}",
        visibility: "visible",
        "text-anchor": "center",
        "text-max-width": 6
      },
      source: "openmaptiles",
      minzoom: 8,
      "source-layer": "place"
    },
    {
      id: "place_label_city",
      type: "symbol",
      paint: {
        "text-color": "hsl(0, 0%, 0%)",
        "text-halo-blur": 0,
        "text-halo-color": "hsla(0, 0%, 100%, 0.75)",
        "text-halo-width": 2
      },
      filter: ["all", ["==", "$type", "Point"], ["==", "class", "city"]],
      layout: {
        "text-font": ["Noto Sans Regular"],
        "text-size": {
          stops: [
            [3, 12],
            [8, 16]
          ]
        },
        "text-field": "{name:latin}\n{name:nonlatin}",
        "text-max-width": 10
      },
      source: "openmaptiles",
      maxzoom: 16,
      "source-layer": "place"
    },
    {
      id: "country_label-other",
      type: "symbol",
      paint: {
        "text-color": "hsl(0, 0%, 13%)",
        "text-halo-blur": 0,
        "text-halo-color": "rgba(255,255,255,0.75)",
        "text-halo-width": 2
      },
      filter: [
        "all",
        ["==", "$type", "Point"],
        ["==", "class", "country"],
        ["!has", "iso_a2"]
      ],
      layout: {
        "text-font": ["Noto Sans Regular"],
        "text-size": {
          stops: [
            [3, 12],
            [8, 22]
          ]
        },
        "text-field": "{name:latin}",
        visibility: "visible",
        "text-max-width": 10
      },
      source: "openmaptiles",
      maxzoom: 12,
      "source-layer": "place"
    },
    {
      id: "country_label",
      type: "symbol",
      paint: {
        "text-color": "hsl(0, 0%, 13%)",
        "text-halo-blur": 0,
        "text-halo-color": "rgba(255,255,255,0.75)",
        "text-halo-width": 2
      },
      filter: [
        "all",
        ["==", "$type", "Point"],
        ["==", "class", "country"],
        ["has", "iso_a2"]
      ],
      layout: {
        "text-font": ["Noto Sans Bold"],
        "text-size": {
          stops: [
            [3, 12],
            [8, 22]
          ]
        },
        "text-field": "{name:latin}",
        visibility: "visible",
        "text-max-width": 10
      },
      source: "openmaptiles",
      maxzoom: 12,
      "source-layer": "place"
    },
    {
      id: "z-1",
      type: "symbol",
      paint: {
        "icon-halo-color": "rgba(255,255,255,0.7)",
        "icon-halo-width": 3
      },
      source: "dummy"
    }
  ],
  sources: {
    sat: {
      url:
        "https://api.maptiler.com/tiles/satellite-v2/tiles.json?key=DbU8BokPxNlBCu78jNOb",
      type: "raster"
    },
    dummy: {
      data: {
        type: "FeatureCollection",
        features: []
      },
      type: "geojson"
    },
    gdktiles: {
      type: "vector",
      tiles: [
        "https://tileserv.mapstory.app/public.gdk_products/{z}/{x}/{y}.pbf"
      ]
    },
    geofatiles: {
      type: "vector",
      tiles: [
        "https://tileserv.mapstory.app/public.geo_fa_points/{z}/{x}/{y}.pbf"
      ]
    },
    "marker-name": {
      data: {
        type: "FeatureCollection",
        features: []
      },
      type: "geojson",
      promoteId: "id"
    },
    openmaptiles: {
      url:
        "https://api.maptiler.com/tiles/v3/tiles.json?key=DbU8BokPxNlBCu78jNOb",
      type: "vector"
    },
    "mapstory-node": {
      data: {
        type: "FeatureCollection",
        features: []
      },
      type: "geojson",
      promoteId: "id"
    },
    search_circle: {
      data: {
        type: "FeatureCollection",
        features: []
      },
      type: "geojson",
      promoteId: "id"
    },
    "mapstory-order": {
      data: {
        type: "FeatureCollection",
        features: []
      },
      type: "geojson",
      promoteId: "id"
    },
    waypointSource: {
      data: {
        type: "FeatureCollection",
        features: []
      },
      type: "geojson",
      promoteId: "nodeId"
    },
    "mapstory-waypoint": {
      data: {
        type: "FeatureCollection",
        features: []
      },
      type: "geojson",
      promoteId: "id"
    },
    "mapstory-node-move": {
      data: {
        type: "FeatureCollection",
        features: []
      },
      type: "geojson",
      promoteId: "id"
    },
    "mapstory-line-proposal": {
      data: {
        type: "FeatureCollection",
        features: []
      },
      type: "geojson",
      promoteId: "id"
    }
  },
  version: 8,
  metadata: {
    "mapbox:type": "template",
    "mapstory:bounds":
      "[8.43457429464423,56.43559401225396,8.74732432535577,56.62713848764365]",
    "maputnik:renderer": "mbgljs",
    "mapbox:autocomposite": false,
    "openmaptiles:version": "3.x",
    "openmaptiles:mapbox:owner": "openmaptiles",
    "openmaptiles:mapbox:source:url": "mapbox://openmaptiles.4qljc88t"
  }
};
