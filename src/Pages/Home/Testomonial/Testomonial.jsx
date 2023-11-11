import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { RiDoubleQuotesL } from 'react-icons/ri';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'


const Testomonial = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <section>
                <SectionTitle subheading="What Our Clients Say" heading="TESTIMONIALS">

                </SectionTitle>
                <div>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                        <div>
                            {
                                reviews.map(review => <SwiperSlide key={review._id}>
                                    <div className='mx-32 flex flex-col justify-center items-center mt-6 mb-12'>
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={review.rating}
                                            readOnly
                                        />
                                        <RiDoubleQuotesL className='text-7xl my-4'></RiDoubleQuotesL>
                                        <p>{review.details}</p>
                                        <h3 className='text-2xl text-orange-400'>{review.name}</h3>
                                    </div>
                                </SwiperSlide>)
                            }
                        </div>
                    </Swiper>
                </div>
            </section>

        </div>
    );
};

export default Testomonial;