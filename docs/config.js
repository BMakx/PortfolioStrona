const CONFIG = {

  name: "Bartosz Makowski",
  title: "Electronics Engineer | Analog IC & FPGA Design | Filmmaker",

  photo: "",

  email: "mako.bartosz@gmail.com",
  phone: "+48 602 753 296",

  github: "https://github.com/BMakx",
  linkedin: "https://www.linkedin.com/in/bartosz-makowski-3958a615b/",
  website: "https://nami.pwr.edu.pl",
  websiteLabel: "KN NaMi",

  aboutMe: `I'm an engineer of Smart Electronics pursuing a Master's degree in Electronic Mechatronics Systems at Wroclaw University of Science and Technology, consistently among the top of my year. I work across the whole hardware stack - from transistor-level analog IC design and FPGA logic to PCBs and embedded firmware - and I'm passionate about thin-film technologies and the latest advances in AI.<br><br>At <b>SEMIQA</b> I worked as an IC Designer on mixed-signal chips, FPGA logic and PCBs. Until November 2026 I was President of <b>KN NaMi</b>, a student research group focused on micro- and nanotechnology projects.<br><br>Beyond academics, I'm deeply passionate about cinematography and I dream of creating my own films. I also enjoy music production and birdwatching.`,

  experience: [
    {
      date: "05.2026 - 11.2026",
      title: "IC Designer @ SEMIQA",
      subtitle: "Wroclaw",
      highlight: true,
      bullets: [
        "Mixed-signal integrated circuit design - schematic, simulation, layout",
        "FPGA development in VHDL",
        "PCB design and embedded firmware",
        "3D mechanical design",
        "Open-source result: <a href=\"https://github.com/SemiQa/Diff-In-Diff-Out-OpAmp\" target=\"_blank\">fully-differential op-amp with Class AB output stage (SKY130)</a>",
      ],
    },
    {
      date: "01.2026 - 11.2026",
      title: "President @ KN NaMi",
      subtitle: "Student Research Group - Micro & Nanotechnology, Wroclaw University of Science and Technology",
      highlight: true,
      bullets: [
        "Led the organization and represented it externally",
      ],
    },
    {
      date: "09.2024 - 12.2025",
      title: "Vice President @ KN NaMi",
      subtitle: "Student Research Group - Micro & Nanotechnology, Wroclaw University of Science and Technology",
      highlight: true,
      bullets: [
        "Creating and coordinating micro- and nanotechnology projects",
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
      title: "B.Eng. Smart Electronics",
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
    { name: "Analog / mixed-signal IC design (SKY130)", level: 60, color: "blue", category: "Hardware", tag: true, tagLabel: "Analog IC design", tagStyle: "normal" },
    { name: "xschem / ngspice / Magic", level: 60, color: "blue", category: "Hardware", tag: true, tagLabel: "xschem/ngspice/Magic", tagStyle: "normal" },
    { name: "FPGA (Vivado)",   level: 60, color: "blue",   category: "Hardware",     tag: true, tagLabel: "Vivado",        tagStyle: "normal" },
    { name: "PCB design (KiCad)", level: 65, color: "blue", category: "Hardware",    tag: true, tagLabel: "KiCad",         tagStyle: "normal" },
    { name: "LTspice",         level: 65, color: "blue",   category: "Hardware",     tag: true, tagLabel: "LTspice",       tagStyle: "normal" },
    { name: "Python",          level: 85, color: "blue",   category: "Intermediate", tag: true, tagLabel: "Python",        tagStyle: "normal" },
    { name: "VHDL",            level: 65, color: "blue",   category: "Intermediate", tag: true, tagLabel: "VHDL",          tagStyle: "normal" },
    { name: "Verilog",         level: 50, color: "blue",   category: "Intermediate", tag: true, tagLabel: "Verilog",       tagStyle: "normal" },
    { name: "C / C++ (HAL)",   level: 55, color: "blue",   category: "Intermediate", tag: true, tagLabel: "C/C++",         tagStyle: "normal" },
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
    { icon: "\u{1F9EE}", label: "Fully-Differential Op-Amp (SKY130)", desc: "Fully-differential op-amp with Class AB output stage - xschem + ngspice, SkyWater SKY130 PDK", url: "https://github.com/SemiQa/Diff-In-Diff-Out-OpAmp", folders: ["all", "ic"] },
    { icon: "\u{1F4D1}", label: "Bachelor Thesis - Statistical Analysis of SEM Images", desc: "B.Eng. thesis - statistical analysis of SEM images", url: "https://github.com/BMakx/DyplomBartek", folders: ["all", "dyplom", "github"] },
    { icon: "\u{1F4BE}", label: "VHDL Project",      desc: "FPGA design in VHDL",                    url: "https://github.com/BMakx/VHDL-Project",        folders: ["all", "fpga", "github"] },
    { icon: "\u{1F52C}", label: "Nanopositioner",    desc: "KN NaMi project",                        url: "https://github.com/KN-NaMi/Nanopositioner",    folders: ["nami"] },
    { icon: "\u{1F52C}", label: "Tip Etcher",        desc: "KN NaMi project",                        url: "https://github.com/KN-NaMi/Tip-Etcher",        folders: ["nami"] },
    { icon: "\u{1F52C}", label: "Current Driver",    desc: "KN NaMi project",                        url: "https://github.com/KN-NaMi/Current-Driver",    folders: ["nami"] },
    { icon: "\u{1F52C}", label: "Lithography",       desc: "KN NaMi project",                        url: "https://github.com/KN-NaMi/Lithography",       folders: ["nami"] },
    { icon: "\u{1F52C}", label: "Spin Coater",       desc: "KN NaMi project",                        url: "https://github.com/KN-NaMi/spin-coater",       folders: ["nami"] },
    { icon: "\u{1F52C}", label: "Spin Coater BLDC",  desc: "KN NaMi project",                        url: "https://github.com/KN-NaMi/spin-coater-BLDC",  folders: ["nami"] },
    { icon: "\u{1F310}", label: "KN NaMi",           desc: "Student research group - micro & nanotechnology", url: "https://nami.pwr.edu.pl", folders: ["all", "nami"] },
    { icon: "\u{1F511}", label: "SecurityRFID",      desc: "Personal project",                       url: "https://github.com/BMakx/SecurityRFID",        folders: ["github"] },
    { icon: "\u{1F4C1}", label: "GitHub",            desc: "All repositories",                       url: "https://github.com/BMakx",                     folders: ["all", "github"] },
  ],

  projectFolders: [
    { key: "all",    label: "All Projects" },
    { key: "ic",     label: "IC Design" },
    { key: "fpga",   label: "FPGA" },
    { key: "nami",   label: "KN NaMi" },
    { key: "dyplom", label: "Bachelor Thesis" },
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
