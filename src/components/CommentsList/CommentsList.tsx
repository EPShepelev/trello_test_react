import {Comment} from '../Comment/Comment'

export const CommentsList: React.FC<{comments:Array<object>, editComment: Function; deleteComment: Function, id: string, listIndex: number}> = ({comments, id, listIndex, editComment, deleteComment}) => {
  return (
    <div>
      {comments && comments.map((comment, index) =>{return ( <Comment key={index} comment={comment} id={id} listIndex={listIndex} editComment={editComment} deleteComment={deleteComment} />)})}
    </div>
  );
};