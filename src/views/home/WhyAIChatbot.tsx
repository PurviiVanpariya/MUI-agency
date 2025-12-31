import Image from 'next/image'

import { Box, Typography } from '@mui/material'

import Button from '@/src/components/button'
import whyAIChatbotPng from '@/src/assets/images/whyAIChatbot.png'

const WhyAIChatbot = () => {
    return (
        <Box id="whyAIChatbots" className='py-60'>
            <Box className='max-w-[1250px] mx-auto px-4'>
                <Box className='grid grid-cols-2 gap-4'>
                    <Box>
                        <Image src={whyAIChatbotPng} alt="whyAIChatbot" width={540} height={462} />
                    </Box>
                    <Box className='space-y-5'>
                        <Box className='flex items-center gap-2'>
                            <Typography className='text-secondary text-[46px]! font-bold! uppercase oswald'>AI Super</Typography>
                            <Typography className='text-primary text-[46px]! font-bold! uppercase oswald'>Chatbots</Typography>
                        </Box>
                        <Typography className='mb-5!'>Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry. Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry.</Typography>
                        <Typography className='mb-[50px]!'>Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry.</Typography>
                        <Button variant='secondary' className='uppercase text-lg!'>learn more</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default WhyAIChatbot
