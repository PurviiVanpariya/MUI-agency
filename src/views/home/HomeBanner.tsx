"use client";

import { Box, Typography } from '@mui/material'

import Button from '../../components/button'

const HomeBanner = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <>
      <Box id="home" className="bg-[url('/homeBanner.png')] w-full h-screen -mt-16 bg-cover bg-no-repeat">
        <Box className="pt-[170px] max-w-[1250px] mx-auto px-4">
          <Typography className='text-white! text-[40px]! font-bold! uppercase! tracking-wide! leading-tight!'>AI AGENCY <br />with ai chatbots.</Typography>
          <Typography className='text-white! text-base! max-w-[432px] tracking-wide! leading-relaxed! py-8 pb-[38px]'>Lorem ipsum is simply dummy text of the printing and typesetting and lorem Ipsum has been the industry’s standard dummy.</Typography>
          <Button className='uppercase w-[177px]' onClick={() => scrollToSection("about")}>Learn More</Button>
        </Box>
      </Box>
    </>
  )
}

export default HomeBanner
