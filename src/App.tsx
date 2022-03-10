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
// const [columnTitles, setColumnTitles] = useState(JSON.parse(localStorage.getItem('columnTitles') || JSON.stringify(['TODO', 'In progress', 'Testing', 'Done'])))
const [columns, setColumns] = useState(JSON.parse(localStorage.getItem('columns') || JSON.stringify(initialState)))
// const [cards, setCards] = useState([])

  useEffect(() => {
    localStorage.setItem('userName', JSON.stringify(userName))
  }, [userName]);

  // useEffect(() => {
  //   localStorage.setItem('columnTitles', JSON.stringify(columnTitles))
  // }, [columnTitles]);
  useEffect(() => {
    localStorage.setItem('columns', JSON.stringify(columns))
  }, [columns]);

  const onUserNameAdd = (name:string) => {
    setUserName(name)
  }

  // const onColumTitleChange = (index:number, title:string) => {
  //   const newColumnTitles = [...columnTitles]
  //   newColumnTitles[index] = title
  //   setColumnTitles(newColumnTitles)
  // }

  const onColumTitleChange = (index:number, title:string) => {
    const newColumnTitles = [...columns.title]
    newColumnTitles[index] = title
    setColumns(newColumnTitles)
  }

  const addCard = () => {}
  const editCard = () => {}
  const deleteCard = () => {}
  const addCommnetToCard = () => {}

  return (
    <div className='App'>
      <div className='container'>
      <div className='card-header'>React Trello Test Task</div>
       {(!userName && <NameCard onUserNameAdd={onUserNameAdd}/>) || <Board columnTitles={columnTitles} onColumTitleChange={onColumTitleChange}/>}
      </div>
    </div>
  );
}

export default App;
