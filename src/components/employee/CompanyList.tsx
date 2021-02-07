import React from "react";

interface Account {
  _id: string;
  email: string;
  role: string;
}

interface CompanyListProps {
  companies?: Account[];
}

const CompanyList = ({ companies }: CompanyListProps) => {
  return (
    <div>
      <h1>List of my companies</h1>
      {companies?.map((company) => (
        <p>{company.email}</p>
      ))}
    </div>
  );
};

export default CompanyList;
