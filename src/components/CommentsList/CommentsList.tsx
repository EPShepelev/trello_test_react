import {Comment} from '../Comment/Comment'

export const CommentsList: React.FC<{comments:Array<object>}> = ({comments}) => {
  return (
    <div>
      {comments && comments.map((comment, index) =>{return ( <Comment key={index} comment={comment}/>)})}
    </div>
  );
};