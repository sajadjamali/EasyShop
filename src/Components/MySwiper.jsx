import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../CSS/swiper.css'
import { Zoom, Navigation, Pagination, Autoplay } from 'swiper/modules';

const MySwiper = () => {
    return (
        <Swiper
            loop={true}
            zoom={true}
            navigation={true}
            pagination={{
                clickable: true
            }}
            slidesPerView={5}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            style={{ height: '500px' }}
            modules={[Zoom, Navigation, Pagination, Autoplay]}
            className="mySwiper relative bottom-[85px]"
        >
            <SwiperSlide>
                <div className="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-zoom-container">
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default MySwiper;