export interface ModalPhoto {
  url: string;
  alt: string;
}
export interface Photo {
  alt_description: string;
  id: string;
  urls: {
    regular: string;
    small: string;
  };
}
