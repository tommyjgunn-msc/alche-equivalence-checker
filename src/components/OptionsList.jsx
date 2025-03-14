import React from 'react';

const OptionsList = () => {
  return (
    <div className="mt-6">
      <h3 className="font-semibold text-slate-700 mb-3">ALCHE Admission Options:</h3>
      <div className="space-y-2">
        <div className="p-3 bg-gradient-to-r from-green-50 to-green-100 rounded-md border border-green-200">
          <span className="font-medium text-green-700">Option 1:</span>
          <p className="text-sm mt-1 text-green-800">Three subjects at A-level and one at AS-level</p>
        </div>
        <div className="p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-md border border-blue-200">
          <span className="font-medium text-blue-700">Option 2:</span>
          <p className="text-sm mt-1 text-blue-800">Two subjects at A-level and two at AS-level</p>
        </div>
        <div className="p-3 bg-gradient-to-r from-purple-50 to-purple-100 rounded-md border border-purple-200">
          <span className="font-medium text-purple-700">Option 3:</span>
          <p className="text-sm mt-1 text-purple-800">Three subjects at A-level (GCE or equivalent)</p>
        </div>
      </div>
    </div>
  );
};

export default OptionsList;