import { Box } from "@mui/material";
import NavUi from "./ui/nav/nav.ui";
import Profile from "./ui/profile/profile";
import About from "./ui/about/about";

export default function Home() {
  return (
    <Box>
      <NavUi />
      <Profile />
      <About />
    </Box>
  );
}
