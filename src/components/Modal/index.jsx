"use client";

import { forwardRef, useRef, useImperativeHandle } from "react";
import style from "./modal.module.css";

const Modal = forwardRef(({ children, ref }) => {
  const dialogRef = useRef(null);

  const closeModal = () => {
    dialogRef.current.closeModal();
  };

  const openModal = () => {
    dialogRef.current.showModal();
  };

  useImperativeHandle(ref, () => {
    return {
      closeModal,
      openModal,
    };
  });

  return (
    <dialog ref={dialogRef} className={style.dialog}>
      <header className={style.header}>
        <button onClick={closeModal}>X</button>
      </header>
      {children}
    </dialog>
  );
});

export default Modal;
