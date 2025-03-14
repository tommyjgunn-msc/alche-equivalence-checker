import React, { useState } from 'react';
import { equivalenceData } from '../data/equivalenceData';

const CountrySearch = ({ onSelectCountry, selectedCountry }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  
  // Countries list for dropdown
  const countries = Object.keys(equivalenceData).sort();

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setShowDropdown(true);
  };

  const filteredCountries = countries.filter(country =>
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectCountry = (country) => {
    onSelectCountry(country);
    setSearchTerm('');
    setShowDropdown(false);
  };

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="country-search" className="block text-sm font-medium text-gray-700 mb-1">
          Search for a country
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          <input
            type="text"
            id="country-search"
            className="pl-10 w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
            placeholder="Type to search..."
            value={searchTerm}
            onChange={handleSearch}
            onFocus={() => setShowDropdown(true)}
          />
          {showDropdown && searchTerm && (
            <div className="absolute z-10 w-full mt-1 bg-white shadow-lg rounded-md border border-gray-300 max-h-60 overflow-auto">
              {filteredCountries.length > 0 ? (
                filteredCountries.map((country) => (
                  <div
                    key={country}
                    className="p-2 hover:bg-blue-50 cursor-pointer flex items-center"
                    onClick={() => handleSelectCountry(country)}
                  >
                    <img 
                      src={`https://flagcdn.com/24x18/${equivalenceData[country].flag}.png`}
                      alt={`${country} flag`}
                      className="mr-2 w-6 h-auto border border-gray-200 rounded-sm"
                    />
                    <span>{country}</span>
                  </div>
                ))
              ) : (
                <div className="p-2 text-gray-500">No countries found</div>
              )}
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-4">
        <label htmlFor="country-select" className="block text-sm font-medium text-gray-700 mb-1">
          Or select from list
        </label>
        <select
          id="country-select"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
          value={selectedCountry}
          onChange={(e) => onSelectCountry(e.target.value)}
        >
          <option value="">-- Select a country --</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CountrySearch;