import detectBrowserLanguage from 'detect-browser-language'
import Dashboard from "@material-ui/icons/Dashboard";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import BuildIcon from '@material-ui/icons/Build';
import HelpIcon from '@material-ui/icons/Help';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import FaceIcon from '@material-ui/icons/Face';
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";






const dashboardRoutes = [
  {
    path: "/roadmap",
    name: "Roadmap",
    rtlName: "roadmap",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/section"
  },
  {
    path: "/education",
    name: (detectBrowserLanguage().toLowerCase() === "pt-br") ? "Conhecimento": "Educate Yourself",
    rtlName: "education",
    icon: LibraryBooks,
    component: UserProfile,
    layout: "/section"
  },
  {
    path: "/partnership",
    name: (detectBrowserLanguage().toLowerCase() === "pt-br") ? "Encontre Parceiros": "Co-founders & Mentors",
    rtlName: "partnership",
    icon: PeopleAltIcon,
    component: TableList,
    layout: "/section"
  },
 
  {
    path: "/buildmvp",
    name: (detectBrowserLanguage().toLowerCase() === "pt-br") ? "Prototipe": "Build the MVP",
    rtlName: "mvp",
    icon: BuildIcon,
    component: Typography,
    layout: "/section"
  },
  {
    path: "/management",
    name: (detectBrowserLanguage().toLowerCase() === "pt-br") ? "Produtividade": "Management Tools",
    rtlName: "management",
    icon: AppsIcon,
    component: Typography,
    layout: "/section"
  },
  {
    path: "/services",
    name: (detectBrowserLanguage().toLowerCase() === "pt-br") ? "Serviços": "Helpful Services",
    rtlName: "services",
    icon: HelpIcon,
    component: Maps,
    layout: "/section"
  },

  {
    path: "/marketing",
    name: "Marketing",
    rtlName: "marketing",
    icon: BubbleChart,
    component: Icons,
    layout: "/section"
  },
  {
    path: "/clients",
    name: (detectBrowserLanguage().toLowerCase() === "pt-br") ? "Gerencie Clientes": "Manage Clients",
    rtlName: "clients",
    icon: FaceIcon,
    component: Maps,
    layout: "/section"
  },
  {
    path: "/accelerationprogram",
    name: (detectBrowserLanguage().toLowerCase() === "pt-br") ? "Aceleração": "Acceleration Programs",
    rtlName: "acceleratprogram",
    icon: DirectionsRunIcon,
    component: Maps,
    layout: "/section"
  },




];

export default dashboardRoutes;
