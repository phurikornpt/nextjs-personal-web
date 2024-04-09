import { Box } from "@mui/material";
import NavUi from "./ui/nav/nav.ui";
import Profile from "./ui/profile/profile";
import About from "./ui/about/about";
import Skill from "./ui/skill/skill";
import WorkExperience from "./ui/work-experiaence/workEx";
import UniExperience from "./ui/university-experience/uniEx";
import Contract from "./ui/contract/contract";
import Footer from "./ui/footer/footer";

export default function Home() {
  return (
    <Box>
      <NavUi />
      <Profile />
      <About />
      <Skill />
      <WorkExperience />
      <UniExperience />
      <Contract />
      <Footer />
    </Box>
  );
}
