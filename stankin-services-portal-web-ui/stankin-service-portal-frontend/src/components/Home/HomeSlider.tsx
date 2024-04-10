import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const HomeSlider = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 300,
        autoplaySpeed: 6000,
        cssEase: "linear"
    };
    return (
        <div className="slider-container">
            <Slider {...settings} className="w-[500px] h-full mt-10">
                <div>
                    <img className="w-full h-full rounded-xl object-cover" src="/slider-img1.jpg" alt="img"/>
                </div>
                <div>
                    <img className="w-full h-full rounded-xl object-cover" src="/slider-img2.jpg" alt="img"/>
                </div>
                <div>
                    <img className="w-full h-full rounded-xl object-cover" src="/slider-img3.jpg" alt="img"/>
                </div>
            </Slider>
        </div>
    );
}

export default HomeSlider;