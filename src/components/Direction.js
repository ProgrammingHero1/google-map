import React, { useState } from 'react'
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import { API_KEY } from './config';
const containerStyle = {
    width: '100%',
    height: '400px'
};

const location = {
    lat: 23.733348, lng: 90.406707
};


function Direction({origin, destination}) {
    const [directionResponse, setDirectionResponse] = useState(null);
    return (
        <LoadScript
            googleMapsApiKey={API_KEY}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={location}
                zoom={16}
            >
                {
                    origin !== '' && destination !== '' && <DirectionsService
                    // required
                    options={{
                      destination: destination,
                      origin: origin,
                      travelMode: 'DRIVING'
                    }}
                    // required
                    callback={res => {
                        if(res !== null){
                          setDirectionResponse(res);
                        }
                    }}
                  />
                }
                {
                    directionResponse && <DirectionsRenderer
                    // required
                    options={{ 
                      directions: directionResponse
                    }}
                    
                  />
                }
            </GoogleMap>
        </LoadScript>
    )
}

export default React.memo(Direction)