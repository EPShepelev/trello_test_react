import styles from "./EditCard.module.css";
import { useState } from "react";

export const EditCard: React.FC<{
  id: string;
  listIndex: number;
  title: string;
  text: string;
  comments: any;
  author: string;
  onDeleteClickHandle: Function;
  onCloseBtnHandle: Function;
  handleKeypress: Function;
  onEditBtnHandle: Function;
  editCard: Function
}> = ({
  id,
  listIndex,
  title,
  text,
  author,
  onCloseBtnHandle,
  handleKeypress,
  editCard
}) => {
  const [titleValue, setTitleValue] = useState(title);
  const [textValue, setTextValue] = useState(text);

  const onInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    clb: Function
  ) => {
    clb(e.target.value);
  };

  const onEditDoneClickhandle = ( e: React.MouseEvent<HTMLButtonElement>, id: string, listIndex: number, titleValue: string, textValue: string) => {
    editCard(id, listIndex, titleValue, textValue)
    onCloseBtnHandle()
  }
  return (
    <div className={styles.overlay}>
      <div className={`modal-dialog ${styles.content}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title w-100 me-2">
              <input className={`modal-title w-100 ${styles.title}`} type="text" value={titleValue} onChange={(e) => {
              onInputChange(e, setTitleValue);
            }}/>
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => onCloseBtnHandle()}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body w-100 me-2">
            <textarea className={`${styles.text}`} value={textValue} onChange={(e) => {
              onInputChange(e, setTextValue);
            }}/>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-success me-2" onClick={(e) => onEditDoneClickhandle(e, id, listIndex, titleValue, textValue)}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
