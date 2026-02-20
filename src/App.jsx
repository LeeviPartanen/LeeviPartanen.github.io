import { useState, useEffect, useRef } from "react";

const EMAILJS_SERVICE_ID = "service_scd1btg";
const EMAILJS_TEMPLATE_ID = "template_y1pnl5o";
const EMAILJS_PUBLIC_KEY = "b7blUI7Y9ev4WGMEU";

const content = {
  fi: {
    nav: ["Etusivu", "Minusta", "Projektit", "Yhteystiedot"],
    hero: {
      greeting: "Hei, olen",
      name: "Leevi Partanen",
      tagline: "Valmistunut ohjelmistokehittäjä Oulusta. Rakennan asioita uteliaisuudesta.",
      cta: "Katso projektini",
      contact: "Ota yhteyttä",
    },
    about: {
      title: "Minusta",
      body: [
        "Olen 19-vuotias ohjelmistokehittäjä, joka valmistui OSAOlta joulukuussa 2025. Aloitin koodaamisen koulutehtävänä 16-vuotiaana — se oli yksinkertainen portfolio HTML:llä ja CSS:llä. Siitä lähtien olen rakentanut paljon enemmän.",
        "Minua kiinnostaa sulautetut järjestelmät, web-kehitys ja tekoäly. Pidän siitä, kun asiat toimivat oikeasti — ei vain teoriassa. Harjoittelujaksollani SkyLED Finland OY:lla suunnittelin ja toteutin React-komponentteja oikeassa tuotantoympäristössä.",
        "Haen nyt ensimmäistä vakituista paikkaa. Olen avoin kaikille rooleille, opin nopeasti ja pidän haasteista.",
      ],
      skills: "Taidot",
    },
    projects: {
      title: "Projektit",
      clickHint: "Klikkaa korttia lisätiedoista",
      github: "Katso GitHubissa",
      close: "Sulje",
      screenshots: "Kuvakaappaukset",
      techStack: "Teknologiat",
      highlights: "Mitä opin",
    },
    contact: {
      title: "Otetaan yhteyttä",
      subtitle: "Oli kyseessä sitten työtarjous, projekti tai vain jutustelu — kirjoita minulle.",
      name: "Nimi",
      email: "Sähköposti",
      message: "Viesti",
      send: "Lähetä viesti",
      or: "tai tavoita minut suoraan",
    },
    footer: "Rakennettu Reactilla. Suunniteltu lämmöllä.",
  },
  en: {
    nav: ["Home", "About", "Projects", "Contact"],
    hero: {
      greeting: "Hi, I'm",
      name: "Leevi Partanen",
      tagline: "Junior software developer from Oulu. I build things out of curiosity.",
      cta: "See my projects",
      contact: "Get in touch",
    },
    about: {
      title: "About me",
      body: [
        "I'm a 19-year-old software developer who graduated from OSAO in December 2025. I started coding at 16 as a school assignment — a simple portfolio in HTML and CSS. Since then I've built a lot more.",
        "I'm interested in embedded systems, web development, and AI. I like things that actually work — not just in theory. During my internship at SkyLED Finland OY, I planned and built React components in a real production environment.",
        "I'm now looking for my first permanent role. I'm open to any position, I learn fast, and I like a good challenge.",
      ],
      skills: "Skills",
    },
    projects: {
      title: "Projects",
      clickHint: "Click a card for details",
      github: "View on GitHub",
      close: "Close",
      screenshots: "Screenshots",
      techStack: "Tech stack",
      highlights: "What I learned",
    },
    contact: {
      title: "Let's talk",
      subtitle: "Whether it's a job offer, a project, or just a chat — send me a message.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send message",
      or: "or reach me directly",
    },
    footer: "Built with React. Designed with warmth.",
  },
};

