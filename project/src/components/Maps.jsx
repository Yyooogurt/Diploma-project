import React, { useState} from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
  DirectionsRenderer,
} from "@react-google-maps/api";
const MapContainer = () => {
  const [selected, setSelected] = useState({});
  const [currentPosition, setCurrentPosition] = useState({});
  const [direction, setDirection] = useState(null);
  const [distance, setDistance] = useState(0);
  const [time, setTime] = useState(0);
  const [center, setCenter] = useState({
    lat: 48.494183918654095,
    lng: 35.06661888513518,
  });
  const success = (position) => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(currentPosition);
    setCenter(currentPosition);
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(success);
  };

  const onSelect = (item) => {
    setSelected(item);
  };

  const mapStyles = {
    height: "100vh",
    width: "100%",
    height: "800px",
    boxShadow: "1px 0px 15px 0px #000000bd",
    borderRadius: "19px",
  };

  const locations = [
    {
      name: "Location 1",
      location: {
        lat: 48.53638711690556,
        lng: 35.086944469926024,
      },
    },
    {
      name: "Location 2",
      location: {
        lat: 48.520273635766664,
        lng: 35.07544777817048,
      },
    },
    {
      name: "Location 3",
      location: {
        lat: 48.47008328427697,
        lng: 35.049526007176645,
      },
    },
    {
      name: "Location 4",
      location: {
        lat: 48.468226909227,
        lng: 35.05779604275472,
      },
    },
    {
      name: "Location 5",
      location: {
        lat: 48.488357007500845,
        lng: 35.06292853537112,
      },
    },
    {
      name: "Location 6",
      location: {
        lat: 48.50115760960298,
        lng: 35.01188440419679,
      },
    },
    {
      name: "Location 7",
      location: {
        lat: 48.477554683717216,
        lng: 35.03645374991173,
      },
    },
  ];

  const getDirection = () => {
    const DirectionsService = new window.google.maps.DirectionsService();
    DirectionsService.route(
      {
        origin: currentPosition,
        destination: selected.location,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirection(result);
          let directionsData = result.routes[0].legs[0];
          setDistance(directionsData.distance.text)
          setTime(directionsData.duration.text)
          console.log(directionsData.distance.text);
          console.log(directionsData.duration.text);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  };

  return (
    <div className="map_info">
      <div className="map_distance">
        <button className="button geo" onClick={getLocation}>Моя геолокація</button>
        <button className="button route" onClick={getDirection}>Прокласти маршруту</button>
        <p>Відстань {distance}</p>
        <p>Час у дорозі {time}</p>
      </div>
      
      <LoadScript googleMapsApiKey="">
        <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={center}>
          if (currentPosition== null) {}else
          {
            <Marker
              icon={{ url: require("./icon.png") }}
              position={currentPosition}
            />
          }
          <DirectionsRenderer directions={direction} />
          {locations.map((item) => {
            return (
              <Marker
                key={item.name}
                position={item.location}
                icon={{ url: require("./custom-marker.png") }}
                onClick={() => onSelect(item)}
              />
            );
          })}
          {selected.location && (
            <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <p>{selected.name}</p>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapContainer;



