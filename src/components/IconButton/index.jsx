import style from "./iconbutton.module.css";

const IconButton = ({ children, ...rest }) => {
  return (
    <button {...rest} classname={style.btn}>
      {children}
    </button>
  );
};

export default IconButton;