const projects = [
  {
    title: { fi: "Valvontajärjestelmä", en: "Surveillance System" },
    desc: {
      fi: "Raspberry Pi -pohjainen valvontajärjestelmä PIR-anturilla ja kameralla. Web-käyttöliittymä Flaskilla reaaliaikaiseen seurantaan.",
      en: "Raspberry Pi-based surveillance system with PIR sensor and camera. Flask web interface for real-time monitoring and video recording.",
    },
    longDesc: {
      fi: "Rakensin tämän projektin tutustuakseni sulautettuihin järjestelmiin ja IoT-kehitykseen. Järjestelmä käyttää PIR-anturia liiketunnistukseen — kun liikettä havaitaan, kamera aloittaa automaattisesti videon tallennuksen. Flask-pohjainen web-käyttöliittymä mahdollistaa kameran reaaliaikaisen seurannan selaimen kautta, ja käyttäjä voi keskeyttää tallennuksen nappia painamalla. Tallennus päättyy automaattisesti 30 minuutin kuluttua.",
      en: "I built this project to explore embedded systems and IoT development. The system uses a PIR sensor for motion detection — when motion is detected, the camera automatically starts recording. A Flask-based web interface allows real-time camera monitoring from any browser, and users can stop recording via a button. Recording automatically ends after 30 minutes as a failsafe.",
    },
    highlights: {
      fi: ["Raspberry Pi -ohjelmointi Pythonilla", "Flask-palvelimen rakentaminen", "PIR-anturin integrointi", "Reaaliaikainen videostreaming selaimeen"],
      en: ["Raspberry Pi programming with Python", "Building a Flask web server", "PIR sensor hardware integration", "Real-time video streaming to browser"],
    },
    stack: ["Python", "Flask", "Raspberry Pi", "IoT"],
    github: null,
    color: "#e8f4f0",
    accent: "#2d7a5f",
    emoji: "📷",
    images: [
      { label: { fi: "Järjestelmä", en: "System view" }, placeholder: "#c8e6dd" },
      { label: { fi: "Web-käyttöliittymä", en: "Web interface" }, placeholder: "#b0d9ce" },
    ],
  },
  {
    title: { fi: "Äänen visualisoija", en: "Audio Visualizer" },
    desc: {
      fi: "Reaaliaikainen äänivisualisoija JavaScriptillä. Käyttäjä voi liittää minkä tahansa äänitiedoston ja nähdä taajuudet palkeina.",
      en: "Real-time audio visualizer in JavaScript. Upload any audio file and watch frequency bars animate live.",
    },
    longDesc: {
      fi: "Tämä projekti syntyi halusta ymmärtää Web Audio API:a syvällisemmin. Sovellukseen voi ladata minkä tahansa äänitiedoston, jonka jälkeen se visualisoi taajuudet reaaliajassa animoituina palkeina. Projekti opetti minulle paljon selaimen audio-ominaisuuksista ja canvas-piirtämisestä JavaScriptillä.",
      en: "This project was born from a desire to deeply understand the Web Audio API. Users can upload any audio file, and the app visualizes its frequencies in real time as animated bars. The project taught me a lot about browser audio capabilities and canvas drawing with JavaScript.",
    },
    highlights: {
      fi: ["Web Audio API:n käyttö", "Canvas-animaatiot JavaScriptillä", "Tiedostojen lataaminen selaimessa", "Reaaliaikainen taajuusanalyysi"],
      en: ["Using the Web Audio API", "Canvas animations in JavaScript", "File uploads in the browser", "Real-time frequency analysis"],
    },
    stack: ["JavaScript", "Web Audio API", "HTML/CSS", "Canvas"],
    github: "https://github.com/LeeviPartanen/Interactive-Music-Visualizer",
    color: "#f0eef8",
    accent: "#5b3fa6",
    emoji: "🎵",
    images: [
      { label: { fi: "Visualisoija toiminnassa", en: "Visualizer in action" }, placeholder: "#d8d0f0" },
    ],
  },
  {
    title: { fi: "Energianhallintapaneeli", en: "Smart Energy Dashboard" },
    desc: {
      fi: "React + Vite -sovellus, joka näyttää pörssisähkön hinnan, piirtää hintakäyrän ja ehdottaa edullisimmat käyttöajat.",
      en: "React + Vite app showing electricity spot prices, drawing price curves, and suggesting the cheapest times to use power.",
    },
    longDesc: {
      fi: "Energianhallintapaneeli on React + Vite -sovellus, joka näyttää pörssisähkön hinnan reaaliajassa, piirtää vuorokauden hintakäyrän ja antaa käyttäjälle ehdotuksia milloin sähkön käyttö on edullisinta. Esimerkkisovellus käyttää mock-dataa, mutta arkkitehtuuri on suunniteltu niin, että sen voi helposti yhdistää oikeaan sähköhintojen API:iin.",
      en: "The Smart Energy Dashboard is a React + Vite app that shows electricity spot prices in real time, draws a 24-hour price curve, and gives users suggestions on when power usage is cheapest. The demo uses mock data, but the architecture is designed so it can easily be connected to a real electricity price API.",
    },
    highlights: {
      fi: ["React-komponenttiarkkitehtuuri", "Viten käyttöönotto", "Kaavioiden piirtäminen datasta", "API-integraation suunnittelu"],
      en: ["React component architecture", "Setting up Vite", "Drawing charts from data", "Designing API integration"],
    },
    stack: ["React", "Vite", "JavaScript", "REST API"],
    github: "https://github.com/LeeviPartanen/Smart-Energy-Dashboard",
    color: "#fef8ec",
    accent: "#b07d1a",
    emoji: "⚡",
    images: [
      { label: { fi: "Paneeli", en: "Dashboard view" }, placeholder: "#f0dfa0" },
    ],
  },
  {
    title: { fi: "Ristinollapeli", en: "Tic-Tac-Toe" },
    desc: {
      fi: "Windows Forms -sovellus kahdelle pelaajalle. Automaattinen voiton ja tasapelin tunnistus.",
      en: "Windows Forms app for two players. Automatic win and draw detection after every move.",
    },
    longDesc: {
      fi: "Ristinollapeli oli yksi ensimmäisistä C#-projekteistani. Rakensin sen Windows Forms -sovelluksena, jossa kaksi pelaajaa voivat pelata samalla laitteella. Ohjelma tarkistaa pelin tilanteen jokaisen siirron jälkeen ja tunnistaa automaattisesti voiton tai tasapelin.",
      en: "Tic-Tac-Toe was one of my first C# projects. I built it as a Windows Forms application where two players can play on the same device. The app checks the game state after every move and automatically detects wins and draws.",
    },
    highlights: {
      fi: ["C# ja .NET-ympäristö", "Windows Forms -sovellusten rakenne", "Pelilogiikan toteuttaminen", "Olio-ohjelmoinnin perusteet"],
      en: ["C# and the .NET environment", "Windows Forms application structure", "Implementing game logic", "Object-oriented programming basics"],
    },
    stack: ["C#", "Windows Forms", ".NET"],
    github: "https://github.com/LeeviPartanen/Ristinolla/",
    color: "#fef0f0",
    accent: "#b03a2e",
    emoji: "🎮",
    images: [
      { label: { fi: "Peli", en: "Game view" }, placeholder: "#f5c8c4" },
    ],
  },
  {
    title: { fi: "Tarinatupa", en: "Tarinatupa Bookshop" },
    desc: {
      fi: "Kuvitteellisen kirjakaupan nettisivut hakutoiminnolla ja suodattimilla. Tiimiprojekti.",
      en: "Website for a fictional bookshop with search functionality and filters. Team project.",
    },
    longDesc: {
      fi: "Tarinatupa oli tiimiprojekti, jossa rakensimme kuvitteelliselle kirjakaupalle nettisivut. Sivustolla voi etsiä, selata, ostaa ja lainata kirjoja. Sivustolla on tehokas hakutoiminto ja useita suodattimia. Projekti oli ensimmäinen kokemukseni tiimityöskentelystä ohjelmistokehityksessä.",
      en: "Tarinatupa was a team project where we built a website for a fictional bookshop. Users can search, browse, buy, and borrow books, with a powerful search function and multiple filters. This was my first experience with team-based software development.",
    },
    highlights: {
      fi: ["Tiimityöskentely ohjelmistokehityksessä", "Hakutoiminnon ja suodattimien toteutus", "Responsiivinen CSS-asettelu", "JavaScript DOM-manipulaatio"],
      en: ["Team collaboration in software development", "Implementing search and filter features", "Responsive CSS layout", "JavaScript DOM manipulation"],
    },
    stack: ["HTML", "CSS", "JavaScript"],
    github: null,
    color: "#f0f5fe",
    accent: "#1a4fa6",
    emoji: "📚",
    images: [
      { label: { fi: "Etusivu", en: "Home page" }, placeholder: "#c0d4f5" },
    ],
  },
  {
    title: { fi: "Kotkantien Maalaus", en: "Kotkantie Painting Co." },
    desc: {
      fi: "Kuvitteellisen maalaustoimiston sivusto värien testausominaisuudella — käyttäjä voi kokeilla väriyhdistelmiä reaaliajassa.",
      en: "Website for a fictional painting company with a live color-testing feature — users pick and preview color combinations in real time.",
    },
    longDesc: {
      fi: "Kotkantien Maalaus ja Tapetointi on kuvitteellisen maalaustoimiston sivusto, jonka pääominaisuus on interaktiivinen värien testausosio. Käyttäjä voi valita eri väriyhdistelmiä ja nähdä reaaliajassa miltä ne näyttäisivät seinällä. Sivustolla on myös galleria, tietoa yrityksestä ja yhteydenottolomake.",
      en: "Kotkantie Painting Co. is a fictional painting company's website whose main feature is an interactive color-testing section. Users can pick color combinations and see in real time what they'd look like on a wall. The site also includes a gallery, company info, and a contact form.",
    },
    highlights: {
      fi: ["Reaaliaikainen DOM-manipulaatio", "Interaktiivinen värinvalitsin", "CSS-muuttujat ja teemat", "Responsiivinen sivusto"],
      en: ["Real-time DOM manipulation", "Interactive color picker feature", "CSS variables and theming", "Responsive website design"],
    },
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/LeeviPartanen/Kotkantien-Maalaus-ja-Tapetointi",
    color: "#f5f0fe",
    accent: "#6b2fa0",
    emoji: "🎨",
    images: [
      { label: { fi: "Etusivu", en: "Home page" }, placeholder: "#ddd0f5" },
      { label: { fi: "Värien testaus", en: "Color tester" }, placeholder: "#ccc0ee" },
    ],
  },
];

