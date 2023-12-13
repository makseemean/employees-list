import { useState } from 'react';
import './appForm.css';

const AppForm = ({ addEmployee }) => {
   const [value, setValue] = useState({
      name: '',
      job: '',
      salary: ''
   });

   const onChangeValue = (e) => {
      e.preventDefault();
      setValue({ ...value, [e.target.name]: e.target.value });
   }

   const getInfo = (e) => {
      e.preventDefault();
      if (value.name.length > 3 && value.job.length > 3 && value.salary) {
         const newEmployee = {
            ...value,
            id: Math.floor(Math.random() * 9000) + 1000,
            bonus: false
         };
         addEmployee(newEmployee);
         setValue({
            name: '',
            job: '',
            salary: ''
         });
      } else {
         alert('Write full data about employee!')
      }
   }

   return (
      <div className="employees__add">
         <form className="employees__form">
            <input
               type="text"
               name="name"
               placeholder="Name..."
               value={value.name}
               onChange={onChangeValue}
            />
            <input
               type="text"
               name="job"
               placeholder="Job..."
               value={value.job}
               onChange={onChangeValue}
            />
            <input
               type="number"
               name="salary"
               placeholder="Salary..."
               value={value.salary}
               onChange={onChangeValue}
            />
            <button onClick={getInfo} className="employees__submit" type="submit">Add</button>
         </form>
      </div>
   );
};

export default AppForm;