import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom" // import from libraries before your local modules
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../locations/LocationsProvider"
import { CustomerContext } from "../customers/CustomerProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)
  const { locations, getLocations } = useContext(LocationContext)
  const { customers, getCustomers } = useContext(CustomerContext)

  // The useHistory hook let's us tell React which route we want to visit. We will use it to tell React to render the animal form component.
  const history = useHistory()

  //useEffect - reach out to the world for animals API fetch call
  useEffect(() => {
    getLocations()
      .then(getCustomers)
      .then(getAnimals)
  }, [])
  // the empty array bracket = dependency array / dependencies cause the useEffect to run additional times.
  // Be careful setting state within the useEffect. State changes cause a re-render. 
  // Re-render can invoke useEffect (depending on the dependency array values). This would result in an infinate loop.

  return (
    <>
        <button onClick={() => {history.push("/animals/create")}}>
              Add Animal
            </button>
      <div className="animals">
        {
          animals.map(animal => {
            const owner = customers.find(c => c.id === animal.customerId)
            const clinic = locations.find(l => l.id === animal.locationId)
            return <AnimalCard key={animal.id}
              location={clinic}
              customer={owner}
              animal={animal} />
          })
        }
      </div>
    </>
  )
}