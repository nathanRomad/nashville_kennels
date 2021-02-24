import React from "react"
import { AnimalCard } from "./animal/AnimalCard"
import "./animal/Animal.css"
import { CustomerCard } from "./customers/CustomerCard"
import "./customers/Customers.css"
import { EmployeeCard } from "./employees/EmployeeCard"
import "./employees/Employees.css"
import { LocationsCard } from "./locations/LocationCard"
import "./locations/Locations.css"

export const Kennel = () => {
    const kennel = {
        "name": "Nashville Kennels",
        "location": {
            "name": "Nashville North",
            "address": "500 Puppy Way"
        },
        "catchphrase": "Loving care when you're not there!"
    }

    return <>
        <h2>{kennel.name}</h2>
        <small>{kennel.catchphrase}</small>

        <address>
            <div>Visit Us at the {kennel.location.name} Location</div>
            <div>{kennel.location.address}</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>

        <h2>Customers</h2>
        <article className="customers">
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
        </article>

        <h2>Employees</h2>
        <article className="employees">
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
        </article>
        
        <h2>Locations</h2>
        <article className="locations">
            <LocationsCard />
            <LocationsCard />
            <LocationsCard />
        </article>

    </>
}