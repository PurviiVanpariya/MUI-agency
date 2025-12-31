import { Box, Typography } from '@mui/material'
import { FaQuoteLeft } from 'react-icons/fa'

const Agency = () => {
    return (
        <>
            <Box className="bg-[url('/agency.png')] w-full h-[630px] bg-cover bg-center">
                <Box className="grid grid-cols-2 max-w-[1250px] mx-auto px-4 py-40">
                    <Box></Box>
                    <Box className="px-14">
                        <FaQuoteLeft className='text-white' />
                        <Typography className='text-4xl! text-white pt-5 pb-[63px] uppercase leading-11'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae egestas mi, vel dapibus diam.</Typography>
                        <Typography className='text-2xl! mb-2! text-white font-semibold!'>TANIA PARIS</Typography>
                        <Typography className='text-lg! italic text-white font-extralight!'>The Next AI Agency</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Agency
