import { Cable, Drill, Building2, Train, Route as RouteIcon, Waves, Zap, Radio, ShieldCheck, HardHat, Map as MapIcon, Gauge, Cpu, CheckCircle2 } from "lucide-react";

export const heroImg = "/assets/hero-infrastructure.jpg";
export const sOfc = "/assets/service-ofc.jpg";
export const sPiling = "/assets/service-piling.jpg";
export const sCivil = "/assets/service-civil.jpg";
export const sMetro = "/assets/service-metro.jpg";
export const sRoads = "/assets/service-roads.jpg";
export const sWater = "/assets/service-water.jpg";
export const sElec = "/assets/service-electrical.jpg";
export const sTele = "/assets/service-telecom.jpg";
export const machinery = "/assets/machinery-fleet.jpg";
export const aboutImg = "/assets/about-team.jpg";
export const ctaImg = "/assets/cta-bg.jpg";
export const pMetro = "/assets/project-metro.jpg";
export const pHighway = "/assets/project-highway.jpg";
export const pOfc = "/assets/project-ofc.jpg";
export const dArvind = "/assets/director-arvind.png";
export const jjmCg1 = "/assets/jjm-cg-1.jpg";
export const jjmCg2 = "/assets/jjm-cg-2.png";
export const jjmCg3 = "/assets/jjm-cg-3.jpg";
export const jjmCgCover = "/assets/jjm-cg-cover.png";
export const jjmJaunpurCover = "/assets/jjm-jaunpur-cover.png";
export const jjmJaunpur1 = "/assets/jjm-jaunpur-1.jpg";
export const jjmJaunpur2 = "/assets/jjm-jaunpur-2.jpg";
export const jjmJaunpur3 = "/assets/jjm-jaunpur-3.jpg";
export const jjmJaunpur4 = "/assets/jjm-jaunpur-4.jpg";

export const relAnganwadi1 = "/assets/reliance-anganwadi-1.png";
export const relAnganwadi2 = "/assets/reliance-anganwadi-2.png";
export const relAnganwadi3 = "/assets/reliance-anganwadi-3.png";
export const relAnganwadi4 = "/assets/reliance-anganwadi-4.jpg";

export const metrics = [
  { label: "Years of Execution", value: 16, suffix: "+" },
  { label: "Turnover Capability", value: 200, prefix: "₹", suffix: " Cr" },
  { label: "Machinery Strength", value: 30, prefix: "₹", suffix: " Cr" },
  { label: "Major Projects", value: 100, suffix: "+" },
  { label: "KM Fiber Deployed", value: 3000, suffix: "+" },
  { label: "States Covered", value: 18, suffix: "+" },
];

export const services = [
  { icon: Cable, title: "OFC / Fiber Laying", desc: "Trenching, HDD, blowing and splicing across national backbone networks.", img: sOfc },
  { icon: Drill, title: "Piling & Foundations", desc: "Bored cast-in-situ, secant and contiguous piling for heavy infrastructure.", img: sPiling },
  { icon: Building2, title: "Civil Construction", desc: "RCC structures, industrial buildings and large-scale civil works.", img: sCivil },
  { icon: Train, title: "Metro Infrastructure", desc: "Elevated viaducts, station works and depot civil for urban metro corridors.", img: sMetro },
  { icon: RouteIcon, title: "Roads & Highways", desc: "National highways, expressways, flexible and rigid pavement execution.", img: sRoads },
  { icon: Waves, title: "Water Infrastructure", desc: "Pipelines, OHTs and Jal Jeevan Mission rural water supply networks.", img: sWater },
  { icon: Zap, title: "Electrical Infrastructure", desc: "HT/LT lines, transmission towers, substations and grid utility work.", img: sElec },
  { icon: Radio, title: "Telecom Infrastructure", desc: "Tower erection, in-building solutions and 4G/5G rollout support.", img: sTele },
];

