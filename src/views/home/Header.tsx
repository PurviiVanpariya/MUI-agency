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

const navSections: { id: string; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "AgencySamples", label: "AI Work Samples" },
  { id: "clientReviews", label: "Client Reviews" },
  { id: "whyAIChatbots", label: "Why AI Chatbots" },
  { id: "hireUs", label: "Hire Us" },
];

const Header = ({ className }: HeaderProps) => {

  const [activeMenu, setActiveMenu] = useState(navSections[0].label);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let currentSection = navSections[0].label;
      for (const section of navSections) {
        const element = document.getElementById(section.id);
        if (!element) continue;
        const top = element.getBoundingClientRect().top;
        if (top - 80 <= 0) {
          currentSection = section.label;
          continue;
        }
        break;
      }
      setActiveMenu((prev) => (prev === currentSection ? prev : currentSection));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <Box className={`text-white ${className} sticky top-0 left-0 z-20 ${scrolled && "bg-[#0A0D2C]"}`}>
      <Box className="max-w-[1250px] mx-auto h-16 px-4 flex items-center justify-between">
        <Image src={LogoPng} alt="Logo" className="w-12 h-8 cursor-pointer" />
        <Box className="flex gap-6">
          {navSections.map((section) => (
            <a key={section.label}
              className={`select-none hover:text-secondary font-medium transition duration-300 cursor-pointer ${activeMenu === section.label ? "text-secondary" : ""}`}
              onClick={() => {
                scrollToSection(section.id);
                setActiveMenu(section.label);
              }}
            >
              {section.label}
            </a>
          ))}
        </Box>
        <Box className="flex items-center gap-4">
          <Box className="hover:bg-[#4267B2] transition duration-300 rounded-full p-1.5 cursor-pointer">
            <ImFacebook className="size-4.5" />
          </Box>
          <Box className="hover:bg-[#1DA1F2] transition duration-300 rounded-full p-1.5 cursor-pointer">
            <FaXTwitter className="size-4.5" />
          </Box>
          <Box className="hover:bg-[#0077B5] transition duration-300 rounded-full p-1.5 cursor-pointer">
            <ImLinkedin2 className="size-4.5" />
          </Box>
          <Box className="hover:bg-[#4267B2] transition duration-300 rounded-full p-1.5 cursor-pointer" sx={{ ":hover": { background: "linear-gradient(to bottom, #aa2fb5 0%, #f1762c 93%) !important" } }}>
            <FaInstagram className="size-4.5" />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Header
