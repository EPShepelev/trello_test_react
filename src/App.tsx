import React, { useState } from 'react';
import './App.css';
import { List } from './components/List/List'

function App() {
  const [titles, setTitle] = useState(['TODO', 'In progress', 'Testing', 'Done'])




  return (
    <div className='App'>
      <div className='container'>
        <div className='row align-items-start'>
          {titles.map((title, index) => {
            return <List key={index}title={title}></List>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
