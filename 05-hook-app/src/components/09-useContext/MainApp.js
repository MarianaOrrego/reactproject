import { UserContext } from './UserContext';
import { AppRouter } from './AppRouter';
import { useState } from 'react';

export const MainApp = () => {

  const [ user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ 
      user, 
      setUser
     }}>
      <AppRouter />
    </UserContext.Provider>
  )
}