export const projects = [
  { 
    slug: "hfcl-ofc-up-east",
    name: "HFCL OFC — UP East", 
    client: "HFCL Ltd. & Reliance Jio Digital Fiber Ltd.", 
    type: "Telecom · OFC Backbone", 
    location: "UP East, Uttar Pradesh", 
    img: pOfc,
    duration: "Executed",
    scale: "3,200 Kilometers",
    value: "₹6,743 Lakh",
    overview: "Execution of a massive underground optical fiber cable (OFC) laying project across the UP East region. The project encompassed the development of crucial telecom infrastructure, involving 3,200 km of fiber network for inter-city and intra-city connectivity, while consistently meeting strict timelines and quality standards.",
    scope: [
      "Underground optical fiber cable laying across multiple inter-city and intra-city routes",
      "Execution of diverse network activities including National Long Distance (NL-CAP), Intra-City (IC-CAP), and FTTX (Fiber to the x) connections",
      "Trenchless cable laying utilizing Horizontal Directional Drilling (HDD) machines (up to 32 Ton capacity) deployed across project sites",
      "End-to-end site management spanning hundreds of individual work orders over several years"
    ]
  },
  { 
    slug: "kanpur-metro",
    name: "Kanpur Metro", 
    client: "JMC, CEIGALL, Kalpataru, Gulermak", 
    type: "Metro · Deep Foundation & Piling", 
    location: "Kanpur, Uttar Pradesh", 
    img: pMetro,
    duration: "Ongoing / Executed",
    value: "₹2,782 Lakh",
    overview: "Execution of critical rotary drilling and deep foundation piling works for both the elevated and underground (UG) corridors of the Kanpur Metro Rail Project. The project demands the deployment of heavy rotary drilling rigs and robust site management to establish stable structural foundations for the metro network.",
    scope: [
      "Rotary drilling for deep pile foundations",
      "Installation of MS Casing Pipes (600–1500 mm diameter) to protect pile bores",
      "High-volume concrete pouring and placement using tremie pipe sets and concrete hoppers",
      "Site dewatering, polymer mixing, and slurry circulation utilizing specialized mud pumps and vertical pumps",
      "On-site reinforcement fabrication utilizing welding, cutting, and binding machines"
    ],
    packages: [
      { name: "JMC Projects (Elevated)", value: "₹1,017.31 Lakh & ₹1,000.00 Lakh" },
      { name: "Kalpataru Projects (Underground)", value: "₹400.00 Lakh" },
      { name: "CEIGALL India (Elevated)", value: "₹250.00 Lakh" },
      { name: "Gulermak", value: "₹115.00 Lakh" }
    ]
  },
  { 
    slug: "nh-six-lane-package",
    name: "NH Six-Lane Package", 
    client: "NHAI / L&T", 
    type: "Highway · Pavement", 
    location: "Madhya Pradesh", 
    img: pHighway,
    duration: "30 Months",
    value: "₹210 Cr",
    overview: "Upgradation of a major national highway corridor to six lanes. This high-speed infrastructure project involved massive earthworks, granular sub-base preparation, and dense bituminous macadam paving to support heavy freight transit.",
    scope: [
      "Extensive earthworks and embankment construction",
      "Flexible and rigid pavement execution",
      "Construction of minor bridges and vehicular underpasses",
      "Road safety installations and highway electrification"
    ]
  },
  { 
    slug: "jjm-chhattisgarh",
    name: "Jal Jeevan Mission — Chhattisgarh", 
    client: "GoI / State PHED", 
    type: "Water · Pipeline & OHT", 
    location: "Khamhariya, Chhattisgarh", 
    img: jjmCgCover,
    images: [jjmCg1, jjmCg2, jjmCg3],
    duration: "Ongoing",
    value: "₹85 Cr",
    overview: "A critical nation-building initiative to provide functional household tap connections to rural communities in the challenging topography of Chhattisgarh. Our execution involves deep rock excavation for pipelines and the construction of heavy reinforced concrete Overhead Tanks (OHTs).",
    scope: [
      "DI and HDPE pipeline laying across rocky terrain",
      "Construction of multi-stage RCC Overhead Tanks (OHT)",
      "Installation of heavy-duty pumping machinery and electromechanical components",
      "Household service connections and flow testing"
    ]
  },
  { 
    slug: "jjm-jaunpur",
    name: "Jal Jeevan Mission — Jaunpur", 
    client: "GoI / State PHED", 
    type: "Water · Pipeline Network", 
    location: "Jaunpur, Uttar Pradesh", 
    img: jjmJaunpurCover,
    images: [jjmJaunpur1, jjmJaunpur2, jjmJaunpur3, jjmJaunpur4],
    duration: "Ongoing",
    value: "₹65 Cr",
    overview: "Large-scale rural water supply network execution in the Jaunpur district of Uttar Pradesh. The project demands rapid deployment of pipeline networks across hundreds of villages, requiring massive logistical coordination and community liaisoning.",
    scope: [
      "Extensive distribution network laying using HDPE pipes",
      "Construction of pump houses and clear water reservoirs",
      "Integration of SCADA systems for water flow monitoring",
      "End-to-end testing, commissioning, and operational handover"
    ]
  },
  { 
    slug: "afcons-piling-package",
    name: "AFCONS Piling Package", 
    client: "AFCONS", 
    type: "Piling · Foundation", 
    location: "Multiple Sites", 
    img: sPiling,
    duration: "12 Months",
    value: "₹45 Cr",
    overview: "Specialized deep foundation works for major structural assets including bridges and industrial plants. We deployed our heavy-duty hydraulic rigs to execute large-diameter bored cast-in-situ piles in challenging geologies.",
    scope: [
      "Bored cast-in-situ piling (600mm to 1200mm diameter)",
      "Rock socketing and tremie concreting",
      "Pile load testing (static and dynamic)",
      "Reinforcement cage fabrication and lowering"
    ]
  },
  {
    slug: "reliance-anganwadi",
    name: "Reliance Foundation Anganwadi Construction",
    client: "Reliance Foundation",
    type: "Civil · Modernization",
    location: "Varanasi, Uttar Pradesh",
    img: relAnganwadi1,
    images: [relAnganwadi1, relAnganwadi2, relAnganwadi3, relAnganwadi4],
    duration: "Executed",
    scale: "Major Project",
    value: "₹4,000 Lakh",
    overview: "Execution of Greenfield and Brownfield Anganwadi construction and modernization across the Varanasi region (including specific centers in the Kashi Vidyapeeth block, such as Sugulpur and Kandhariya Harinathpur). Partnering with the Reliance Foundation, Sangya Traders transformed these rural child-care centers into vibrant, modern, and highly functional learning environments that align with the Ministry of Women and Child Development's standards.",
    scope: [
      "Modernized Classrooms: Installation of smart TVs, large green boards, custom storage cubbies, and colorful, child-sized ergonomic furniture",
      "Infrastructure & Accessibility: Construction of accessible entryways featuring wheelchair ramps with stainless steel railings, and secure gated boundary walls",
      "Upgraded Facilities: Installation of modern, hygienic washrooms with contemporary tilework and fully fitted modular kitchens/pantries",
      "Child-Friendly Aesthetics: Extensive interior and exterior thematic wall murals featuring educational scenes, flora, fauna, and local culture",
      "Outdoor Development: Landscaping, garden development, and installation of outdoor play equipment, such as slides"
    ]
  }
];