const skills = [
  { name: "JavaScript", level: 75 },
  { name: "React / TypeScript", level: 65 },
  { name: "Python", level: 70 },
  { name: "C#", level: 65 },
  { name: "HTML/CSS", level: 85 },
  { name: "Node.js / REST API", level: 60 },
  { name: "Raspberry Pi / IoT", level: 65 },
  { name: "Docker / Git", level: 60 },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function SkillBar({ name, level, visible }) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px", fontSize: "0.88rem", color: "#555" }}>
        <span style={{ fontWeight: 600 }}>{name}</span>
        <span style={{ color: "#888" }}>{level}%</span>
      </div>
      <div style={{ background: "#e8e4df", borderRadius: "99px", height: "8px", overflow: "hidden" }}>
        <div style={{
          height: "100%", borderRadius: "99px",
          background: "linear-gradient(90deg, #c97d4e, #e8a87c)",
          width: visible ? `${level}%` : "0%",
          transition: "width 1.1s cubic-bezier(0.4,0,0.2,1)",
        }} />
      </div>
    </div>
  );
}

function PlaceholderImage({ color, label }) {
  return (
    <div style={{
      background: color, borderRadius: "12px", height: "175px",
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", gap: "6px",
      border: "2px dashed #00000012",
    }}>
      <span style={{ fontSize: "1.6rem", opacity: 0.35 }}>🖼️</span>
      <span style={{ fontSize: "0.75rem", color: "#888", fontWeight: 600 }}>{label}</span>
      <span style={{ fontSize: "0.65rem", color: "#bbb", fontStyle: "italic" }}>Replace with real screenshot</span>
    </div>
  );
}

