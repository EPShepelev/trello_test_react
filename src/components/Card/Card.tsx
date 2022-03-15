import { useState, FC } from "react";
import { ICard } from "../../types/types";
import { ShowCard } from "../ShowCard/ShowCard";
import { EditCard } from "../EditCard/EditCard";

interface CardProps {
  listIndex: number
  listTitle: string
  card: ICard
  onCardClickHandle (): void
  editCard (listIndex: number, id: string, title: string, text: string): void
  deleteCard (listIndex: number, id: string): void
  addComment (listIndex: number, id: string, text: string): void
  deleteComment (listIndex: number, id: string, commentId: string): void
  editComment (listIndex: number, id: string, commentId: string,text: string): void
}

export const Card: FC<CardProps> = ({
  listIndex,
  listTitle,
  card,
  onCardClickHandle,
  editCard,
  deleteCard,
  addComment,
  editComment,
  deleteComment
}) => {
  const [isCardEdit, setIsCardEdit] = useState(false);

  const onCloseBtnHandle = () => {
    onCardClickHandle();
  };

  const onEditBtnHandle = () => {
    setIsCardEdit(!isCardEdit);
  };

  const onDeleteClickHandle = (listIndex: number, id: string) => {
    onCardClickHandle();
    deleteCard(listIndex, id);
  };

  return (
    <>
      {isCardEdit ? (
        <EditCard
          listIndex={listIndex}
          card={card}
          onCloseBtnHandle={onCloseBtnHandle}
          editCard={editCard}
          onEditBtnHandle={onEditBtnHandle}
        />
      ) : (
        <ShowCard
          listIndex={listIndex}
          listTitle={listTitle}
          card={card}
          onCloseBtnHandle={onCloseBtnHandle}
          onEditBtnHandle={onEditBtnHandle}
          onDeleteClickHandle={onDeleteClickHandle}
          addComment={addComment}
          editComment={editComment}
          deleteComment={deleteComment}
        />
      )}
    </>
  );
};
