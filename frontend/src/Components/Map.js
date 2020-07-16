import React from 'react'
import { GoogleMap, LoadScript, KmlLayer } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100vh'
};

const center = {
  lat: 42.3601,
  lng: -71.05977
};

const mapStyles = [
  // Neighborhood names
  {
    "featureType": "administrative",
    "stylers": [
      {"color": "#000000"},
      {"saturation": 0},
      {"lightness": 25},
      {"visibility": "simplified"},
      {"weight": 0.5}
    ]
  },

  // Points of interest, turned off
  {
      "elementType": "labels",
      "stylers": [
          {"visibility": "on"},
          //{"color": "#ffffff"},
          {"weight": 0.5}
      ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
        {"visibility": "off"},
        {"color": "#645c20"},
        {"lightness": 38},
    ]
  },
  {
    "featureType": "poi.medical",
    "stylers": [
        {"visibility": "on"},
        {"color": "#813033"},
        {"lightness": 0},
    ]
  },
  {
    "featureType": "poi.medical",
    "elementType": "geometry.fill",
    "stylers": [
        {"visibility": "on"},
        {"color": "#c47275"},
        {"lightness": 0},
    ]
  },
  {
    "featureType": "poi.park",
    "stylers": [
        {"visibility": "on"},
        {"color": "#645c20"},
        {"lightness": 39},
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text",
    "stylers": [
        {"visibility": "off"},
    ]
  },
  {
    "featureType": "poi.school",
    "stylers": [
        {"visibility": "off"},
        {"color": "#a95521"},
        {"lightness": 35}
    ]
  },
  {
    "featureType": "poi.sports_complex",
    "stylers": [
        {"visibility": "off"},
        {"color": "#9e5916"},
        {"lightness": 32}
    ]
  },
  {
    "featureType": "poi.government",
    "stylers": [
        {"visibility": "off"},
        {"color": "#9e5916"},
        {"lightness": 46}
    ]
  },
  {
    "featureType": "poi.attraction",
    "stylers": [
        {"visibility": "off"},
        {"lightness": 46}
    ]
  },
  {
    "featureType": "poi.place_of_worship",
    "stylers": [
        {"visibility": "off"},
        {"lightness": 46}
    ]
  },



  {
      "featureType": "landscape",
      "stylers": [
          {"color": "#f9ddc5"},
          {"lightness": -7}
      ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "labels.text",
    "stylers": [
      {"visibility": "off"},
    ]
},
  {
      "featureType": "road",
      "stylers": [
          {"color": "#813033"},
          {"lightness": 43},
          {"visibility": "off"},
      ]
  },
  {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
          {"color": "#1994bf"},
          {"saturation": -69},
          {"gamma": 0.99},
          {"lightness": 43}
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "geometry.fill",
      "stylers": [
          {"color": "#f19f53"},
          {"weight": 1.3},
          {"visibility": "off"},
          {"lightness": 16}
      ]
  },
  {
      "featureType": "transit.station",
  },
  {
      "featureType": "transit.line",
      "stylers": [
          {"color": "#813033"},
          {"lightness": 22}
      ]
  },
  {
      "featureType": "transit",
      "stylers": [
          {"lightness": 38},
          {"visibility": "off"}
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "geometry.stroke",
      "stylers": [
          {"color": "#f19f53"},
          {"lightness": -10}
      ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {"visibility": "on"}
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {"visibility": "off"}
    ]
  },
  {
    "featureType": "road.arterial",
    "stylers": [
      {"visibility": "off"}
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "labels",
    "stylers": [
      {"visibility": "off"}
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {"visibility": "off"}
    ]
  },
];

function Map() {
  return (
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        clickableIcons={false}
        mapTypeId={"roadmap"}
        extraMapTypes={[]}
        options={{
          styles: mapStyles,
        }}
      >
        { /* Child components, such as markers, info windows, etc. */ 
        <KmlLayer 
          url="https://opendata.arcgis.com/datasets/53ea466a189b4f43b3dfb7b38fa7f3b6_1.kml"
        >          
      </KmlLayer>}
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map);
