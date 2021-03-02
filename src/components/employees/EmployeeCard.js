import React from "react"
import "./Employees.css"

export const EmployeeCard = ({ employees }) => (
    <section className="employee">
        <h3 className="employee__name">{employees.name}</h3>
        <address className="employee__address">{employees.address}</address>
    </section>
)