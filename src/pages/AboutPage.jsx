import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-slate-800 mb-6">About ALCHE Equivalence Checker</h1>
      
      <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
        <h2 className="text-xl font-semibold text-slate-700 mb-4">Purpose</h2>
        <p className="mb-4 text-slate-600">
          The ALCHE Admission Equivalence Checker is designed to assist admissions officers in evaluating 
          academic qualifications from African education systems. It provides standardized equivalence 
          information for secondary education qualifications across the continent.
        </p>
        
        <h2 className="text-xl font-semibold text-slate-700 mt-6 mb-4">How to Use</h2>
        <ol className="list-decimal pl-5 space-y-2 text-slate-600">
          <li>Search for or select a country from the dropdown menu</li>
          <li>View the country's qualification system and its equivalence to ALCHE admission options</li>
          <li>Review additional notes specific to that education system</li>
        </ol>
        
        <h2 className="text-xl font-semibold text-slate-700 mt-6 mb-4">Educational Systems</h2>
        <p className="mb-4 text-slate-600">
          The tool categorizes African education systems into several common patterns:
        </p>
        <ul className="pl-5 space-y-2 text-slate-600 list-disc">
          <li><span className="font-medium">British-influenced:</span> Systems closely following the British A-level structure</li>
          <li><span className="font-medium">French-influenced:</span> Systems based on the French Baccalauréat</li>
          <li><span className="font-medium">West African:</span> Regional systems like WASSCE</li>
          <li><span className="font-medium">Portuguese-influenced:</span> Systems derived from Portuguese educational models</li>
          <li><span className="font-medium">International:</span> Standardized international qualifications like IB</li>
          <li><span className="font-medium">Other:</span> Unique national systems</li>
        </ul>
        
        <div className="mt-8 text-center">
          <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">
            Return to Checker
          </Link>
        </div>
      </div>
      
      <div className="text-center text-xs text-gray-500 mt-8">
        <p>ALCHE Admission Equivalence Checker • Based on African School Leaving Qualifications Equivalence Guide</p>
        <p className="mt-1">Updated March 2025</p>
      </div>
    </div>
  );
};

export default AboutPage;