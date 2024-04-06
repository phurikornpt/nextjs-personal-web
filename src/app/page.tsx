import { Box } from "@mui/material";
import NavUi from "./ui/nav/nav.ui";
import Profile from "./ui/profile/profile";

export default function Home() {
  return (
    <Box>
      <NavUi />
      <Profile />
    </Box>
  );
}
