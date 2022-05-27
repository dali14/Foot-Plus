import {useRouter} from 'next/router'
import mapboxgl from 'mapbox-gl';
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

mapboxgl.accessToken =
  'pk.eyJ1IjoiZGFseTE0MTEiLCJhIjoiY2wybWFvdnBtMGVwNTNlbWExazE1MjlhdyJ9.ukOMSnQFy4phLrvxLiNTOA';

const Marker = ({ onClick, children, index }) => {
  const _onClick = (e) => {
    onClick(index._id);
  };

  return (
    <button onClick={_onClick} className="marker">
      {children}
    </button>
  );
};

const homeMap = () => {
  const mapContainerRef = useRef(null);
  const [zoom, setZoom] = useState(10);
  const router = useRouter();
  
  // Initialize map when component mounts
 
  function addmap(data) {

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        const map = new mapboxgl.Map({
          container: mapContainerRef.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [longitude, latitude],
          zoom: zoom,
        });

        // Render custom marker components
        data.forEach((index) => {
          // Create a React ref
          const ref = React.createRef();
          // Create a new DOM node and save it to the React ref
          ref.current = document.createElement('div');
          // Render a Marker Component on our new DOM node
          ReactDOM.render(
            <Marker onClick={markerClicked}
              
              index={index} 
              />,
            ref.current
          );

          // Create a Mapbox Marker at our new DOM node
          new mapboxgl.Marker(ref.current)
            .setLngLat(index.coordinates).addTo(map);
        });

        // Add navigation control (the +/- zoom buttons)
        // Clean up on unmount
        return () => map.remove();


      }
    );
  }
  const markerClicked = (title) => {
    router.push("/terrainp/"+title)
  };
  useEffect(() => {
    

    fetch("http://localhost:3004/terrain/AllTerrain")
    .then(res => res.json())
    .then(data =>{
      addmap(data)
    })


  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  

  return (
    <div>
      <div className="sidebarStyle">

      </div>
      <div className="map-container" ref={mapContainerRef} />
    </div>
  );
};

export default homeMap;
