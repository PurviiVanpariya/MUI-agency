"use client";

import Image from "next/image"
import { useEffect, useState } from "react"

import { Box } from "@mui/material"
import { ImFacebook, ImLinkedin2 } from "react-icons/im"
import { FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

import LogoPng from "@/src/assets/images/logo.png"

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box className={`text-white ${className} sticky top-0 left-0 ${scrolled && "bg-[#300756]"}`}>
      <Box className="max-w-[1250px] mx-auto h-16 px-4 flex items-center justify-between">
        <Image src={LogoPng} alt="Logo" className="w-12 h-8 cursor-pointer" />
        <Box className="flex gap-6">
          <Box className="hover:text-secondary transition duration-300 cursor-pointer">Home</Box>
          <Box className="hover:text-secondary transition duration-300 cursor-pointer">About</Box>
          <Box className="hover:text-secondary transition duration-300 cursor-pointer">AI Work Samples</Box>
          <Box className="hover:text-secondary transition duration-300 cursor-pointer"> Reviews</Box>
          <Box className="hover:text-secondary transition duration-300 cursor-pointer">Why AI Chatbots</Box>
          <Box className="hover:text-secondary transition duration-300 cursor-pointer">Hire Us</Box>
        </Box>
        <Box className="flex items-center gap-4">
          <Box className="hover:bg-[#4267B2] rounded-full p-1.5 cursor-pointer">
            <ImFacebook className="size-4.5" />
          </Box>
          <Box className="hover:bg-[#1DA1F2] rounded-full p-1.5 cursor-pointer">
            <FaXTwitter className="size-4.5" />
          </Box>
          <Box className="hover:bg-[#0077B5] rounded-full p-1.5 cursor-pointer">
            <ImLinkedin2 className="size-4.5" />
          </Box>
          <Box className="hover:bg-[#4267B2] rounded-full p-1.5 cursor-pointer" sx={{ ":hover": { background: "linear-gradient(to bottom, #aa2fb5 0%, #f1762c 93%) !important" } }}>
            <FaInstagram className="size-4.5" />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Header