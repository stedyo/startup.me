import detectBrowserLanguage from 'detect-browser-language'
import Dashboard from "@material-ui/icons/Dashboard";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import BuildIcon from '@material-ui/icons/Build';
import HelpIcon from '@material-ui/icons/ThumbUpAlt';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import FaceIcon from '@material-ui/icons/Face';
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import Knowledge from 'views/Dashboard/Knowledge.js'
import Acceleration from 'views/Dashboard/Acceleration.js'
import Clients from 'views/Dashboard/Sales.js'
import Management from 'views/Dashboard/Management.js'
import Marketing from 'views/Dashboard/Marketing.js'
import MVP from 'views/Dashboard/MVP.js'
import BusinessPlan from 'views/Dashboard/BusinessPlan.js'
import Services from 'views/Dashboard/Services.js'





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
    component: Knowledge,
    layout: "/section"
  },
  {
    path: "/businessplan",
    name: (detectBrowserLanguage().toLowerCase() === "pt-br") ? "Plano de Negócio": "Business Plan",
    rtlName: "businessplan",
    icon: PeopleAltIcon,
    component: BusinessPlan,
    layout: "/section"
  },
  {
    path: "/marketing",
    name: "Digital Marketing",
    rtlName: "marketing",
    icon: BubbleChart,
    component: Marketing,
    layout: "/section"
  },
  {
    path: "/clients",
    name: (detectBrowserLanguage().toLowerCase() === "pt-br") ? "Gerencie Vendas": "Manage Sales",
    rtlName: "clients",
    icon: FaceIcon,
    component: Clients,
    layout: "/section"
  },
  {
    path: "/buildmvp",
    name: (detectBrowserLanguage().toLowerCase() === "pt-br") ? "Prototipe": "Build the MVP",
    rtlName: "mvp",
    icon: BuildIcon,
    component: MVP,
    layout: "/section"
  },
  {
    path: "/management",
    name: (detectBrowserLanguage().toLowerCase() === "pt-br") ? "Produtividade": "Management Tools",
    rtlName: "management",
    icon: AppsIcon,
    component: Management,
    layout: "/section"
  },
  {
    path: "/services",
    name: (detectBrowserLanguage().toLowerCase() === "pt-br") ? "Serviços": "Helpful Services",
    rtlName: "services",
    icon: HelpIcon,
    component: Services,
    layout: "/section"
  },

  {
    path: "/acceleration",
    name: (detectBrowserLanguage().toLowerCase() === "pt-br") ? "Aceleração": "Acceleration Programs",
    rtlName: "acceleration",
    icon: DirectionsRunIcon,
    component: Acceleration,
    layout: "/section"
  },




];

export default dashboardRoutes;
