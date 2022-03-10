import { List } from '../List/List'

export const Board: React.FC<{columns:Array<{title:string, cards:any}>, onColumTitleChange:Function, addCard:Function}> = ({columns, onColumTitleChange, addCard}) => {

  return (
    <div className='row align-items-start'>
          {columns && columns.map((column, index) => {
            return <List key={index} index={index} title={column.title} cards={column.cards} onColumTitleChange={onColumTitleChange} addCard={addCard}/>
          })}
    </div>
  );
}