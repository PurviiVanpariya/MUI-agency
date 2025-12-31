'use client'
import Image from 'next/image';

import { Box, Typography } from '@mui/material'
import { FaQuoteRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules';
import 'swiper/css'

const clientReviews = [
    {
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae egestas mi, vel dapibus diam. Mauris malesuada, nisl non rutrum commodo, sem magna laoreet tellus, eu euismod dolor enim et mi. In at tempor purus.",
        name: "Sara Williams",
        image: "/avatar.png",
    },
    {
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur venenatis, felis ut consequat dignissim, nisi augue convallis justo, vel auctor nunc neque at lorem.",
        name: "John Doe",
        image: "/avatar2.png",
    },
];

const ClientReviews = () => {
    return (
        <Box id="clientReviews" className='bg-[url("/clientReviewsBg.png")] bg-cover bg-no-repeat h-screen grid place-items-center'>
            <Box className='max-w-[1250px] mx-auto px-4'>
                <Box className='grid grid-cols-2 items-center'>
                    <Box>
                        <Typography className='uppercase! text-white! oswald text-[40px]! font-semibold! max-w-[200px]!'>satisfied customers</Typography>
                        <Typography className='text-white! text-base! max-w-[400px]! pt-10'>Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry’s standard dummy.</Typography>
                    </Box>
                    <Box className='pt-10'>
                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            className="clientReviews-swiper"
                        >

                            {clientReviews.map((clientReview, index) => (
                                <SwiperSlide key={index}>
                                    <Box className='p-8 rounded-lg shadow-lg'>
                                        <FaQuoteRight className='text-xl mx-auto text-white mb-6 italic' />
                                        <Typography className='text-center text-[1.2rem] italic text-white'>
                                            "{clientReview.quote}"
                                        </Typography>
                                        <Box className='flex flex-col justify-center items-center mt-6'>
                                            <Image
                                                src={clientReview.image}
                                                alt={clientReview.name}
                                                width={64}
                                                height={64}
                                                className='size-[100px] rounded-full mr-4'
                                            />
                                            <Typography className='text-2xl! text-white mt-3!'>
                                                {clientReview.name}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ClientReviews
