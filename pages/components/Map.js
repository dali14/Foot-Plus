import React, { useRef, useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from '!mapbox-gl'
mapboxgl.accessToken = 'pk.eyJ1IjoiZGFseTE0MTEiLCJhIjoiY2wybWFvdnBtMGVwNTNlbWExazE1MjlhdyJ9.ukOMSnQFy4phLrvxLiNTOA'

export default function Map({lat, setLat, lng, setLng, getLatLng}) {
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
                    draggable: true
                }).setLngLat([lng, lat])
                    .addTo(map.current);
                    console.log(marker)
                    marker.current.on('drag', () => {
                        let {lng,lat} = marker.current.getLngLat()
                        setLng(lng);
                        setLat(lat); 
                        // setZoom(map.current.getZoom().toFixed(2)); 
                    });
            }
        } 
    }, []);
    
    return (
        <>
            <div>
                <div ref={mapContainer} className="map-container" onClick={(map, e) => getLatLng(map, e)} />
            </div>
        </>
    )
}

