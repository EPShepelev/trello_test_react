import styles from "./EditCard.module.css";

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
}> = ({
  id,
  listIndex,
  title,
  text,
  comments,
  author,
  onCloseBtnHandle,
  handleKeypress,
}) => {
  return (
    <div className={styles.overlay}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              <input type="text" placeholder={title} />
            </h5>

            <button
              type="button"
              className="btn-close"
              onClick={() => onCloseBtnHandle()}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <textarea placeholder={text}></textarea>
          </div>
          <div className="modal-footer">
            <p className="modal-text">Comments: {comments}</p>
            <button type="button" className="btn btn-success me-2">
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
