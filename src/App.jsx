import React, { useEffect, useState } from "react";
const compMan = "https://raw.githubusercontent.com/JohnnyDeppisnumber1/Maga/main/comp_man.png";
const letterImage = "https://raw.githubusercontent.com/JohnnyDeppisnumber1/Maga/main/Letter%201.png";
const atsImage = "https://raw.githubusercontent.com/JohnnyDeppisnumber1/Maga/main/ATS.png";
const soprovodImage = "https://raw.githubusercontent.com/JohnnyDeppisnumber1/Maga/main/Soprovod.png";
const magnitImage = "https://raw.githubusercontent.com/JohnnyDeppisnumber1/Maga/main/Magnit.png";
const matchScoreImage = "https://raw.githubusercontent.com/JohnnyDeppisnumber1/Maga/main/Match_score.png";
const heroDecorImage = "https://raw.githubusercontent.com/JohnnyDeppisnumber1/Maga/main/3d.png";
const cardsImage = "https://raw.githubusercontent.com/JohnnyDeppisnumber1/Maga/main/Cards.png";
const analyzeImage = "https://raw.githubusercontent.com/JohnnyDeppisnumber1/Maga/main/Analyze.png";
const adaptImage = "https://raw.githubusercontent.com/JohnnyDeppisnumber1/Maga/main/Adapt.png";
const communityImage = "https://raw.githubusercontent.com/JohnnyDeppisnumber1/Maga/main/H.png";
const heroCard1 = "https://raw.githubusercontent.com/JohnnyDeppisnumber1/Maga/main/K1.png";
const heroCard2 = "https://raw.githubusercontent.com/JohnnyDeppisnumber1/Maga/main/K2.png";
const heroCard3 = "https://raw.githubusercontent.com/JohnnyDeppisnumber1/Maga/main/K3.png";

const HOW_IT_WORKS_BUBBLES = [
  {
    label: "Навыки",
    className: "left-[calc(59%-30px)] top-[79px] h-[136px] w-[136px] md:left-[calc(58%-30px)] md:top-[73px] md:h-[164px] md:w-[164px] lg:left-[calc(59%-30px)] lg:top-[75px] lg:h-[168px] lg:w-[168px]",
    duration: 5.8,
    delay: 0.2,
  },
  {
    label: "Формат",
    className: "right-[86px] top-[28px] h-[156px] w-[156px] md:right-[96px] md:top-[24px] md:h-[182px] md:w-[182px] lg:right-[92px] lg:top-[26px] lg:h-[186px] lg:w-[186px]",
    duration: 6.4,
    delay: 0.7,
  },
  {
    label: "Доход",
    className: "left-[44%] bottom-[-39px] h-[142px] w-[142px] md:left-[45%] md:bottom-[-45px] md:h-[170px] md:w-[170px] lg:left-[43.5%] lg:bottom-[-45px] lg:h-[176px] lg:w-[176px]",
    duration: 6.1,
    delay: 0.4,
  },
  {
    label: "Сфера",
    className: "right-[-38px] bottom-[44px] h-[144px] w-[144px] md:right-[-34px] md:bottom-[38px] md:h-[172px] md:w-[172px] lg:right-[-38px] lg:bottom-[40px] lg:h-[176px] lg:w-[176px]",
    duration: 6.8,
    delay: 1,
  },
];
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Bell,
  BriefcaseBusiness,
  Check,
  ChevronUp,
  Clock3,
  FileText,
  Heart,
  MessageCircle,
  MousePointer2,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Wand2,
  X,
  Zap,
} from "lucide-react";

const heroMockupCards = [
  { id: "k1", src: heroCard1, alt: "Карточка вакансии 1" },
  { id: "k2", src: heroCard2, alt: "Карточка вакансии 2" },
  { id: "k3", src: heroCard3, alt: "Карточка вакансии 3" },
];

const vacancies = [
  {
    role: "Product Designer",
    company: "Airi Labs",
    salary: "250–320k ₽",
    format: "Гибрид",
    location: "Москва",
    level: "Middle+",
    score: 94,
    insight: "Сильный мэтч по навыкам и карьерному росту",
    reasons: ["8 из 10 навыков совпадают", "Зарплата в твоём диапазоне", "Есть рост до Senior"],
    gaps: ["Добавить метрики в 2 кейса", "Усилить опыт с дизайн-системами"],
  },
  {
    role: "UX Researcher",
    company: "Nord Studio",
    salary: "210–280k ₽",
    format: "Remote",
    location: "СНГ / Европа",
    level: "Middle",
    score: 88,
    insight: "Подходит по исследованиям и формату работы",
    reasons: ["Есть опыт интервью", "Remote полностью совпадает", "Хороший переход в international"],
    gaps: ["Показать больше JTBD-проектов", "Перевести резюме на английский"],
  },
  {
    role: "Growth Designer",
    company: "FinTech Lab",
    salary: "230–300k ₽",
    format: "Офис / гибрид",
    location: "Москва",
    level: "Middle",
    score: 91,
    insight: "Хороший мэтч для роста в продуктовые метрики",
    reasons: ["Есть B2C-опыт", "Совпадает fintech-контекст", "Подходит по зарплате"],
    gaps: ["Добавить A/B-тесты", "Уточнить вклад в конверсию"],
  },
];

const matchFactors = [
  { label: "Навыки", value: 92, text: "Figma, UX research, CJM, design systems" },
  { label: "Опыт", value: 86, text: "Middle-профиль совпадает с ожиданиями" },
  { label: "Зарплата", value: 95, text: "Попадает в твой целевой диапазон" },
  { label: "Формат", value: 90, text: "Гибрид и remote без лишних компромиссов" },
  { label: "Рост", value: 82, text: "Есть переход к Senior и ownership" },
];

const benefits = [
  {
    icon: Clock3,
    title: "Быстрее, чем обычный поиск",
    text: "Не нужно открывать десятки вкладок. Лента уже отсортирована по реальному совпадению с твоим профилем.",
  },
  {
    icon: ShieldCheck,
    title: "Меньше сомнений перед откликом",
    text: "Ты видишь, какие требования закрываешь, где есть пробелы и что стоит усилить в резюме.",
  },
  {
    icon: Wand2,
    title: "Резюме под конкретную вакансию",
    text: "AI помогает адаптировать формулировки, ключевые слова и опыт под ATS-фильтры.",
  },
];

const trackerItems = [
  { company: "Airi Labs", role: "Product Designer", status: "Резюме адаптировано", progress: 76 },
  { company: "Nord Studio", role: "UX Researcher", status: "Отклик отправлен", progress: 58 },
  { company: "FinTech Lab", role: "Growth Designer", status: "HR просмотрел", progress: 84 },
];

const pricingPlans = [
  {
    name: "Free",
    subtitle: "для тех, кто хочет попробовать",
    price: "0",
    currency: "₽",
    period: "бесконечно",
    titleClassName: "text-[#1A1A1A]",
    items: [
      { text: "Свайпы и поиск релевантных вакансий", included: true },
      { text: "Score-Match соответствия вакансии", included: true },
      { text: "1 адаптация резюме в неделю", included: true },
      { text: "Личное хранилище опыта", included: true },
      { text: "Голосовое уточнение опыта", included: false },
      { text: "Безлимит адаптаций", included: false },
      { text: "Скачивание адаптированного резюме в формате PDF/DOC", included: false },
      { text: "Интеграция с карьерными агрегаторами для быстрых откликов", included: false },
    ],
  },
  {
    name: "Business",
    subtitle: "для активного поиска работы",
    price: "799",
    currency: "₽",
    period: "недельная подписка",
    titleClassName: "text-[#3477F8]",
    items: [
      { text: "Всё из бесплатного тарифа", included: true },
      { text: "Безлимит адаптаций резюме", included: true },
      { text: "Авто-сборка резюме и сопроводительного письма под вакансии", included: true },
      { text: "Голосовой помощник уточнение опыта", included: true },
      { text: "Подробный отчет соответствия резюме по вакансии", included: true },
      { text: "Интеграция с карьерными агрегаторами для быстрых откликов", included: true },
      { text: "Скачивание адаптированного резюме в формате PDF/DOC", included: true },
    ],
  },
  {
    name: "Platinum",
    subtitle: "для тех, кто любит выгоду",
    price: "3 499",
    currency: "₽",
    period: "месячная подписка",
    titleClassName: "text-[#FFAAD4]",
    items: [
      { text: "Всё из Бизнес-тарифа", included: true },
      { text: "Самообновляющаяся база опыта работы по вашим ответам", included: true },
      { text: "Приоритетные и эксклюзивные вакансии от ведущих компаний", included: true },
      { text: "Аналитика прогресса за месяц", included: true },
      { text: "ИИ-помощник для подготовки к собеседованию", included: true },
      { text: "Автосборка и отклик с рекомендациями по улучшению", included: true },
      { text: "Карьерный трекер", included: true },
    ],
  },
];