function ProjectDrawer({ project, lang, t, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleClose = () => {
    setMounted(false);
    setTimeout(onClose, 350);
  };

  return (
    <>
      {/* Backdrop */}
      <div onClick={handleClose} style={{
        position: "fixed", inset: 0, zIndex: 200,
        background: "rgba(20,15,10,0.4)",
        backdropFilter: "blur(4px)",
        opacity: mounted ? 1 : 0,
        transition: "opacity 0.35s ease",
        cursor: "pointer",
      }} />

      {/* Drawer panel */}
      <div style={{
        position: "fixed", top: 0, right: 0, bottom: 0, zIndex: 201,
        width: "min(560px, 100vw)",
        background: "#faf8f5",
        boxShadow: "-12px 0 60px rgba(0,0,0,0.2)",
        overflowY: "auto",
        transform: mounted ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.38s cubic-bezier(0.4,0,0.2,1)",
        display: "flex", flexDirection: "column",
      }}>
        {/* Header */}
        <div style={{
          background: project.accent,
          padding: "32px 28px 28px",
          position: "relative", flexShrink: 0,
        }}>
          <button onClick={handleClose} style={{
            position: "absolute", top: "18px", right: "18px",
            background: "rgba(255,255,255,0.2)", border: "none",
            color: "#fff", borderRadius: "50%",
            width: "38px", height: "38px", fontSize: "1rem",
            cursor: "pointer", display: "flex",
            alignItems: "center", justifyContent: "center",
            transition: "background 0.2s", fontWeight: 700,
          }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.35)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
          >✕</button>
          <div style={{ fontSize: "2.6rem", marginBottom: "12px" }}>{project.emoji}</div>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#fff", fontSize: "1.7rem", fontWeight: 700, margin: 0,
          }}>{project.title[lang]}</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "14px" }}>
            {project.stack.map(s => (
              <span key={s} style={{
                background: "rgba(255,255,255,0.2)", color: "#fff",
                borderRadius: "99px", padding: "3px 11px",
                fontSize: "0.76rem", fontWeight: 700,
              }}>{s}</span>
            ))}
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "30px", flex: 1 }}>

          {/* Long description */}
          <p style={{ color: "#444", lineHeight: 1.8, fontSize: "0.96rem", margin: 0 }}>
            {project.longDesc[lang]}
          </p>

          {/* Screenshots */}
          <div>
            <h3 style={{
              fontFamily: "'Playfair Display', serif", fontSize: "1.05rem",
              color: "#1a1a1a", marginBottom: "14px",
              display: "flex", alignItems: "center", gap: "8px",
            }}>
              <span style={{ color: project.accent, fontSize: "0.7rem" }}>◆</span>
              {t.projects.screenshots}
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {project.images.map((img, i) => (
                <PlaceholderImage key={i} color={img.placeholder} label={img.label[lang]} />
              ))}
            </div>
          </div>

          {/* What I learned */}
          <div>
            <h3 style={{
              fontFamily: "'Playfair Display', serif", fontSize: "1.05rem",
              color: "#1a1a1a", marginBottom: "14px",
              display: "flex", alignItems: "center", gap: "8px",
            }}>
              <span style={{ color: project.accent, fontSize: "0.7rem" }}>◆</span>
              {t.projects.highlights}
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {project.highlights[lang].map((h, i) => (
                <div key={i} style={{
                  display: "flex", gap: "12px", alignItems: "flex-start",
                  background: `${project.accent}0d`,
                  borderLeft: `3px solid ${project.accent}`,
                  borderRadius: "0 8px 8px 0",
                  padding: "10px 14px",
                }}>
                  <span style={{ color: project.accent, fontWeight: 700, flexShrink: 0 }}>→</span>
                  <span style={{ fontSize: "0.9rem", color: "#444", lineHeight: 1.5 }}>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* GitHub CTA */}
          {project.github ? (
            <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              background: project.accent, color: "#fff",
              borderRadius: "99px", padding: "14px 28px",
              fontWeight: 700, fontSize: "0.92rem",
              textDecoration: "none", alignSelf: "flex-start",
              boxShadow: `0 4px 18px ${project.accent}44`,
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 24px ${project.accent}55`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = `0 4px 18px ${project.accent}44`; }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" /></svg>
              {t.projects.github}
            </a>
          ) : (
            <p style={{ fontSize: "0.82rem", color: "#bbb", fontStyle: "italic" }}>
              {lang === "fi" ? "Ei julkista GitHub-repositoriota." : "No public GitHub repository for this project."}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

function ProjectCard({ project, lang, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? project.color : "#fff",
        border: `2px solid ${hovered ? project.accent : "#ede9e4"}`,
        borderRadius: "18px", padding: "28px",
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered ? `0 12px 32px ${project.accent}22` : "0 2px 8px #0000000a",
        cursor: "pointer",
        display: "flex", flexDirection: "column", gap: "12px",
        height: "100%",
      }}
    >
      <div style={{ fontSize: "2rem" }}>{project.emoji}</div>
      <h3 style={{ margin: 0, fontSize: "1.15rem", fontFamily: "'Playfair Display', Georgia, serif", color: "#1a1a1a" }}>
        {project.title[lang]}
      </h3>
      <p style={{ margin: 0, fontSize: "0.9rem", color: "#555", lineHeight: 1.6, flex: 1 }}>
        {project.desc[lang]}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {project.stack.map(s => (
          <span key={s} style={{
            background: `${project.accent}18`, color: project.accent,
            border: `1px solid ${project.accent}33`,
            borderRadius: "99px", padding: "3px 10px",
            fontSize: "0.75rem", fontWeight: 600,
          }}>{s}</span>
        ))}
      </div>
      <div style={{
        fontSize: "0.8rem", fontWeight: 700,
        color: hovered ? project.accent : "#ccc",
        display: "flex", alignItems: "center", gap: "5px",
        transition: "color 0.25s",
      }}>
        <span style={{ display: "inline-block", transform: hovered ? "translateX(4px)" : "none", transition: "transform 0.25s" }}>→</span>
        {lang === "fi" ? "Lisätiedot" : "View details"}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [lang, setLang] = useState("fi");
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const t = content[lang];

  const [aboutRef, aboutVisible] = useInView();
  const [skillsRef, skillsVisible] = useInView();
  const [projectsRef, projectsVisible] = useInView();
  const [contactRef, contactVisible] = useInView();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  useEffect(() => {
    if (window.emailjs) return;
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.onload = () => window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    document.head.appendChild(script);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const handleSend = async (e) => {
    e.preventDefault();
    setSending(true);
    setSendError(false);
    try {
      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      });
      setSent(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setSendError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <div style={{ fontFamily: "'Lato', 'Segoe UI', sans-serif", background: "#faf8f5", color: "#1a1a1a", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lato:wght@300;400;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::selection { background: #c97d4e33; }
        .fade-up { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .fade-up.visible { opacity: 1; transform: none; }
        .fade-up.d1 { transition-delay: 0.1s; }
        .fade-up.d2 { transition-delay: 0.2s; }
        .fade-up.d3 { transition-delay: 0.35s; }
        @keyframes fadeIn { from { opacity:0; transform: translateY(20px); } to { opacity:1; transform:none; } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr !important; }
          .hero-btns { flex-direction: column !important; }
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* DRAWER */}
      {activeProject !== null && (
        <ProjectDrawer
          project={projects[activeProject]}
          lang={lang}
          t={t}
          onClose={() => setActiveProject(null)}
        />
      )}

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(250,248,245,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #ede9e4" : "none",
        transition: "all 0.3s ease",
        padding: "0 5vw",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: "64px",
      }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700, color: "#c97d4e" }}>LP</span>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {["home", "about", "projects", "contact"].map((id, i) => (
            <button key={id} onClick={() => scrollTo(id)} style={{
              background: "none", border: "none", cursor: "pointer",
              color: "#555", fontSize: "0.88rem", fontWeight: 600,
              padding: "6px 12px", borderRadius: "8px",
              fontFamily: "'Lato', sans-serif",
            }}>{t.nav[i]}</button>
          ))}
          <button onClick={() => setLang(lang === "fi" ? "en" : "fi")} style={{
            background: "#c97d4e", color: "#fff", border: "none",
            borderRadius: "99px", padding: "5px 14px", fontSize: "0.8rem",
            fontWeight: 700, cursor: "pointer", marginLeft: "8px",
            fontFamily: "'Lato', sans-serif",
          }}>{lang === "fi" ? "EN" : "FI"}</button>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        padding: "100px 5vw 60px",
        background: "linear-gradient(135deg, #faf8f5 0%, #fdf3eb 60%, #faf8f5 100%)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: "15%", right: "8%", width: "340px", height: "340px", borderRadius: "50%", background: "radial-gradient(circle, #c97d4e18 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "3%", width: "220px", height: "220px", borderRadius: "50%", background: "radial-gradient(circle, #e8a87c12 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "720px" }}>
          <p style={{ color: "#c97d4e", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px", animation: "fadeIn 0.6s ease both" }}>
            {t.hero.greeting}
          </p>
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 700, lineHeight: 1.08,
            color: "#1a1a1a", marginBottom: "24px",
            animation: "fadeIn 0.7s 0.1s ease both",
          }}>{t.hero.name}</h1>
          <p style={{
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: "#666", lineHeight: 1.65, maxWidth: "520px",
            marginBottom: "40px", animation: "fadeIn 0.7s 0.2s ease both",
          }}>{t.hero.tagline}</p>
          <div className="hero-btns" style={{ display: "flex", gap: "14px", flexWrap: "wrap", animation: "fadeIn 0.7s 0.35s ease both" }}>
            <button onClick={() => scrollTo("projects")} style={{
              background: "#c97d4e", color: "#fff", border: "none",
              borderRadius: "99px", padding: "14px 32px",
              fontSize: "0.95rem", fontWeight: 700, cursor: "pointer",
              fontFamily: "'Lato', sans-serif",
              boxShadow: "0 4px 18px #c97d4e40", transition: "transform 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 24px #c97d4e55"; }}
              onMouseLeave={e => { e.target.style.transform = "none"; e.target.style.boxShadow = "0 4px 18px #c97d4e40"; }}
            >{t.hero.cta} →</button>
            <button onClick={() => scrollTo("contact")} style={{
              background: "transparent", color: "#c97d4e",
              border: "2px solid #c97d4e", borderRadius: "99px",
              padding: "12px 30px", fontSize: "0.95rem", fontWeight: 700,
              cursor: "pointer", fontFamily: "'Lato', sans-serif",
              transition: "background 0.2s, color 0.2s",
            }}
              onMouseEnter={e => { e.target.style.background = "#c97d4e"; e.target.style.color = "#fff"; }}
              onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#c97d4e"; }}
            >{t.hero.contact}</button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" ref={aboutRef} style={{ padding: "100px 5vw", maxWidth: "1100px", margin: "0 auto" }}>
        <div className={`fade-up ${aboutVisible ? "visible" : ""}`}>
          <p style={{ color: "#c97d4e", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px" }}>— {t.about.title}</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "40px", color: "#1a1a1a" }}>
            {lang === "fi" ? "Kuka olen?" : "Who am I?"}
          </h2>
        </div>
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}>
          <div>
            {t.about.body.map((p, i) => (
              <p key={i} className={`fade-up d${i + 1} ${aboutVisible ? "visible" : ""}`} style={{ color: "#555", lineHeight: 1.8, marginBottom: "18px", fontSize: "1rem" }}>{p}</p>
            ))}
          </div>
          <div ref={skillsRef}>
            <p className={`fade-up ${skillsVisible ? "visible" : ""}`} style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", marginBottom: "24px", color: "#1a1a1a" }}>{t.about.skills}</p>
            {skills.map((s, i) => (
              <div key={s.name} className={`fade-up d${Math.min(i + 1, 3)} ${skillsVisible ? "visible" : ""}`}>
                <SkillBar name={s.name} level={s.level} visible={skillsVisible} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ background: "#f5f2ee", padding: "100px 5vw" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div ref={projectsRef} className={`fade-up ${projectsVisible ? "visible" : ""}`} style={{ marginBottom: "10px" }}>
            <p style={{ color: "#c97d4e", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px" }}>— {t.projects.title}</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", color: "#1a1a1a" }}>
              {lang === "fi" ? "Mitä olen rakentanut" : "What I've built"}
            </h2>
          </div>
          <p className={`fade-up ${projectsVisible ? "visible" : ""}`} style={{ color: "#aaa", fontSize: "0.84rem", marginBottom: "44px", fontStyle: "italic" }}>
            💡 {t.projects.clickHint}
          </p>
          <div className="projects-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {projects.map((p, i) => (
              <div key={i} className={`fade-up d${(i % 3) + 1} ${projectsVisible ? "visible" : ""}`} style={{ display: "flex" }}>
                <ProjectCard project={p} lang={lang} onClick={() => setActiveProject(i)} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" ref={contactRef} style={{ padding: "100px 5vw", maxWidth: "680px", margin: "0 auto" }}>
        <div className={`fade-up ${contactVisible ? "visible" : ""}`} style={{ marginBottom: "40px" }}>
          <p style={{ color: "#c97d4e", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "10px" }}>— {t.contact.title}</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "12px", color: "#1a1a1a" }}>{t.contact.title}</h2>
          <p style={{ color: "#888", fontSize: "1rem" }}>{t.contact.subtitle}</p>
        </div>
        {sent ? (
          <div style={{ background: "#f0faf5", border: "2px solid #2d7a5f33", borderRadius: "16px", padding: "32px", textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>✉️</div>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", color: "#2d7a5f" }}>
              {lang === "fi" ? "Viesti lähetetty! Otan pian yhteyttä." : "Message sent! I'll be in touch soon."}
            </p>
          </div>
        ) : (
          <form className={`fade-up d1 ${contactVisible ? "visible" : ""}`} onSubmit={handleSend} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[{ key: "name", label: t.contact.name, type: "text" }, { key: "email", label: t.contact.email, type: "email" }].map(({ key, label, type }) => (
              <div key={key}>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#555", marginBottom: "6px" }}>{label}</label>
                <input type={type} required value={formData[key]}
                  onChange={e => setFormData({ ...formData, [key]: e.target.value })}
                  style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", border: "2px solid #ede9e4", background: "#fff", fontSize: "1rem", fontFamily: "'Lato', sans-serif", outline: "none", transition: "border 0.2s" }}
                  onFocus={e => e.target.style.border = "2px solid #c97d4e"}
                  onBlur={e => e.target.style.border = "2px solid #ede9e4"}
                />
              </div>
            ))}
            <div>
              <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#555", marginBottom: "6px" }}>{t.contact.message}</label>
              <textarea required rows={5} value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                style={{ width: "100%", padding: "12px 16px", borderRadius: "10px", border: "2px solid #ede9e4", background: "#fff", fontSize: "1rem", fontFamily: "'Lato', sans-serif", resize: "vertical", outline: "none", transition: "border 0.2s" }}
                onFocus={e => e.target.style.border = "2px solid #c97d4e"}
                onBlur={e => e.target.style.border = "2px solid #ede9e4"}
              />
            </div>
            <button type="submit" disabled={sending} style={{
              background: sending ? "#e0a882" : "#c97d4e", color: "#fff", border: "none",
              borderRadius: "99px", padding: "14px 32px",
              fontSize: "0.95rem", fontWeight: 700,
              cursor: sending ? "not-allowed" : "pointer",
              fontFamily: "'Lato', sans-serif", alignSelf: "flex-start",
              boxShadow: "0 4px 18px #c97d4e40", transition: "transform 0.2s, background 0.2s",
              display: "flex", alignItems: "center", gap: "8px",
            }}
              onMouseEnter={e => { if (!sending) e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; }}
            >
              {sending ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ animation: "spin 0.8s linear infinite" }}>
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                  {lang === "fi" ? "Lähetetään..." : "Sending..."}
                </>
              ) : t.contact.send}
            </button>
            {sendError && (
              <p style={{ color: "#b03a2e", fontSize: "0.85rem", fontWeight: 600 }}>
                {lang === "fi"
                  ? "⚠️ Viestin lähetys epäonnistui. Kokeile sähköpostitse suoraan."
                  : "⚠️ Failed to send. Please reach out via email directly."}
              </p>
            )}
            <p style={{ color: "#aaa", fontSize: "0.85rem", marginTop: "8px" }}>
              {t.contact.or}: <a href="mailto:partaleevi20@gmail.com" style={{ color: "#c97d4e", fontWeight: 700 }}>partaleevi20@gmail.com</a>
            </p>
          </form>
        )}
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: "center", padding: "32px", background: "#f5f2ee", color: "#aaa", fontSize: "0.85rem" }}>
        <span style={{ fontFamily: "'Playfair Display', serif", color: "#c97d4e", fontWeight: 700 }}>Leevi Partanen</span> · {t.footer}
      </footer>
    </div>
  );
}