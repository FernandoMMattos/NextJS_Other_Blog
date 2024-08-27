"use client";

import { useRef } from "react";
import Modal from "../Modal";
import style from "./modalreply.module.css";
import { TextArea } from "../Textarea";
import { SubmitButton } from "../SubmitButton";
import Comment from "../Comment";
import { postReply } from "@/actions";

const ModalReply = ({ comment, post }) => {
  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current.openModal();
  };

  const closeModal = () => {
    modalRef.current.closeModal();
  };

  const action = postReply.bind(null, comment);

  return (
    <>
      <Modal ref={modalRef}>
        <form action={action} onSubmit={closeModal}>
          <div className={style.body}>
            <Comment comment={comment} />
          </div>
          <div className={style.divider}></div>
          <TextArea
            required
            rows={8}
            name="text"
            placeholder="Digite aqui..."
          />
          <div className={style.footer}>
            <SubmitButton>Responder</SubmitButton>
          </div>
        </form>
      </Modal>
      <button className={style.btn} onClick={openModal}>
        Responder
      </button>
    </>
  );
};

export default ModalReply;
