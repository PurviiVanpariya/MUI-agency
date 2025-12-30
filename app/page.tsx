import { Box } from "@mui/material";

import Header from "@/src/views/layout/Header";
import Home from "@/src/views/home";
import Footer from "@/src/views/layout/Footer";

export default function HomePage() {

  return (
    <Box className="relative">
      <Header />
      <Home />
      <Footer />
    </Box>
  );
}
