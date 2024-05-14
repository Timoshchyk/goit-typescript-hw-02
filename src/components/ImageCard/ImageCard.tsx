import css from "./ImageCard.module.css";

interface ImageCardProps {
  alt: string;
  url: string;
  urlBig: string;
  onModalOpen: (urlBig: string, alt: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({
  alt,
  url,
  urlBig,
  onModalOpen,
}) => {
  return (
    <div>
      <img
        src={url}
        alt={alt}
        className={css.image}
        onClick={() => onModalOpen(urlBig, alt)}
      />
    </div>
  );
};

export default ImageCard;
