var vg_1 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 760,
  "height": 520,
  "background": "white",

  "data": {
    "url": "https://raw.githubusercontent.com/shannelp/vegadata/refs/heads/main/malaysia_fnb_points.csv"
  },
  "transform": [
    { "aggregate": [{ "op": "count", "as": "biz_count" }] }
  ],

  "title": {
    "text": "Food & Beverage Businesses in Malaysia",
    "subtitle": "Region and Locality of 281 F&B Businesses",
    "font": "Helvetica",
    "fontSize": 25,
    "anchor": "middle",
    "dy": 50
  },

  "projection": { "type": "mercator", "center": [109.4, 4], "scale": 2100 },

  "layer": [
    { "data": { "sphere": {} }, "mark": { "type": "geoshape", "fill": "#000000" }},

    {
      "data": {
        "url": "https://raw.githubusercontent.com/shannelp/vegadata/refs/heads/main/malaysia.geojson",
        "format": { "type": "json", "property": "features" }
      },
      "mark": { "type": "geoshape", "fill": "#ffffff", "stroke": "black", "strokeWidth": 1 },
      "encoding": { "shape": { "field": "geometry", "type": "geojson" } }
    },

    {
      "data": {
        "url": "https://raw.githubusercontent.com/shannelp/vegadata/refs/heads/main/ne_10m_admin_1_states_provinces.json",
        "format": { "type": "json", "property": "features" }
      },
      "mark": {
        "type": "geoshape",
        "fill": null,
        "stroke": "#accfbe",
        "strokeWidth": 0.6
      },
      "encoding": { "shape": { "field": "geometry", "type": "geojson" } }
    },

    {
      "data": { "graticule": { "extent": [[95, -1], [121, 8]], "step": [2, 2] } },
      "mark": { "type": "geoshape", "stroke": "#b7cfdb", "strokeWidth": 1, "fill": null }
    },

    {
      "data": {
        "url": "https://raw.githubusercontent.com/shannelp/vegadata/refs/heads/main/malaysia_fnb_points.csv"
      },
      "mark": { "type": "circle", "opacity": 0.9 },
      "encoding": {
        "longitude": { "field": "longitude", "type": "quantitative" },
        "latitude":  { "field": "latitude",  "type": "quantitative" },
        "size": { "value": 20 },
        "color": { "value": "steelblue" },
        "tooltip": [
          { "field": "name", "title": "Business" },
          { "field": "locality", "title": "Locality" },
          { "field": "region", "title": "Region" },
          { "field": "website", "title": "Website" }
        ]
      }
    }
  ]
};

window.addEventListener("DOMContentLoaded", function () {
  vegaEmbed("#fnb_map", vg_1).catch(console.error);
});
