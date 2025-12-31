import { Box } from "@mui/material";

import Header from "@/src/views/home/Header";
import Home from "@/src/views/home";
import HireUs from "@/src/views/home/HireUs";

export default function HomePage() {

  return (
    <Box className="relative">
      <Header />
      <Home />
      <HireUs />
    </Box>
  );
}
