import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationsProvider"
import { LocationCard } from "./LocationCard"
import "./Locations.css"

export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext)
  useEffect(() => {
    getLocations()
  }, [])

  return (
    <div className="locations">
      {
        locations.map(locations => {
          return <LocationCard key={locations.id} locations={locations} />
        })
      }
    </div>
  )
}