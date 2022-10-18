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

export const bikePrices = [
  {
    id: 1,
    title: "Napęd",
    image: "/images/bikeService/bike/naped.png",
    details: [
      {
        info: "wymiana mechanizmu korbowego/suportu",
        price: "30",
      },
      {
        info: "wymiana łańcucha, kasety",
        price: "20",
      },
      {
        info: "wymiana kompletnego napędu",
        price: "45",
      },
      {
        info: "mycie oraz smarowanie napędu",
        price: "40",
      },
      {
        info: "woskowanie łańcucha",
        price: "60",
      },
    ],
  },
  {
    id: 2,
    title: "Koła",
    image: "/images/bikeService/bike/kola.png",
    details: [
      {
        info: "centrowanie",
        price: "15",
      },
      {
        info: "zaplatanie",
        price: "30",
      },
      {
        info: "serwis piasty",
        price: "30",
      },
      {
        info: "wymiana dętki/opony",
        price: "10",
      },
      {
        info: "montaż opon tubeless",
        price: "30",
      },
    ],
  },
  {
    id: 3,
    title: "Amortyzacja",
    image: "/images/bikeService/bike/amortyzatory.png",
    details: [
      {
        info: "przegląd podstawowy amortyzatora sprężynowego (czyszczenie, wymiana smaru)",
        price: "100",
      },
      {
        info: "przegląd amortyzatora olejowego (czyszczenie, wymiana smarów oraz oleju)",
        price: "150",
      },
    ],
  },
  {
    id: 4,
    title: "Hamulce",
    image: "/images/bikeService/bike/hamulce.png",
    details: [
      {
        info: "regulacja hamulca",
        price: "20",
      },
      {
        info: "wymiana okładzin (V-brake)",
        price: "10",
      },
      {
        info: "wymiana okładzin (disc)",
        price: "20",
      },
      {
        info: "wymiana linki + pancerza",
        price: "20",
      },
      {
        info: "odpowietrzanie hamulca",
        price: "30",
      },
    ],
  },
  {
    id: 5,
    title: "Układ sterowania",
    image: "/images/bikeService/bike/sterowanie.png",
    details: [
      {
        info: "wymiana sterów kierownicy",
        price: "40",
      },
      {
        info: "montaż elementów kokpitu",
        price: "20",
      },
      {
        info: "kasowanie luzów, regulacja sterów",
        price: "20",
      },
    ],
  },
  {
    id: 6,
    title: "Inne",
    image: "/images/bikeService/bike/caly.png",
    details: [
      {
        info: "montaż akcesoriów dodatkowych",
        price: "5 - 50",
      },
      {
        info: "mycie roweru",
        price: "60",
      },
      {
        info: "montaż roweru od podstaw",
        price: "100 - 400",
      },
      {
        info: "montaż roweru złożonego do wysyłki",
        price: "100",
      },
    ],
  },
];
