import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext)

  //useEffect - reach out to the world for animals API fetch call
  useEffect(() => {
    getAnimals()

  }, [])
// the empty array bracket = dependency array / dependencies cause the useEffect to run additional times.
// Be careful setting state within the useEffect. State changes cause a re-render. 
// Re-render can invoke useEffect (depending on the dependency array values). This would result in an infinate loop.

  return (
    <div className="animals">
      {console.log("AnimalList: Render", animals)}
      {
        animals.map(animal => {
          return <AnimalCard key={animal.id} animal={animal} />
        })
      }
    </div>
  )
}