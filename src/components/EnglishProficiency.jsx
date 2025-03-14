import React, { useState } from 'react';
import { englishProficiencyData, internationalTests } from '../data/englishProficiencyData';

const EnglishProficiency = ({ countryName }) => {
  const [showAllTests, setShowAllTests] = useState(false);
  
  const countryData = countryName ? englishProficiencyData[countryName] : null;
  
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-slate-700 border-b border-gray-200 pb-2 mb-3">
        English Proficiency Requirements
      </h3>
      
      {countryName ? (
        <div>
          {countryData ? (
            <div className="p-4 bg-gradient-to-r from-teal-50 to-teal-100 rounded-md border border-teal-200 mb-4">
              <h4 className="font-medium text-teal-700 mb-2">Country-Specific Qualification:</h4>
              {countryData.options ? (
                <div className="space-y-2">
                  {countryData.options.map((option, index) => (
                    <div key={index} className="ml-2">
                      <p className="text-teal-800">
                        <span className="font-medium">{option.test}:</span> {option.requirement}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-teal-800">
                  <span className="font-medium">{countryData.test}:</span> {countryData.requirement}
                </p>
              )}
            </div>
          ) : (
            <div className="p-4 bg-gradient-to-r from-amber-50 to-amber-100 rounded-md border border-amber-200 mb-4">
              <p className="text-amber-800">
                No country-specific English qualification is available for {countryName}. Applicants must provide one of the international English proficiency tests listed below.
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="p-4 bg-gray-50 rounded-md border border-gray-200 mb-4">
          <p className="text-gray-500">Select a country to see specific English proficiency requirements.</p>
        </div>
      )}
      
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-medium text-slate-700">Accepted International Tests:</h4>
          <button 
            onClick={() => setShowAllTests(!showAllTests)}
            className="text-sm text-blue-600 hover:text-blue-800 focus:outline-none"
          >
            {showAllTests ? 'Show fewer' : 'Show all'}
          </button>
        </div>
        
        <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-md border border-blue-200">
          <p className="text-blue-800 text-sm mb-2">
            <span className="font-medium">Important:</span> Unless programs don't have an expiry date, English Proficiency Test Results should not be older than 2 years.
          </p>
          
          <ul className="space-y-2 mt-3">
            {(showAllTests ? internationalTests : internationalTests.slice(0, 4)).map((test, index) => (
              <li key={index} className="text-blue-800">
                <span className="font-medium">{test.test}:</span> {test.requirement}
              </li>
            ))}
          </ul>
          
          {!showAllTests && internationalTests.length > 4 && (
            <p className="text-blue-600 text-sm mt-2">
              ...and {internationalTests.length - 4} more tests
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnglishProficiency;