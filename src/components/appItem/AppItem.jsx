import { useState } from 'react';
import './appItem.css';

const AppItem = ({ item, onBonus, onSalary, fireEmployee }) => {
   const [salaryValue, setSalaryValue] = useState(item.salary);

   const onChangeValue = (e) => {
      e.preventDefault();
      const newSalaryValue = e.target.value;
      if (newSalaryValue >= 0) {
         setSalaryValue(newSalaryValue);
         onSalary(item.id, newSalaryValue);
      }
   }

   return (
      <li className={`employees__item ${item.dismissal ? "hide" : ''}`}>
         <div className='employees__name'>{item.name}</div>
         <div className='employees__job'>{item.job}</div>
         <button
            className={`employees__bonus ${item.bonus ? 'active' : ''}`}
            onClick={() => onBonus(item.id)}>
            {item.bonus ? 'Bonus added' : 'No bonus'}
         </button>
         <input
            type='number'
            className='employees__salary'
            value={salaryValue}
            onChange={onChangeValue}
         />
         <button className='employees__dismissal' onClick={() => fireEmployee(item.id)}>Dismissal</button>
      </li>
   );
};

export default AppItem;
