import { Box, Typography } from '@mui/material'

import Button from '../../components/button'

const HomeBanner = () => {
  return (
    <>
      <Box className="bg-[url('/banner.png')] w-full h-screen -mt-16 bg-cover bg-no-repeat">
        <Box className="pt-[170px] max-w-[1250px] mx-auto px-4">
          <Typography className='text-white! text-[40px]! font-bold! uppercase! tracking-wide! leading-tight!'>AI AGENCY <br />with ai chatbots.</Typography>
          <Typography className='text-white! text-base! max-w-[432px] tracking-wide! leading-relaxed! py-8 pb-[38px]'>Lorem ipsum is simply dummy text of the printing and typesetting and lorem Ipsum has been the industry’s standard dummy.</Typography>
          <Button className='uppercase w-[177px]'>Learn More</Button>
        </Box>
      </Box>
    </>
  )
}

export default HomeBanner