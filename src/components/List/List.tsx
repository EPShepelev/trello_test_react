import { useState } from 'react';

export const List: React.FC<{title:string}> = ({title}) => {
  const [isTitleEdit, setIsTitleEdit] = useState(false)
  const [inputTitle, setInputTitle] = useState(title)

  const editBtnClick = () => {
    setIsTitleEdit(!isTitleEdit)
  }

  const onTitleChange = (event: any) => {
    setInputTitle(event.target.value)
  }

  return (
    <div className='col my-3'>
      <div className='input-group align-items-center'>
        {isTitleEdit ? <input type='text' className='form-control' value={inputTitle} onChange={onTitleChange} /> : <span className='me-2'>{inputTitle}</span>}
        <button className='btn btn-light' type='button' onClick={editBtnClick}>...</button>
      </div>
    </div>
  );
}