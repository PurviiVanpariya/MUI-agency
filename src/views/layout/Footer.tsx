import { Box, List, ListItem, TextField, Typography } from '@mui/material'
import { IoMdSend } from 'react-icons/io'
import { IoCallOutline } from 'react-icons/io5'
import { MdOutlineLocationOn } from 'react-icons/md'

import Button from '@/src/components/button'
import Copyright from '../home/Copyright'

const fields = [
  {
    placeholder: 'Name',
    type: 'text',
  },
  {
    placeholder: 'Contact No',
    type: 'text',
  },
  {
    placeholder: 'Email Address',
    type: 'email',
  },
  {
    placeholder: 'Type Your Message Here',
    type: 'text',
    multiline: true,
    rows: 4,
  },
]

const Footer = () => {
  return (
    <>
      <Box className="bg-[url('/footer.png')] bg-cover bg-center bg-no-repeat w-full roboto!" component="footer">
        <Box className='max-w-[1250px] mx-auto px-4'>
          <Box className="grid md:grid-cols-2 py-30">
            <Box>
              <Typography className='text-white! text-5xl! font-medium! uppercase! oswald'>Hire Us!</Typography>
              <Typography className='text-white! text-5xl! font-medium! uppercase! oswald mt-2! mb-[50px]!'>as as your AI partner</Typography>
              <List className='space-y-6'>
                <ListItem>
                  <Typography className='text-white! flex items-center gap-2'><IoMdSend className='text-2xl' />email@website.com</Typography>
                </ListItem>
                <ListItem>
                  <Typography className='text-white! flex items-center gap-2'><IoCallOutline className='text-2xl' />+1 631 1234 5678</Typography>
                </ListItem>
                <ListItem>
                  <Typography className='text-white! flex items-center gap-2'><MdOutlineLocationOn className='text-2xl' />123 Park Avenue, New York</Typography>
                </ListItem>
              </List>
            </Box>
            <Box>
              <Box className='max-w-[500px] ms-auto'>
                {fields.map((field, index) => (
                  <TextField
                    key={index}
                    variant="standard"
                    placeholder={field.placeholder}
                    type={field.type}
                    fullWidth
                    multiline={field.multiline || false}
                    rows={field.rows || 1}
                    sx={{
                      mt: index === 0 ? 0 : 4,

                      '& .MuiInputBase-input': {
                        color: 'white',
                        '::placeholder': {
                          color: 'white',
                          opacity: 1,
                        },
                        marginBottom: '15px',
                      },

                      '& .MuiInput-underline:before': {
                        borderBottomColor: '#fff3',
                      },

                      '& .MuiInput-underline:hover:before': {
                        borderBottomColor: '#fff3',
                      },

                      '& .MuiInput-underline:after': {
                        borderBottomColor: '#3089ed',
                      },
                    }}
                  />
                ))}
                <Button className='uppercase w-full mt-6! text-base!'>submit information</Button>
              </Box>
            </Box>
          </Box>
          <Copyright />
        </Box>
      </Box>
    </>
  )
}

export default Footer
