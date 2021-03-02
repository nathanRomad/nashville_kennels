import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import "./Employees.css"

export const EmployeeList = () => {
  const { employees, getEmployees } = useContext(EmployeeContext)
  useEffect(() => {
    getEmployees()
  }, [])

  return (
    <div className="employees">
      {
        employees.map(employees => {
          return <EmployeeCard key={employees.id} employees={employees} />
        })
      }
    </div>
  )
}