import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PhotoSlick() {
  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <img src={`/assets/abstract0${i + 1}.png`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Slide {...settings}>
      <div>
        <img src={"/assets" + "/abstract01.png"} />
      </div>
      <div>
        <img src={"/assets" + "/abstract02.png"} />
      </div>
      <div>
        <img src={"/assets" + "/abstract03.png"} />
      </div>
      <div>
        <img src={"/assets" + "/abstract04.png"} />
      </div>
    </Slide>
  );
}

const Slide = styled(Slider)`
  position: relative;
  height: 542px;
  background-color: #111111;

  img {
    width: 428px;
  }

  .slick-slide {
    display: inline-block;
  }

  .slick-dots.slick-thumb {
    height: 100px;
    position: absolute;
    bottom: 0%;
    left: 50%;
    list-style: none;
    transform: translate(-50%);

    li {
      width: 90px;
    }
  }
`;
