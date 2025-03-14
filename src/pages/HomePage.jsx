import React, { useState, useEffect } from 'react';
import CountrySearch from '../components/CountrySearch';
import CountryDetails from '../components/CountryDetails';
import OptionsList from '../components/OptionsList';
import { equivalenceData } from '../data/equivalenceData';

const HomePage = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    if (selectedCountry) {
      setCountryData(equivalenceData[selectedCountry]);
    } else {
      setCountryData(null);
    }
  }, [selectedCountry]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-center items-center mb-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">ALCHE Admission Equivalence Checker</h1>
          <p className="text-slate-600">Find qualification equivalences for African secondary education systems</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-1 bg-white p-4 rounded-lg shadow border border-gray-200">
          <CountrySearch 
            onSelectCountry={setSelectedCountry} 
            selectedCountry={selectedCountry} 
          />
          
          <OptionsList />
          
          <div className="mt-6">
            <h3 className="font-semibold text-slate-700 mb-3">Educational Systems:</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">British</span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 border border-indigo-200">French</span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200">West African</span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">Portuguese</span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 border border-purple-200">International</span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">Other</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <CountryDetails countryData={countryData} countryName={selectedCountry} />
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8">
        <p>ALCHE Admission Equivalence Checker • Based on African School Leaving Qualifications Equivalence Guide</p>
        <p className="mt-1">Flags provided by flagcdn.com • Updated March 2025</p>
      </div>
    </div>
  );
};

export default HomePage;