import {
  MdDirectionsBike,
  // MdShoppingBasket,
  MdPerson,
  MdMail,
  MdHome,
} from "react-icons/md";
import { TiSpannerOutline, TiSpanner } from "react-icons/ti";
import { GiNewspaper } from "react-icons/gi";
export const navlinks = [
  {
    name: "Strona Główna",
    link: "home",
    icon: <MdHome />,
  },
  {
    name: "Serwis Rowerowy",
    link: "bikeService",
    icon: <TiSpanner />,
  },
  {
    name: "Serwis Narciarski",
    link: "skiService",
    icon: <TiSpannerOutline />,
  },
  // {
  //   name: "Akcesoria",
  //   link: "accesories",
  //   icon: <MdShoppingBasket />,
  // },
  {
    name: "O mnie",
    link: "aboutMe",
    icon: <MdPerson />,
  },
  {
    name: "Treningi",
    link: "workout",
    icon: <MdDirectionsBike />,
  },
  {
    name: "Aktualności",
    link: "news",
    icon: <GiNewspaper />,
  },
  {
    name: "Kontakt",
    link: "contact",
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
        price: "40",
      },
      {
        info: "wymiana łańcucha, kasety",
        price: "25",
      },
      {
        info: "wymiana kompletnego napędu",
        price: "60",
      },
      {
        info: "mycie oraz smarowanie napędu",
        price: "60",
      },
      {
        info: "woskowanie łańcucha",
        price: "50",
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
        price: "20-50",
      },
      {
        info: "zaplatanie",
        price: "80",
      },
      {
        info: "serwis piasty",
        price: "40",
      },
      {
        info: "wymiana dętki/opony",
        price: "15",
      },
      {
        info: "montaż opon tubeless",
        price: "35",
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
        price: "120",
      },
      {
        info: "przegląd amortyzatora olejowego (czyszczenie, wymiana smarów oraz oleju)",
        price: "200",
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
        price: "25",
      },
      {
        info: "wymiana okładzin (V-brake)",
        price: "10",
      },
      {
        info: "wymiana okładzin (disc)",
        price: "30",
      },
      {
        info: "wymiana linki + pancerza",
        price: "20",
      },
      {
        info: "odpowietrzanie hamulca",
        price: "40",
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
        price: "50",
      },
      {
        info: "montaż elementów kokpitu",
        price: "30",
      },
      {
        info: "kasowanie luzów, regulacja sterów",
        price: "25",
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
        price: "10 - 100",
      },
      {
        info: "mycie roweru",
        price: "70",
      },
      {
        info: "montaż roweru od podstaw",
        price: "150 - 700",
      },
      {
        info: "montaż roweru złożonego do wysyłki",
        price: "100",
      },
    ],
  },
];

