import { useState, FC } from "react";
import { ICard } from "../../types/types";
import { Card } from "../Card/Card";
import styles from "./CardItem.module.css";

interface CardItemProps {
  listIndex: number
  listTitle: string
  card: ICard
  editCard (listIndex: number, id: string, title: string, text: string): void
  deleteCard (listIndex: number, id: string): void
  addComment (listIndex: number, id: string, text: string): void
  deleteComment (listIndex: number, id: string, commentId: string): void
  editComment (listIndex: number, id: string, commentId: string,text: string): void
}

export const CardItem: FC<CardItemProps> = ({
  listIndex,
  listTitle,
  card,
  editCard,
  deleteCard,
  addComment,
  editComment,
  deleteComment,
}) => {
  const [isCardShow, setIsCardShow] = useState(false);

  const onCardClickHandle = () => {
    setIsCardShow(!isCardShow);
  };

  return (
    <>
      <div className={`card mt-2 ${styles.inner}`}>
        <div
          className={`card-body ${styles.card}`}
          onClick={() => onCardClickHandle()}
        >
          <h5 className="card-title">{card.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{card.author}</h6>
          <p className="card-text">Comments: {card.comments.length}</p>
        </div>
      </div>
      {isCardShow && (
        <Card
          listIndex={listIndex}
          listTitle={listTitle}
          card={card}
          onCardClickHandle={onCardClickHandle}
          deleteCard={deleteCard}
          editCard={editCard}
          addComment={addComment}
          editComment={editComment}
          deleteComment={deleteComment}
        />
      )}
    </>
  );
};
