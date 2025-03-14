import React from 'react';
import { getSystemColor } from '../data/equivalenceData';

const SystemBadge = ({ system }) => {
  const colorClasses = getSystemColor(system);
  
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${colorClasses}`}>
      {system}
    </span>
  );
};

export default SystemBadge;