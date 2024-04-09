import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../CSS/cusomSwiper.css';
import { Keyboard, Scrollbar, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { swiperImgs } from '../Constants';

export default function App() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                centeredSlides={false}
                grabCursor={true}
                keyboard={{
                    enabled: true,
                }}
                breakpoints={{
                    500: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                    1280: {
                        slidesPerView: 5,

                    }
                }}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                scrollbar={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    swiperImgs.map(img => (
                        <SwiperSlide key={img}>
                            <img src={`/assets/imgs/swiperImgs/${img}`} alt={img} />
                        </SwiperSlide>
                    ))
                }
            </Swiper >
        </>
    );
}
