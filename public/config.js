const CONFIG = {

  name: "Bartosz Makowski",
  title: "Intelligent Electronics Engineer | Data Enthusiast | Filmmaker",

  photo: "",

  email: "mako.bartosz@gmail.com",
  phone: "+48 602 753 296",

  github: "https://github.com/BMakx",
  linkedin: "https://www.linkedin.com/in/bartosz-makowski-3958a615b/",
  website: "https://nami.pwr.edu.pl",
  websiteLabel: "KN NaMi",

  aboutMe: `I'm an engineer of Intelligent Electronics pursuing a Master's degree in Electronic Mechatronics Systems at Wroclaw University of Science and Technology, consistently among the top of my year. I'm passionate about the latest advances in AI and thin-film technologies used in modern electronics.<br><br>As President of <b>KN NaMi</b>, I lead a research group focused on micro- and nanotechnology projects.<br><br>Beyond academics, I'm deeply passionate about cinematography and I dream of creating my own films. I also enjoy music production and birdwatching.`,

  experience: [
    {
      date: "09.2024 - present",
      title: "President @ KN NaMi",
      subtitle: "Student Research Group - Micro & Nanotechnology, Wroclaw University of Science and Technology",
      highlight: true,
      bullets: [
        "Leading micro- and nanotechnology projects",
        "Managing a team of over a dozen members",
        "Establishing industry partnerships",
      ],
    },
    {
      date: "07.2025 - 10.2025",
      title: "Data Analytics Intern @ KRUK S.A.",
      subtitle: "",
      highlight: false,
      bullets: [
        "Developed and optimized regression & classification models (scikit-learn, XGBoost, LightGBM)",
        "Automated ML pipelines and visualized model metrics (Seaborn, Matplotlib)",
        "Integrated analytics pipeline with Microsoft Fabric",
      ],
    },
    {
      date: "06.2022 - 09.2023",
      title: "Billing Assistant @ ALAB Laboratoria",
      subtitle: "",
      highlight: false,
      bullets: [
        "Verified financial and billing documents",
        "Managed contact with medical facilities and contractors",
        "Operated financial and internal billing systems",
      ],
    },
    {
      date: "01.2022 - 06.2022",
      title: "Intern @ Bosch Rexroth",
      subtitle: "",
      highlight: false,
      bullets: [
        "Implemented and configured IoT sensors on a micro production line",
        "Worked with MQTT protocol for sensor data monitoring",
        "Data analysis and optimization",
      ],
    },
    {
      date: "01.2020 - 06.2020",
      title: "Intern @ EDAG Engineering Polska",
      subtitle: "",
      highlight: false,
      bullets: [
        "Created and modified 3D models in CATIA",
        "Collaboration and mentorship from engineering team",
      ],
    },
  ],

  education: [
    {
      date: "2026 - 2028",
      title: "MSc. Engineer Mechatronic Microsystems Engineering ",
      subtitle: "Wroclaw University of Science and Technology",
      highlight: false,
      bullets: [
        "Advanced micro- and nanoscale fabrication techniques",
        "Design and simulation of microelectromechanical systems (MEMS)",
        "Integration of microsystems with electronics and data processing",
      ],
    },
    {
      date: "2022 - 2026",
      title: "B.Eng. Intelligent Electronics",
      subtitle: "Wroclaw University of Science and Technology",
      highlight: false,
      bullets: [
        "Design & testing of electronic circuits (analog, digital, microprocessor, microcontroller)",
        "Programming in C/C++, Python, and environments for MCUs & FPGAs",
        "Signal processing, statistics, data acquisition systems",
        "AI & machine learning in electronics and IoT applications",
      ],
    },
    {
      date: "2018 - 2022",
      title: "Mechatronics Technician",
      subtitle: "Zespół Szkół Licealnych i Technicznych nr 1",
      highlight: false,
      bullets: [
        "PLC programming and industrial robots",
        "Electronics, mechanics, and automation fundamentals",
        "Mechatronic, pneumatic, and hydraulic systems",
      ],
    },
  ],

  certifications: [
    { name: "ProCAx 2D/3D Modeling Certificate", year: "2019" },
    { name: "Cambridge English: Advanced (CAE) - Grade A", year: "2019" },
    { name: "SEP Electrical Installation License (up to 1kV)", year: "2020" },
  ],

  skills: [
    { name: "Python",          level: 85, color: "blue",   category: "Intermediate", tag: true, tagLabel: "Python",        tagStyle: "normal" },
    { name: "C / C++ (HAL)",   level: 50, color: "blue",   category: "Intermediate", tag: true, tagLabel: "C/C++",         tagStyle: "normal" },
    { name: "VHDL",            level: 40, color: "blue",   category: "Intermediate", tag: true, tagLabel: "VHDL",          tagStyle: "normal" },
    { name: "scikit-learn",    level: 0,  color: "blue",   category: "hidden",       tag: true, tagLabel: "scikit-learn",  tagStyle: "normal" },
    { name: "NumPy",           level: 0,  color: "blue",   category: "hidden",       tag: true, tagLabel: "NumPy",         tagStyle: "normal" },
    { name: "Pandas",          level: 0,  color: "blue",   category: "hidden",       tag: true, tagLabel: "Pandas",        tagStyle: "normal" },
    { name: "Matplotlib",      level: 0,  color: "blue",   category: "hidden",       tag: true, tagLabel: "Matplotlib",    tagStyle: "normal" },
    { name: "HAL",             level: 0,  color: "blue",   category: "hidden",       tag: true, tagLabel: "HAL",           tagStyle: "normal" },
    { name: "React.js",        level: 30, color: "yellow", category: "Beginner",     tag: true, tagLabel: "React.js",      tagStyle: "beginner" },
    { name: "Matlab / Octave", level: 25, color: "yellow", category: "Beginner",     tag: true, tagLabel: "Matlab/Octave", tagStyle: "beginner" },
    { name: "MS Office",       level: 80, color: "green",  category: "Tools",        tag: true, tagLabel: "MS Office",     tagStyle: "beginner" },
    { name: "OriginLab",       level: 50, color: "green",  category: "Tools",        tag: false },
    { name: "AutoCAD / Fusion",level: 50, color: "green",  category: "Tools",        tag: true, tagLabel: "AutoCAD/Fusion",tagStyle: "beginner" },
    { name: "LaTeX",           level: 70, color: "green",  category: "Tools",        tag: true, tagLabel: "LaTeX",         tagStyle: "normal" },
    { name: "Git / GitHub",    level: 50, color: "green",  category: "Tools",        tag: true, tagLabel: "Git/GitHub",    tagStyle: "normal" },
    { name: "LabView",         level: 50, color: "green",  category: "Tools",        tag: true, tagLabel: "LabView",       tagStyle: "normal" },
  ],

  languages: [
    { name: "Polish",  level: "Native" },
    { name: "English", level: "C2 (CAE Grade A)" },
    { name: "Russian", level: "A2" },
  ],

  projects: [
    { icon: "\u{1F4D1}", label: "Bachelor Thesis - Statistical Analysis of SEM Images", url: "https://github.com/BMakx/DyplomBartek", folders: ["all", "dyplom", "github"] },
    { icon: "\u{1F4C4}", label: "Thesis (B.Eng.)",  url: "https://github.com/BMakx/DyplomBartek", folders: ["dyplom"] },
    { icon: "\u{1F4C1}", label: "GitHub",            url: "https://github.com/BMakx",              folders: ["all", "github"] },
    { icon: "\u{1F310}", label: "KN NaMi",           url: "https://nami.pwr.edu.pl",               folders: ["all", "nami"] },
    { icon: "\u{1F52C}", label: "NaMi Research",     url: "https://nami.pwr.edu.pl",               folders: ["nami"] },
  ],

  projectFolders: [
    { key: "all",    label: "All Projects" },
    { key: "dyplom", label: "Bachelor Thesis" },
    { key: "nami",   label: "KN NaMi" },
    { key: "github", label: "GitHub" },
  ],

  bootLines: [
    { text: "BAJTEK BIOS",                                        css: "boot-white" },
    { text: "MEJER INDUSTRIES SP. ZOO",                           css: "boot-dim" },
    { text: " ",                                                   css: "" },
    { text: "Main Processor : Monster Energy Drink Mango Loco",   css: "boot-green" },
    { text: "Memory Test : 1B OK",                                css: "boot-yellow" },
    { text: " ",                                                   css: "" },
    { text: "Disk check: OK",                                     css: "boot-green" },
    { text: "USB check : Not working.",                            css: "boot-green" },
    { text: "Caffeine : 100%",                                    css: "boot-green" },
    { text: " ",                                                   css: "" },
    { text: "Loading system...",                                   css: "boot-yellow" },
    { text: "Initializing modules...",                             css: "boot-dim" },
    { text: "Mounting drive C:\\BARTOSZ MAKOWSKI\\CV ...",         css: "boot-dim" },
    { text: "Loading projects database...",                        css: "boot-dim" },
    { text: "Starting desktop environment...",                     css: "boot-green" },
  ],

  interests: [
    { name: "Thin-film technologies", desc: "fascinated by deposition methods in modern electronics" },
    { name: "Music production",       desc: "creating beats and soundscapes" },
    { name: "Cinematography",         desc: "dreaming of making films" },
    { name: "Ornithology",            desc: "birdwatching enthusiast" },
  ],
};
