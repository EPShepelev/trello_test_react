import styles from './FormCard.module.css'
import {useState} from 'react'

export const FormCard: React.FC<{onCloseBtnClick:Function, addCard:Function, setIsCardEdit:Function, isCardEdit: boolean}> = ({onCloseBtnClick, addCard, setIsCardEdit, isCardEdit}) => {
  const [titleValue, setTitleValue] = useState('')
  const [textValue, setTextValue] = useState('')

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, clb: Function) => {
    clb(e.target.value)
}

const onSubmitBtnClick = (e: React.MouseEvent<HTMLButtonElement>, titleValue: string) => {
  e.preventDefault()
  setIsCardEdit(!isCardEdit)
  addCard(0, titleValue)
}
  return (
    <div className={styles.modal}>
      <div className='row justify-content-center'>
      <div className={`col-3 ${styles.form}`}>
        <div className={styles.close}>
          <button type='button' className='btn btn-secondary btn-sm mb-3' onClick={()=>onCloseBtnClick()}>x</button>
        </div>
        <input type='text' className='form-control mb-3' placeholder='Card title' value={titleValue} onChange={(e) => {onInputChange(e, setTitleValue)}}/>
        <textarea className='form-control mb-3' placeholder='Type something...' value={textValue} onChange={(e) => {onInputChange(e, setTextValue)}}/>
        <button type='submit' className='btn btn-success mb-3' onClick={(e)=> onSubmitBtnClick(e, titleValue)}>OK</button>
      </div>
      </div>
    </div>
  );
}

