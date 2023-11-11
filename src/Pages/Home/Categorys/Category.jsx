import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <>
            <section className='mb-12'>
                <SectionTitle subheading={"From 11:00am to 10:00pm"}
                    heading ={"ORDER ONLINE"}>
                </SectionTitle>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={slide1} alt="" className='relative' />
                        <p className='text-3xl font-medium text-white -mt-16 absolute ml-24'>SALADS</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="" className='relative' />
                        <p className='text-3xl font-medium text-white -mt-16 absolute ml-24'>PIZZAS</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="" className='relative' />
                        <p className='text-3xl font-medium text-white -mt-16 absolute ml-24'>SOUPS</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="" className='relative' />
                        <p className='text-3xl font-medium text-white -mt-16 absolute ml-24'>DESSERTS</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide1} alt="" className='relative' />
                        <p className='text-3xl font-medium text-white -mt-16 absolute ml-24'>SALADS</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide2} alt="" className='relative' />
                        <p className='text-3xl font-medium text-white -mt-16 absolute ml-24'>PIZZAS</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide3} alt="" className='relative' />
                        <p className='text-3xl font-medium text-white -mt-16 absolute ml-24'>SOUPS</p>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slide4} alt="" className='relative' />
                        <p className='text-3xl font-medium text-white -mt-16 absolute ml-24'>DESSERTS</p>
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    );
};

export default Category;