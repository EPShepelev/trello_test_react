import { FC } from "react";
import {  ICloumn } from "../../types/types";
import { List } from "../List/List";

interface BoardProps {
  columns: ICloumn[]
  onColumTitleChange (index: number, title: string): void
  addCard (index: number, title: string, text: string): void
  editCard (listIndex: number, id: string, title: string, text: string): void
  deleteCard (listIndex: number, id: string): void
  addComment (listIndex: number, id: string, text: string): void
  editComment (listIndex: number, id: string, commentId: string,text: string): void
  deleteComment (listIndex: number, id: string, commentId: string): void
}

export const Board: FC<BoardProps> = ({ columns, onColumTitleChange, addCard,  editCard, deleteCard, addComment, editComment, deleteComment}) => {
  return (
    <div className="row flex-lg-row flex-md-column flex-sm-column flex-column align-items-start">
      {columns &&
        columns.map((column, index) => {
          return (
            <List
              key={index}
              listIndex={index}
              listTitle={column.listTitle}
              cards={column.cards}
              onColumTitleChange={onColumTitleChange}
              addCard={addCard}
              deleteCard={deleteCard}
              editCard={editCard}
              addComment={addComment}
              editComment={editComment}
              deleteComment={deleteComment}
            />
          );
        })}
    </div>
  );
};
