"use client";

import { useRef } from "react";
import IconButton from "../IconButton";
import { Chat } from "../icons/Chat";
import Modal from "../Modal";
import { SubHeading } from "../Subheading";
import { TextArea } from "../Textarea";
import { SubmitButton } from "../SubmitButton";
import style from "./modalcomment.module.css"

const ModalComment = () => {
  const modalRef = useRef(null);
  return (
    <>
      <Modal ref={modalRef}>
        <form action={action} onSubmit={() => modalRef.current.closeModal()}>
          <SubHeading>Deixe seu comentário sobre o post:</SubHeading>
          <TextArea
            required
            rows={8}
            name="text"
            placeholder="Digite aqui..."
          />
          <div className={style.footer}>
            <SubmitButton>Comentar</SubmitButton>
          </div>
        </form>
      </Modal>
      <IconButton onClick={() => modalRef.current.openModal()}>
        <Chat />
      </IconButton>
    </>
  );
};

export default ModalComment;
