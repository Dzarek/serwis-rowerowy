import {
  MdDirectionsBike,
  MdShoppingBasket,
  MdPerson,
  MdMail,
  MdHome,
} from "react-icons/md";
import { TiSpannerOutline, TiSpanner } from "react-icons/ti";
export const navlinks = [
  {
    name: "Strona Główna",
    link: "",
    icon: <MdHome />,
  },
  {
    name: "Serwis Rowerowy",
    link: "",
    icon: <TiSpanner />,
  },
  {
    name: "Serwis Narciarski",
    link: "",
    icon: <TiSpannerOutline />,
  },
  {
    name: "Akcesoria",
    link: "",
    icon: <MdShoppingBasket />,
  },
  {
    name: "O mnie",
    link: "",
    icon: <MdPerson />,
  },
  {
    name: "Treningi",
    link: "",
    icon: <MdDirectionsBike />,
  },
  {
    name: "Kontakt",
    link: "",
    icon: <MdMail />,
  },
];
