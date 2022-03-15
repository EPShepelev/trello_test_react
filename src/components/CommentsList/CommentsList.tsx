import { FC } from "react";
import { IComment } from "../../types/types";
import { Comment } from '../Comment/Comment'

interface CommentListProps {
  listIndex: number
  id: string //this is card id, need to be renamed??
  comments: IComment[]
  deleteComment (listIndex: number, id: string, commentId: string): void
  editComment (listIndex: number, id: string, commentId: string,text: string): void
}

export const CommentsList: FC<CommentListProps> = ({comments, id, listIndex, editComment, deleteComment}) => {
  return (
    <div>
      {comments && comments.map((comment, index) =>{return ( <Comment key={index} comment={comment} id={id} listIndex={listIndex} editComment={editComment} deleteComment={deleteComment} />)})}
    </div>
  );
};