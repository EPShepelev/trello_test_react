import './App.css'
import {Board} from './components/Board/Board'
import {useEffect, useState} from 'react'
import {NameCard} from './components/NameCard/NameCard'

function App() {
const initialState = [
  {
    title: 'TODO',
    cards: []
  },
  {
    title: 'In progress',
    cards: []
  },
  {
    title: 'Testing',
    cards: []
  },
  {
    title: 'Done',
    cards: []
  },
]

const [userName, setUserName] = useState(localStorage['userName'] ? (JSON.parse(localStorage.getItem('userName') || '')) : '')
const [columns, setColumns] = useState(JSON.parse(localStorage.getItem('columns') || JSON.stringify(initialState)))

  useEffect(() => {
    localStorage.setItem('userName', JSON.stringify(userName))
  }, [userName]);

  useEffect(() => {
    localStorage.setItem('columns', JSON.stringify(columns))
  }, [columns]);

  const onUserNameAdd = (name:string) => {
    setUserName(name)
  }

  const onColumTitleChange = (index:number, title:string) => {
    const newColumns = [...columns]
    newColumns[index].title = title
    setColumns(newColumns)
  }

  const addCard = (index:number, title:string) => {
    const newColumns = [...columns]
    newColumns[index].cards.push(title)
    setColumns(newColumns)
  }

  const editCard = () => {}
  const deleteCard = () => {}
  const addCommnetToCard = () => {}

  return (
    <div className='App'>
      <div className='container'>
      <div className='card-header header'>React Trello Test Task</div>
       {(!userName && <NameCard onUserNameAdd={onUserNameAdd}/>) || <Board columns={columns} onColumTitleChange={onColumTitleChange} addCard={addCard}/>}
      </div>
    </div>
  );
}

export default App;
