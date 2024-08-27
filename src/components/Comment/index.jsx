import Image from "next/image";
import style from "./comment.module.css"

const Comment = ({ comment }) => {
  return (
    <div className={style.comment}>
      <Image
        src={comment.author.avatar}
        alt={`Avatar da ${comment.author.name}`}
        width={32}
        height={32}
      />
      <strong>@{comment.author.name}</strong>
      <p>{comment.text}</p>
    </div>
  );
};

export default Comment;
