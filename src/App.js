import { useEffect, useState } from "react";

import Login from "./components/login/Login";
import AppInfo from "./components/appInfo/AppInfo";
import AppFilter from "./components/appFilter/AppFilter";
import AppItems from "./components/appItems/AppItems";
import AppForm from "./components/appForm/AppForm";

import './index.css';

// Data
const employees = [
   {
      id: '1442',
      name: 'John Smith',
      job: 'Manager',
      salary: 7000,
      bonus: false,
      dismissal: false
   },
   {
      id: '2092',
      name: 'Alex Peters',
      job: 'Parking attendant',
      salary: 4000,
      bonus: false,
      dismissal: false
   },
   {
      id: '7763',
      name: 'Daniel Brown',
      job: 'Parking attendant',
      salary: 4300,
      bonus: true,
      dismissal: false
   },
   {
      id: '8790',
      name: 'Robert Taylor',
      job: 'Security',
      salary: 4500,
      bonus: false,
      dismissal: false
   }
]


function App() {
   const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin") === "true" || false);

   const initialItems = JSON.parse(localStorage.getItem("employees")) || employees;
   const [items, setItems] = useState(initialItems);

   const [sortOption, setSortOption] = useState(null);
   const [searchTerm, setSearchTerm] = useState('');

   useEffect(() => {
      localStorage.setItem("employees", JSON.stringify(items));
   }, [items]);

   useEffect(() => {
      localStorage.setItem("isLogin", isLogin);
   }, [isLogin]);

   const filteredAndSortedItems = () => {
      let filteredAndSorted = [...items];

      if (sortOption === 'job') {
         filteredAndSorted = filteredAndSorted.sort((a, b) => a.job.localeCompare(b.job));
      } else if (sortOption === 'name') {
         filteredAndSorted = filteredAndSorted.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortOption === 'salary') {
         filteredAndSorted = filteredAndSorted.sort((a, b) => b.salary - a.salary);
      }

      return filteredAndSorted.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
   };

   const addEmployee = (data) => {
      setItems([...items, data]);
   }

   const dismissalEmployee = (id) => {
      const result = window.confirm('Are you really want to fire this employee?');
      if (result) {
         const copy = [...items];
         const current = copy.find(item => id === item.id);
         current.dismissal = true;
         setItems(copy);
      }
   }

   const onBonus = (id) => {
      const copy = [...items];
      const current = copy.find(item => id === item.id);
      current.bonus = !current.bonus;
      setItems(copy);
   }

   const onSalary = (id, newSalary) => {
      const copy = [...items];
      const current = copy.find(item => id === item.id);
      current.salary = newSalary;
      setItems(copy);
   }

   return (
      <div className="App">
         {
            isLogin
               ?
               <>
                  <AppInfo
                     onLogout={setIsLogin}
                  />
                  <AppFilter
                     onSort={setSortOption}
                     onSearch={setSearchTerm}
                  />
                  <AppItems
                     items={filteredAndSortedItems()}
                     onBonus={onBonus}
                     onSalary={onSalary}
                     dismissalEmployee={dismissalEmployee}
                  />
                  <AppForm
                     addEmployee={addEmployee}
                  />
               </>
               :
               <Login onLogin={setIsLogin} />
         }
      </div>
   );
}

export default App;
