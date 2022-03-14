import { useState } from "react";
import { FormCard } from "../FormCard/FormCard";
import { CardItem } from "../CardItem/CardItem";

export type CardType = {
  id: string;
  title: string;
  text: string;
  comments: Array<string | null>;
  author: string;
  deleteCard: Function;
  editCard: Function;
  addComment: Function;
  editComment: Function;
  deleteComment: Function;
  listIndex: number;
};

export const List: React.FC<{
  title: string;
  listIndex: number;
  cards: any;
  onColumTitleChange: Function;
  addCard: Function;
  deleteCard: Function;
  editCard: Function;
  addComment: Function;
  editComment: Function;
  deleteComment: Function;
}> = ({ title, listIndex, cards, onColumTitleChange, addCard, deleteCard, editCard, addComment, editComment, deleteComment }) => {
  const [isTitleEdit, setIsTitleEdit] = useState(false);
  const [inputTitle, setInputTitle] = useState(title);
  const [isCardEdit, setIsCardEdit] = useState(false);

  const editBtnClick = (index: number, inputTitle: string) => {
    setIsTitleEdit(!isTitleEdit);
    if (isTitleEdit) {
      onColumTitleChange(index, inputTitle);
    }
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  };

  const onAddCardBtnClick = () => {
    setIsCardEdit(!isCardEdit);
  };

  const onCloseBtnClick = () => {
    setIsCardEdit(!isCardEdit);
  };

  return (
    <>
      <div className="col my-3">
        <div className="input-group align-items-center">
          {isTitleEdit ? (
            <input
              type="text"
              className="form-control"
              value={inputTitle}
              onChange={(e) => onInputChange(e)}
            />
          ) : (
            <h4 className="me-2">{inputTitle}</h4>
          )}
          <button
            className="btn btn-light btn-sm me-2"
            type="button"
            onClick={() => editBtnClick(listIndex, inputTitle)}
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
            className="btn btn-light btn-sm"
            type="button"
            onClick={() => onAddCardBtnClick()}
            disabled={isCardEdit}
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
        <div className="mt-2">
          {cards &&
            cards.map((card: any, index: number) => {
              return (
                <div key={index} className="align-self-start">
                  <CardItem
                    id={card.id}
                    deleteCard={deleteCard}
                    title={card.title}
                    text={card.text}
                    comments={card.comments}
                    author={card.author}
                    listIndex={listIndex}
                    editCard={editCard}
                    addComment={addComment}
                    editComment={editComment}
                    deleteComment={deleteComment}
                  />
                </div>
              );
            })}
        </div>
      </div>
      {isCardEdit && (
        <FormCard
          listIndex={listIndex}
          onCloseBtnClick={onCloseBtnClick}
          addCard={addCard}
          isCardEdit={isCardEdit}
          setIsCardEdit={setIsCardEdit}
        />
      )}
    </>
  );
};
