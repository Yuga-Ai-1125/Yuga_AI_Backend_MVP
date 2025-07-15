export const courses = [
  {
    id: "MATH-10",
    name: "Mathematics",
    chapters: 15,
    duration: 60,
    details: {
      keyTopics: [
        "Real Numbers",
        "Polynomials",
        "Trigonometry",
        "Geometry",
        "Statistics",
        "Probability",
      ],
      resources: {
        videos: 150,
        solvedExamples: 100,
        practiceTests: 30,
      },
      examFocus: ["CBSE Board", "JEE Foundation", "NTSE"],
      teacher: "Prof. Sanjay Mehta (Ex-IITian, 10+ yrs exp)",
    },
    lessons: [
      {
        id: "MATH-10-1",
        title: "Real Numbers",
        topics: ["Euclid's Division Lemma", "HCF", "LCM", "Irrational Numbers"],
      },
      {
        id: "MATH-10-2",
        title: "Polynomials",
        topics: ["Zeros of Polynomials", "Division Algorithm"],
      },
      {
        id: "MATH-10-3",
        title: "Pair of Linear Equations",
        topics: ["Graphical Solution", "Substitution Method"],
      },
      {
        id: "MATH-10-4",
        title: "Quadratic Equations",
        topics: ["Factorization", "Quadratic Formula"],
      },
      {
        id: "MATH-10-5",
        title: "Arithmetic Progressions",
        topics: ["nth Term", "Sum of Terms"],
      },
      {
        id: "MATH-10-6",
        title: "Triangles",
        topics: ["Similarity Criteria", "Pythagoras Theorem"],
      },
      {
        id: "MATH-10-7",
        title: "Coordinate Geometry",
        topics: ["Distance Formula", "Section Formula"],
      },
      {
        id: "MATH-10-8",
        title: "Trigonometry",
        topics: ["Trigonometric Ratios", "Heights & Distances"],
      },
      {
        id: "MATH-10-9",
        title: "Circles",
        topics: ["Tangents", "Theorems"],
      },
      {
        id: "MATH-10-10",
        title: "Constructions",
        topics: ["Division of Line Segment", "Tangent Construction"],
      },
      {
        id: "MATH-10-11",
        title: "Areas Related to Circles",
        topics: ["Perimeter & Area of Sectors"],
      },
      {
        id: "MATH-10-12",
        title: "Surface Areas & Volumes",
        topics: ["Cone", "Sphere", "Hemisphere"],
      },
      {
        id: "MATH-10-13",
        title: "Statistics",
        topics: ["Mean", "Median", "Mode"],
      },
      {
        id: "MATH-10-14",
        title: "Probability",
        topics: ["Theoretical Probability"],
      },
    ],
  },
  {
    id: "SCI-10",
    name: "Science",
    chapters: 16,
    duration: 70,
    details: {
      keyTopics: [
        "Light",
        "Electricity",
        "Acids/Bases",
        "Life Processes",
        "Heredity",
      ],
      resources: {
        videos: 120,
        labExperiments: 20,
        mcqs: 500,
      },
      examFocus: ["CBSE", "NEET/Foundation", "Olympiads"],
      teacher: "Dr. Priya Singh (AIIMS), Dr. Rajesh Kumar (IIT Delhi)",
    },
    lessons: [
      {
        id: "SCI-10-PHY-1",
        title: "Light: Reflection & Refraction",
        topics: ["Mirrors", "Lenses", "Power of Lens"],
      },
      {
        id: "SCI-10-PHY-2",
        title: "Human Eye & Colorful World",
        topics: ["Defects of Vision", "Dispersion"],
      },
      {
        id: "SCI-10-PHY-3",
        title: "Electricity",
        topics: ["Ohm's Law", "Series/Parallel Circuits"],
      },
      {
        id: "SCI-10-PHY-4",
        title: "Magnetic Effects of Current",
        topics: ["Fleming's Rules", "Electromagnet"],
      },
      {
        id: "SCI-10-PHY-5",
        title: "Sources of Energy",
        topics: ["Renewable vs Non-Renewable"],
      },
      {
        id: "SCI-10-CHEM-1",
        title: "Chemical Reactions",
        topics: ["Balancing Equations", "Types of Reactions"],
      },
      {
        id: "SCI-10-CHEM-2",
        title: "Acids, Bases & Salts",
        topics: ["pH Scale", "Neutralization"],
      },
      {
        id: "SCI-10-CHEM-3",
        title: "Metals & Non-Metals",
        topics: ["Reactivity Series", "Corrosion"],
      },
      {
        id: "SCI-10-CHEM-4",
        title: "Carbon Compounds",
        topics: ["Homologous Series", "IUPAC Naming"],
      },
      {
        id: "SCI-10-CHEM-5",
        title: "Periodic Classification",
        topics: ["Modern Periodic Table"],
      },
      {
        id: "SCI-10-BIO-1",
        title: "Life Processes",
        topics: ["Nutrition", "Respiration"],
      },
      {
        id: "SCI-10-BIO-2",
        title: "Control & Coordination",
        topics: ["Nervous System", "Hormones"],
      },
      {
        id: "SCI-10-BIO-3",
        title: "How Do Organisms Reproduce",
        topics: ["Asexual/Sexual Reproduction"],
      },
      {
        id: "SCI-10-BIO-4",
        title: "Heredity & Evolution",
        topics: ["Mendel's Laws", "Speciation"],
      },
      {
        id: "SCI-10-BIO-5",
        title: "Our Environment",
        topics: ["Food Chains", "Ozone Depletion"],
      },
      {
        id: "SCI-10-BIO-6",
        title: "Sustainable Management",
        topics: ["Conservation", "Wildlife"],
      },
    ],
  },
  {
    id: "SOC-10",
    name: "Social Science",
    chapters: 24,
    duration: 80,
    details: {
      keyTopics: [
        "Nationalism",
        "Agriculture",
        "Democracy",
        "Globalization",
        "Resources",
      ],
      resources: {
        animatedMaps: 80,
        caseStudies: 200,
        samplePapers: 15,
      },
      examFocus: ["CBSE", "UPSC Prelims Foundation"],
      teacher: "Prof. Ananya Das (Gold Medalist in History)",
    },
    lessons: [
      {
        id: "SOC-10-HIS-1",
        title: "The Rise of Nationalism",
        topics: ["French Revolution", "Unification of Germany"],
      },
      {
        id: "SOC-10-HIS-2",
        title: "Nationalism in India",
        topics: ["Non-Cooperation", "Civil Disobedience"],
      },
      {
        id: "SOC-10-HIS-3",
        title: "The Making of Global World",
        topics: ["Silk Route", "Industrialization"],
      },
      {
        id: "SOC-10-HIS-4",
        title: "The Age of Industrialization",
        topics: ["Proto-Industrialization", "Factories"],
      },
      {
        id: "SOC-10-HIS-5",
        title: "Print Culture & Modern World",
        topics: ["Gutenberg Press", "India"],
      },
      {
        id: "SOC-10-GEO-1",
        title: "Resources & Development",
        topics: ["Soil Types", "Conservation"],
      },
      {
        id: "SOC-10-GEO-2",
        title: "Water Resources",
        topics: ["Dams", "Rainwater Harvesting"],
      },
      {
        id: "SOC-10-GEO-3",
        title: "Agriculture",
        topics: ["Cropping Patterns", "Green Revolution"],
      },
      {
        id: "SOC-10-GEO-4",
        title: "Minerals & Energy",
        topics: ["Conventional/Non-Conventional Sources"],
      },
      {
        id: "SOC-10-GEO-5",
        title: "Manufacturing Industries",
        topics: ["Contribution to GDP"],
      },
      {
        id: "SOC-10-GEO-6",
        title: "Lifelines of Economy",
        topics: ["Transport", "Communication"],
      },
      {
        id: "SOC-10-GEO-7",
        title: "Consumer Rights",
        topics: ["COPRA", "Fair Trade"],
      },
      {
        id: "SOC-10-POL-1",
        title: "Power Sharing",
        topics: ["Belgium & Sri Lanka"],
      },
      {
        id: "SOC-10-POL-2",
        title: "Federalism",
        topics: ["Unitary vs Federal Systems"],
      },
      {
        id: "SOC-10-POL-3",
        title: "Democracy & Diversity",
        topics: ["Social Differences"],
      },
      {
        id: "SOC-10-POL-4",
        title: "Gender, Religion & Caste",
        topics: ["Inequality Forms"],
      },
      {
        id: "SOC-10-POL-5",
        title: "Popular Struggles",
        topics: ["Nepal & Bolivia"],
      },
      {
        id: "SOC-10-ECO-1",
        title: "Development",
        topics: ["Income vs National Development"],
      },
      {
        id: "SOC-10-ECO-2",
        title: "Sectors of Economy",
        topics: ["Primary/Secondary/Tertiary"],
      },
      {
        id: "SOC-10-ECO-3",
        title: "Money & Credit",
        topics: ["Formal/Informal Credit"],
      },
      {
        id: "SOC-10-ECO-4",
        title: "Globalization",
        topics: ["MNCs", "Trade Barriers"],
      },
      {
        id: "SOC-10-ECO-5",
        title: "Consumer Rights",
        topics: ["Safety", "Information"],
      },
    ],
  },
  {
    id: "ENG-10",
    name: "English (First Flight + Footprints)",
    chapters: 21,
    duration: 50,
    details: {
      keyTopics: ["Grammar", "Writing Skills", "Literature Analysis"],
      resources: {
        audioLessons: 50,
        writingPrompts: 100,
        quizzes: "Interactive",
      },
      examFocus: ["CBSE", "IELTS Foundation"],
      teacher: "Ms. Rachel Gomes (Cambridge Certified)",
    },
    lessons: [
      {
        id: "ENG-10-PROSE-1",
        title: "A Letter to God",
        topics: ["Faith", "Irony"],
      },
      {
        id: "ENG-10-PROSE-2",
        title: "Nelson Mandela",
        topics: ["Freedom Struggle"],
      },
      {
        id: "ENG-10-PROSE-3",
        title: "Two Stories About Flying",
        topics: ["Fear", "Courage"],
      },
      {
        id: "ENG-10-PROSE-4",
        title: "From the Diary of Anne Frank",
        topics: ["Holocaust", "Adolescence"],
      },
      {
        id: "ENG-10-PROSE-5",
        title: "The Hundred Dresses",
        topics: ["Bullying", "Empathy"],
      },
      {
        id: "ENG-10-POEM-1",
        title: "Dust of Snow",
        topics: ["Nature's Impact"],
      },
      {
        id: "ENG-10-POEM-2",
        title: "Fire & Ice",
        topics: ["Human Emotions"],
      },
      {
        id: "ENG-10-POEM-3",
        title: "A Tiger in the Zoo",
        topics: ["Freedom vs Captivity"],
      },
      {
        id: "ENG-10-SUPP-1",
        title: "A Triumph of Surgery",
        topics: ["Ethics in Medicine"],
      },
      {
        id: "ENG-10-SUPP-2",
        title: "The Thief's Story",
        topics: ["Redemption"],
      },
      {
        id: "ENG-10-SUPP-3",
        title: "The Midnight Visitor",
        topics: ["Suspense"],
      },
    ],
  },
  {
    id: "HIN-10",
    name: "Hindi (क्षितिज + कृतिका)",
    chapters: 17,
    duration: 45,
    details: {
      keyTopics: ["व्याकरण", "निबंध लेखन", "कविता विश्लेषण"],
      resources: {
        storyVideos: 40,
        worksheets: 30,
      },
      examFocus: ["CBSE", "Hindi Olympiads"],
      teacher: "डॉ. अरविंद मिश्रा (PhD in Hindi Literature)",
    },
    lessons: [
      {
        id: "HIN-10-KSH-1",
        title: "सूरदास",
        topics: ["भक्ति काव्य"],
      },
      {
        id: "HIN-10-KSH-2",
        title: "तुलसीदास",
        topics: ["राम-भक्ति"],
      },
      {
        id: "HIN-10-KSH-3",
        title: "जयशंकर प्रसाद",
        topics: ["राष्ट्रीय चेतना"],
      },
      {
        id: "HIN-10-KRI-1",
        title: "माता का आँचल",
        topics: ["मातृ-प्रेम"],
      },
      {
        id: "HIN-10-KRI-2",
        title: "जॉर्ज पंचम की नाक",
        topics: ["व्यंग्य"],
      },
    ],
  },
];
