import React from "react";
import { Account } from "../../types";

interface EmployeeListProps {
  employees?: Account[];
}

const EmployeeList = ({ employees }: EmployeeListProps) => {
  return (
    <div>
      <h1>List of my employees</h1>
      {employees?.map((employee) => (
        <p>{employee.email}</p>
      ))}
    </div>
  );
};

export default EmployeeList;
