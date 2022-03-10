import {useState} from 'react'

export const NameCard: React.FC<{onUserNameAdd:Function}> = ({onUserNameAdd}) => {
  const [inputValue, setInputValue] = useState('')

  const onInputValueChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>Please enter your name</h5>
        <input type='text' value={inputValue} onChange={(e)=>onInputValueChanged(e)}></input>
        <button className='btn btn-primary' onClick={()=> onUserNameAdd(inputValue)}>Confirm</button>
      </div>
    </div>
  );
}