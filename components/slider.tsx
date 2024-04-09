"use client"

import { cn } from '@/lib/utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import React from 'react';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import { useSectionInView } from '@/lib/hooks';
import { SlideData } from "./../lib/types"




const Slider = ({ slidesData }: { slidesData: SlideData[] }) => {
    const { ref } = useSectionInView("Sobre nós")

    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
          
            return '<span class="' + className + '">' + '</span>';
        },
    };


    return (
        <>


            <AspectRatio ratio={3 / 1}>
                <Swiper
                    ref={ref}
                    loop={true}
                    slidesPerView={1}
                    pagination={pagination}
                    modules={[Autoplay, Navigation, Pagination]}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    className='w-full h-[500px] md:h-full'
                >
                    {slidesData.map((slide: SlideData, index: React.Key | null | undefined) => (
                        <>

                            <SwiperSlide key={index}


                            >
                                {slide.component}
                            </SwiperSlide>

                        </>
                    ))}
                </Swiper>
            </AspectRatio>
            <div className='swiper-button-next'></div>
            <div className='swiper-button-prev'></div>


        </>
    );
};


export default Slider;