const faqItems = [
  {
    question: "Как ИИ адаптирует моё резюме?",
    answer: "OfferMatch анализирует вакансию, твой опыт и ключевые требования, а затем предлагает более релевантные формулировки, навыки и акценты под конкретный отклик.",
  },
  {
    question: "Мои данные в безопасности?",
    answer: "Да. Мы используем защищённую обработку данных и не публикуем твои материалы без подтверждения. Ты контролируешь, что хранить, редактировать и отправлять.",
  },
  {
    question: "Сколько можно использовать бесплатно?",
    answer: "В бесплатном режиме доступны базовый мэтчинг, просмотр части вакансий и тестовые AI-правки. Расширенные лимиты и дополнительные функции открываются в платных планах.",
  },
  {
    question: "Работает ли автопарсинг вакансий?",
    answer: "Да. OfferMatch умеет собирать вакансии из подключённых источников и приводить их к единому формату, чтобы ты видел только сопоставимые и релевантные предложения.",
  },
  {
    question: "В каком формате скачивать резюме?",
    answer: "Оптимально использовать PDF. Такой формат стабильно отображается у работодателей, удобен для пересылки и лучше подходит для большинства откликов.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};


const NBSP = "\u00A0";
const SHORT_WORDS = [
  "а",
  "в",
  "и",
  "к",
  "о",
  "с",
  "у",
  "я",
  "на",
  "но",
  "по",
  "за",
  "от",
  "до",
  "из",
  "для",
  "при",
  "без",
  "над",
  "под",
  "об",
  "обо",
  "оба",
  "про",
  "что",
  "как",
  "так",
  "же",
  "ли",
  "бы",
  "во",
  "со",
  "ко",
  "или",
];
const SHORT_WORDS_PATTERN = new RegExp(`(^|[\\s([{«„“])(${SHORT_WORDS.join("|")})(\\s+)`, "giu");

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function preventWidows(text) {
  if (typeof text !== "string") return text;
  return text.replace(SHORT_WORDS_PATTERN, (_match, prefix, word) => `${prefix}${word}${NBSP}`);
}

function Text({ children }) {
  if (typeof children === "string") return <>{preventWidows(children)}</>;
  return <>{children}</>;
}

function MatchStars() {
  return (
    <svg
        className="h-[57px] w-auto md:h-[63px]"
        width="532"
        height="104"
        viewBox="0 0 532 104"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="OfferMatch"
      >
        <circle cx="43.1111" cy="43.1111" r="39.9354" stroke="white" strokeWidth="6.35223" />
        <circle cx="43.1107" cy="43.1107" r="27.5892" stroke="white" strokeWidth="6.35223" />
        <path d="M84.4194 86.81L102.104 69.1252C106.03 65.1995 106.03 58.8346 102.104 54.9089C98.1785 50.9832 91.8137 50.9832 87.888 54.9089L70.2032 72.5937" stroke="white" strokeWidth="6.35126" />
        <path d="M98.6343 101.025L116.319 83.34C120.245 79.4143 120.245 73.0495 116.319 69.1238C112.393 65.198 106.029 65.198 102.103 69.1238L84.418 86.8086" stroke="white" strokeWidth="6.35126" />
        <path d="M178.636 78.4194C175.246 78.4194 172.118 77.8328 169.249 76.6594C166.381 75.4861 163.883 73.8131 161.753 71.6403C159.667 69.4675 158.038 66.9035 156.864 63.9485C155.735 60.95 155.17 57.6691 155.17 54.1057C155.17 49.369 156.169 45.2189 158.168 41.6555C160.167 38.0487 162.927 35.2457 166.446 33.2468C170.01 31.2043 174.051 30.1831 178.571 30.1831C183.177 30.1831 187.24 31.2043 190.76 33.2468C194.324 35.2457 197.105 38.0487 199.104 41.6555C201.103 45.2624 202.102 49.4342 202.102 54.1709C202.102 57.7343 201.516 60.9935 200.342 63.9485C199.212 66.9035 197.583 69.4675 195.453 71.6403C193.368 73.8131 190.891 75.4861 188.022 76.6594C185.154 77.8328 182.026 78.4194 178.636 78.4194ZM178.571 71.5099C181.526 71.5099 184.111 70.7711 186.328 69.2936C188.587 67.8161 190.347 65.7737 191.608 63.1663C192.868 60.5155 193.498 57.4736 193.498 54.0405C193.498 50.6509 192.868 47.6959 191.608 45.1755C190.391 42.6116 188.653 40.6343 186.393 39.2437C184.177 37.8097 181.569 37.0926 178.571 37.0926C175.616 37.0926 173.008 37.8097 170.749 39.2437C168.532 40.6343 166.816 42.5898 165.599 45.1103C164.382 47.6307 163.774 50.6075 163.774 54.0405C163.774 57.517 164.382 60.5589 165.599 63.1663C166.859 65.7737 168.598 67.8161 170.814 69.2936C173.074 70.7711 175.659 71.5099 178.571 71.5099ZM212.485 77.7676V41.46C212.485 37.8096 213.485 35.0285 215.484 33.1164C217.526 31.1609 220.568 30.1831 224.609 30.1831C225.522 30.1831 226.283 30.2266 226.891 30.3135C227.499 30.4004 228.086 30.5307 228.651 30.7046V37.0926C228.347 36.9623 227.956 36.8753 227.478 36.8319C227 36.745 226.456 36.7015 225.848 36.7015C224.11 36.7015 222.806 37.1361 221.937 38.0052C221.111 38.8309 220.698 40.0476 220.698 41.6555V77.7676H212.485ZM206.488 50.9769V44.5236H227.934V50.9769H206.488ZM237.993 77.7676V41.46C237.993 37.8096 238.992 35.0285 240.991 33.1164C243.034 31.1609 246.076 30.1831 250.117 30.1831C251.03 30.1831 251.79 30.2266 252.399 30.3135C253.007 30.4004 253.594 30.5307 254.159 30.7046V37.0926C253.854 36.9623 253.463 36.8753 252.985 36.8319C252.507 36.745 251.964 36.7015 251.356 36.7015C249.617 36.7015 248.314 37.1361 247.445 38.0052C246.619 38.8309 246.206 40.0476 246.206 41.6555V77.7676H237.993ZM231.996 50.9769V44.5236H253.442V50.9769H231.996ZM273.974 78.4194C270.455 78.4194 267.369 77.6807 264.718 76.2032C262.111 74.7256 260.069 72.6832 258.591 70.0758C257.157 67.4685 256.44 64.47 256.44 61.0804C256.44 57.6908 257.157 54.7141 258.591 52.1502C260.069 49.5428 262.111 47.5221 264.718 46.088C267.326 44.6105 270.368 43.8718 273.844 43.8718C277.147 43.8718 280.015 44.5671 282.448 45.9577C284.882 47.3048 286.772 49.2169 288.119 51.6939C289.467 54.1709 290.14 57.0607 290.14 60.3634C290.14 60.9718 290.118 61.5367 290.075 62.0582C290.032 62.5797 289.966 63.1011 289.879 63.6226H261.524V57.8864H283.557L281.862 59.4508C281.862 56.322 281.145 53.9753 279.711 52.4109C278.277 50.8465 276.278 50.0643 273.714 50.0643C270.933 50.0643 268.716 51.0203 267.065 52.9324C265.457 54.8445 264.653 57.6039 264.653 61.2108C264.653 64.7742 265.457 67.5119 267.065 69.424C268.716 71.2926 271.041 72.2269 274.04 72.2269C275.778 72.2269 277.299 71.901 278.603 71.2492C279.906 70.5973 280.862 69.5978 281.471 68.2507H289.228C288.141 71.3795 286.294 73.8565 283.687 75.6817C281.123 77.5068 277.886 78.4194 273.974 78.4194ZM297.286 77.7676V44.5236H305.304V52.5413H305.5V77.7676H297.286ZM305.5 60.4286L304.652 52.5413C305.434 49.7166 306.76 47.5656 308.628 46.088C310.497 44.6105 312.735 43.8718 315.342 43.8718C316.255 43.8718 316.907 43.9587 317.298 44.1325V51.8894C317.081 51.8025 316.776 51.7591 316.385 51.7591C315.994 51.7156 315.516 51.6939 314.951 51.6939C311.779 51.6939 309.411 52.3892 307.846 53.7798C306.282 55.1704 305.5 57.3866 305.5 60.4286ZM336.963 77.7676V30.8349H350.131L364.471 76.0728H359.843L374.184 30.8349H387.416V77.7676H379.072V33.6379H380.441L366.492 77.7676H357.431L343.612 34.029H344.916V77.7676H336.963ZM417.582 77.7676C417.364 76.8985 417.191 75.9424 417.06 74.8995C416.973 73.8565 416.93 72.5963 416.93 71.1188H416.669V55.3442C416.669 53.606 416.169 52.3023 415.17 51.4332C414.214 50.5206 412.736 50.0643 410.737 50.0643C408.782 50.0643 407.217 50.4337 406.044 51.1724C404.914 51.8677 404.219 52.8889 403.958 54.2361H396.071C396.419 51.1507 397.896 48.652 400.503 46.7399C403.111 44.8278 406.609 43.8718 410.998 43.8718C415.561 43.8718 419.016 44.9147 421.362 47.0006C423.709 49.0431 424.882 52.0633 424.882 56.0612V71.1188C424.882 72.1617 424.948 73.2264 425.078 74.3128C425.252 75.3992 425.491 76.5508 425.795 77.7676H417.582ZM406.044 78.4194C402.698 78.4194 400.025 77.5938 398.026 75.9424C396.071 74.2476 395.093 71.9879 395.093 69.1633C395.093 66.1213 396.201 63.7095 398.418 61.9278C400.634 60.1461 403.763 58.9511 407.804 58.3427L418.168 56.7783V61.993L409.173 63.3619C407.217 63.6661 405.74 64.2093 404.74 64.9915C403.784 65.7737 403.306 66.8601 403.306 68.2507C403.306 69.5109 403.763 70.4887 404.675 71.184C405.588 71.8358 406.848 72.1617 408.456 72.1617C410.803 72.1617 412.758 71.5751 414.323 70.4018C415.887 69.2284 416.669 67.7944 416.669 66.0996L417.582 71.1188C416.713 73.5089 415.279 75.334 413.28 76.5943C411.324 77.811 408.912 78.4194 406.044 78.4194ZM447.346 78.4194C443.261 78.4194 440.241 77.4634 438.285 75.5513C436.373 73.5958 435.417 70.6842 435.417 66.8166V36.9623L443.696 33.8986V67.0122C443.696 68.6201 444.13 69.8151 444.999 70.5973C445.868 71.3795 447.237 71.7706 449.106 71.7706C449.845 71.7706 450.496 71.7272 451.061 71.6403C451.67 71.5099 452.235 71.3578 452.756 71.184V77.572C452.235 77.8328 451.496 78.0283 450.54 78.1587C449.584 78.3325 448.519 78.4194 447.346 78.4194ZM429.029 50.9769V44.5236H452.756V50.9769H429.029ZM473.287 78.4194C469.941 78.4194 466.986 77.6807 464.422 76.2032C461.901 74.7256 459.902 72.6832 458.425 70.0758C456.991 67.425 456.274 64.4265 456.274 61.0804C456.274 57.7343 456.991 54.7793 458.425 52.2154C459.902 49.608 461.901 47.5656 464.422 46.088C466.986 44.6105 469.941 43.8718 473.287 43.8718C476.025 43.8718 478.502 44.3933 480.718 45.4362C482.934 46.4357 484.759 47.8697 486.193 49.7384C487.627 51.5635 488.54 53.6929 488.931 56.1264H481.044C480.566 54.3447 479.653 52.9541 478.306 51.9546C476.959 50.9551 475.329 50.4554 473.417 50.4554C471.636 50.4554 470.093 50.8899 468.789 51.7591C467.529 52.6282 466.551 53.8667 465.856 55.4746C465.161 57.0825 464.813 58.9511 464.813 61.0804C464.813 63.2532 465.161 65.1436 465.856 66.7514C466.551 68.3593 467.551 69.6196 468.854 70.5321C470.158 71.4013 471.679 71.8358 473.417 71.8358C475.329 71.8358 476.959 71.3361 478.306 70.3366C479.653 69.3371 480.566 67.9465 481.044 66.1648H488.931C488.54 68.5983 487.606 70.7494 486.128 72.618C484.694 74.4432 482.869 75.8772 480.653 76.9202C478.48 77.9197 476.025 78.4194 473.287 78.4194ZM495.847 77.7676V30.8349H504.06V77.7676H495.847ZM519.183 77.7676V56.7783C519.183 54.7358 518.662 53.1931 517.619 52.1502C516.576 51.1072 515.055 50.5858 513.056 50.5858C511.318 50.5858 509.753 50.9769 508.363 51.7591C507.015 52.5413 505.951 53.6277 505.168 55.0183C504.43 56.4089 504.06 58.0168 504.06 59.8419L503.213 51.8894C504.343 49.4559 505.994 47.5221 508.167 46.088C510.34 44.6105 512.947 43.8718 515.989 43.8718C519.596 43.8718 522.399 44.893 524.398 46.9354C526.44 48.9779 527.461 51.6939 527.461 55.0835V77.7676H519.183Z" fill="white" />
      </svg>
  );
}

function PhoneFrame() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-20 h-full w-full overflow-visible"
      viewBox="0 0 410 853"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="phoneBodyGradient" x1="205" y1="8" x2="205" y2="845" gradientUnits="userSpaceOnUse">
          <stop stopColor="#313546" />
          <stop offset="0.18" stopColor="#0E1525" />
          <stop offset="0.72" stopColor="#101829" />
          <stop offset="1" stopColor="#2F3446" />
        </linearGradient>
        <linearGradient id="phoneEdgeGradient" x1="0" y1="0" x2="410" y2="853" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7A83A3" />
          <stop offset="0.22" stopColor="#151A2B" />
          <stop offset="0.78" stopColor="#050813" />
          <stop offset="1" stopColor="#8D96B8" />
        </linearGradient>
      </defs>

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M116.95 8.38H292.74C312.61 8.38 327.33 8.38 338.99 9.33C350.62 10.28 358.95 12.17 366.06 15.79C378.85 22.3 389.25 32.7 395.77 45.49C399.39 52.6 401.27 60.93 402.22 72.56C403.17 84.22 403.17 98.95 403.17 118.81V734.09C403.17 753.96 403.17 768.69 402.22 780.35C401.27 791.97 399.39 800.3 395.77 807.41C389.25 820.2 378.85 830.6 366.06 837.12C358.95 840.74 350.62 842.62 338.99 843.57C327.33 844.52 312.61 844.52 292.74 844.52H116.95C97.09 844.52 82.36 844.52 70.7 843.57C59.07 842.62 50.74 840.74 43.63 837.12C30.84 830.6 20.44 820.2 13.93 807.41C10.3 800.3 8.42 791.97 7.47 780.35C6.52 768.69 6.52 753.96 6.52 734.09V118.81C6.52 98.95 6.52 84.22 7.47 72.56C8.42 60.93 10.3 52.6 13.93 45.49C20.44 32.7 30.84 22.3 43.63 15.79C50.74 12.17 59.07 10.28 70.7 9.33C82.36 8.38 97.09 8.38 116.95 8.38ZM46 28C34.6 33.81 25.33 43.08 19.52 54.48C13 67.28 13 84.03 13 117.53V735.47C13 768.97 13 785.72 19.52 798.52C25.33 809.92 34.6 819.19 46 825C58.8 831.52 75.55 831.52 109.05 831.52H300.95C334.45 831.52 351.2 831.52 364 825C375.4 819.19 384.67 809.92 390.48 798.52C397 785.72 397 768.97 397 735.47V117.53C397 84.03 397 67.28 390.48 54.48C384.67 43.08 375.4 33.81 364 28C351.2 21.48 334.45 21.48 300.95 21.48H109.05C75.55 21.48 58.8 21.48 46 28Z"
        fill="url(#phoneEdgeGradient)"
      />
      <path
        d="M13 117.53C13 84.03 13 67.28 19.52 54.48C25.33 43.08 34.6 33.81 46 28C58.8 21.48 75.55 21.48 109.05 21.48H300.95C334.45 21.48 351.2 21.48 364 28C375.4 33.81 384.67 43.08 390.48 54.48C397 67.28 397 84.03 397 117.53V735.47C397 768.97 397 785.72 390.48 798.52C384.67 809.92 375.4 819.19 364 825C351.2 831.52 334.45 831.52 300.95 831.52H109.05C75.55 831.52 58.8 831.52 46 825C34.6 819.19 25.33 809.92 19.52 798.52C13 785.72 13 768.97 13 735.47V117.53Z"
        fill="none"
      />
      <path
        d="M16.8 116C16.8 80 16.8 62 23.8 48.3C29.96 36.22 39.72 26.46 51.8 20.3C65.5 13.3 83.5 13.3 119.5 13.3H290.5C326.5 13.3 344.5 13.3 358.2 20.3C370.28 26.46 380.04 36.22 386.2 48.3C393.2 62 393.2 80 393.2 116V737C393.2 773 393.2 791 386.2 804.7C380.04 816.78 370.28 826.54 358.2 832.7C344.5 839.7 326.5 839.7 290.5 839.7H119.5C83.5 839.7 65.5 839.7 51.8 832.7C39.72 826.54 29.96 816.78 23.8 804.7C16.8 791 16.8 773 16.8 737V116Z"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="2"
      />
      <rect x="147" y="32.6" width="116" height="33.5" rx="16.75" fill="#05070D" />
      <circle cx="246.3" cy="48.9" r="4.2" fill="#252A39" />
      <rect x="0.9" y="177.8" width="4.7" height="39.1" rx="1" fill="#202536" />
      <rect x="0.9" y="245.8" width="4.7" height="62.9" rx="1" fill="#202536" />
      <rect x="0.9" y="325" width="4.7" height="62.9" rx="1" fill="#202536" />
      <rect x="404.6" y="267.2" width="4.7" height="99.7" rx="1" fill="#202536" />
    </svg>
  );
}