export const blogArticles = [
  {
    id: 1,
    date: "10.11.2022",
    title: "prezent dla roweru",
    image: "/images/blog/prezentRower.jpg",
    text: [
      "Okres jesienno zimowy to najlepszy czas na prezenty dla twojego roweru. Czasem wielkie zmiany, czasem małe detale, a może po prostu gruntowny serwis.",
    ],
  },
  {
    id: 2,
    date: "7.11.2022",
    title: "podsumowanie sezonu 2022",
    image: "/images/blog/podsumowanieSezonu.jpg",
    text: [
      "No i kolejny sezon na rowerze zatoczył koło. Pogoda powoli zaczyna wracać na normalne tory skutecznie wspomagając odpoczynek i rowerowy reset 😁🍂  Czas więc przynajmniej krótko podsumować sezon 2022 pod kątem sportowo-kolarskim.",
      "Rok ten niewątpliwie był dla Nas wyjątkowy i wiadome było że taki będzie. Po raz pierwszy zaczęliśmy go w Trójkę🙂 Był to też rok w którym tworzyliśmy coś nowego- VeloWay Pracownia Rowerów a także kolejny rok intensywnej pracy trenerskiej jako Cyclo Trener. Niewątpliwie zmiany jakie zachodziły wymagały sporego zaangażowania i czasu, toteż pogodzenie tego z czynnym uprawianiem amatorskiego, ale jednak sportu było sporym wyzwaniem. Mimo wszystko dystans i spokój pozwoliły wypracować całkiem niezły poziom sportowy dający możliwość meldować się z przodu stawki w krajowych cyklach maratonów MTB , a we wrześniu W Bardzie Śląskim zdobyć brąz na Mistrzostwach Polski w Maratonie jako pierwszoroczny Masters 😉💪.",
      "Trzeba szczerze przyznać, że godzenie codzienności z treningiem okupione było momentami bardzo dużym zmęczeniem, co czasem mocno odbijało się na możliwościach sportowych, ale bardzo mnie cieszy, że w tym wszystkim nie ma żadnej zewnętrznej presji i tak naprawdę mogę cieszyć się uprawianiem kolarstwa, a cele leżą tam, gdzie sam sobie je wyznaczę.",
      "Niewątpliwie olbrzymią częścią formy oraz wyników jakie wypracowałem są ❤️Sylwia i Marcelina❤️ które umożliwiły i dzielnie znosiły czasem kilkugodzinne poranne wypady treningowe.",
      "Jak w każdym takim podsumowaniu tak i tutaj chce podziękować wszystkim który choć trochę ułatwiają uprawianie kolarskiego sportu, a więc:",
      "Daniel Paszek którego treningowe spojrzenie z dystansu pozwala znaleźć równowagę pomiędzy ciężkim treningiem codziennością i regeneracją.",
      "Całej ekipie Cyclo Trener Team za wsparcie logistyczno finansowe a w szczególności chłopakom Maciej oraz Marcin z którymi wspólnie ruszaliśmy na weekendowe wyścigi - z taką ekipą nawet Cape Epic nie straszny 💪😀",
      "Cannondale Polska wraz z Aspire Sport za wsparcie sprzętowe. Większość z nas ma marki oraz technologie które lubi i do których czuje sentyment dla mnie niewątpliwie jest to Cannondale i jezda na tym sprzęcie daje mi mnóstwo radości.",
      "Dziękuję wszystkim kibicującym i wspierającym, szczególnie rodzinie i znajomym, bardzo miło wiedzieć że moja działalność sportowa kogoś interesuje 🙂🙃😉",
    ],
  },
  {
    id: 3,
    date: "22.10.2022",
    title: "piasta wielobiegowa Kindernay",
    image: "/images/blog/piasta.jpg",
    text: [
      "Nieszablonowe i rzadkie rozwiązania na serwisie zawsze wzbudzają zachwyt i zaciekawienie. Tym razem zagościła u nas piasta wielobiegowa norweskiej marki Kindernay Mechanizm zamontowany jest w „klatce” która umożliwia sprawne żąglowanie między kołami, piasta wyposażona w sprzęgło które czyni indeksację subtelną a całość sterowana jest hydraulicznie za pomocą aluminiowej manetki o niebanalnym kształcie. Zestaw ten montowaliśmy w mocno customowym rowerze elektrycznym niemieckiej manufaktury Exess co stworzyło sprzęt do walki z najcięższym górskim terenem.",
    ],
  },
];

export const plans = [
  {
    id: 1,
    name: "competition",
    info: [
      "Plan treningowy aktualizowany co 7 dni",
      "Dziennik treningowy Training Peaks Basic",
      "Kontakt: telefoniczny, e-mail, messenger",
      "Program treningu na siłowni dla kolarzy",
      "Analiza profilów mocy, diagnostyka i wyznaczanie celów",
      "Analiza treningu na podstawie danych z miernika mocy i pulsometru",
    ],
    price: "380 zł/m",
  },
  {
    id: 2,
    name: "professional",
    info: [
      "Plan treningowy aktualizowany co 7 dni",
      "Dziennik treningowy Training Peaks Premium",
      "Analiza treningu rozbudowana WKO5",
      "Kontakt: telefoniczny, e-mail, messenger",
      "Program treningu na siłowni dla kolarzy",
      "Analiza profilów mocy, diagnostyka i wyznaczanie celów",
      "Analiza treningu na podstawie danych z miernika mocy i pulsometru",
    ],
    price: "550 zł/m",
  },
];
