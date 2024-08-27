"use client";

import { useState, useEffect } from "react";
import style from "./replies.module.css";
import Comment from "../Comment";
import ModalReply from "../ModalReply";

const Replies = ({ comment }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [replies, setReplies] = useState([]);

  async function fetchData() {
    const response = await fetch(`/api/comment/${comment.id}/replies`);
    const data = await response.json();
    setReplies(data);
  }

  useEffect(() => {
    if (showReplies) {
      fetchData();
    }
  }, [showReplies]);

  return (
    <div className={style.container}>
      <button
        className={style.btn}
        onClick={() => setShowReplies(!showReplies)}
      >
        {showReplies ? "Ocultar" : "Ver"} respostas
      </button>
      {showReplies && (
        <ul>
          {replies.map((reply) => (
            <li key={reply.id}>
              <Comment comment={reply} />
              <ModalReply comment={reply} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Replies;
