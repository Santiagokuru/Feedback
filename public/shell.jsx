// Dashboard chrome — sidebar + topbar around the evaluation
const shellStyles = {
  page: {
    display: "grid",
    gridTemplateColumns: "240px 1fr",
    minHeight: "100vh",
    background: "var(--cream)"
  },
  sidebar: {
    background: "var(--green-900)",
    color: "#dde6df",
    padding: "26px 18px",
    display: "flex",
    flexDirection: "column",
    gap: 22,
    position: "sticky",
    top: 0,
    height: "100vh"
  },
  brand: {
    display: "flex", alignItems: "center", gap: 10, padding: "0 6px"
  },
  brandMark: {
    width: 30, height: 30, borderRadius: 9,
    background: "linear-gradient(135deg,#5b9461,#356139)",
    display: "grid", placeItems: "center", color: "#fff",
    fontFamily: "Fraunces", fontWeight: 600, fontSize: 16,
    boxShadow: "inset 0 0 0 1px rgba(255,255,255,.18)"
  },
  brandName: { fontWeight: 700, letterSpacing: "-0.01em", fontSize: 16, color: "#fff" },
  brandSub: { fontSize: 11, color: "#9bb29f", letterSpacing: ".06em", textTransform: "uppercase" },
  sectionLabel: { fontSize: 10.5, color: "#7c9482", letterSpacing: ".14em", textTransform: "uppercase", padding: "0 8px", marginTop: 6 },
  navItem: (active) => ({
    display: "flex", alignItems: "center", gap: 12,
    padding: "10px 10px",
    borderRadius: 10,
    color: active ? "#fff" : "#bdcfc1",
    background: active ? "rgba(255,255,255,.07)" : "transparent",
    fontSize: 14, fontWeight: 500,
    cursor: "pointer",
    border: active ? "1px solid rgba(255,255,255,.08)" : "1px solid transparent"
  }),
  navBadge: {
    marginLeft: "auto", background: "var(--green-500)", color: "#fff",
    fontSize: 10.5, padding: "2px 7px", borderRadius: 999, fontWeight: 600
  },
  user: {
    marginTop: "auto",
    display: "flex", alignItems: "center", gap: 10,
    padding: 10, borderRadius: 12,
    background: "rgba(255,255,255,.04)",
    border: "1px solid rgba(255,255,255,.05)"
  },
  avatar: {
    width: 34, height: 34, borderRadius: "50%",
    background: "linear-gradient(135deg,#cfe0d1,#8bb78f)",
    color: "#1f3a22", display: "grid", placeItems: "center",
    fontWeight: 700, fontSize: 13
  },
  topbar: {
    display: "flex", alignItems: "center", gap: 16,
    padding: "20px 40px",
    borderBottom: "1px solid var(--line)",
    background: "var(--cream)",
    position: "sticky", top: 0, zIndex: 5
  },
  crumbs: {
    display: "flex", alignItems: "center", gap: 8,
    color: "var(--ink-3)", fontSize: 13
  },
  crumbCurrent: { color: "var(--ink)", fontWeight: 600 },
  search: {
    marginLeft: "auto",
    display: "flex", alignItems: "center", gap: 8,
    padding: "8px 12px",
    background: "#fff",
    border: "1px solid var(--line)",
    borderRadius: 10,
    width: 280,
    color: "var(--ink-3)", fontSize: 13
  },
  iconBtn: {
    width: 38, height: 38, borderRadius: 10,
    background: "#fff", border: "1px solid var(--line)",
    display: "grid", placeItems: "center", color: "var(--ink-2)",
    cursor: "pointer"
  }
};

const Sidebar = () => (
  <aside style={shellStyles.sidebar}>
    <div style={shellStyles.brand}>
      <div style={shellStyles.brandMark}>S</div>
      <div>
        <div style={shellStyles.brandName}>Simulaction</div>
        <div style={shellStyles.brandSub}>Roleplay coach</div>
      </div>
    </div>

    <nav style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <div style={shellStyles.sectionLabel}>Práctica</div>
      <div style={shellStyles.navItem(false)}><Icon name="home" size={17} /> Inicio</div>
      <div style={shellStyles.navItem(false)}><Icon name="play" size={17} /> Nuevo roleplay</div>
      <div style={shellStyles.navItem(false)}><Icon name="library" size={17} /> Biblioteca</div>

      <div style={shellStyles.sectionLabel}>Mi progreso</div>
      <div style={shellStyles.navItem(true)}>
        <Icon name="history" size={17} /> Evaluaciones
        <span style={shellStyles.navBadge}>nuevo</span>
      </div>
      <div style={shellStyles.navItem(false)}><Icon name="trophy" size={17} /> Logros</div>
      <div style={shellStyles.navItem(false)}><Icon name="settings" size={17} /> Ajustes</div>
    </nav>

    <div style={shellStyles.user}>
      <div style={shellStyles.avatar}>LM</div>
      <div style={{ lineHeight: 1.2 }}>
        <div style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>Lucía Méndez</div>
        <div style={{ color: "#9bb29f", fontSize: 11 }}>Plan Equipos · 14 sesiones</div>
      </div>
    </div>
  </aside>
);

const Topbar = () => (
  <div style={shellStyles.topbar}>
    <div style={shellStyles.crumbs}>
      <span>Mi progreso</span>
      <Icon name="right" size={13} />
      <span>Evaluaciones</span>
      <Icon name="right" size={13} />
      <span style={shellStyles.crumbCurrent}>Conversación difícil · 8 may</span>
    </div>
    <div style={shellStyles.search}>
      <Icon name="search" size={15} />
      <span>Buscar evaluaciones, escenarios…</span>
    </div>
    <div style={shellStyles.iconBtn}><Icon name="bell" size={17} /></div>
  </div>
);

window.Sidebar = Sidebar;
window.Topbar = Topbar;
