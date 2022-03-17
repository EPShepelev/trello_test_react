import styles from "./FormCard.module.css";
import { useState, useEffect } from "react";

export const FormCard: React.FC<{
  onCloseBtnClick: Function;
  addCard: Function;
  setIsCardEdit: Function;
  isCardEdit: boolean;
  listIndex: number;
}> = ({ onCloseBtnClick, addCard, setIsCardEdit, isCardEdit, listIndex }) => {
  const [titleValue, setTitleValue] = useState("");
  const [textValue, setTextValue] = useState("");

  const onInputChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    clb: Function
  ) => {
    clb(e.target.value);
  };

  const onSubmitBtnClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    titleValue: string,
    textValue: string
  ) => {
    e.preventDefault();
    setIsCardEdit(!isCardEdit);
    addCard(listIndex, titleValue, textValue);
  };

  const handleKeypress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setIsCardEdit(!isCardEdit);
      addCard(listIndex, titleValue, textValue);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", (e)=>{
      if (e.key === "Escape") {
        onCloseBtnClick()
      }
    }, false);
    return () => {
      document.removeEventListener("keydown", (e)=>{
        if (e.key === "Escape") {
          onCloseBtnClick()
        }
      }, false);
    };
  }, []);

  return (
    <div className={styles.modal}>
      <div className="row justify-content-center">
        <div className={`col-3 ${styles.form}`}>
          <div className={styles.close}>
            <button
              type="button"
              className="btn btn-secondary btn-sm mb-3"
              onClick={() => onCloseBtnClick()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Card title"
            value={titleValue}
            onChange={(e) => {
              onInputChange(e, setTitleValue);
            }}
          />
          <textarea
            className="form-control mb-3"
            placeholder="Type something..."
            value={textValue}
            onKeyPress={handleKeypress}
            onChange={(e) => {
              onInputChange(e, setTextValue);
            }}
          />
          <button
            type="submit"
            className="btn btn-success mb-3"
            onClick={(e) => onSubmitBtnClick(e, titleValue, textValue)}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};
