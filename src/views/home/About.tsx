import Image from 'next/image'

import { Box, Typography } from '@mui/material'

import AboutPng from "@/src/assets/images/about.png"

const aboutData = [
  {
    id: 1,
    count: "01.",
    title: 'AI Based Images',
    description: 'Lorem ipsum dolor amet, consectetur adipiscing elit augue diam, accumsan ipsum dolor sit amet, consectetur adipiscing.',
  },
  {
  },
  {
    id: 3,
    count: "02.",
    title: 'AI Text Generator',
    description: 'Lorem ipsum dolor amet, consectetur adipiscing elit augue diam, accumsan ipsum dolor sit amet, consectetur adipiscing.',
  },

  {
    id: 4,
    count: "03.",
    title: 'AI Personal Assistant',
    description: 'Lorem ipsum dolor amet, consectetur adipiscing elit augue diam, accumsan ipsum dolor sit amet, consectetur adipiscing.',
  },
  {
  },
  {
    id: 6,
    count: "04.",
    title: 'AI CHATbot',
    description: 'Lorem ipsum dolor amet, consectetur adipiscing elit augue diam, accumsan ipsum dolor sit amet, consectetur adipiscing.',
  }
];

const About = () => {
  return (
    <Box id="about" className="bg-[#0a0d2c] py-40">
      <Box className="max-w-[1250px] mx-auto px-4 relative">
        <Image
          src={AboutPng}
          alt="About"
          className='w-[485px] h-[485px] mx-auto absolute left-1/2 top-1/2 -translate-1/2'
        />
        <Box className="grid grid-cols-3 gap-y-[250px]">
          {aboutData.map((item, index) => (
            <Box key={index} className="py-[25px] px-8 max-w-[350px] group cursor-pointer">
              <Typography className='mb-2! text-white text-[49px]! text-center group-hover:transform group-hover:rotate-y-360 group-hover:transition-transform duration-1300'>
                {item.count}
              </Typography>
              <Typography className='mb-4! text-white text-[30px]! text-center uppercase group-hover:text-secondary transition duration-1000 leading-10!'>
                {item.title}
              </Typography>
              <Typography className='text-white text-[15px]! text-center'>
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default About;
