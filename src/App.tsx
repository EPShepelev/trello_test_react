import "./App.css";
import { Board } from "./components/Board/Board";
import { useEffect, useState } from "react";
import { NameCard } from "./components/NameCard/NameCard";
import { v4 as uuidv4 } from "uuid";

function App() {
  const initialState = [
    {
      title: "TODO",
      cards: [],
    },
    {
      title: "In progress",
      cards: [],
    },
    {
      title: "Testing",
      cards: [],
    },
    {
      title: "Done",
      cards: [],
    },
  ];

  const [userName, setUserName] = useState(
    localStorage["userName"]
      ? JSON.parse(localStorage.getItem("userName") || "")
      : ""
  );
  const [columns, setColumns] = useState(
    JSON.parse(localStorage.getItem("columns") || JSON.stringify(initialState))
  );

  useEffect(() => {
    localStorage.setItem("userName", JSON.stringify(userName));
  }, [userName]);

  useEffect(() => {
    localStorage.setItem("columns", JSON.stringify(columns));
  }, [columns]);

  const onUserNameAdd = (name: string) => {
    setUserName(name);
  };

  const onColumTitleChange = (index: number, title: string) => {
    const newColumns = [...columns];
    newColumns[index].title = title;
    setColumns(newColumns);
  };

  const addCard = (index: number, title: string, text: string) => {
    const newColumns = [...columns];
    const newCard = {
      id: uuidv4(),
      title: title,
      text: text,
      comments: [],
      author: userName,
    };
    newColumns[index].cards.push(newCard);
    setColumns(newColumns);
  };

  const deleteCard = (id: string, listIndex: number) => {
    const newColumns = [...columns];
    newColumns[listIndex].cards = newColumns[listIndex].cards.filter(
      (card: any) => card.id !== id
    );
    setColumns(newColumns);
  };
  const editCard = (id: string, listIndex: number, title: string, text: string) => {
    const newColumns = [...columns];
    const editedCard = newColumns[listIndex].cards.find((card: any) => card.id === id)
    editedCard.title = title
    editedCard.text = text
    setColumns(newColumns)
  };

  const addComment = (id: string, listIndex: number, text: string) => {
    const newColumns = [...columns];
    const newCommnet = {
      commentId: uuidv4(),
      text: text,
      author: userName,
    };
    const editedCard = newColumns[listIndex].cards.find((card: any) => card.id === id)
    editedCard.comments.push(newCommnet)
    setColumns(newColumns)
  };
  const editComment = (id: string, commentId: string, listIndex: number, text: string) => {
    const newColumns = [...columns];
    const editedCard = newColumns[listIndex].cards.find((card: any) => card.id === id)
    const editedComment = editedCard.comments.find((comment: any) => comment.commentId === commentId)
    editedComment.text = text
    setColumns(newColumns)
  };
  const deleteComment = (id: string, commentId: string, listIndex: number) => {
    const newColumns = [...columns];
    const editedCard = newColumns[listIndex].cards.find((card: any) => card.id === id)
    const newCommets = editedCard.comments.filter((comment: any) => comment.commentId !== commentId)
    editedCard.comments = newCommets
    setColumns(newColumns)
  };

  return (
    <div className="App">
      <div className="container">
        <h3 className="card-header header">React Trello Test Task</h3>
        {(!userName && <NameCard onUserNameAdd={onUserNameAdd} />) || (
          <Board
            columns={columns}
            onColumTitleChange={onColumTitleChange}
            addCard={addCard}
            deleteCard={deleteCard}
            editCard={editCard}
            addComment={addComment}
            editComment={editComment}
            deleteComment={deleteComment}
          />
        )}
      </div>
    </div>
  );
}

export default App;
