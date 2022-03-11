import {useState} from 'react'
import { FormCard } from '../FormCard/FormCard'
import styles from './List.module.css'

export const List: React.FC<{title:string, index:number, cards:any, onColumTitleChange:Function, addCard:Function}> = ({title, index, cards, onColumTitleChange, addCard}) => {
  const [isTitleEdit, setIsTitleEdit] = useState(false)
  const [inputTitle, setInputTitle] = useState(title)
  const [isCardEdit, setIsCardEdit] = useState(false)

  const editBtnClick = (index:number, inputTitle:string) => {
    setIsTitleEdit(!isTitleEdit)
    if (isTitleEdit) {
      onColumTitleChange(index, inputTitle)
    }
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputTitle(e.target.value)
  }

const onAddCardBtnClick = () => {
  setIsCardEdit(!isCardEdit)
}

const onCloseBtnClick = () => {
  setIsCardEdit(!isCardEdit)
}

  return (
    <>
    <div className='col my-3'>
      <div className='input-group align-items-center'>
        {isTitleEdit ? <input type='text' className='form-control' value={inputTitle} onChange={(e) => onInputChange(e)} /> : <span className='me-2'>{inputTitle}</span>}
        <button className='btn btn-light btn-sm me-2' type='button' onClick={()=>editBtnClick(index, inputTitle)}>...</button>
        <button className='btn btn-light btn-sm' type='button' onClick={()=>onAddCardBtnClick()} disabled={isCardEdit}>+</button>
      </div>
      <div className='d-flex flex-column justify-content-start'>
        {cards && cards.map((card:string, index: number)=>{return <div key={index} className='align-self-start'>{card}</div>})}
      </div>
    </div>
    {isCardEdit && <FormCard onCloseBtnClick={onCloseBtnClick}  addCard={addCard} isCardEdit={isCardEdit} setIsCardEdit={setIsCardEdit}/>}
    </>
  );
}