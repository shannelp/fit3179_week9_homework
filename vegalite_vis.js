var vg_1 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 900,
  "height": 560,
  "background": "white",

  "config": {
    "view": { "stroke": null } // remove outer border
  },

  "projection": {
    "type": "mercator",
    "center": [110.5, 2.5],
    "scale": 3000,
    "translate": [480, 300]
  },

  "layer": [
    // soft ocean background
    { "data": { "sphere": {} }, "mark": { "type": "geoshape", "fill": "#eef6fb" }},

    // Malaysia land outline
    {
      "data": {
        "url": "https://raw.githubusercontent.com/shannelp/vegadata/refs/heads/main/malaysia.geojson",
        "format": { "type": "json", "property": "features" }
      },
      "mark": { "type": "geoshape", "fill": "#ffffff", "stroke": "#5f6f64", "strokeWidth": 1 },
      "encoding": { "shape": { "field": "geometry", "type": "geojson" } }
    },

    // state boundaries
    {
      "data": {
        "url": "https://raw.githubusercontent.com/shannelp/vegadata/refs/heads/main/ne_10m_admin_1_states_provinces.json",
        "format": { "type": "json", "property": "features" }
      },
      "mark": { "type": "geoshape", "fill": null, "stroke": "#accfbe", "strokeWidth": 0.6 },
      "encoding": { "shape": { "field": "geometry", "type": "geojson" } }
    },

    // graticule
    {
      "data": { "graticule": { "extent": [[95, -1], [121, 8]], "step": [2, 2] } },
      "mark": { "type": "geoshape", "stroke": "#b7cfdb", "strokeWidth": 1, "fill": null }
    },

    // business points with region legend
    {
      "data": {
        "url": "https://raw.githubusercontent.com/shannelp/vegadata/refs/heads/main/malaysia_fnb_points.csv"
      },
      "mark": { "type": "circle", "opacity": 0.85, "stroke": "white", "strokeWidth": 0.6 },
      "encoding": {
        "longitude": { "field": "longitude", "type": "quantitative" },
        "latitude":  { "field": "latitude",  "type": "quantitative" },
        "size": { "value": 40 },
        "color": { "field": "region", "type": "nominal", "legend": { "title": "Region" } },
        "tooltip": [
          { "field": "name", "title": "Business" },
          { "field": "locality", "title": "Locality" },
          { "field": "region", "title": "Region" },
          { "field": "website", "title": "Website" }
        ]
      }
    }
  ],

  "title": {
    "text": "Food & Beverage Businesses in Malaysia",
    "subtitle": "Region and Locality of 281 F&B Businesses",
    "font": "Helvetica",
    "fontSize": 26,
    "anchor": "start",
    "dy": 8
  }
};

// Hide the “…” actions menu
vegaEmbed("#fnb_map", vg_1, { actions: false }).catch(console.error);
