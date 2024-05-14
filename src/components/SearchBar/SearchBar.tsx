import { useState } from "react";
import css from "./SearchBar.module.css";
import { IoSearch } from "react-icons/io5";

interface SearchBarProps {
  onFormSubmit: (query: string) => void;
  onEmptyString: () => void;
}
const SearchBar: React.FC<SearchBarProps> = ({
  onFormSubmit,
  onEmptyString,
}) => {
  const [text, setText] = useState<string>("");

  function changeText(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() === "") {
      onEmptyString();
      return;
    } else {
      onFormSubmit(text);
      setText("");
    }
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Search images and photos"
          value={text}
          className={css.input}
          onChange={changeText}
        />
        <button type="submit" className={css.button}>
          <IoSearch className={css.icon} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
