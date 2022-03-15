import { useState, FC } from "react";
import { ICard } from "../../types/types";
import styles from "./EditCard.module.css";

interface EditCardProps {
  listIndex: number
  card: ICard
  editCard (listIndex: number, id: string, title: string, text: string): void
  onCloseBtnHandle (): void
  onEditBtnHandle (): void
}

export const EditCard: React.FC<EditCardProps> = ({
  listIndex,
  card,
  onCloseBtnHandle,
  editCard
}) => {
  const [titleValue, setTitleValue] = useState(card.title);
  const [textValue, setTextValue] = useState(card.text);

  const onInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    clb: Function
  ) => {
    clb(e.target.value);
  };

  const onEditDoneClickhandle = ( e: React.MouseEvent<HTMLButtonElement>, listIndex: number, id: string, titleValue: string, textValue: string) => {
    editCard(listIndex, id, titleValue, textValue)
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
            <p className="text-muted">Change text and press OK to save</p>
            <button type="button" className="btn btn-success me-2" onClick={(e) => onEditDoneClickhandle(e, listIndex, card.id, titleValue, textValue)}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
