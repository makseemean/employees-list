import './appInfo.css';

const AppInfo = ({ onLogout }) => {
   return (
      <div className='employees__top'>
         <h1 className='employees__title'>Car-park employees accounting</h1>
         <button className='logout' onClick={() => onLogout(false)}>Log-Out</button>
      </div>
   );
};

export default AppInfo;