import styles from "./ShowCard.module.css";
import {Comments} from '../Comments/Comments'
import { useCallback, useEffect } from "react";

export const ShowCard: React.FC<{
  id: string;
  listIndex: number;
  title: string;
  listTitle: string;
  text: string;
  comments: any;
  author: string;
  onDeleteClickHandle: Function;
  onCloseBtnHandle: Function;
  handleKeypress: Function;
  onEditBtnHandle: Function;
  addComment: Function;
  editComment: Function;
  deleteComment: Function;
}> = ({
  id,
  listIndex,
  title,
  listTitle,
  text,
  comments,
  author,
  onDeleteClickHandle,
  onCloseBtnHandle,
  onEditBtnHandle,
  addComment,
  editComment,
  deleteComment
}) => {

  const escFunction = useCallback((e) => {
    if (e.key === "Escape") {
      onCloseBtnHandle()
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  return (
    <div className={styles.overlay}>
      <div className={`modal-dialog ${styles.content}`}>
        <div className="modal-content">
          <div className="modal-header">
            <div>
              <h5 className="modal-title">{title} <span className="ms-2">({listTitle})</span></h5>
              <h6 className="modal-subtitle text-muted">{author}</h6>
            </div>
            <button
              type="button"
              className="btn-close"
              onClick={() => onCloseBtnHandle()}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p className="modal-text">{text}</p>
            <div>
              <p className="modal-text mb-0">Comments:</p>
              <Comments comments={comments} addComment={addComment} id={id} listIndex={listIndex} editComment={editComment}deleteComment={deleteComment} />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-success me-2"
              onClick={() => onEditBtnHandle()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-pencil"
                viewBox="0 0 16 16"
              >
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
              </svg>
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => onDeleteClickHandle(id, listIndex)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash3"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
