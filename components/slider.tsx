"use client"

import { cn } from '@/lib/utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import React from 'react';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';



interface SlideData {
    imageUrl: string;
    component: React.ReactNode;

}



const Slider = ({ slidesData }: { slidesData: SlideData[] }) => {

    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            console.log("className", className, index)
            return '<span class="' + className + '">' + '</span>';
        },
    };


    return (
        <>


            <AspectRatio ratio={3 / 1}>
                <Swiper
                    loop={true}
                    slidesPerView={1}
                    // Ative a navegação
                    pagination={pagination} // Configuração da paginação
                    // modules={[Autoplay, Navigation, Pagination]}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    className='w-full h-full'
                >
                    {slidesData.map((slide: SlideData, index: React.Key | null | undefined) => (
                        <>

                            <SwiperSlide key={index}
                                className="bg-cover bg-center relative"
                                style={{ backgroundImage: `url(${slide.imageUrl})` }}
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
