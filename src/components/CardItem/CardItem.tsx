import { CardType } from "../List/List";
import styles from "./CardItem.module.css";
import { Card } from "../Card/Card";
import { useState } from "react";

export const CardItem: React.FC<CardType> = ({
  id,
  title,
  text,
  comments,
  author,
  listIndex,
  deleteCard,
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
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{author}</h6>
          <p className="card-text">Comments: {comments.length}</p>
        </div>
      </div>
      {isCardShow && (
        <Card
          onCardClickHandle={onCardClickHandle}
          listIndex={listIndex}
          id={id}
          deleteCard={deleteCard}
          title={title}
          text={text}
          comments={comments}
          author={author}
        />
      )}
    </>
  );
};
