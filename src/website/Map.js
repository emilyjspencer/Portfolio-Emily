import React from 'react'

import { divIcon } from 'leaflet'
import { Marker } from 'react-leaflet'
import { renderToStaticMarkup } from 'react-dom/server'

import 'leaflet/dist/leaflet.css'


const Map = (props) => {


        const iconMarkup = renderToStaticMarkup(
            <i
                className="dispatcher-marker fa fa-map-marker-alt"
                style={{ color: props.location.color }}
            />
        )
    
        const customMarkerIcon = divIcon({
            html: iconMarkup
        })
    
        return (
            <Marker
                position={[ props.location.lat, props.location.lng ]}
                icon={customMarkerIcon}
                opacity={props.opacity}
                onClick={() => props.handleClick(props.location.id, props.route)}
            />
        )
    }
    
   




export default Map;