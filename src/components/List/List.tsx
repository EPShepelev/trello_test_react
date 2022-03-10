import {useState} from 'react'

export const List: React.FC<{title:string, index:number, onColumTitleChange:Function}> = ({title, index, onColumTitleChange}) => {
  const [isTitleEdit, setIsTitleEdit] = useState(false)
  const [inputTitle, setInputTitle] = useState(title)

  const editBtnClick = (index:number, inputTitle:string) => {
    setIsTitleEdit(!isTitleEdit)
    if (isTitleEdit) {
      onColumTitleChange(index, inputTitle)
    }
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputTitle(e.target.value)
  }

  return (
    <div className='col my-3'>
      <div className='input-group align-items-center'>
        {isTitleEdit ? <input type='text' className='form-control' value={inputTitle} onChange={(e) => onInputChange(e)} /> : <span className='me-2'>{inputTitle}</span>}
        <button className='btn btn-light btn-sm me-2' type='button' onClick={()=>editBtnClick(index, inputTitle)}>...</button>
        <button className='btn btn-light btn-sm' type='button' >+</button>
      </div>
    </div>
  );
}