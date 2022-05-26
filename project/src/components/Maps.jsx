import React, {useState}from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const MapContainer = () => {
  
const [ selected, setSelected ] = useState({});
  const onSelect = item => {
    setSelected(item);
  }

  const mapStyles = {        
    height: "100vh",
    width: "100%",
    boxShadow: "1px 0px 15px 0px #000000bd",
    borderRadius: "19px"
  };
  
  const defaultCenter = {
    lat: 48.494183918654095, lng: 35.06661888513518
  }
  const locations = [
    { 
      name: "Location 1",
      location: { 
        lat: 48.53638711690556,
        lng: 35.086944469926024
      },
    },
    {
      name: "Location 2",
      location: { 
        lat: 48.520273635766664,
        lng: 35.07544777817048
      },
      
    },
    {
      name: "Location 3",
      location: {   
        lat: 48.47008328427697,
        lng: 35.049526007176645
      },
    },
    {
      name: "Location 4",
      location: {  
        lat: 48.468226909227,
        lng: 35.05779604275472
      },
    },
    {
      name: "Location 5",
      location: {  
        lat: 48.488357007500845,
        lng: 35.06292853537112
      },
    },
    {
        name: "Location 6",
        location: {    
            lat: 48.50115760960298,
            lng: 35.01188440419679
        },
        },
        {
            name: "Location 7",
            location: {    
              lat: 48.477554683717216,
              lng: 35.03645374991173
            },
          }
  ];

  return (
    
     <LoadScript
       googleMapsApiKey='AIzaSyAPgqAVnXgH9OhdUcQWBm-oxiodDZv8moA'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
         {
            locations.map(item => {
              return (
              <Marker key={item.name} 
                position={item.location}
                icon={{ url: require('./custom-marker.png')}}
                onClick={() => onSelect(item)}
              />
              )
            })
         }
        {
            selected.location && 
            (
              <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <p>{selected.name}</p>
            </InfoWindow>
            )
         }
     </GoogleMap>
     </LoadScript>
  )
}

export default MapContainer;

// icon={{ url: require('../../images/marker.png') }}


