import { useWidthData } from '../../hooks';
import "./carousel.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export const Carousel = () => {
  const isMobile = useWidthData();

  const options = {
    loop: true,
    margin: 10,
    items: 2,
    autoplay: true,
  };

  return (
    <div className="carousel-wrap">
      {!isMobile ? (
        <OwlCarousel className="carousel owl-theme" {...options}>
          <div className="item">
            <div className="carousel-seat">
              <div className="carousel-item__image"></div>
              <div className="carousel-item__company">BTB1</div>
              <div className="carousel-item__description">
                <span>Lorem ipsum dolor</span>
                <span>2022</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="carousel-seat">
              <div className="carousel-item__image"></div>
              <div className="carousel-item__company">BTB1</div>
              <div className="carousel-item__description">
                <span>Lorem ipsum dolor</span>
                <span>2022</span>
              </div>
            </div>
          </div>
        </OwlCarousel>
      ) : (
        <div className="carousel owl-theme" {...options}>
          <div className="item">
            <div className="carousel-seat">
              <div className="carousel-item__image"></div>
              <div className="carousel-item__company">BTB1</div>
              <div className="carousel-item__description">
                <span>Lorem ipsum dolor</span>
                <span>2022</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="carousel-seat">
              <div className="carousel-item__image"></div>
              <div className="carousel-item__company">BTB1</div>
              <div className="carousel-item__description">
                <span>Lorem ipsum dolor</span>
                <span>2022</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
