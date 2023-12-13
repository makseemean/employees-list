import { useState } from 'react';

import './appFilter.css';

const AppFilter = ({ onSort, onSearch }) => {
   const [sortBy, setSortBy] = useState('job');
   const [searchTerm, setSearchTerm] = useState('');

   const handleSortChange = (value) => {
      setSortBy(value);
      onSort(value);
   };

   const handleSearchChange = (value) => {
      setSearchTerm(value);
      onSearch(value);
   };

   return (
      <div className='employees__filter'>
         <div className='employees__filter-btns'>
            <button
               className={`employees__filter-btn ${sortBy === 'job' ? ' active' : ''}`}
               onClick={() => handleSortChange('job')}
            >
               by Job
            </button>
            <button
               className={`employees__filter-btn ${sortBy === 'name' ? ' active' : ''}`}
               onClick={() => handleSortChange('name')}
            >
               by Name
            </button>
            <button
               className={`employees__filter-btn ${sortBy === 'salary' ? ' active' : ''}`}
               onClick={() => handleSortChange('salary')}
            >
               by Salary
            </button>
         </div>
         <input
            className='employees__search'
            type='text'
            placeholder='Search by name...'
            name='search'
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
         />
      </div>
   );
};

export default AppFilter; 