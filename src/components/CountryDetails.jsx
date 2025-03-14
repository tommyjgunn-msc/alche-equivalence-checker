import React from 'react';
import SystemBadge from './SystemBadge';
import EnglishProficiency from './EnglishProficiency';

const CountryDetails = ({ countryData, countryName }) => {
  if (!countryData) {
    return (
      <div className="bg-white p-6 rounded-lg shadow border border-gray-200 flex flex-col items-center justify-center min-h-[400px] text-center">
        <div className="w-24 h-24 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-300">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
          </svg>
        </div>
        <h3 className="text-xl font-medium text-gray-700 mb-2">No Country Selected</h3>
        <p className="text-gray-500 max-w-md">Select a country from the dropdown menu or use the search box to find qualification equivalence information.</p>
      </div>
    );
  }
  
  return (
    <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center">
          <img 
            src={`https://flagcdn.com/64x48/${countryData.flag}.png`}
            alt={`${countryName} flag`}
            className="mr-3 w-12 h-auto border border-gray-300 rounded-sm shadow-sm"
          />
          <h2 className="text-2xl font-bold text-slate-800">{countryName}</h2>
        </div>
        <SystemBadge system={countryData.system} />
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-700 border-b border-gray-200 pb-2 mb-2">Qualification</h3>
        <p className="mt-1 text-slate-800 font-medium">{countryData.qualification}</p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-700 border-b border-gray-200 pb-2 mb-3">ALCHE Equivalence</h3>
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-md border border-green-200">
            <p className="font-medium text-green-700">Option 1:</p>
            <p className="mt-1 text-green-800">{countryData.option1}</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-md border border-blue-200">
            <p className="font-medium text-blue-700">Option 2:</p>
            <p className="mt-1 text-blue-800">{countryData.option2}</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-md border border-purple-200">
            <p className="font-medium text-purple-700">Option 3:</p>
            <p className="mt-1 text-purple-800">{countryData.option3}</p>
          </div>
        </div>
      </div>
      
      {/* English Proficiency Component */}
      <EnglishProficiency countryName={countryName} />
      
      {countryData.notes && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-slate-700 border-b border-gray-200 pb-2 mb-3">Additional Information</h3>
          <div className="p-4 bg-gradient-to-r from-amber-50 to-amber-100 rounded-md border border-amber-200">
            <p className="text-amber-800">{countryData.notes}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;