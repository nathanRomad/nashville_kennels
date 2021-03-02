import React, { useState, createContext } from "react"

export const LocationContext = createContext()

export const LocationsProvider = (props) => {
    const [locations, setLocations] = useState([])

    const getLocations = () => {
        return fetch("http://localhost:8088/locations")
        .then(res => res.json())
        .then(setLocations)
    }

    const addLocations = employeeObj => {
        return fetch("http://localhost:8088/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employeeObj)
        })
        .then(getLocations)
    }
  
    return (
        <LocationContext.Provider value={{
            locations, getLocations, addLocations
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}