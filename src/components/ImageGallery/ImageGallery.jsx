import { ImgGallery } from "./ImageGallery.styled";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";


export const ImageGallery = ({ img, onClick}) => {
    return (
        <ImgGallery>
            {img.map(({ id, webformatURL, largeImageURL,tags }) => (
                <ImageGalleryItem
                    key={id}
                    src={webformatURL}
                    alt={tags}
                    largeImage={largeImageURL}
                    onClick={onClick}
                />
            ))}
        </ImgGallery>
    )

}