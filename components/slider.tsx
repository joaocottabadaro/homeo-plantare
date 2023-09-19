"use client"

import { cn } from '@/lib/utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import React from 'react';



interface SlideData {
    imageUrl: string;
    component: React.ReactNode;

}



const Slider = ({ slidesData }: { slidesData: SlideData[] }) => {
    return (
        <Swiper
            slidesPerView={1}
            navigation={true} // Ative a navegação
            pagination={{ clickable: true }} // Configuração da paginação
            modules={[Navigation]}
            className='h-lg'
        >
            {slidesData.map((slide: SlideData, index: React.Key | null | undefined) => (
                <SwiperSlide key={index}
                    className="bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${slide.imageUrl})` }}
                >
                    {slide.component}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};


export default Slider;
