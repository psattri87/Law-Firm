import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import clients from "../../data/clients.json";
import Card from "../card/Card";
import Avatar from "../avatar/Avatar";
import styles from "./MyCarousel.module.css";
import SliderButton from "../sliderButton/SliderButton";

const importAll = (r) => {
  return r.keys().map(r);
};

const images = importAll(
  require.context("../../assets/avatar", false, /\.(png|jpe?g|svg)$/)
);

clients.forEach((client, index) => {
  client.avatar = images[index];
});

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className={styles["carousel-button-group"]}>
      <SliderButton
        className={currentSlide === 0 ? "disable" : ""}
        onClick={() => previous()}
      />
      <SliderButton direction={"right"} onClick={() => next()} />
    </div>
  );
};

function MyCarousel() {
  return (
    <Carousel
      partialVisible={false}
      responsive={responsive}
      arrows={false}
      renderButtonGroupOutside={true}
      customButtonGroup={<ButtonGroup />}
      containerClass={styles.containerClass}
    >
      {clients.map((data, index) => {
        return (
          <Card className={styles.card} key={index}>
            <Avatar className={styles.avatar}>
              <img src={data.avatar} alt="avatar" />
            </Avatar>
            <h2>{data.name}</h2>
            <h4>{data.position}</h4>
            <p>{data.review}</p>
          </Card>
        );
      })}
    </Carousel>
  );
}

export default MyCarousel;
