import { useState, useMemo, useCallback, useRef, } from "react";
import React from "react";
import { 
    GoogleMap,
    Marker,
    DirectionsRenderer,
    Circle,
    MarkerClusterer
 } from "@react-google-maps/api";
 import '../css/Worldmap.css';
 

 type LatingLiteral = google.maps.LatLngLiteral;
 type DirectionsResult = google.maps.DirectionsResult;
 type MapOptions = google.maps.MapOptions;


 export default function Map() {

    const center = useMemo(() => ({lat: 43, lng: -80 }), []);

    return <div className="container">
        <div className="controls">
            <h1>Commute?</h1>
        </div>
        <div className="map">
            <GoogleMap zoom={10}  center={center} mapContainerClassName="map-container"></GoogleMap>
        </div>
    </div>;
 }