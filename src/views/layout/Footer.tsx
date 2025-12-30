import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box className="py-32 bg-[url('/footer.png')] bg-cover bg-center bg-no-repeat w-full" component="footer">
      <Box className='max-w-[1250px] mx-auto px-4'>
        <Box className="grid md:grid-cols-2">
          <Box>
            <Typography className='text-white!'>Hire Us!</Typography>
            <Typography className='text-white!'>Hire Us!</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