function getNextIndex(currentIndex, direction, length) {
  if (length <= 0) return 0;
  return (currentIndex + direction + length) % length;
}

function runPrototypeTests() {
  console.assert(heroMockupCards.length >= 3, "Expected at least 3 hero mockup cards");
  console.assert(vacancies.length >= 3, "Expected at least 3 vacancy cards");
  console.assert(vacancies.every((item) => item.score >= 0 && item.score <= 100), "Every match score must be between 0 and 100");
  console.assert(matchFactors.every((item) => item.value >= 0 && item.value <= 100), "Every match factor value must be between 0 and 100");
  console.assert(getNextIndex(0, 1, 3) === 1, "Next index should move forward");
  console.assert(getNextIndex(0, -1, 3) === 2, "Next index should wrap backward");
  console.assert(preventWidows("Свайпай вакансии с реальным совпадением").includes(`с${NBSP}реальным`), "Single-letter preposition must bind to the next word");
  console.assert(preventWidows("а потом и резюме").includes(`а${NBSP}потом`), "Word 'а' must bind to the next word");
  console.assert(preventWidows("и помогает адаптировать").includes(`и${NBSP}помогает`), "Word 'и' must bind to the next word");
  console.assert(preventWidows("по реальному совпадению").includes(`по${NBSP}реальному`), "Short preposition 'по' must bind to the next word");
  console.assert(preventWidows("в приложении").includes(`в${NBSP}приложении`), "Single-letter preposition at the start must bind to the next word");
}

if (typeof window !== "undefined" && import.meta.env.DEV) {
  runPrototypeTests();
}

function Logo() {
  return (
    <a href="#top" className="flex items-center" aria-label="OfferMatch">
      <svg
        className="h-[57px] w-auto md:h-[63px]"
        width="532"
        height="104"
        viewBox="0 0 532 104"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="OfferMatch"
      >
        <circle cx="43.1111" cy="43.1111" r="39.9354" stroke="white" strokeWidth="6.35223" />
        <circle cx="43.1107" cy="43.1107" r="27.5892" stroke="white" strokeWidth="6.35223" />
        <path d="M84.4194 86.81L102.104 69.1252C106.03 65.1995 106.03 58.8346 102.104 54.9089C98.1785 50.9832 91.8137 50.9832 87.888 54.9089L70.2032 72.5937" stroke="white" strokeWidth="6.35126" />
        <path d="M98.6343 101.025L116.319 83.34C120.245 79.4143 120.245 73.0495 116.319 69.1238C112.393 65.198 106.029 65.198 102.103 69.1238L84.418 86.8086" stroke="white" strokeWidth="6.35126" />
        <path d="M178.636 78.4194C175.246 78.4194 172.118 77.8328 169.249 76.6594C166.381 75.4861 163.883 73.8131 161.753 71.6403C159.667 69.4675 158.038 66.9035 156.864 63.9485C155.735 60.95 155.17 57.6691 155.17 54.1057C155.17 49.369 156.169 45.2189 158.168 41.6555C160.167 38.0487 162.927 35.2457 166.446 33.2468C170.01 31.2043 174.051 30.1831 178.571 30.1831C183.177 30.1831 187.24 31.2043 190.76 33.2468C194.324 35.2457 197.105 38.0487 199.104 41.6555C201.103 45.2624 202.102 49.4342 202.102 54.1709C202.102 57.7343 201.516 60.9935 200.342 63.9485C199.212 66.9035 197.583 69.4675 195.453 71.6403C193.368 73.8131 190.891 75.4861 188.022 76.6594C185.154 77.8328 182.026 78.4194 178.636 78.4194ZM178.571 71.5099C181.526 71.5099 184.111 70.7711 186.328 69.2936C188.587 67.8161 190.347 65.7737 191.608 63.1663C192.868 60.5155 193.498 57.4736 193.498 54.0405C193.498 50.6509 192.868 47.6959 191.608 45.1755C190.391 42.6116 188.653 40.6343 186.393 39.2437C184.177 37.8097 181.569 37.0926 178.571 37.0926C175.616 37.0926 173.008 37.8097 170.749 39.2437C168.532 40.6343 166.816 42.5898 165.599 45.1103C164.382 47.6307 163.774 50.6075 163.774 54.0405C163.774 57.517 164.382 60.5589 165.599 63.1663C166.859 65.7737 168.598 67.8161 170.814 69.2936C173.074 70.7711 175.659 71.5099 178.571 71.5099ZM212.485 77.7676V41.46C212.485 37.8096 213.485 35.0285 215.484 33.1164C217.526 31.1609 220.568 30.1831 224.609 30.1831C225.522 30.1831 226.283 30.2266 226.891 30.3135C227.499 30.4004 228.086 30.5307 228.651 30.7046V37.0926C228.347 36.9623 227.956 36.8753 227.478 36.8319C227 36.745 226.456 36.7015 225.848 36.7015C224.11 36.7015 222.806 37.1361 221.937 38.0052C221.111 38.8309 220.698 40.0476 220.698 41.6555V77.7676H212.485ZM206.488 50.9769V44.5236H227.934V50.9769H206.488ZM237.993 77.7676V41.46C237.993 37.8096 238.992 35.0285 240.991 33.1164C243.034 31.1609 246.076 30.1831 250.117 30.1831C251.03 30.1831 251.79 30.2266 252.399 30.3135C253.007 30.4004 253.594 30.5307 254.159 30.7046V37.0926C253.854 36.9623 253.463 36.8753 252.985 36.8319C252.507 36.745 251.964 36.7015 251.356 36.7015C249.617 36.7015 248.314 37.1361 247.445 38.0052C246.619 38.8309 246.206 40.0476 246.206 41.6555V77.7676H237.993ZM231.996 50.9769V44.5236H253.442V50.9769H231.996ZM273.974 78.4194C270.455 78.4194 267.369 77.6807 264.718 76.2032C262.111 74.7256 260.069 72.6832 258.591 70.0758C257.157 67.4685 256.44 64.47 256.44 61.0804C256.44 57.6908 257.157 54.7141 258.591 52.1502C260.069 49.5428 262.111 47.5221 264.718 46.088C267.326 44.6105 270.368 43.8718 273.844 43.8718C277.147 43.8718 280.015 44.5671 282.448 45.9577C284.882 47.3048 286.772 49.2169 288.119 51.6939C289.467 54.1709 290.14 57.0607 290.14 60.3634C290.14 60.9718 290.118 61.5367 290.075 62.0582C290.032 62.5797 289.966 63.1011 289.879 63.6226H261.524V57.8864H283.557L281.862 59.4508C281.862 56.322 281.145 53.9753 279.711 52.4109C278.277 50.8465 276.278 50.0643 273.714 50.0643C270.933 50.0643 268.716 51.0203 267.065 52.9324C265.457 54.8445 264.653 57.6039 264.653 61.2108C264.653 64.7742 265.457 67.5119 267.065 69.424C268.716 71.2926 271.041 72.2269 274.04 72.2269C275.778 72.2269 277.299 71.901 278.603 71.2492C279.906 70.5973 280.862 69.5978 281.471 68.2507H289.228C288.141 71.3795 286.294 73.8565 283.687 75.6817C281.123 77.5068 277.886 78.4194 273.974 78.4194ZM297.286 77.7676V44.5236H305.304V52.5413H305.5V77.7676H297.286ZM305.5 60.4286L304.652 52.5413C305.434 49.7166 306.76 47.5656 308.628 46.088C310.497 44.6105 312.735 43.8718 315.342 43.8718C316.255 43.8718 316.907 43.9587 317.298 44.1325V51.8894C317.081 51.8025 316.776 51.7591 316.385 51.7591C315.994 51.7156 315.516 51.6939 314.951 51.6939C311.779 51.6939 309.411 52.3892 307.846 53.7798C306.282 55.1704 305.5 57.3866 305.5 60.4286ZM336.963 77.7676V30.8349H350.131L364.471 76.0728H359.843L374.184 30.8349H387.416V77.7676H379.072V33.6379H380.441L366.492 77.7676H357.431L343.612 34.029H344.916V77.7676H336.963ZM417.582 77.7676C417.364 76.8985 417.191 75.9424 417.06 74.8995C416.973 73.8565 416.93 72.5963 416.93 71.1188H416.669V55.3442C416.669 53.606 416.169 52.3023 415.17 51.4332C414.214 50.5206 412.736 50.0643 410.737 50.0643C408.782 50.0643 407.217 50.4337 406.044 51.1724C404.914 51.8677 404.219 52.8889 403.958 54.2361H396.071C396.419 51.1507 397.896 48.652 400.503 46.7399C403.111 44.8278 406.609 43.8718 410.998 43.8718C415.561 43.8718 419.016 44.9147 421.362 47.0006C423.709 49.0431 424.882 52.0633 424.882 56.0612V71.1188C424.882 72.1617 424.948 73.2264 425.078 74.3128C425.252 75.3992 425.491 76.5508 425.795 77.7676H417.582ZM406.044 78.4194C402.698 78.4194 400.025 77.5938 398.026 75.9424C396.071 74.2476 395.093 71.9879 395.093 69.1633C395.093 66.1213 396.201 63.7095 398.418 61.9278C400.634 60.1461 403.763 58.9511 407.804 58.3427L418.168 56.7783V61.993L409.173 63.3619C407.217 63.6661 405.74 64.2093 404.74 64.9915C403.784 65.7737 403.306 66.8601 403.306 68.2507C403.306 69.5109 403.763 70.4887 404.675 71.184C405.588 71.8358 406.848 72.1617 408.456 72.1617C410.803 72.1617 412.758 71.5751 414.323 70.4018C415.887 69.2284 416.669 67.7944 416.669 66.0996L417.582 71.1188C416.713 73.5089 415.279 75.334 413.28 76.5943C411.324 77.811 408.912 78.4194 406.044 78.4194ZM447.346 78.4194C443.261 78.4194 440.241 77.4634 438.285 75.5513C436.373 73.5958 435.417 70.6842 435.417 66.8166V36.9623L443.696 33.8986V67.0122C443.696 68.6201 444.13 69.8151 444.999 70.5973C445.868 71.3795 447.237 71.7706 449.106 71.7706C449.845 71.7706 450.496 71.7272 451.061 71.6403C451.67 71.5099 452.235 71.3578 452.756 71.184V77.572C452.235 77.8328 451.496 78.0283 450.54 78.1587C449.584 78.3325 448.519 78.4194 447.346 78.4194ZM429.029 50.9769V44.5236H452.756V50.9769H429.029ZM473.287 78.4194C469.941 78.4194 466.986 77.6807 464.422 76.2032C461.901 74.7256 459.902 72.6832 458.425 70.0758C456.991 67.425 456.274 64.4265 456.274 61.0804C456.274 57.7343 456.991 54.7793 458.425 52.2154C459.902 49.608 461.901 47.5656 464.422 46.088C466.986 44.6105 469.941 43.8718 473.287 43.8718C476.025 43.8718 478.502 44.3933 480.718 45.4362C482.934 46.4357 484.759 47.8697 486.193 49.7384C487.627 51.5635 488.54 53.6929 488.931 56.1264H481.044C480.566 54.3447 479.653 52.9541 478.306 51.9546C476.959 50.9551 475.329 50.4554 473.417 50.4554C471.636 50.4554 470.093 50.8899 468.789 51.7591C467.529 52.6282 466.551 53.8667 465.856 55.4746C465.161 57.0825 464.813 58.9511 464.813 61.0804C464.813 63.2532 465.161 65.1436 465.856 66.7514C466.551 68.3593 467.551 69.6196 468.854 70.5321C470.158 71.4013 471.679 71.8358 473.417 71.8358C475.329 71.8358 476.959 71.3361 478.306 70.3366C479.653 69.3371 480.566 67.9465 481.044 66.1648H488.931C488.54 68.5983 487.606 70.7494 486.128 72.618C484.694 74.4432 482.869 75.8772 480.653 76.9202C478.48 77.9197 476.025 78.4194 473.287 78.4194ZM495.847 77.7676V30.8349H504.06V77.7676H495.847ZM519.183 77.7676V56.7783C519.183 54.7358 518.662 53.1931 517.619 52.1502C516.576 51.1072 515.055 50.5858 513.056 50.5858C511.318 50.5858 509.753 50.9769 508.363 51.7591C507.015 52.5413 505.951 53.6277 505.168 55.0183C504.43 56.4089 504.06 58.0168 504.06 59.8419L503.213 51.8894C504.343 49.4559 505.994 47.5221 508.167 46.088C510.34 44.6105 512.947 43.8718 515.989 43.8718C519.596 43.8718 522.399 44.893 524.398 46.9354C526.44 48.9779 527.461 51.6939 527.461 55.0835V77.7676H519.183Z" fill="white" />
      </svg>
    </a>
  );
}

