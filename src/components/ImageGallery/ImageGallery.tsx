import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { Photo } from "../../types";

interface ImageGalleryProps {
  photos: Photo[];
  onModalOpen: (imageUrl: string, imageAlt: string) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ photos, onModalOpen }) => {
  return (
    <ul className={css.gallery}>
      {photos.map((photo: Photo) => {
        return (
          <li className={css.item} key={photo.id}>
            <ImageCard
              alt={photo.alt_description}
              url={photo.urls?.small}
              urlBig={photo.urls?.regular}
              onModalOpen={onModalOpen}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
