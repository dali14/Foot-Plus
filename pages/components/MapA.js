import React, { useRef, useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from '!mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoiZGFseTE0MTEiLCJhIjoiY2wybWFvdnBtMGVwNTNlbWExazE1MjlhdyJ9.ukOMSnQFy4phLrvxLiNTOA'

export default function MapA({lat, setLat, lng, setLng, getLatLng}) {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const marker = useRef(null);
    const [zoom, setZoom] = useState(9);


    useEffect(() => {
        console.log(map);
        if (!map.current) {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [lng, lat],
                zoom: zoom 
            });

            
            // Set marker options.
            if (!marker.current) {
                marker.current = new mapboxgl.Marker({
                    color: "#FFFFFF", 
                    draggable: false
                }).setLngLat([lng, lat])
                    .addTo(map.current);
                    
                    
            }
        } 
    }, []);
    
    return (
        <>
            <div>
                <div ref={mapContainer} className="map-container"  />
            </div>
        </>
    )
}