function Header() {
  const nav = [
    ["Чем помогаем", "#help"],
    ["Как работает", "#how-it-works"],
    ["Тарифы", "#pricing"],
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8">
      <div className="mx-auto flex max-w-[calc(80rem+40px)] items-center justify-between rounded-[28px] border border-white/20 bg-[#3675F6]/75 px-4 py-3 shadow-2xl shadow-blue-950/10 backdrop-blur-2xl md:px-5">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map(([label, href]) => (
            <a key={label} href={href} className="rounded-full px-5 py-3 text-[18px] font-bold text-white/85 transition hover:bg-white/15 hover:text-white">
              <Text>{label}</Text>
            </a>
          ))}
        </nav>
        <a href="https://offermatch.online/match-analyze?vacancyId=3" className="rounded-full bg-white px-5 py-3 text-[18px] font-bold text-[#3675F6] shadow-lg shadow-blue-950/10 transition hover:-translate-y-0.5 hover:shadow-xl">
          Проверить свой мэтч
        </a>
      </div>
    </header>
  );
}

function Badge({ children, className = "" }) {
  return (
    <span className={cn("inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-bold text-white backdrop-blur-xl", className)}>
      {children}
    </span>
  );
}

function SectionHeading({ eyebrow, title, text, dark = false }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <p className={cn("mb-3 text-xs font-black uppercase tracking-normal", dark ? "text-[#3675F6]" : "text-white/70")}>
        <Text>{eyebrow}</Text>
      </p>
      <h2 className={cn("text-4xl font-black tracking-normal md:text-6xl", dark ? "text-[#172554]" : "text-white")}>
        <Text>{title}</Text>
      </h2>
      {text ? (
        <p className={cn("mt-5 text-lg font-medium leading-8 md:text-xl", dark ? "text-slate-600" : "text-white/80")}>
          <Text>{text}</Text>
        </p>
      ) : null}
    </motion.div>
  );
}

function ProgressBar({ value, light = false }) {
  return (
    <div className={cn("h-2.5 overflow-hidden rounded-full", light ? "bg-white/15" : "bg-blue-100")}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn("h-full rounded-full", light ? "bg-white" : "bg-[#3675F6]")}
      />
    </div>
  );
}

function VacancyCard({ vacancy, compact = false, largerSmallText = false, className = "" }) {
  return (
    <div className={cn("rounded-[32px] bg-white text-left shadow-2xl shadow-blue-950/10", compact ? "p-4" : "p-5", className)}>
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className={cn("mb-1 font-black uppercase tracking-normal text-blue-400", largerSmallText ? "text-base" : "text-sm")}>{vacancy.company}</p>
          <h3 className="text-2xl font-black tracking-normal text-[#172554] md:text-3xl">{vacancy.role}</h3>
        </div>
        <div className="shrink-0 rounded-2xl bg-[#3675F6] px-4 py-3 text-center text-white shadow-lg shadow-blue-600/25">
          <p className="text-2xl font-black leading-none">{vacancy.score}%</p>
          <p className={cn("font-black uppercase tracking-normal text-white/70", largerSmallText ? "text-[13px]" : "text-[11px]")}>{largerSmallText ? "мэтч" : "match"}</p>
        </div>
      </div>

      <div className={cn("grid grid-cols-2 gap-2 font-bold text-slate-600", largerSmallText ? "text-base" : "text-sm")}>
        <div className="rounded-2xl bg-blue-50 px-3 py-3">{vacancy.salary}</div>
        <div className="rounded-2xl bg-blue-50 px-3 py-3"><Text>{vacancy.format}</Text></div>
        <div className="rounded-2xl bg-blue-50 px-3 py-3"><Text>{vacancy.location}</Text></div>
        <div className="rounded-2xl bg-blue-50 px-3 py-3">{vacancy.level}</div>
      </div>

      <div className="mt-4 rounded-[24px] bg-[#1E63F2] p-4 text-white">
        <p className={cn("mb-3 flex items-center gap-2 font-black text-blue-200", largerSmallText ? "text-base" : "text-sm")}>
          <Sparkles size={16} /> AI-инсайт
        </p>
        <p className="text-base font-bold leading-6"><Text>{vacancy.insight}</Text></p>
      </div>

      <div className="mt-4 space-y-2">
        {vacancy.reasons.map((reason) => (
          <div key={reason} className={cn("flex items-center gap-2 rounded-2xl bg-blue-50 px-3 py-2.5 font-bold text-[#3675F6]", largerSmallText ? "text-base" : "text-sm")}>
            <Check size={16} />
            <Text>{reason}</Text>
          </div>
        ))}
      </div>
    </div>
  );
}

