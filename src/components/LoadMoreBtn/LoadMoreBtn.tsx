import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onLoadMore: () => void;
}
const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onLoadMore }) => {
  return (
    <button className={css.btn} onClick={onLoadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
