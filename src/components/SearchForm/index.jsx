import { Button } from "../Button";
import style from "./searchForm.module.css";

export const searchForm = () => {
  return (
    <form className={style.form} action="/">
      <input
        name="q"
        className={style.input}
        placeholder="Digite o que procura"
      />
      <Button>Buscar</Button>
    </form>
  );
};
