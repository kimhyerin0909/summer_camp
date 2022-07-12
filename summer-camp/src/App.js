import { useState } from 'react';
import './App.css';
import { Acom } from './components/Acom';
import { Bcom } from './components/Bcom';
import { Ccom } from './components/Ccom';
import { Gcom } from './components/Gcom';
import { Hcom } from './components/Hcom';
import { Jcom } from './components/Jcom';
import { UserDataContext, UserDataProvider } from './context/userDataContext';

function App() {
  return (
    <UserDataProvider>
      <div className="App">
        <Acom>
          <Bcom>
            <Ccom>
              <Gcom/>
            </Ccom>
          </Bcom>
        </Acom>
        <Hcom>
          <Jcom />
        </Hcom>
      </div>
    </UserDataProvider>
  );
}

export default App;
