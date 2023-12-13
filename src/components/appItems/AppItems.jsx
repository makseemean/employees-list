import AppItem from "../appItem/AppItem";

import './appItems.css';


const EmployeeItems = ({ items, onBonus, onSalary, dismissalEmployee }) => {
   const allDismissals = items.every(item => item.dismissal);

   return (
      <div className="employees__content">
         <div className='employees__values'>
            <div className="employees__value">Name</div>
            <div className="employees__value">Job</div>
            <div className="employees__value">Bonus</div>
            <div className="employees__value">Salary</div>
            <div className="employees__value">Dismissal</div>
         </div>
         <ul className="employees__list">
            {
               !allDismissals  
                  ?
                  items.map(item => (
                     <AppItem
                        key={item.id}
                        item={item}
                        onBonus={onBonus}
                        onSalary={onSalary}
                        fireEmployee={dismissalEmployee}
                     />
                  ))
                  :
                  <li className="employees__message">No employees...</li>
            }
         </ul>
      </div>
   );
};

export default EmployeeItems;