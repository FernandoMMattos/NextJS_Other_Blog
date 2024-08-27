import Comment from "../Comment";
import ModalReply from "../ModalReply";
import Replies from "../Replies";
import style from "./commentlist.module.css";

const CommentList = ({ comments }) => {
  return (
    <section className={style.comments}>
      <h2>Comentários</h2>
      <ul>
        {comments.map((comment) => (
          <li>
            <Comment comment={comment} key={comment.id} />
            <ModalReply comment={comment} />
            <Replies comment={comment} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CommentList;
