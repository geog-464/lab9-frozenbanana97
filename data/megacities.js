function onEachFeature(feature, layer) {
  // does this feature have a property named popupContent?
  if (feature.properties && feature.properties.popupContent) {
      layer.bindPopup(feature.properties.popupContent);
  }
}

var geojsonData = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "City": "Tokyo",
        "Population": 37400068,
        "popupContent": "Tokyo, Population: 37400068"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          139.75391,
          35.695126
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "Delhi",
        "Population": 28514000,
        "popupContent": "Delhi, Population: 28514000"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          81.334404,
          24.734319
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "Shanghai",
        "Population": 25582000,
        "popupContent": "Shanghai, Population: 25582000"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.483385,
          31.246027
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "São Paulo",
        "Population": 21650000,
        "popupContent": "São Paulo, Population: 21650000"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -46.62692565,
          -23.57024632
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "Mexico City",
        "Population": 21581000,
        "popupContent": "Mexico City, Population: 21581000"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -99.150344,
          19.371422
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "Cairo",
        "Population": 20076000,
        "popupContent": "Cairo, Population: 20076000"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          31.24967,
          30.06263
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "Mumbai",
        "Population": 19980000,
        "popupContent": "Mumbai, Population: 19980000"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.875449,
          19.10109
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "Beijing",
        "Population": 19618000,
        "popupContent": "Beijing, Population: 19618000"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          116.417592,
          39.937967
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "Dhaka",
        "Population": 19578000,
        "popupContent": "Dhaka, Population: 19578000"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          90.40744,
          23.7104
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "Osaka",
        "Population": 19281000,
        "popupContent": "Osaka, Population: 19281000"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          135.50506,
          34.691802
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "New York",
        "Population": 18819000,
        "popupContent": "New York, Population: 18819000"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.9708,
          40.68295
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "Karachi",
        "Population": 15400000,
        "popupContent": "Karachi, Population: 15400000"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          67.238928,
          24.984695
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "Buenos Aires",
        "Population": 14967000,
        "popupContent": "Buenos Aires, Population: 14967000"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -58.454595,
          -34.607357
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "Chongqing",
        "Population": 14838000,
        "popupContent": "Chongqing, Population: 14838000"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          106.548238,
          29.565015
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "Istanbul",
        "Population": 14751000,
        "popupContent": "Istanbul, Population: 14751000"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          28.94966,
          41.01384
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "Kolkata",
        "Population": 14681000,
        "popupContent": "Kolkata, Population: 14681000"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          88.419453,
          22.608067
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "Manila",
        "Population": 13482000,
        "popupContent": "Manila, Population: 13482000"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          120.9822,
          14.6042
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "Lagos",
        "Population": 13463000,
        "popupContent": "Lagos, Population: 13463000"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          3.39583,
          6.45306
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "Rio de Janeiro",
        "Population": 13293000,
        "popupContent": "Rio de Janeiro, Population: 13293000"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -43.518246,
          -22.935024
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "City": "Tianjin",
        "Population": 13215000,
        "popupContent": "Tianjin, Population: 13215000"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          117.185182,
          39.107355
        ]
      }
    }
  ]
}