function PhoneMockup() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
    const card = heroMockupCards[index];


  const next = (dir = 1) => {
    setDirection(dir);
    setIndex((current) => getNextIndex(current, 1, heroMockupCards.length));
  };

  const previous = () => {
    setDirection(-1);
    setIndex((current) => getNextIndex(current, -1, heroMockupCards.length));
  };

  return (
    <div className="relative mx-auto w-[315px] max-w-[88vw] md:w-[365px]">
      <motion.div
        initial={{ opacity: 0, x: -20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
        transition={{ opacity: { delay: 0.35, duration: 0.55 }, x: { delay: 0.35, duration: 0.55 }, y: { delay: 0.35, duration: 3.2, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute -left-[80px] top-12 z-40 hidden h-[132px] w-[132px] place-items-center rounded-full bg-white/90 text-center shadow-[0_22px_45px_rgba(15,23,42,0.28),0_8px_18px_rgba(54,117,246,0.22)] backdrop-blur-xl sm:grid"
      >
        <p className="text-[20px] font-bold leading-[1.05] tracking-normal text-[#3675F6]">
          <Text>Свайпай</Text><br />
          <Text>вакансии</Text>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24, y: -16 }}
        animate={{ opacity: 1, x: 0, y: [0, -5, 0] }}
        transition={{ opacity: { delay: 0.45, duration: 0.55 }, x: { delay: 0.45, duration: 0.55 }, y: { delay: 0.45, duration: 3.6, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute -right-[76px] bottom-[101px] z-40 hidden h-[142px] w-[142px] place-items-center rounded-full bg-white/90 text-center shadow-[0_22px_45px_rgba(15,23,42,0.28),0_8px_18px_rgba(54,117,246,0.22)] backdrop-blur-xl sm:grid"
      >
        <p className="text-[20px] font-bold leading-[1.06] tracking-normal text-[#3675F6]">
          <Text>Адаптируй</Text><br />
          <Text>резюме</Text>
        </p>
      </motion.div>

      <div className="relative overflow-visible rounded-[54px] bg-transparent p-2 shadow-[0_40px_90px_rgba(15,23,42,0.24)]">
        <PhoneFrame />
        <div className="relative overflow-visible rounded-[54px] bg-[#F4F8FF] p-5 pt-14">
          <div className="absolute left-1/2 top-5 h-1.5 w-24 -translate-x-1/2 rounded-full bg-blue-200" />
          <div className="mb-4 flex items-center justify-between">
            <div className="absolute left-1/2 top-[72px] -translate-x-1/2 text-center">
              <p className="text-[13px] font-normal tracking-normal text-[#98A4BD]">
                <Text>Резюме Product Designer</Text>
              </p>
            </div>
            <div className="ml-auto grid h-10 w-10 place-items-center rounded-full bg-white text-[#3675F6] shadow-sm">
              <Bell size={18} />
            </div>
          </div>

          <div className="relative h-[575px]">
            <div
              className="absolute rounded-[32px] bg-[#4A82FF] shadow-[0_18px_40px_rgba(26,83,233,0.14)]"
              style={{ top: "7px", right: "-2px", width: "262px", height: "435px", transform: "rotate(2deg)", transformOrigin: "top center" }}
            />

            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={card.id}
                custom={direction}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.28}
                onDragEnd={(_, info) => {
                  if (info.offset.x > 80) next(1);
                  if (info.offset.x < -80) previous();
                }}
                initial={{ opacity: 0, scale: 0.94, x: direction > 0 ? 90 : -90, rotate: direction > 0 ? 5 : -5 }}
                animate={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.96, x: direction > 0 ? 290 : -290, rotate: direction > 0 ? 10 : -10 }}
                transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-x-0 top-[10px] z-30 cursor-grab active:cursor-grabbing"
              >
                <div className="origin-top scale-[0.92]">
                  <div className="overflow-hidden rounded-[32px] bg-white shadow-2xl shadow-blue-950/10">
                    <img
                      src={card.src}
                      alt={card.alt}
                      draggable={false}
                      className="block w-full select-none"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-x-0 bottom-7 z-30 flex items-center justify-center gap-9">
              <button
                onClick={previous}
                className="grid h-12 w-12 place-items-center text-[#7EA2FF] transition hover:scale-105"
                aria-label="Пропустить"
              >
                <X size={26} strokeWidth={2.8} />
              </button>
              <button
                className="grid h-[66px] w-[66px] place-items-center rounded-full bg-[#3675F6] text-white transition hover:scale-105"
                aria-label="Подробнее"
              >
                <Zap size={28} strokeWidth={2.5} fill="currentColor" />
              </button>
              <button
                onClick={() => next(1)}
                className="grid h-12 w-12 place-items-center text-[#7EA2FF] transition hover:scale-105"
                aria-label="Сохранить"
              >
                <Heart size={24} fill="currentColor" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-20 pt-40 text-white md:px-8 md:pb-24 md:pt-52">
      <div className="absolute left-[-12%] top-[8%] h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-[-18%] right-[-8%] h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.03fr_0.97fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <h1 className="max-w-4xl text-6xl font-[800] leading-[0.92] tracking-normal md:text-8xl lg:text-[112px]">
            <Text>Упакуем опыт для</Text><br />
            <Text>оффера мечты</Text>
          </h1>
          <p className="mt-7 max-w-2xl text-xl font-medium leading-9 text-white/80 md:text-2xl md:leading-10">
            <Text>Мы находим вакансии, где у тебя есть реальный мэтч: свайпай подходящие предложения, а ИИ поможет адаптировать резюме так, чтобы тебя заметили.</Text>
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#cta" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-[18px] font-bold text-[#3675F6] md:text-[22px] shadow-2xl shadow-blue-950/15 transition hover:-translate-y-0.5">
              <span className="relative -top-[1px] leading-none"><Text>Проверь свой мэтч</Text></span> <ArrowRight size={22} />
            </a>
            <a href="#flow" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/15 px-7 py-4 text-[18px] font-bold text-white backdrop-blur-xl md:text-[22px] transition hover:-translate-y-0.5 hover:bg-white/20">
              <Text>Как это работает</Text>
            </a>
          </div>

        </motion.div>

        <div className="relative left-[30px]">
          <img
            src={heroDecorImage}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[50px] z-0 w-[706px] max-w-none -translate-x-[48%] select-none md:top-[58px] md:w-[781px]"
          />
          <div className="relative z-10">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function HelpGridSection() {
  const cards = [
    {
      title: "Подбираем вакансии под тебя",
      text: "Учитываем опыт, навыки, зарплату, формат и карьерные цели — не только должность и город.",
      image: magnitImage,
      contentClassName: "max-w-[360px] md:max-w-[380px]",
      imageClassName: "absolute bottom-[-4px] right-[-8px] w-[58%] max-w-[455px] select-none pointer-events-none",
    },
    {
      title: <><Text>Сразу видно,</Text><br /><Text>где сильный мэтч</Text></>,
      text: <><Text>На карточке видно, насколько</Text><br /><Text>вакансия совпадает с твоим</Text><br /><Text>профилем и почему её стоит</Text><br /><Text>рассмотреть.</Text></>,
      image: matchScoreImage,
      contentClassName: "max-w-[360px] md:max-w-[370px]",
      imageClassName: "absolute bottom-[-4px] right-[-12px] w-[57%] max-w-[468px] select-none pointer-events-none",
    },
    {
      title: "Готовим резюме под ATS",
      text: <><Text>AI усиливает формулировки</Text><br /><Text>и подсвечивает нужный опыт,</Text><br /><Text>чтобы резюме прошло</Text><br /><Text>автоматический отбор.</Text></>,
      image: atsImage,
      contentClassName: "max-w-[360px] md:max-w-[370px]",
      imageClassName: "absolute bottom-0 right-[-12px] w-[67.2%] max-w-[516px] select-none pointer-events-none",
    },
    {
      title: "Пишем идеальное сопроводительное",
      text: <><Text>Помогаем собрать отклик</Text><br /><Text>под конкретную вакансию</Text><br /><Text>без часов ручной работы.</Text></>,
      image: soprovodImage,
      contentClassName: "max-w-[360px] md:max-w-[370px]",
      imageClassName: "absolute bottom-[0px] right-[-10px] w-[53%] max-w-[405px] select-none pointer-events-none",
    },
  ];

  return (
    <section id="help" className="bg-transparent px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="mb-10 text-center text-5xl font-black tracking-normal text-white md:mb-14 md:text-7xl lg:text-[72px]">
            <Text>Чем помогаем?</Text>
          </h2>
        </motion.div>

        <div className="grid gap-7 md:grid-cols-2">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.48, delay: index * 0.05 }}
              className={cn(
                "min-h-[332px] rounded-[34px] bg-white px-9 pb-9 pt-[31px] shadow-2xl shadow-blue-950/10 backdrop-blur-xl md:min-h-[364px] md:px-10 md:pb-10 md:pt-[35px]",
                card.image && "relative overflow-hidden"
              )}
            >
              <div className={cn("relative z-10", card.contentClassName)}>
                <h3 className="max-w-[410px] text-[28px] font-bold leading-[1.18] tracking-normal text-[#101828] md:max-w-[450px] md:text-[30px]">
                  <Text>{card.title}</Text>
                </h3>
                <p className="mt-[15px] max-w-[332px] text-[20px] font-[500] leading-[1.6] [letter-spacing:0] text-[#4E6188] md:max-w-[360px]">
                  <Text>{card.text}</Text>
                </p>
              </div>
              {card.image ? <img src={card.image} alt="" aria-hidden="true" className={card.imageClassName} /> : null}
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="relative mt-7 overflow-hidden rounded-[36px] bg-white px-9 pb-9 pt-[31px] shadow-2xl shadow-blue-950/10 backdrop-blur-xl md:min-h-[286px] md:px-10 md:pb-10 md:pt-[35px]"
        >
          <div className="relative z-10 max-w-[430px]">
            <h3 className="max-w-[410px] text-[28px] font-bold leading-[1.18] tracking-normal text-[#101828] md:max-w-[450px] md:text-[30px]">
              <Text>Тебя наконец замечают</Text>
            </h3>
            <p className="mt-[11px] text-[20px] font-[500] leading-[1.6] [letter-spacing:0] text-[#4E6188]">
              <Text>Отклик лучше совпадает с требованиями работодателя — значит, тебя проще заметить.</Text>
            </p>
          </div>

          <img
            src={letterImage}
            alt=""
            aria-hidden="true"
            className="absolute select-none"
            style={{ right: "8px", bottom: "-2px", width: "clamp(639px, 60.5%, 1026px)", zIndex: 0, pointerEvents: "none" }}
          />
        </motion.div>
      </div>
    </section>
  );
}

function HowItWorksPreviewSection() {
  return (
    <section id="how-it-works" className="bg-transparent px-4 pb-8 pt-[72px] md:px-8 md:pb-12 md:pt-[72px]">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-7xl"
      >
        <h2 className="mb-[70px] text-center text-5xl font-black [letter-spacing:0] text-white md:text-7xl lg:text-[72px]">
          <Text>Показать, как всё работает?</Text>
        </h2>

        <div className="relative overflow-visible rounded-[48px] bg-white px-7 py-12 shadow-2xl shadow-blue-950/10 md:px-11 md:py-14 lg:px-12 lg:py-14">
          <div className="pointer-events-none absolute bottom-[-110px] right-[-60px] h-[360px] w-[560px] rounded-full bg-[#3675F6]/18 blur-[72px]" />
          <div className="pointer-events-none absolute bottom-[-40px] right-[120px] h-[220px] w-[260px] rounded-full bg-[#3675F6]/12 blur-[54px]" />

          <div className="absolute left-7 top-8 z-20 inline-flex items-center rounded-full bg-[#3675F6] px-5 py-3 text-[16px] font-bold [letter-spacing:0] text-white shadow-lg shadow-blue-600/20 md:left-11 lg:left-12">
            <Text>Шаг 1</Text>
          </div>

          <div className="relative z-10 max-w-[760px] pt-[51px] md:pt-[51px]">
            <h3 className="mt-[5px] mb-[32px] text-[35px] font-bold leading-[1.05] tracking-normal text-[#172554] md:text-[43px]">
              <Text>Настрой профиль</Text>
            </h3>

            <div className="flex flex-col items-start gap-3">
              <div className="rounded-full border-2 border-[#A8C4FF] px-5 py-3 text-[20px] font-[500] leading-[1.36] [letter-spacing:0] text-[#172554]">
                <Text>Загрузи резюме</Text>
              </div>
              <div className="rounded-full border-2 border-[#A8C4FF] px-5 py-3 text-[20px] font-[500] leading-[1.36] [letter-spacing:0] text-[#172554]">
                <Text>Ответь на несколько вопросов</Text>
              </div>
            </div>

            <p className="mt-[32px] max-w-[560px] text-[20px] font-[500] leading-[1.70] [letter-spacing:0] text-[#4E6188]">
              <Text>Интерактивный онбординг помогает нам точнее</Text><br />
              <Text>подобрать вакансии под твой опыт, навыки</Text><br />
              <Text>и карьерные цели</Text>
            </p>
          </div>

          {HOW_IT_WORKS_BUBBLES.map((bubble) => (
            <motion.div
              key={bubble.label}
              aria-hidden="true"
              className={`absolute z-10 hidden rounded-full bg-[#2F67F6] text-center text-white shadow-[0_18px_44px_rgba(12,28,88,0.32)] md:flex ${bubble.className}`}
              animate={{ y: [0, -10, 0, 8, 0] }}
              transition={{ duration: bubble.duration, repeat: Infinity, ease: "easeInOut", delay: bubble.delay }}
            >
              <div className="m-auto px-4 text-[18px] font-medium tracking-normal md:text-[20px] lg:text-[22px]">
                <Text>{bubble.label}</Text>
              </div>
            </motion.div>
          ))}

          <img
            src={compMan}
            alt=""
            aria-hidden="true"
            className="absolute select-none"
            style={{ left: "57.3%", bottom: "-28px", width: "clamp(390px, 31.5%, 540px)", zIndex: 20, pointerEvents: "none" }}
          />
        </div>

        <div className="relative mt-[52px] overflow-visible rounded-[48px] bg-white px-7 py-12 shadow-2xl shadow-blue-950/10 md:px-11 md:py-14 lg:px-12 lg:py-14">
          <div className="pointer-events-none absolute bottom-[-110px] right-[-60px] h-[360px] w-[560px] rounded-full bg-[#3675F6]/18 blur-[72px]" />
          <div className="pointer-events-none absolute bottom-[-40px] right-[120px] h-[220px] w-[260px] rounded-full bg-[#3675F6]/12 blur-[54px]" />

          <div className="absolute left-7 top-8 z-20 inline-flex items-center rounded-full bg-[#3675F6] px-5 py-3 text-[16px] font-bold [letter-spacing:0] text-white shadow-lg shadow-blue-600/20 md:left-11 lg:left-12">
            <Text>Шаг 2</Text>
          </div>

          <img
            src={cardsImage}
            alt=""
            aria-hidden="true"
            className="absolute select-none"
            style={{ left: "-97px", bottom: "0px", width: "clamp(760px, 64%, 1040px)", zIndex: 5, pointerEvents: "none" }}
          />

          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[33px] left-[158px] z-[12] grid h-[70.4px] w-[70.4px] place-items-center rounded-full bg-white shadow-[0_20px_44px_rgba(15,23,42,0.18),0_8px_18px_rgba(54,117,246,0.18)]"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <X size={28.6} strokeWidth={2.8} className="text-[#4D7EF7]" />
          </motion.div>

          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[33px] left-[389px] z-[12] grid h-[70.4px] w-[70.4px] place-items-center rounded-full bg-white shadow-[0_20px_44px_rgba(15,23,42,0.18),0_8px_18px_rgba(54,117,246,0.18)]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.35 }}
          >
            <Heart size={26.4} strokeWidth={2.4} fill="currentColor" className="text-[#4D7EF7]" />
          </motion.div>

          <div className="relative z-10 -mt-[28px] flex min-h-[286px] justify-end pt-0 md:min-h-[300px]">
            <div className="w-full max-w-[540px] pt-0">
              <h3 className="mt-[5px] mb-[32px] text-[35px] font-bold leading-[1.05] tracking-normal text-[#172554] md:text-[43px]">
                <Text>Создаем ленту вакансий</Text>
              </h3>

              <div className="flex flex-col items-start gap-3">
                <div className="rounded-full border-2 border-[#A8C4FF] px-5 py-3 text-[20px] font-[500] leading-[1.36] [letter-spacing:0] text-[#172554]">
                  <Text>Оцени свой </Text><span className="font-bold text-[#0B57FF]"><Text>мэтч</Text></span>
                </div>
                <div className="rounded-full border-2 border-[#A8C4FF] px-5 py-3 text-[20px] font-[500] leading-[1.36] [letter-spacing:0] text-[#172554]">
                  <Text>Свайпай вправо, если вакансия нравится</Text>
                </div>
                <div className="rounded-full border-2 border-[#A8C4FF] px-5 py-3 text-[20px] font-[500] leading-[1.36] [letter-spacing:0] text-[#172554]">
                  <Text>Свайпай влево, если вакансия не интересна</Text>
                </div>
              </div>

              <p className="mt-[32px] max-w-[520px] text-[20px] font-[500] leading-[1.6] [letter-spacing:0] text-[#4E6188]">
                <span className="font-bold text-[#0B57FF]"><Text>Мэтч</Text></span>{" "}
                <Text>показывает, насколько вакансия совпадает с твоим профилем и почему её стоит рассмотреть</Text>
              </p>
            </div>
          </div>
        </div>

        <div className="relative mt-[52px] overflow-visible rounded-[48px] bg-white px-7 py-12 shadow-2xl shadow-blue-950/10 md:px-11 md:py-14 lg:px-12 lg:py-14">
          <div className="pointer-events-none absolute bottom-[-110px] right-[-60px] h-[360px] w-[560px] rounded-full bg-[#3675F6]/18 blur-[72px]" />
          <div className="pointer-events-none absolute bottom-[-40px] right-[120px] h-[220px] w-[260px] rounded-full bg-[#3675F6]/12 blur-[54px]" />

          <div className="absolute left-7 top-8 z-20 inline-flex items-center rounded-full bg-[#3675F6] px-5 py-3 text-[16px] font-bold [letter-spacing:0] text-white shadow-lg shadow-blue-600/20 md:left-11 lg:left-12">
            <Text>Шаг 3</Text>
          </div>

          <img
            src={analyzeImage}
            alt=""
            aria-hidden="true"
            className="absolute select-none"
            style={{ right: "28px", bottom: "-1px", width: "clamp(634px, 47.0%, 893px)", zIndex: 6, pointerEvents: "none" }}
          />

          <div className="relative z-10 max-w-[620px] pt-[51px] md:pt-[51px]">
            <h3 className="mt-[5px] mb-[32px] text-[35px] font-bold leading-[1.05] tracking-normal text-[#172554] md:text-[43px]">
              <Text>Анализ резюме</Text>
            </h3>

            <div className="flex flex-col items-start gap-3">
              <div className="rounded-full border-2 border-[#A8C4FF] px-5 py-3 text-[20px] font-[500] leading-[1.36] [letter-spacing:0] text-[#172554]">
                <Text>Проверяем ATS</Text>
              </div>
              <div className="rounded-full border-2 border-[#A8C4FF] px-5 py-3 text-[20px] font-[500] leading-[1.36] [letter-spacing:0] text-[#172554]">
                <Text>Находим слабые места</Text>
              </div>
              <div className="rounded-full border-2 border-[#A8C4FF] px-5 py-3 text-[20px] font-[500] leading-[1.36] [letter-spacing:0] text-[#172554]">
                <Text>Подсвечиваем сильный опыт</Text>
              </div>
            </div>

            <p className="mt-[32px] max-w-[560px] text-[20px] font-[500] leading-[1.6] [letter-spacing:0] text-[#4E6188]">
              <Text>ИИ разбирает резюме и показывает, что помогает пройти отбор, а что стоит усилить перед откликом.</Text>
            </p>
          </div>
        </div>

        <div className="relative mt-[52px] overflow-visible rounded-[48px] bg-white px-7 py-12 shadow-2xl shadow-blue-950/10 md:px-11 md:py-14 lg:px-12 lg:py-14">
          <div className="pointer-events-none absolute bottom-[-110px] right-[-60px] h-[360px] w-[560px] rounded-full bg-[#3675F6]/18 blur-[72px]" />
          <div className="pointer-events-none absolute bottom-[-40px] right-[120px] h-[220px] w-[260px] rounded-full bg-[#3675F6]/12 blur-[54px]" />

          <div className="absolute left-7 top-8 z-20 inline-flex items-center rounded-full bg-[#3675F6] px-5 py-3 text-[16px] font-bold [letter-spacing:0] text-white shadow-lg shadow-blue-600/20 md:left-11 lg:left-12">
            <Text>Шаг 4</Text>
          </div>

          <img
            src={adaptImage}
            alt=""
            aria-hidden="true"
            className="absolute select-none"
            style={{ left: "34px", bottom: "10px", width: "clamp(565px, 47.5%, 791px)", zIndex: 6, pointerEvents: "none" }}
          />

          <div className="relative z-10 flex min-h-[286px] justify-end pt-[8px] md:min-h-[300px]">
            <div className="w-full max-w-[540px] pt-[6px]">
              <h3 className="mt-[5px] mb-[32px] text-[35px] font-bold leading-[1.05] tracking-normal text-[#172554] md:text-[43px]">
                <Text>Адаптация резюме</Text>
              </h3>

              <div className="flex flex-col items-start gap-3">
                <div className="rounded-full border-2 border-[#A8C4FF] px-5 py-3 text-[20px] font-[500] leading-[1.36] [letter-spacing:0] text-[#172554]">
                  <Text>Правильно формулируем ваш опыт</Text>
                </div>
                <div className="rounded-full border-2 border-[#A8C4FF] px-5 py-3 text-[20px] font-[500] leading-[1.36] [letter-spacing:0] text-[#172554]">
                  <Text>Свайпай вправо, если вакансия нравится</Text>
                </div>
                <div className="rounded-full border-2 border-[#A8C4FF] px-5 py-3 text-[20px] font-[500] leading-[1.36] [letter-spacing:0] text-[#172554]">
                  <Text>Свайпай влево, если вакансия не интересна</Text>
                </div>
              </div>

              <p className="mt-[32px] max-w-[520px] text-[20px] font-[500] leading-[1.6] [letter-spacing:0] text-[#4E6188]">
                <Text>OfferMatch адаптирует резюме под конкретную вакансию и собирает сопроводительное, чтобы отклик выглядел точнее и заметнее.</Text>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ProblemSolution() {
  return (
    <section className="bg-transparent px-4 py-16 md:px-8 md:py-20">
      <div className="relative mx-auto max-w-7xl rounded-[48px] bg-white p-6 shadow-2xl shadow-blue-950/10 backdrop-blur-xl md:p-10 lg:p-14">
        <div className="absolute left-6 top-6 rounded-full bg-[#3675F6] px-4 py-2 text-[14px] font-black uppercase [letter-spacing:0] text-white md:left-10 md:top-10">
          <Text>Проблема</Text>
        </div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-12 max-w-3xl pt-12 text-center md:pt-10"
        >
          <h2 className="text-4xl font-black tracking-normal text-[#172554] md:text-6xl">
            <Text>Найти работу сложнее, чем сама работа</Text>
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600 md:text-xl">
            <span className="font-medium"><Text>Ты не ленивый.</Text></span>{" "}
            <Text>Просто рынок заставляет тебя вручную перебирать сотни вакансий, бесконечно адаптировать резюме, писать сопроводительные —</Text><br />
            <Text>и часто </Text><span className="font-medium"><Text>не получать даже ответа.</Text></span>
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {[
            ["Вакансии открылись — вечер закрылся", "Полистать вакансии перед сном превращается в полноценную вторую смену."],
            ["Требования пишут как угрозу", "«10 лет опыта, 24 года, знание всего на свете»."],
            ["Резюме приходится переписывать снова. И снова.", "Потому что ATS-фильтру всё равно, какой ты классный человек."],
          ].map(([title, text], index) => (
            <motion.div
              key={title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="rounded-[34px] border border-blue-100 bg-white p-7"
            >
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-[#3675F6] text-white shadow-sm">
                {index === 0 ? <BriefcaseBusiness size={24} strokeWidth={2} /> : null}
                {index === 1 ? <Target size={24} strokeWidth={2} /> : null}
                {index === 2 ? <FileText size={24} strokeWidth={2} /> : null}
              </div>
              <h3 className="text-2xl font-black tracking-normal text-[#172554]"><Text>{title}</Text></h3>
              <p className="mt-3 text-base font-medium leading-7 text-slate-600"><Text>{text}</Text></p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Flow() {
  const userSteps = [
    {
      number: "01",
      icon: FileText,
      title: "Загрузи резюме",
      text: "Добавь своё резюме один раз — и мы позаботимся обо всём остальном",
    },
    {
      number: "02",
      icon: Heart,
      title: "Свайпай вакансии",
      text: "Смотри только те вакансии, которые тебе действительно подходят",
    },
  ];

  const serviceSteps = [
    {
      icon: Target,
      title: "Подбираем вакансии",
      text: "AI находит только те вакансии, где у тебя реальный шанс.",
    },
    {
      icon: TrendingUp,
      title: "Анализируем мэтч",
      text: "Проверяем совпадение по навыкам, условиям и твоим пожеланиям.",
    },
    {
      icon: Sparkles,
      title: "Адаптируем резюме",
      text: "AI подстраивает твоё резюме под каждую вакансию и ATS.",
    },
    {
      icon: MessageCircle,
      title: "Пишем сопроводительное",
      text: "Генерируем персональное сопроводительное письмо, которое выделяет тебя.",
    },
    {
      icon: Send,
      title: "Откликаемся за тебя",
      text: "Отправляем отклик быстро и без лишней рутины.",
    },
    {
      icon: Check,
      title: "Всегда под контролем",
      text: "Ты видишь статусы, получаешь уведомления и двигаешься к офферу.",
    },
  ];

  return (
    <section id="flow" className="bg-transparent px-4 py-16 md:px-8 md:py-20">
      <div className="relative mx-auto max-w-7xl rounded-[48px] bg-white p-6 shadow-2xl shadow-blue-950/10 backdrop-blur-xl md:p-10 lg:p-14">
        <div className="absolute left-6 top-6 rounded-full bg-[#3675F6] px-4 py-2 text-[14px] font-black uppercase [letter-spacing:0] text-white md:left-10 md:top-10">
          <Text>Решение</Text>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-12 max-w-5xl pt-12 text-center md:pt-10"
        >
          <h2 className="text-4xl font-black tracking-normal text-[#172554] md:text-6xl">
            <Text>OfferMatch меняет</Text><br />
            <Text>правила игры</Text>
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600 md:text-xl">
            <span className="font-bold text-[#172554]"><Text>Мы уравниваем тебя в силах с акулами рекрутинга.</Text></span><br />
            <Text>Пока другие тратят часы на рутину — ты получаешь подходящие офферы.</Text>
          </p>
        </motion.div>

        <div className="grid items-stretch gap-4 lg:grid-cols-[0.72fr_auto_2fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-[36px] border border-blue-100 bg-[#DCEBFF] p-5 shadow-xl shadow-blue-950/5"
          >
            <div className="flex min-h-[82px] items-center justify-center text-center">
              <h3 className="text-3xl font-black tracking-normal text-[#172554]"><Text>С тебя 2 простых шага</Text></h3>
            </div>

            <div className="mt-8 grid gap-4">
              {userSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="rounded-[30px] bg-white p-5 shadow-xl shadow-blue-950/5">
                    <div className="mb-5 flex items-start justify-between">
                      <span className="text-4xl font-black tracking-normal text-blue-100">{step.number}</span>
                      <div className="grid h-16 w-16 place-items-center rounded-2xl bg-blue-50 text-[#3675F6] shadow-lg shadow-blue-950/5">
                        <Icon size={28} />
                      </div>
                    </div>
                    <h4 className="text-lg font-black tracking-normal text-[#172554]"><Text>{step.title}</Text></h4>
                    <p className="mt-2 text-base font-medium leading-7 text-slate-600"><Text>{step.text}</Text></p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <div className="hidden items-center justify-center lg:flex">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-[#3675F6] text-white shadow-xl shadow-blue-600/25">
              <ArrowRight size={32} />
            </div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="relative rounded-[36px] border border-blue-100 bg-[#DCEBFF] p-4 shadow-xl shadow-blue-950/5"
          >
            <div className="flex min-h-[82px] items-center justify-center text-center">
              <h3 className="text-3xl font-black tracking-normal text-[#172554]"><Text>Мы берём рутину на себя</Text></h3>
            </div>

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {serviceSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="rounded-[28px] bg-white p-4 shadow-xl shadow-blue-950/5">
                    <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-[#3675F6] text-white shadow-lg shadow-blue-600/20">
                      <Icon size={22} />
                    </div>
                    <h4 className="text-xl font-black tracking-normal text-[#172554]"><Text>{step.title}</Text></h4>
                    <p className="mt-3 text-base font-medium leading-7 text-slate-600"><Text>{step.text}</Text></p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="mx-auto mt-8 flex max-w-5xl items-center gap-5 rounded-[28px] border border-blue-100 bg-white/75 px-6 py-5 shadow-xl shadow-blue-950/5">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white text-[#3675F6] shadow-lg shadow-blue-950/10">
            <Sparkles size={24} />
          </div>
          <p className="text-lg leading-8 text-slate-600 md:text-xl">
            <Text>Мы экономим тебе десятки часов, сотни нервов и даём то,</Text><br />
            <Text>чего нет у обычных сервисов — </Text><span className="font-bold text-[#172554]"><Text>реальный шанс на оффер.</Text></span>
          </p>
        </div>
      </div>
    </section>
  );
}

function MatchScore() {
  const active = vacancies[0];

  return (
    <section id="match" className="bg-transparent px-4 py-16 text-white md:px-8 md:py-20">
      <div className="relative mx-auto max-w-7xl rounded-[48px] bg-white/14 p-6 shadow-2xl shadow-blue-950/10 ring-1 ring-white/20 backdrop-blur-xl md:p-10 lg:p-14">
        <div className="absolute left-6 top-6 rounded-full bg-[#3675F6] px-4 py-2 text-[14px] font-black uppercase [letter-spacing:0] text-white md:left-10 md:top-10">
          <Text>Механики</Text>
        </div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-12 max-w-3xl pt-12 text-center md:pt-10"
        >
          <h2 className="text-4xl font-black tracking-normal text-white md:text-6xl">
            <Text>Уровень мэтча</Text>
          </h2>
          <p className="mt-5 text-lg font-medium leading-8 text-white md:text-xl">
            <Text>ИИ анализирует ключевые параметры и показывает,</Text><br />
            <Text>насколько вакансия тебе подходит</Text>
          </p>
        </motion.div>

        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="h-full rounded-[42px] border border-white/20 bg-white/15 p-6 shadow-2xl shadow-blue-950/10 backdrop-blur-xl md:p-8"
          >
            <VacancyCard vacancy={active} largerSmallText className="h-full" />
          </motion.div>

          <div className="space-y-4">
            {matchFactors.map((factor, index) => (
              <motion.div
                key={factor.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-[30px] border border-white/20 bg-white/15 p-5 backdrop-blur-xl"
              >
                <div className="mb-3 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-black tracking-normal"><Text>{factor.label}</Text></h3>
                    <p className="mt-1 text-base font-medium text-white/90"><Text>{factor.text}</Text></p>
                  </div>
                  <span className="text-2xl font-black tracking-normal">{factor.value}%</span>
                </div>
                <ProgressBar value={factor.value} light />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyYouFit() {
  return (
    <section className="bg-transparent px-4 py-16 md:px-8 md:py-20">
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 rounded-[48px] bg-white p-6 shadow-2xl shadow-blue-950/10 backdrop-blur-xl md:p-10 lg:grid-cols-[1fr_0.95fr] lg:p-14">
        <div className="absolute left-6 top-6 rounded-full bg-[#3675F6] px-4 py-2 text-[14px] font-black uppercase [letter-spacing:0] text-white md:left-10 md:top-10">
          <Text>Почему ты подходишь</Text>
        </div>
        <div className="pt-12 md:pt-10">
          <h2 className="text-4xl font-black tracking-normal text-[#172554] md:text-6xl"><Text>Мэтч расшифровывается по-человечески</Text></h2>
          <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-slate-600 md:text-xl">
            <Text>Пользователь видит не абстрактное «подходит», а конкретные аргументы: какие требования закрыты, где сильные стороны и что лучше поправить перед откликом.</Text>
          </p>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-[42px] bg-white p-5 shadow-2xl shadow-blue-950/10 md:p-7"
        >
          <div className="rounded-[34px] bg-white p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-normal text-blue-400"><Text>Разбор вакансии</Text></p>
                <h3 className="mt-1 text-3xl font-black tracking-normal text-[#172554]">Product Designer</h3>
              </div>
              <div className="rounded-2xl bg-[#3675F6] px-4 py-3 text-center text-white">
                <p className="text-2xl font-black leading-none">94%</p>
                <p className="text-[10px] font-black uppercase tracking-normal text-white/70">match</p>
              </div>
            </div>

            <div className="space-y-3">
              {vacancies[0].reasons.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-bold leading-6 text-emerald-700">
                  <Check className="mt-0.5 shrink-0" size={17} />
                  <Text>{item}</Text>
                </div>
              ))}
              {vacancies[0].gaps.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-amber-50 px-4 py-3 text-sm font-bold leading-6 text-amber-700">
                  <Sparkles className="mt-0.5 shrink-0" size={17} />
                  <Text>{item}</Text>
                </div>
              ))}
            </div>

            <button className="mt-6 w-full rounded-full bg-[#1E63F2] px-6 py-4 text-base font-black text-white transition hover:-translate-y-0.5">
              <Text>Улучшить резюме под вакансию</Text>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ResumeAdaptation() {
  return (
    <section id="resume" className="bg-transparent px-4 py-16 md:px-8 md:py-20">
      <div className="relative mx-auto max-w-7xl rounded-[48px] bg-white p-6 shadow-2xl shadow-blue-950/10 backdrop-blur-xl md:p-10 lg:p-14">
        <div className="absolute left-6 top-6 rounded-full bg-[#3675F6] px-4 py-2 text-[14px] font-black uppercase [letter-spacing:0] text-white md:left-10 md:top-10">
          <Text>ИИ-адаптация резюме</Text>
        </div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-12 max-w-5xl pt-12 text-center md:pt-10"
        >
          <h2 className="text-4xl font-black tracking-normal text-[#172554] md:text-6xl">
            <Text>Отклик становится точнее,</Text><br />
            <Text>а не просто чаще</Text>
          </h2>
          <p className="mt-5 text-lg font-medium leading-8 text-slate-600 md:text-xl">
            <Text>OfferMatch не превращает поиск в массовую рассылку. AI помогает сделать резюме релевантнее конкретной вакансии и оставить контроль за пользователем.</Text>
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-[42px] bg-white p-6 shadow-xl shadow-blue-950/10 md:p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-[#3675F6]">
                <FileText size={24} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-black tracking-normal text-[#172554]"><Text>До адаптации</Text></h3>
            </div>
            <div className="space-y-3 text-base font-medium leading-7 text-slate-600">
              <p className="rounded-2xl bg-slate-50 p-4"><Text>Работал над интерфейсами мобильного приложения и веб-сервиса.</Text></p>
              <p className="rounded-2xl bg-slate-50 p-4"><Text>Проводил исследования пользователей и делал прототипы.</Text></p>
              <p className="rounded-2xl bg-slate-50 p-4"><Text>Участвовал в создании дизайн-системы.</Text></p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-[42px] bg-[#3675F6] p-6 text-white shadow-2xl shadow-blue-950/12 md:p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 text-white">
                <Wand2 size={24} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-black tracking-normal"><Text>После AI-правок</Text></h3>
            </div>
            <div className="space-y-3 text-base font-semibold leading-7 text-white/85">
              <p className="rounded-2xl bg-white/15 p-4"><Text>Спроектировал mobile-first UX для B2C-приложения: сократил путь до целевого действия на 28%.</Text></p>
              <p className="rounded-2xl bg-white/15 p-4"><Text>Провёл 18 интервью, собрал JTBD-гипотезы и перевёл инсайты в интерактивный прототип.</Text></p>
              <p className="rounded-2xl bg-white/15 p-4"><Text>Поддерживал дизайн-систему: компоненты, состояния, токены и handoff для разработки.</Text></p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function QuickApply() {
  const steps = ["Свайп вправо", "AI готовит резюме", "Проверка", "Отклик"];

  return (
    <section className="bg-transparent px-4 py-16 md:px-8 md:py-20">
      <div className="relative mx-auto max-w-7xl rounded-[48px] bg-white/14 p-6 text-white shadow-2xl shadow-blue-950/10 ring-1 ring-white/20 backdrop-blur-xl md:p-10 lg:p-14">
        <div className="absolute left-6 top-6 rounded-full bg-[#3675F6] px-4 py-2 text-[14px] font-black uppercase [letter-spacing:0] text-white md:left-10 md:top-10">
          <Text>Быстрый отклик</Text>
        </div>
        <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="pt-12 md:pt-10">
            <h2 className="text-4xl font-black tracking-normal md:text-6xl"><Text>Свайп вправо — и резюме готовится под вакансию</Text></h2>
            <p className="mt-5 text-lg font-medium leading-8 text-white/70 md:text-xl">
              <Text>Пользователь не теряет контроль: AI предлагает версию, пользователь проверяет и только потом отправляет отклик.</Text>
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-[28px] border border-white/10 bg-white/10 p-5"
              >
                <div className="mb-6 grid h-12 w-12 place-items-center rounded-full bg-white text-[#3675F6]">
                  {index === 0 ? <Heart size={24} strokeWidth={2} fill="currentColor" /> : null}
                  {index === 1 ? <Wand2 size={24} strokeWidth={2} /> : null}
                  {index === 2 ? <Check size={24} strokeWidth={2} /> : null}
                  {index === 3 ? <Send size={24} strokeWidth={2} /> : null}
                </div>
                <p className="text-sm font-black uppercase tracking-normal text-white/45">Шаг {index + 1}</p>
                <h3 className="mt-2 text-xl font-black tracking-normal"><Text>{step}</Text></h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Tracker() {
  return (
    <section id="tracker" className="bg-transparent px-4 py-16 md:px-8 md:py-20">
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 rounded-[48px] bg-white p-6 shadow-2xl shadow-blue-950/10 backdrop-blur-xl md:p-10 lg:grid-cols-[1fr_1fr] lg:p-14">
        <div className="absolute left-6 top-6 rounded-full bg-[#3675F6] px-4 py-2 text-[14px] font-black uppercase [letter-spacing:0] text-white md:left-10 md:top-10">
          <Text>Трекинг</Text>
        </div>
        <div className="pt-12 md:pt-10">
          <h2 className="text-4xl font-black tracking-normal text-[#172554] md:text-6xl"><Text>Весь поиск — в одном понятном статусе</Text></h2>
          <p className="mt-5 text-lg font-medium leading-8 text-slate-600 md:text-xl">
            <Text>Избранные вакансии, адаптированные резюме, отправленные отклики и статусы не теряются между вкладками, почтой и заметками.</Text>
          </p>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-[42px] bg-white p-5 shadow-2xl shadow-blue-950/10 md:p-7"
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-normal text-blue-400"><Text>Мои отклики</Text></p>
              <h3 className="mt-1 text-3xl font-black tracking-normal text-[#172554]"><Text>Прогресс поиска</Text></h3>
            </div>
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-[#3675F6]">
              <TrendingUp size={24} strokeWidth={2} />
            </div>
          </div>

          <div className="space-y-4">
            {trackerItems.map((item) => (
              <div key={item.company} className="rounded-[26px] border border-blue-100 bg-blue-50/50 p-4">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-black tracking-normal text-[#172554]">{item.role}</h4>
                    <p className="text-sm font-bold text-slate-500">{item.company}</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1.5 text-xs font-black text-[#3675F6]"><Text>{item.status}</Text></span>
                </div>
                <ProgressBar value={item.progress} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="bg-transparent px-4 py-16 md:px-8 md:py-20">
      <div className="relative mx-auto max-w-7xl rounded-[48px] bg-white p-6 shadow-2xl shadow-blue-950/10 backdrop-blur-xl md:p-10 lg:p-14">
        <div className="absolute left-6 top-6 rounded-full bg-[#3675F6] px-4 py-2 text-[14px] font-black uppercase [letter-spacing:0] text-white md:left-10 md:top-10">
          <Text>Преимущества</Text>
        </div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-12 max-w-3xl pt-12 text-center md:pt-10"
        >
          <h2 className="text-4xl font-black tracking-normal text-[#172554] md:text-6xl">
            <Text>Поиск работы становится легче</Text>
          </h2>
          <p className="mt-5 text-lg font-medium leading-8 text-slate-600 md:text-xl">
            <Text>OfferMatch убирает лишние решения, показывает понятные совпадения и помогает действовать увереннее.</Text>
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="rounded-[36px] border border-blue-100 bg-white p-7 shadow-xl shadow-blue-950/5"
              >
                <div className="mb-7 grid h-14 w-14 place-items-center rounded-2xl bg-[#3675F6] text-white shadow-lg shadow-blue-600/20">
                  <Icon size={24} strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-black tracking-normal text-[#172554]"><Text>{benefit.title}</Text></h3>
                <p className="mt-3 text-base font-medium leading-7 text-slate-600"><Text>{benefit.text}</Text></p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="bg-transparent px-4 py-16 text-white md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="mb-10 text-center text-5xl font-black tracking-normal text-white md:mb-14 md:text-7xl lg:text-[72px]">
            <Text>Тарифы</Text>
          </h2>
        </motion.div>

        <div className="grid gap-7 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.48, delay: index * 0.05 }}
              className="flex min-h-[762px] flex-col rounded-[38px] bg-white px-7 pb-7 pt-10 shadow-2xl shadow-blue-950/10 backdrop-blur-xl md:min-h-[790px] md:px-8"
            >
              <div className="text-center">
                <h3 className={cn("text-[36px] font-[850] leading-[0.95] tracking-normal md:text-[44px]", plan.titleClassName)}>
                  <Text>{plan.name}</Text>
                </h3>
                <p className="mt-2 text-[18px] font-medium leading-[1.35] tracking-normal text-[#7F7F7F]">
                  <Text>{plan.subtitle}</Text>
                </p>
                <div className="mt-8 flex items-end justify-center gap-2 text-[#1A1A1A]">
                  <span className="text-[46px] font-black leading-none tracking-normal md:text-[52px]">{plan.price}</span>
                  <span className="relative -top-1 text-[26px] font-black leading-none tracking-normal">{plan.currency}</span>
                </div>
                <p className="mt-2 text-[18px] font-medium leading-[1.3] tracking-normal text-[#0B57FF]">
                  <Text>{plan.period}</Text>
                </p>
              </div>

              <div className="mt-10 space-y-4">
                {plan.items.map((item) => (
                  <div key={item.text} className="flex items-start gap-4 text-left">
                    <span
                      className={cn(
                        "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
                        item.included ? "bg-[#D7E7D3] text-[#4BB75B]" : "bg-[#F27449] text-white"
                      )}
                    >
                      {item.included ? <Check size={13} strokeWidth={3} /> : <X size={13} strokeWidth={3} />}
                    </span>
                    <p className="text-[18px] font-medium leading-[1.28] tracking-normal text-[#272727]">
                      <Text>{item.text}</Text>
                    </p>
                  </div>
                ))}
              </div>

              <a href="https://offermatch.online/match-analyze?vacancyId=3" className="mt-auto inline-flex items-center justify-center rounded-full bg-[#3477F8] px-6 py-4 text-[18px] font-bold leading-none tracking-normal text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5">
                <Text>Выбрать тариф</Text>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-transparent px-4 py-16 text-white md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="mb-10 text-center text-5xl font-black tracking-normal text-white md:mb-14 md:text-7xl lg:text-[72px]">
            <Text>Частые вопросы</Text>
          </h2>
        </motion.div>

        <div className="space-y-5 md:space-y-6">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.button
                key={item.question}
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="w-full rounded-[34px] bg-white px-6 py-6 text-left shadow-xl shadow-blue-950/10 transition hover:-translate-y-0.5 md:px-10 md:py-10"
              >
                <div className="flex items-center justify-between gap-6">
                  <h3 className="text-[28px] font-medium leading-[1.15] tracking-normal text-[#0F285A] md:text-[31px]">
                    <Text>{item.question}</Text>
                  </h3>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#EFF2F8] text-[#9FB1CE] md:h-12 md:w-12">
                    <ChevronUp className={cn("transition duration-200", isOpen ? "rotate-0" : "rotate-180")} size={22} strokeWidth={2.5} />
                  </span>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 20 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-5xl text-lg font-medium leading-8 text-slate-600 md:text-xl">
                        <Text>{item.answer}</Text>
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="bg-transparent px-4 py-16 text-white md:px-8 md:py-20">
      <div className="relative mx-auto max-w-7xl overflow-visible rounded-[48px] bg-white px-7 py-12 shadow-2xl shadow-blue-950/10 md:px-11 md:py-14 lg:px-12 lg:py-14">
        <div className="pointer-events-none absolute bottom-[-110px] right-[-60px] h-[360px] w-[560px] rounded-full bg-[#3675F6]/18 blur-[72px]" />
        <div className="pointer-events-none absolute bottom-[-40px] right-[120px] h-[220px] w-[260px] rounded-full bg-[#3675F6]/12 blur-[54px]" />

        <img
          src={communityImage}
          alt=""
          aria-hidden="true"
          className="absolute select-none"
          style={{ right: "26px", bottom: "0px", width: "clamp(560px, 43.5%, 760px)", zIndex: 6, pointerEvents: "none" }}
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative z-10 max-w-[560px]"
        >
          <h2 className="text-[46px] font-black leading-[0.96] tracking-normal text-[#172554] md:text-[68px]">
            <Text>Не ищи оффер</Text><br />
            <Text>в одиночку</Text>
          </h2>
          <p className="mt-8 max-w-[470px] text-[20px] font-[500] leading-[1.52] tracking-normal text-[#4E6188]">
            <Text>Подписывайся на наш Telegram-канал: делимся вакансиями, советами по резюме, разбором откликов и короткими подсказками, которые помогают искать работу спокойнее и точнее.</Text>
          </p>
          <a href="https://t.me/offer_match" className="mt-8 inline-flex items-center justify-center gap-3 rounded-[20px] bg-[#3477F8] px-7 py-5 text-[18px] font-bold leading-none tracking-normal text-white shadow-[0_18px_34px_rgba(52,119,248,0.28)] transition hover:-translate-y-0.5">
            <Send size={20} strokeWidth={2.5} />
            <Text>Перейти в Telegram</Text>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-transparent px-4 py-8 text-white md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm font-bold text-white/55 md:flex-row md:items-center">
        <p><Text>© OfferMatch — карьерная AI-платформа совпадений</Text></p>
        <p><Text>Работа — это тоже match</Text></p>
      </div>
    </footer>
  );
}

export default function OfferMatchLandingReworked() {
  useEffect(() => {
    const fontLinkId = "offermatch-instrument-sans-font";
    if (!document.getElementById(fontLinkId)) {
      const link = document.createElement("link");
      link.id = fontLinkId;
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;700;800;900&display=swap";
      document.head.appendChild(link);
    }

    const ignoredTags = new Set(["script", "style", "textarea", "code", "pre"]);

    const fixTextNode = (node) => {
      const parentTag = node.parentElement?.tagName?.toLowerCase();
      if (ignoredTags.has(parentTag)) return;
      const fixed = preventWidows(node.nodeValue || "");
      if (node.nodeValue !== fixed) node.nodeValue = fixed;
    };

    const fixRoot = (root) => {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) {
        fixTextNode(walker.currentNode);
      }
    };

    fixRoot(document.body);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "characterData") {
          fixTextNode(mutation.target);
        }

        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) fixTextNode(node);
          if (node.nodeType === Node.ELEMENT_NODE) fixRoot(node);
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#3675F6_0%,#2F7DFF_42%,#75ADFF_100%)] antialiased" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
      <Header />
      <Hero />
      <HelpGridSection />
      <HowItWorksPreviewSection />
      <PricingSection />
      <FAQSection />
      <CTA />
      <Footer />
    </main>
  );
}
