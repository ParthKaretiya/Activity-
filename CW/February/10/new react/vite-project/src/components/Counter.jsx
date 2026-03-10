import React, { useState } from "react";

function CompanyFilter() {
  const [query, setQuery] = useState("");

  const companies = [
    { name: "Google", sector: "Technology" },
    { name: "Microsoft", sector: "Technology" },
    { name: "Apple", sector: "Technology" },
    { name: "Amazon", sector: "E-commerce" },
    { name: "Flipkart", sector: "E-commerce" },

    { name: "Tesla", sector: "Automobile" },
    { name: "BMW", sector: "Automobile" },
    { name: "Mercedes-Benz", sector: "Automobile" },
    { name: "Toyota", sector: "Automobile" },

    { name: "Reliance Industries", sector: "Conglomerate" },
    { name: "Tata Group", sector: "Conglomerate" },
    { name: "Adani Group", sector: "Conglomerate" },

    { name: "Infosys", sector: "IT Services" },
    { name: "TCS", sector: "IT Services" },
    { name: "Wipro", sector: "IT Services" },
    { name: "HCL Technologies", sector: "IT Services" },

    { name: "Netflix", sector: "Entertainment" },
    { name: "Spotify", sector: "Entertainment" },
    { name: "Meta", sector: "Social Media" },
    { name: "Twitter (X)", sector: "Social Media" },
  ];

  // ⭐ key logic
  const filteredCompanies = companies.filter(company => {
  // if input is empty, keep everything
  if (query === "") {
    return true;
  }

  // if input has text, check match
  return company.name
    .toLowerCase()
    .includes(query.toLowerCase());
});


  return (
    <div style={{ padding: "20px" }}>
      <h2>Company List</h2>

      <input
        type="text"
        placeholder="Search company..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul>
        {filteredCompanies.map((company, index) => (
          <li key={index}>
            {company.name} — {company.sector}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyFilter;
