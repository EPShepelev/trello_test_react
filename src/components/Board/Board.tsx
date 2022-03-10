import { List } from '../List/List'

export const Board: React.FC<{columnTitles:Array<string>, onColumTitleChange:Function}> = ({columnTitles, onColumTitleChange}) => {

  return (
    <div className='row align-items-start'>
          {columnTitles && columnTitles.map((title, index) => {
            return <List key={index} index={index} title={title} onColumTitleChange={onColumTitleChange} />
          })}
    </div>
  );
}