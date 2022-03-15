import { useState, FC } from 'react';
import { IComment } from "../../types/types";
import {CommentsList} from '../CommentsList/CommentsList'

interface CommentListProps {
  listIndex: number
  id: string //this is card id, need to be renamed??
  comments: IComment[]
  addComment (listIndex: number, id: string, text: string): void
  deleteComment (listIndex: number, id: string, commentId: string): void
  editComment (listIndex: number, id: string, commentId: string,text: string): void
}

export const Comments: FC<CommentListProps> = ({listIndex, id, comments, addComment, editComment, deleteComment}) => {

  const [commentTextValue, setCommentTextValue] = useState("")

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement>, clb: Function
  ) => {
    clb(e.target.value);
  };

  const onAddBtnClick = (listIndex: number, id: string, text: string) => {
    addComment( listIndex, id, text)
    setCommentTextValue("")
  }

  const handleKeypress = (e: React.KeyboardEvent, listIndex: number, id: string, text: string) => {
    if (e.key === "Enter") {
      addComment( listIndex, id, text)
      setCommentTextValue("")
    }
  };

  return (
    <>
    {/* may be create separated component? */}
    <div className="d-flex align-items-center">
      <input
        className="me-2"
        type="text"
        value={commentTextValue}
        onKeyPress={(e) => handleKeypress(e, listIndex, id, commentTextValue)}
        onChange={(e) => {onInputChange(e, setCommentTextValue);}}
      />
    <button
      className="btn btn-light btn-sm"
      type="button"
      onClick={()=>onAddBtnClick(listIndex, id, commentTextValue)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-plus"
        viewBox="0 0 16 16"
      >
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
      </svg>
    </button>
    </div>
    <CommentsList  comments={comments} editComment={editComment} deleteComment={deleteComment}  id={id} listIndex={listIndex} />
    </>
  );
};