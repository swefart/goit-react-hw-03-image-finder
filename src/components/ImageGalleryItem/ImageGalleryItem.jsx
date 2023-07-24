import { GalleryItem, GalleryImg } from "./ImageGalleryItem.styled";


const ImageGalleryItem = ({id, src, alt, largeImage, onClick }) => {
    return (
        <GalleryItem key={id} onClick={() => {onClick(largeImage)}}>
            <GalleryImg src={src} alt={alt}></GalleryImg>
        </GalleryItem>
        
    )
}



export default ImageGalleryItem