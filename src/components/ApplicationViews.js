import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider";
import { AnimalList } from "./animal/AnimalList"
<<<<<<< Updated upstream
=======
import { AnimalForm } from "./animal/AnimalForm"
import { AnimalDetail } from "./animal/AnimalDetail"
>>>>>>> Stashed changes
import { CustomerList } from "./customers/CustomerList"
import { CustomerProvider } from "./customers/CustomerProvider"
import { LocationList } from "./locations/LocationsList"
import { LocationsProvider } from "./locations/LocationsProvider"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeProvider } from "./employees/EmployeeProvider"


export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <CustomerProvider>
                    <LocationsProvider>
                        <Route exact path="/animals">
                            <AnimalList />
                        </Route>
<<<<<<< Updated upstream
=======
                        <Route path="/animals/create">
                            <AnimalForm />
                        </Route>
                        <Route exact path="/animals/detail/:animalId(\d+)">
		                    <AnimalDetail />
	                    </Route>
>>>>>>> Stashed changes
                    </LocationsProvider>
                </CustomerProvider>
            </AnimalProvider>

            {/* Render the animal list when http://localhost:3000/customers */}
            <CustomerProvider>
                <Route path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>

            {/* Render the animal list when http://localhost:3000/employees */}
            <EmployeeProvider>
                <Route path="/employees">
                    <EmployeeList />
                </Route>
            </EmployeeProvider>
            {/* Render the animal list when http://localhost:3000/locations */}
            <LocationsProvider>
                <Route path="/locations">
                    <LocationList />
                </Route>
            </LocationsProvider>
        </>
    )
}