import Slide from './Slide';
import chevron from '../assets/vector.svg'
import { useState } from 'react';

function Carousel(props) {
    const pictures = props.pictures;
    const showControls = pictures.length > 1 ? true : false;    // si on a 0 ou 1 image: on n'affiche pas les contrôles
    const [activeSlide, setActiveSlide] = useState(0);  // state pour tracker le slide actif

    function previousSlide() {
        activeSlide === 0 ? setActiveSlide(pictures.length -1 ) : setActiveSlide(activeSlide -1);
    }

    function nextSlide() {
        activeSlide === pictures.length -1 ? setActiveSlide(0) : setActiveSlide(activeSlide +1);
    }

    return(
        <div className='carousel'>
            <div className={showControls ? 'carouselControls show' : 'carouselControls'}>
                <button onClick={previousSlide}>
                    <img alt="<" src={chevron} className="carouselPrevious" />
                </button>
                <button onClick={nextSlide}>
                    <img alt=">" src={chevron} className="carouselNext" />
                </button>
                <div className="carouselBulletpoints">
                    {activeSlide +1} / {pictures.length }
                </div>
            </div>
            {
                pictures.map((picture, id) => {
                    return (
                        <Slide key={id} picture={picture} idkey={id} active={activeSlide} />
                    )
                })
            }
        </div>
    );
}

export default Carousel;