/* Portfolio content. Replace or expand project media only with material you are allowed to publish. */
window.SC_PORTFOLIO = {
  personal: {
    name: "Stalin Carrión",
    email: "stalinfcc96@gmail.com",
    linkedin: "https://www.linkedin.com/in/stalin-carrion-1705741b4/",
    github: "https://github.com/StalinFCC",
    cv: "assets/CV_Stalin_Carrion.pdf"
  },
  projects: [
    {
      id: "audiencias", group: "professional", featured: true,
      image: "assets/img/audiencias.webp", theme: "slate",
      tags: ["Unity", "C#", "Photon", "Firebase", "PostgreSQL"],
      es: {
        title: "Simulador de Audiencias Multiusuario", category: "SIMULACIÓN · UNIVERSIDAD",
        description: "Prácticas académicas dentro de un entorno virtual compartido.",
        role: "Programador principal · UTPL", reach: "~5.000 estudiantes / periodo académico",
        problem: "La necesidad de disponer de un escenario virtual para prácticas académicas de estudiantes de distintas titulaciones.",
        solution: "Aplicación Windows creada con Unity y C#, apoyada en Photon, Firebase y PostgreSQL para la experiencia conectada y la integración de datos.",
        contribution: ["Programación principal del simulador y participación en decisiones técnicas.", "Desarrollo de integración de datos y del proceso de enrolamiento de usuarios.", "Soporte técnico y mantenimiento de la aplicación."],
        result: "Solución utilizada con aproximadamente 5.000 estudiantes por periodo académico, según el CV. Esa cifra no representa usuarios conectados simultáneamente.",
        details: "Mi trabajo se concentró en hacer que la experiencia multiusuario pudiera relacionarse con datos de usuarios y procesos académicos reales. El proyecto muestra tanto programación con Unity como integración de servicios."
      },
      en: {
        title: "Multiplayer Hearing Simulator", category: "SIMULATION · UNIVERSITY",
        description: "Academic practice inside a shared virtual environment.",
        role: "Lead developer · UTPL", reach: "~5,000 students / academic term",
        problem: "The need for a virtual environment in which students from different degree programs could complete academic practice activities.",
        solution: "A Windows application developed with Unity and C#, using Photon, Firebase and PostgreSQL to support a connected experience and data integration.",
        contribution: ["Lead programming of the simulator and input into technical decisions.", "Implementation of data integration and user enrollment.", "Technical support and application maintenance."],
        result: "Used with approximately 5,000 students per academic term according to my CV. This figure does not represent concurrent users.",
        details: "My focus was connecting the multiplayer experience with real user data and academic workflows. This project demonstrates Unity development and service integration."
      }
    },
    {
      id: "fisica", group: "xr", image: "", theme: "violet",
      tags: ["Unity", "C#", "Meta XR SDK", "Meta Quest", "Firebase"],
      es: {
        title: "Simuladores VR de Física y Matemáticas", category: "VR · EDUCACIÓN",
        description: "Experiencias inmersivas para explorar conceptos de física y matemáticas.",
        role: "Desarrollo integral del producto", reach: "Unity + Meta Quest",
        problem: "Convertir conceptos educativos en actividades tridimensionales que los estudiantes puedan observar y manipular.",
        solution: "Creación desde cero de simuladores para Meta Quest con Unity, Meta XR SDK, interacciones y soporte Firebase.",
        contribution: ["Programación y arquitectura de la experiencia VR.", "Diseño de interacción y de producto con ProBuilder, Blender y XR Simulator.", "Participación en decisiones de comercialización y modelo de negocio junto a un socio experto en la materia."],
        result: "Desarrollo integral de una solución educativa XR. No se han atribuido cifras de uso o resultados pedagógicos sin verificar.",
        details: "El trabajo cubrió desde el concepto del producto y la arquitectura hasta las interacciones en los visores de realidad virtual. El conocimiento especializado de física y matemáticas fue aportado por un socio."
      },
      en: {
        title: "Physics & Mathematics VR Simulators", category: "VR · EDUCATION",
        description: "Immersive experiences for exploring physics and mathematics concepts.",
        role: "End-to-end product development", reach: "Unity + Meta Quest",
        problem: "Turn educational concepts into three-dimensional activities that students can observe and manipulate.",
        solution: "Development of Meta Quest simulators from scratch using Unity, Meta XR SDK, interactive mechanics and Firebase support.",
        contribution: ["VR programming and application architecture.", "Interaction and product design with ProBuilder, Blender and XR Simulator.", "Contribution to commercialization and business-model decisions, in collaboration with a subject-matter expert."],
        result: "End-to-end development of an educational XR solution. No unverified usage or learning-outcome figures are claimed.",
        details: "The work covered product concept, architecture and headset interactions. Domain expertise in physics and mathematics was provided by a project partner."
      }
    },
    {
      id: "jomara", group: "xr", image: "", theme: "coral",
      tags: ["Unity", "C#", "Meta Quest 2", "Meta XR SDK", "Blender"],
      es: {
        title: "Proyecto Jomara", category: "REALIDAD VIRTUAL · IMPACTO SOCIAL",
        description: "Una experiencia VR sin fines de lucro orientada a niños en tratamiento de quimioterapia.",
        role: "Programación e integración", reach: "Meta Quest 2",
        problem: "Crear una experiencia inmersiva con finalidad social que funcionara en un visor Meta Quest 2.",
        solution: "Aplicación VR construida en Unity, integrando modelos 3D, vídeos y animaciones.",
        contribution: ["Programación de la experiencia completa en Unity y C#.", "Integración de modelos, animaciones y materiales audiovisuales.", "Trabajo con Meta XR SDK, Blender, ProBuilder y XR Simulator."],
        result: "Experiencia VR desarrollada e integrada. No se atribuyen efectos clínicos ni resultados médicos.",
        details: "Este caso demuestra mi capacidad para integrar componentes interactivos y audiovisuales en un proyecto de realidad virtual con una finalidad no comercial."
      },
      en: {
        title: "Jomara Project", category: "VIRTUAL REALITY · SOCIAL IMPACT",
        description: "A non-profit VR experience intended for children receiving chemotherapy treatment.",
        role: "Programming & integration", reach: "Meta Quest 2",
        problem: "Create an immersive experience with a social purpose that could run on Meta Quest 2.",
        solution: "A VR application built with Unity and integrating 3D models, videos and animations.",
        contribution: ["Programming of the complete experience in Unity and C#.", "Integration of models, animation and audiovisual content.", "Development with Meta XR SDK, Blender, ProBuilder and XR Simulator."],
        result: "VR experience developed and integrated. No clinical benefits or medical outcomes are claimed.",
        details: "This case highlights my ability to integrate interactive and audiovisual elements into a virtual reality experience with a non-commercial purpose."
      }
    },
    {
      id: "funbingo", group: "professional", image: "assets/img/funbingo.webp", theme: "aqua",
      tags: ["Unity", "C#", "Android", "Educational Game"],
      es: {
        title: "FunBingo", category: "VIDEOJUEGO EDUCATIVO · ANDROID",
        description: "Aprender inglés mediante bingo, imágenes, sonido y recompensas.",
        role: "Diseño y programación", reach: "Seleccionado por UTPL en 2021",
        problem: "Ofrecer otra forma de practicar vocabulario de inglés a través de una mecánica lúdica.",
        solution: "Videojuego móvil desarrollado en Unity/C# que asocia sonidos, textos e imágenes, con medallas, podio y perfil de jugador.",
        contribution: ["Diseño de la mecánica de bingo educativo.", "Desarrollo del juego móvil con Unity y C#.", "Integración de la experiencia visual y sonora."],
        result: "Desarrollado en 2020 y seleccionado en 2021 para su implementación en la carrera de Inglés de UTPL.",
        details: "Es una muestra del diseño de una interacción accesible y repetible: la mecánica del juego sirve como vehículo para la asociación entre palabras, sonido e imágenes."
      },
      en: {
        title: "FunBingo", category: "EDUCATIONAL GAME · ANDROID",
        description: "Learning English through bingo, images, audio and rewards.",
        role: "Game design & programming", reach: "Selected by UTPL in 2021",
        problem: "Provide a more playful way to practice English vocabulary.",
        solution: "A Unity/C# mobile game connecting audio, text and images, with medals, a podium and a player profile.",
        contribution: ["Design of the educational bingo mechanic.", "Mobile game development with Unity and C#.", "Integration of visual and audio experiences."],
        result: "Developed in 2020 and selected in 2021 for implementation in UTPL's English degree program.",
        details: "The game is an example of an accessible, repeatable interaction in which gameplay supports associations between words, sounds and images."
      }
    },
    {
      id: "christmas", group: "professional", image: "assets/img/christmas-vr.webp", theme: "blue",
      tags: ["Unity", "VR", "Interaction"],
      es: {
        title: "ChristmasVR", category: "VR · ENTRETENIMIENTO",
        description: "Una experiencia inmersiva interactiva de temática navideña.",
        role: "Diseño y programación · Solnus", reach: "Colaboración por proyectos",
        problem: "Crear una experiencia navideña que el usuario pudiera explorar de manera inmersiva.",
        solution: "Simulador de realidad virtual desarrollado para un encargo durante la colaboración con Solnus.",
        contribution: ["Diseño de la experiencia y programación interactiva.", "Participación en el desarrollo del simulador para realidad virtual."],
        result: "Proyecto realizado en el marco de consultoría de Unity y VR.",
        details: "Este trabajo amplía mi experiencia hacia el entretenimiento inmersivo y la ejecución de encargos para clientes."
      },
      en: {
        title: "ChristmasVR", category: "VR · ENTERTAINMENT",
        description: "An interactive, immersive Christmas-themed experience.",
        role: "Design & programming · Solnus", reach: "Project-based collaboration",
        problem: "Create a Christmas experience that users could explore immersively.",
        solution: "Virtual reality simulator developed as part of a client project during my collaboration with Solnus.",
        contribution: ["Experience design and interactive programming.", "Participation in VR simulator development."],
        result: "A project delivered in a Unity and VR consulting context.",
        details: "This project broadens my portfolio into immersive entertainment and client-facing delivery."
      }
    },
    {
      id: "trivia", group: "professional", image: "assets/img/trivia.webp", theme: "sand",
      tags: ["Game Design", "Unity", "Touchscreen"],
      es: {
        title: "Trivia of University", category: "JUEGOS INTERACTIVOS",
        description: "Preguntas y desafíos diseñados para pantallas táctiles y dispositivos móviles.",
        role: "Diseño y programación", reach: "Aplicación interactiva",
        problem: "Transformar preguntas y contenido educativo en una experiencia de juego.",
        solution: "Sistema de trivia interactivo con pantallas, respuestas y retos.",
        contribution: ["Diseño de la experiencia y programación de las interacciones.", "Adaptación de la propuesta para interfaces táctiles."],
        result: "Videojuego educativo interactivo realizado. No se declara una cifra de usuarios.",
        details: "Una muestra de programación de mecánicas y UI destinadas a sesiones rápidas de interacción."
      },
      en: {
        title: "Trivia of University", category: "INTERACTIVE GAMES",
        description: "Questions and challenges designed for touchscreens and mobile devices.",
        role: "Design & programming", reach: "Interactive application",
        problem: "Turn questions and educational content into a game experience.",
        solution: "An interactive trivia system with question screens, answers and challenges.",
        contribution: ["Experience design and interaction programming.", "Adapting the experience to touch interfaces."],
        result: "An interactive educational game. No user numbers are claimed.",
        details: "An example of gameplay programming and UI design for short interactive sessions."
      }
    },
    {
      id: "settv", group: "other", image: "assets/img/set-tv.webp", theme: "navy",
      tags: ["Simulation", "Technical Advisory"],
      es: {
        title: "Simulador SetTV", category: "SIMULACIÓN · ASESORÍA",
        description: "Apoyo técnico y de programación a un simulador interactivo.",
        role: "Asesoría de programación", reach: "Colaboración técnica",
        problem: "Apoyar un desarrollo interactivo en el apartado técnico.",
        solution: "Asesoría de programación para un entorno de simulación.",
        contribution: ["Apoyo y asesoramiento en programación."],
        result: "Participación técnica documentada, sin atribuirme el desarrollo integral del producto.",
        details: "Incluido como experiencia complementaria, diferenciando claramente la asesoría del desarrollo completo."
      },
      en: {
        title: "SetTV Simulator", category: "SIMULATION · ADVISORY",
        description: "Technical and programming support for an interactive simulator.",
        role: "Programming advisor", reach: "Technical collaboration",
        problem: "Support an interactive development project on the technical side.",
        solution: "Programming advice for a simulation environment.",
        contribution: ["Programming guidance and technical support."],
        result: "Documented technical contribution; I do not claim to have developed the entire product.",
        details: "Included as complementary experience, clearly distinguishing advisory work from full development ownership."
      }
    },
    {
      id: "quimica", group: "other", image: "assets/img/quimica.webp", theme: "slate",
      tags: ["Simulation", "Technical Advisory"],
      es: {
        title: "Simulador de Laboratorio de Química", category: "EDUCACIÓN · ASESORÍA",
        description: "Colaboración técnica en un laboratorio educativo virtual.",
        role: "Asesoría de programación", reach: "Colaboración técnica",
        problem: "Acompañar el desarrollo técnico de un entorno virtual de laboratorio.",
        solution: "Asesoramiento en programación del simulador educativo.",
        contribution: ["Consultoría técnica de programación; no se atribuye el desarrollo completo."],
        result: "Participación técnica documentada como asesor.",
        details: "Muestra experiencia de colaboración y apoyo técnico en simuladores educativos."
      },
      en: {
        title: "Chemistry Laboratory Simulator", category: "EDUCATION · ADVISORY",
        description: "Technical collaboration on a virtual educational laboratory.",
        role: "Programming advisor", reach: "Technical collaboration",
        problem: "Support the technical development of a virtual laboratory environment.",
        solution: "Programming advice for the educational simulator.",
        contribution: ["Technical programming consultancy; no claim of full development ownership."],
        result: "Documented technical participation as an advisor.",
        details: "Shows collaborative work and technical support in educational simulation."
      }
    }
  ],
  ui: {
    es: {
      documentTitle:"Stalin Carrión — Unity & XR Developer",
      role:"Unity & XR Developer", location:"Madrid, España",
      navAbout:"Sobre mí", navProjects:"Proyectos", navProfessional:"Profesionales", navPersonal:"XR y proyectos propios", navExperience:"Trayectoria", navContact:"Contacto",
      heroPre:"PORTAFOLIO / 2026", heroTitleA:"Experiencias que", heroTitleB:"puedes vivir.", heroLead:"Desarrollo simuladores, soluciones multiusuario y experiencias de realidad virtual con Unity y C#. De una necesidad real a una aplicación interactiva.",
      heroCta:"Explorar proyectos", heroCv:"Descargar CV", available:"Abierto a oportunidades profesionales",
      aboutLabel:"01 / SOBRE MÍ", aboutTitle:"El código importa. La experiencia también.",
      aboutText:"Soy ingeniero de software especializado en Unity y realidad extendida. He desarrollado simuladores para educación y formación, videojuegos y aplicaciones para Meta Quest. En la UTPL evolucioné de la programación e investigación al liderazgo técnico, la arquitectura y la revisión de código.",
      proofOne:"años con Unity y XR",proofTwo:"proyectos liderados en etapa reciente",proofThree:"estudiantes por periodo académico en Audiencias",proofNote:"Alcance académico aproximado, no usuarios simultáneos.",
      featuredLabel:"02 / PROYECTO DESTACADO",featuredTitle:"Un caso real, de principio a fin.",projectRole:"MI PAPEL",viewProject:"Explorar el caso",clickToView:"Selecciona un proyecto para conocer mi aportación.",
      proLabel:"03 / PROYECTOS PROFESIONALES",proTitle:"Trabajo aplicado.",proIntro:"Simulación, formación y experiencias interactivas en situaciones reales.",
      xrLabel:"04 / XR Y DESARROLLOS",xrTitle:"Construir para explorar.",xrIntro:"Proyectos con realidad virtual, interacción 3D y una finalidad educativa o social.",
      moreLabel:"OTRAS COLABORACIONES",moreTitle:"También he contribuido a",expLabel:"05 / EXPERIENCIA",expTitle:"Del desarrollo al liderazgo técnico.",
      expText:"He colaborado con perfiles técnicos y creativos, participado en decisiones de arquitectura y coordinado equipos. Mi enfoque: entregar software que se pueda utilizar y mantener.",
      timeline:[
        {period:"2025 — 2026",title:"Especialista de Tecnologías para la Educación",place:"UTPL",desc:"Dirección de proyectos, arquitectura, revisión de código y pull requests; coordinación técnica de equipos de hasta ocho personas."},
        {period:"2022 — 2024",title:"Analista de Innovación",place:"UTPL · XRLab",desc:"Programación principal en Unity/C#, simuladores XR, prototipos y acompañamiento técnico."},
        {period:"2024",title:"Profesor de Programación de Videojuegos",place:"UTPL",desc:"Docencia simultánea de fundamentos de programación de videojuegos con Unity."},
        {period:"2020 — 2025",title:"Consultor Unity, VR y videojuegos",place:"Solnus · colaboración por proyectos",desc:"Experiencias inmersivas, formación VR y aplicaciones interactivas por encargo."},
        {period:"2021 — 2022",title:"Investigador y Analista de Innovación",place:"UTPL",desc:"Investigación tecnológica, prototipos y evaluación de viabilidad."}
      ],
      techLabel:"STACK / HERRAMIENTAS",education:"FORMACIÓN",master:"Máster de Diseño y Programación de Videojuegos · UOC (en curso)",degree:"Ingeniería en Sistemas Informáticos y Computación · UTPL",
      contactLabel:"06 / CONTACTO",contactTitle:"Hagamos algo que merezca experimentarse.",contactText:"Unity, XR, simulación, real-time 3D y liderazgo técnico. Disponible para trabajo remoto, híbrido o presencial.",write:"Escríbeme",footer:"Diseñado para mostrar trabajo real, contribuciones concretas y resultados verificables.",back:"Volver al portfolio",caseOverview:"VISIÓN GENERAL",caseProblem:"EL PROBLEMA",caseSolution:"LA SOLUCIÓN",caseContribution:"MI APORTACIÓN",caseResult:"RESULTADO / ALCANCE",caseNotes:"CONTEXTO TÉCNICO",caseMediaNotice:"Faltan capturas reales de este proyecto; se muestra una visual conceptual.",caseContact:"¿Quieres saber más sobre este trabajo?",contactButton:"Contactar",linkVideo:"Ver vídeo",linkDemo:"Ver demo / referencia",linkCode:"Ver código",scroll:"DESPLAZAR",language:"Cambiar a inglés",menu:"Abrir menú"
    },
    en: {
      documentTitle:"Stalin Carrión — Unity & XR Developer",
      role:"Unity & XR Developer",location:"Madrid, Spain",
      navAbout:"About",navProjects:"Projects",navProfessional:"Professional",navPersonal:"XR and independent work",navExperience:"Experience",navContact:"Contact",
      heroPre:"PORTFOLIO / 2026",heroTitleA:"Experiences you",heroTitleB:"can step into.",heroLead:"I develop simulators, multiplayer solutions and virtual reality experiences with Unity and C#. From a real need to an interactive application.",
      heroCta:"Explore projects",heroCv:"Download résumé",available:"Open to professional opportunities",
      aboutLabel:"01 / ABOUT",aboutTitle:"The code matters. So does the experience.",
      aboutText:"I am a software engineer focused on Unity and extended reality. I have developed simulators for education and training, games, and Meta Quest applications. At UTPL, my responsibilities grew from research and development into technical leadership, architecture and code review.",
      proofOne:"years of Unity and XR",proofTwo:"projects led in recent role",proofThree:"students per academic term using Audiencias",proofNote:"Approximate academic reach, not concurrent users.",
      featuredLabel:"02 / FEATURED PROJECT",featuredTitle:"A real case, from start to finish.",projectRole:"MY ROLE",viewProject:"Explore case study",clickToView:"Select a project to explore my contribution.",
      proLabel:"03 / PROFESSIONAL PROJECTS",proTitle:"Applied work.",proIntro:"Simulation, training and interactive experiences addressing real needs.",
      xrLabel:"04 / XR AND INDEPENDENT WORK",xrTitle:"Built to explore.",xrIntro:"Virtual reality projects, 3D interaction, and educational or social use cases.",
      moreLabel:"OTHER COLLABORATIONS",moreTitle:"I have also contributed to",expLabel:"05 / EXPERIENCE",expTitle:"From development to technical leadership.",
      expText:"I have worked with technical and creative teams, contributed to architecture decisions and coordinated developers. My focus: shipping usable, maintainable software.",
      timeline:[
        {period:"2025 — 2026",title:"Educational Technologies Specialist",place:"UTPL",desc:"Project leadership, architecture, code and pull request reviews; technical coordination of teams of up to eight."},
        {period:"2022 — 2024",title:"Innovation Analyst",place:"UTPL · XRLab",desc:"Lead Unity/C# programming, XR simulators, prototypes and developer support."},
        {period:"2024",title:"Video Game Programming Lecturer",place:"UTPL",desc:"Concurrent teaching role covering fundamentals of game programming with Unity."},
        {period:"2020 — 2025",title:"Unity, VR and Games Consultant",place:"Solnus · project-based collaboration",desc:"Immersive experiences, VR training and interactive applications for clients."},
        {period:"2021 — 2022",title:"Researcher & Innovation Analyst",place:"UTPL",desc:"Technology research, prototypes and feasibility assessments."}
      ],
      techLabel:"STACK / TOOLS",education:"EDUCATION",master:"Master's in Video Game Design and Programming · UOC (in progress)",degree:"Degree in Computer Systems and Computing Engineering · UTPL",
      contactLabel:"06 / CONTACT",contactTitle:"Let's build something worth experiencing.",contactText:"Unity, XR, simulation, real-time 3D and technical leadership. Open to remote, hybrid or on-site work.",write:"Email me",footer:"Designed to demonstrate real work, specific contributions and substantiated outcomes.",back:"Back to portfolio",caseOverview:"OVERVIEW",caseProblem:"THE PROBLEM",caseSolution:"THE SOLUTION",caseContribution:"MY CONTRIBUTION",caseResult:"OUTCOME / REACH",caseNotes:"TECHNICAL CONTEXT",caseMediaNotice:"Original screenshots are not yet available; this is a conceptual visual.",caseContact:"Want to discuss this project?",contactButton:"Get in touch",linkVideo:"Watch video",linkDemo:"Demo / reference",linkCode:"View code",scroll:"SCROLL",language:"Switch to Spanish",menu:"Open menu"
    }
  }
};
