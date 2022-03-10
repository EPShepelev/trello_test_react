import { List } from '../List/List'

export const Board: React.FC<{columns:Array<{title: string, cards: any}>, onColumTitleChange:Function}> = ({columns, onColumTitleChange}) => {

  return (
    <div className='row align-items-start'>
          {columns && columns.map((column, index) => {
            return <List key={index} index={index} title={column.title} onColumTitleChange={onColumTitleChange} />
          })}
    </div>
  );
}