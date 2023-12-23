import {createContext, useContext, useEffect, useState} from "react";

const geoLocContext = createContext(null);

export function GeoLocationContextProvider({children}) {

    const [userLocation, setUserLocation] = useState(null);

    useEffect(() => {
        getUserLocation();
    }, []);

    const getUserLocation = () => {
        console.log("getting location");
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation(position.coords);
                },
                (error) => {
                    console.error('Error getting user location:', error);
                }
            );
        }
        else {
            console.error('Geolocation is not supported by this browser.');
        }
    };

    return (
        <geoLocContext.Provider value={userLocation} >
            {children}
        </geoLocContext.Provider>
    )
}

export function useGeoLocation() {
    return useContext(geoLocContext);
}