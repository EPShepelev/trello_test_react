import { useState } from 'react';
import {CommentsList} from '../CommentsList/CommentsList'

export const Comments: React.FC<{comments:Array<object>, addCommnet: Function, id: string, listIndex: number}> = ({comments, addCommnet, id, listIndex}) => {

  const [commentTextValue, setCommentTextValue] = useState("")

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement>, clb: Function
  ) => {
    clb(e.target.value);
  };

  const onAddBtnClick = (id: string, listIndex: number, text: string) => {
    addCommnet(id, listIndex, text)
  }

  return (
    <>
    <div className="d-flex align-items-center">
     <input className="me-2" type="text" value={commentTextValue} onChange={(e) => {
              onInputChange(e, setCommentTextValue);
            }}/>
     <button
            className="btn btn-light btn-sm"
            type="button"
            onClick={()=>onAddBtnClick(id, listIndex, commentTextValue)}
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
    <CommentsList  comments={comments} />
    </>
  );
};