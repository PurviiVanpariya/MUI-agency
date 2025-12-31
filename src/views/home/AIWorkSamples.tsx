
"use client";

import Image from "next/image";
import { SyntheticEvent, useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


import AIWork1Png from "@/src/assets/images/aiWork-1.png";
import AIWork2Png from "@/src/assets/images/aiWork-2.png";
import AIWork3Png from "@/src/assets/images/aiWork-3.png";
import AIWork4Png from "@/src/assets/images/aiWork-4.png";

const aiWorkSamplesTabs = ["All", "Chatbot", "Images", "Content", "Other"] as const;

type AIWorkSamplesTab = (typeof aiWorkSamplesTabs)[number];

const tabData: Record<AIWorkSamplesTab, any[]> = {
  All: [AIWork1Png, AIWork3Png, AIWork2Png, AIWork4Png],
  Chatbot: [AIWork1Png, AIWork3Png, AIWork2Png],
  Images: [AIWork1Png, AIWork2Png, AIWork4Png],
  Content: [AIWork3Png, AIWork2Png],
  Other: [AIWork2Png, AIWork4Png],
};

const ImageGrid = ({ images }: { images: any[] }) => {
  return (
    <PhotoProvider className="relative">
      <div
        className="grid grid-cols-2 gap-12"
      >
        {images.map((image, index) => (
          <Box
            key={index}
            className={`relative h-[435px] overflow-hidden group cursor-pointer ${index % 2 === 1 ? "-mt-64" : ""
              }`}
          >
            <PhotoView src={image.src ?? image}>
              <Box className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
                <Image
                  src={image}
                  alt={`image ${index}`}
                  fill
                  className="object-cover"
                />
              </Box>
            </PhotoView>

            <Box className="absolute inset-0 bg-[#3089EDB3] opacity-0 group-hover:opacity-100 transition duration-500 z-10 w-[94%] h-[94%] m-auto pointer-events-none">
              <Box className="absolute inset-0 flex items-center justify-center">
                <Box className="relative w-18 h-18">
                  <span className="absolute top-1/2 left-0 w-full h-[3px] bg-white -translate-y-1/2"></span>
                  <span className="absolute left-1/2 top-0 h-full w-[3px] bg-white -translate-x-1/2"></span>
                </Box>
              </Box>
              <Box className="absolute bottom-6 left-6 text-white">
                <p className="text-xl font-medium">Creative</p>
                <p className="text-xs">35 WP Anniversary</p>
              </Box>
            </Box>
          </Box>
        ))}
      </div>
    </PhotoProvider>
  );
};

const AIWorkSamples = () => {
  const [activeTab, setActiveTab] = useState<AIWorkSamplesTab>("All");

  const handleTabChange = (_event: SyntheticEvent, newValue: AIWorkSamplesTab) => {
    setActiveTab(newValue);
  };

  return (
    <Box id="AgencySamples" className="max-w-[1250px] mx-auto px-4 py-40">
      <Box>
        <Typography className="text-primary text-[46px]! font-bold! uppercase oswald">
          Our Recent
        </Typography>
        <Typography className="text-secondary text-[46px]! font-bold! uppercase oswald">
          AI Based work
        </Typography>
      </Box>

      <Box className="py-12">
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          className="pb-6 px-4"
          sx={{
            ".MuiTabs-indicator": { display: "none" },
            ".MuiTabs-list": {
              display: "flex",
              alignItems: "center",
              gap: 4,
            },
          }}
        >
          {aiWorkSamplesTabs.map((tab) => (
            <Tab
              key={tab}
              value={tab}
              disableRipple
              className="p-0! z-1! capitalize! group min-w-0!"
              label={
                <Box
                  className={`border-b-2 pb-2 border-white hover:border-secondary uppercase w-fit px-1 text-xs font-normal ${activeTab === tab
                    ? "bg-white text-secondary border-b-secondary"
                    : "text-[#202020]"
                    }`}
                >
                  {tab}
                </Box>
              }
            />
          ))}
        </Tabs>

        <Box className="transition-all duration-500 ease-in-out">
          <ImageGrid images={tabData[activeTab]} />
        </Box>
      </Box>
    </Box>
  );
};

export default AIWorkSamples;
