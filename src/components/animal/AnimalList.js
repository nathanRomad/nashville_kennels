import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom" // import from libraries before your local modules
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../locations/LocationsProvider"
import { CustomerContext } from "../customers/CustomerProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals, searchTerms } = useContext(AnimalContext)
  const { locations, getLocations } = useContext(LocationContext)
  const { customers, getCustomers } = useContext(CustomerContext)

    // Since you are no longer ALWAYS displaying all of the animals
    const [ filteredAnimals, setFiltered ] = useState([])

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
  // Empty dependency array - useEffect only runs after first render

  useEffect(() => {
      getAnimals()
  }, [])

  // useEffect dependency array with dependencies - will run if dependency changes (state)
  // searchTerms will cause a change
  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching animals
      const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms.toLowerCase()))
      setFiltered(subset)
    } else {
      // If the search field is blank, display all animals
      setFiltered(animals)
    }
  }, [searchTerms, animals])

  return (
    <>
      <h2>Animals</h2>
      <button name="addAnimals__button" variant="outline-primary" onClick={() => {history.push("/animals/create")}}>
              Add Animal
            </button>
      <div className="animals">
        {
          filteredAnimals.map(animal => {
            return <AnimalCard key={animal.id} animal={animal} />
          })
        },
        {/* {
          animals.map(animal => {
            const owner = customers.find(c => c.id === animal.customerId)
            const clinic = locations.find(l => l.id === animal.locationId)
            return <AnimalCard key={animal.id}
              location={clinic}
              customer={owner}
              animal={animal} />
          })
        } */}
      </div>
    </>
  )
}