import { Box, Typography } from '@mui/material'
import { FaGooglePlusG, FaInstagram, FaPinterestP } from 'react-icons/fa'
import { ImFacebook, ImLinkedin2 } from 'react-icons/im'
import { FaXTwitter } from 'react-icons/fa6'

const Copyright = () => {
    return (
        <Box className='pt-28 pb-16'>
            <Box className='flex items-center justify-between'>
                <Box className="flex items-center gap-4">
                    <Box className="hover:bg-[#3089ED] transition duration-300 rounded-full p-3 cursor-pointer">
                        <ImFacebook className="size-4.5 text-white" />
                    </Box>
                    <Box className="hover:bg-[#3089ED] transition duration-300 rounded-full p-3 cursor-pointer">
                        <FaXTwitter className="size-4.5 text-white" />
                    </Box>
                    <Box className="hover:bg-[#3089ED] transition duration-300 rounded-full p-3 cursor-pointer">
                        <FaGooglePlusG className="size-6 text-white" />
                    </Box>
                    <Box className="hover:bg-[#3089ED] transition duration-300 rounded-full p-3 cursor-pointer">
                        <ImLinkedin2 className="size-4.5 text-white" />
                    </Box>
                    <Box className="hover:bg-[#3089ED] transition duration-300 rounded-full p-3 cursor-pointer">
                        <FaInstagram className="size-4.5 text-white" />
                    </Box>
                    <Box className="hover:bg-[#3089ED] transition duration-300 rounded-full p-3 cursor-pointer">
                        <FaPinterestP className="size-4.5 text-white" />
                    </Box>
                </Box>
                <Box>
                    <Typography className='text-white'>© 2025 MegaOne. Made With Love By Themesindustry</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Copyright
