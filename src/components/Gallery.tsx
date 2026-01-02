import { useState, type FC } from 'react';
import Lightbox from './Lightbox';
import './Gallery.css';

const images = [
  "/gallery_image_1.png",
  "/gallery_image_2.png",
  "/illustration_hero_anime_girl.png"
];

const Gallery: FC = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    return (
        <section className="gallery-container" id="gallery">
            <h3>Gallery</h3>
            <div className="gallery-grid">
                <div className="gallery-item large" onClick={() => openLightbox(0)}>
                     <img src={images[0]} alt="Cityscape" />
                </div>
                <div className="gallery-item" onClick={() => openLightbox(1)}>
                     <img src={images[1]} alt="Rooftop" />
                </div>
                 <div className="gallery-item" onClick={() => openLightbox(2)}>
                     <img src={images[2]} alt="Daisy" style={{ objectPosition: 'top' }} />
                </div>
            </div>

            <Lightbox 
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
                images={images}
                initialIndex={currentIndex}
            />
        </section>
    );
};


export default Gallery;
