import style from "./subheading.module.css";

export const SubHeading = ({ children }) => {
  return <h2 className={style.subheading}>{children}</h2>;
};
