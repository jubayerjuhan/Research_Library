import BiotechIcon from "@mui/icons-material/Biotech";
import ScienceIcon from "@mui/icons-material/Science";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

export const sidebarItems = [
  { name: "All Researches", path: "/all-research", icon: BiotechIcon },
  { name: "My Researches", path: "/my-research", icon: ScienceIcon },
  { name: "Profile", path: "/profile", icon: PersonIcon },
  { name: "Logout", onclick: () => {}, icon: LogoutIcon },
];