export const clients = [
  "L&T", "AFCONS", "Reliance Jio", "HFCL", "Monte Carlo", "NCC",
  "KEI", "Vodafone Idea", "NHAI", "Sterlite", "Dilip Buildcon", "UPMRC",
];

export const whyChoose = [
  { icon: ShieldCheck, title: "Proven Large-Scale Execution", desc: "16+ years of multi-crore project delivery across telecom, metro and highways." },
  { icon: HardHat, title: "Trusted by Industry Leaders", desc: "Repeat partnerships with L&T, AFCONS, HFCL, Reliance Jio and NHAI." },
  { icon: MapIcon, title: "Pan-India Operations", desc: "Active project sites across 18+ Indian states with localized execution teams." },
  { icon: Gauge, title: "Strong Financial Capability", desc: "₹200 Cr turnover capability with ₹30 Cr owned machinery balance sheet." },
  { icon: Cpu, title: "Experienced Engineering Team", desc: "In-house planning, QA/QC, billing and project management cadre." },
  { icon: CheckCircle2, title: "Timely Project Delivery", desc: "Milestone-driven delivery with rigorous safety and compliance discipline." },
];

export const certifications = [
  { label: "ISO 9001:2015", note: "Quality Management" },
  { label: "ISO 14001:2015", note: "Environment" },
  { label: "ISO 45001:2018", note: "Safety & Health" },
  { label: "MSME Udyam", note: "Registered Enterprise" },
  { label: "GST · PAN · TIN", note: "Statutory Compliant" },
  { label: "Work Orders", note: "L&T · AFCONS · HFCL" },
];

export const timeline = [
  { year: "2007", t: "Founded", d: "Established in Lucknow as an infrastructure execution firm." },
  { year: "2012", t: "Telecom Scale", d: "Entered OFC backbone laying for national telecom operators." },
  { year: "2017", t: "Metro & Civil", d: "Expanded into metro viaduct works and heavy piling foundations." },
  { year: "2021", t: "Jal Jeevan Mission", d: "Began rural water infrastructure execution across UP and Bihar." },
  { year: "2025", t: "PAN India", d: "Active across 18+ states with ₹200 Cr turnover capability." },
];
