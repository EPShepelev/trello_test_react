import styles from "./Card.module.css";
import { useState } from "react";
import { ShowCard } from "../ShowCard/ShowCard";
import { EditCard } from "../EditCard/EditCard";

export const Card: React.FC<{
  id: string;
  listIndex: number;
  deleteCard: Function;
  title: string;
  text: string;
  comments: any;
  author: string;
  onCardClickHandle: Function;
  editCard: Function
}> = ({
  id,
  listIndex,
  deleteCard,
  title,
  text,
  comments,
  author,
  onCardClickHandle,
  editCard
}) => {
  const [isCardEdit, setIsCardEdit] = useState(false);

  const onDeleteClickHandle = (id: string, listIndex: number) => {
    onCardClickHandle();
    deleteCard(id, listIndex);
  };

  const onCloseBtnHandle = () => {
    onCardClickHandle();
  };

  const handleKeypress = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onCardClickHandle();
    }
  };

  const onEditBtnHandle = () => {
    setIsCardEdit(!isCardEdit);
  };

  return (
    <>
      {isCardEdit ? (
        <EditCard
          id={id}
          listIndex={listIndex}
          title={title}
          text={text}
          comments={comments}
          author={author}
          onDeleteClickHandle={onDeleteClickHandle}
          onCloseBtnHandle={onCloseBtnHandle}
          handleKeypress={handleKeypress}
          onEditBtnHandle={onEditBtnHandle}
          editCard={editCard}
        />
      ) : (
        <ShowCard
          id={id}
          listIndex={listIndex}
          title={title}
          text={text}
          comments={comments}
          author={author}
          onDeleteClickHandle={onDeleteClickHandle}
          onCloseBtnHandle={onCloseBtnHandle}
          handleKeypress={handleKeypress}
          onEditBtnHandle={onEditBtnHandle}
        />
      )}
    </>
  );
};
