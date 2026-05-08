// Evaluation component — the focus of this design
const { useState } = React;

const evalStyles = {
  wrap: { padding: "28px 40px 64px", maxWidth: 1180, margin: "0 auto" },

  metaRow: {
    display: "flex", alignItems: "flex-start", gap: 24, flexWrap: "wrap",
    marginBottom: 20
  },
  trackChip: {
    display: "inline-flex", alignItems: "center", gap: 8,
    padding: "5px 11px", borderRadius: 999,
    background: "var(--gold-50)", color: "#7a5410",
    border: "1px solid var(--gold-100)",
    fontSize: 12, fontWeight: 600, letterSpacing: ".02em"
  },
  scenarioTitle: {
    fontFamily: "Fraunces", fontWeight: 500, letterSpacing: "-0.02em",
    fontSize: 34, lineHeight: 1.1, color: "var(--ink)", margin: "10px 0 6px"
  },
  scenarioMeta: { color: "var(--ink-3)", fontSize: 13.5, display: "flex", gap: 18, flexWrap: "wrap" },
  metaDot: { width: 3, height: 3, borderRadius: "50%", background: "var(--ink-3)", display: "inline-block", margin: "0 2px", verticalAlign: "middle", opacity: .5 },

  actions: { marginLeft: "auto", display: "flex", gap: 8 },
  btnGhost: {
    display: "inline-flex", alignItems: "center", gap: 8,
    padding: "9px 14px", borderRadius: 10,
    background: "#fff", border: "1px solid var(--line)",
    color: "var(--ink)", fontSize: 13, fontWeight: 500, cursor: "pointer"
  },
  btnPrimary: {
    display: "inline-flex", alignItems: "center", gap: 8,
    padding: "9px 16px", borderRadius: 10,
    background: "var(--green-700)", border: "1px solid var(--green-700)",
    color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer",
    boxShadow: "0 1px 0 rgba(255,255,255,.18) inset, 0 4px 10px -4px rgba(53,97,57,.5)"
  },

  // Hero summary
  hero: {
    background: "linear-gradient(180deg,#fbf9f3 0%, #f7f4ee 100%)",
    border: "1px solid var(--line)",
    borderRadius: 20,
    padding: "28px 32px",
    boxShadow: "var(--shadow-md)",
    display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 36
  },
  heroLeft: {},
  heroEyebrow: {
    fontSize: 11.5, letterSpacing: ".18em", textTransform: "uppercase",
    color: "var(--gold-600)", fontWeight: 700, marginBottom: 10,
    display: "inline-flex", alignItems: "center", gap: 8
  },
  heroHeadline: {
    fontFamily: "Fraunces", fontWeight: 500, letterSpacing: "-0.02em",
    fontSize: 32, lineHeight: 1.15, color: "var(--ink)", margin: "0 0 14px"
  },
  heroBody: { color: "var(--ink-2)", fontSize: 15.5, lineHeight: 1.55, maxWidth: 540, margin: 0 },

  successInline: {
    marginTop: 14,
    display: "flex", gap: 14, alignItems: "flex-start",
    maxWidth: 540
  },
  successBadge: {
    flex: "0 0 40px", width: 40, height: 40, borderRadius: "50%",
    background: "linear-gradient(135deg, var(--green-500), var(--green-700))",
    color: "#fff", display: "grid", placeItems: "center",
    boxShadow: "0 0 0 4px var(--green-50), 0 6px 14px -6px rgba(53,97,57,.5)"
  },
  successCopy: { flex: 1, minWidth: 0 },
  successTitle: {
    fontFamily: "Fraunces", fontWeight: 500, letterSpacing: "-0.01em",
    fontSize: 19, color: "var(--green-800)", marginBottom: 4
  },
  successSub: {
    fontSize: 14, color: "var(--ink-2)", lineHeight: 1.5
  },
  successActions: {
    display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap"
  },
  successPrimary: {
    display: "inline-flex", alignItems: "center", gap: 6,
    padding: "8px 14px", borderRadius: 9,
    background: "var(--green-700)", color: "#fff",
    border: "1px solid var(--green-700)",
    fontSize: 13, fontWeight: 600, cursor: "pointer",
    boxShadow: "0 4px 10px -4px rgba(53,97,57,.5)"
  },
  successGhost: {
    display: "inline-flex", alignItems: "center", gap: 6,
    padding: "8px 14px", borderRadius: 9,
    background: "transparent", color: "var(--green-800)",
    border: "1px solid var(--green-200)",
    fontSize: 13, fontWeight: 600, cursor: "pointer"
  },

  // Score block
  scoreCol: {
    background: "#fff", border: "1px solid var(--line)",
    borderRadius: 16, padding: 22,
    display: "flex", flexDirection: "column", gap: 14,
    boxShadow: "var(--shadow-sm)"
  },
  scoreTopRow: { display: "flex", alignItems: "baseline", gap: 10 },
  scoreNum: { fontFamily: "Fraunces", fontSize: 56, fontWeight: 500, color: "var(--green-700)", lineHeight: 1, letterSpacing: "-0.03em" },
  scoreOf: { fontSize: 18, color: "var(--ink-3)", fontWeight: 500 },
  scoreLabel: { fontSize: 13, color: "var(--ink-2)", marginLeft: "auto" },

  segmentTrack: { display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 6, marginTop: 4 },
  seg: (s) => ({
    height: 8, borderRadius: 4,
    background:
      s === "achieved" ? "var(--green-700)"
      : s === "partial" ? "var(--gold-500)"
      : s === "missed" ? "var(--rose-700)"
      : "var(--line)"
  }),
  legendRow: { display: "flex", gap: 14, fontSize: 12, color: "var(--ink-2)", marginTop: 2 },
  legendDot: (c) => ({ width: 9, height: 9, borderRadius: "50%", background: c, display: "inline-block", marginRight: 6, verticalAlign: "middle" }),

  // Tabs
  tabsBar: {
    display: "flex", gap: 4,
    margin: "32px 0 18px",
    borderBottom: "1px solid var(--line)"
  },
  tab: (active) => ({
    padding: "12px 4px",
    marginRight: 28,
    fontSize: 14.5, fontWeight: 600,
    color: active ? "var(--ink)" : "var(--ink-3)",
    borderBottom: active ? "2px solid var(--green-700)" : "2px solid transparent",
    cursor: "pointer",
    marginBottom: -1,
    display: "inline-flex", alignItems: "center", gap: 8
  }),
  tabCount: (active) => ({
    fontSize: 11, fontWeight: 700,
    background: active ? "var(--green-100)" : "var(--cream-2)",
    color: active ? "var(--green-800)" : "var(--ink-3)",
    padding: "2px 7px", borderRadius: 999
  }),

  // Steps list
  stepsList: { display: "flex", flexDirection: "column", gap: 10 },
  step: {
    background: "#fff", border: "1px solid var(--line)",
    borderRadius: 14, overflow: "hidden",
    transition: "border-color .2s, box-shadow .2s"
  },
  stepOpen: {
    borderColor: "var(--green-200)",
    boxShadow: "var(--shadow-md)"
  },
  stepHeader: {
    display: "grid",
    gridTemplateColumns: "44px 28px 1fr auto auto",
    alignItems: "center",
    gap: 14,
    padding: "16px 18px",
    cursor: "pointer",
    background: "transparent"
  },
  stepIndex: {
    fontFamily: "Fraunces", fontSize: 18, fontWeight: 500,
    color: "var(--ink-3)", textAlign: "center"
  },
  statusBadge: (s) => ({
    width: 28, height: 28, borderRadius: 8,
    display: "grid", placeItems: "center",
    background:
      s === "achieved" ? "var(--green-100)"
      : s === "partial" ? "var(--gold-100)"
      : "var(--rose-100)",
    color:
      s === "achieved" ? "var(--green-800)"
      : s === "partial" ? "var(--gold-600)"
      : "var(--rose-700)"
  }),
  stepTitleBlock: { display: "flex", flexDirection: "column", gap: 2 },
  stepTitle: { fontSize: 15.5, fontWeight: 600, color: "var(--ink)", letterSpacing: "-0.005em" },
  stepSummary: { fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.45 },
  stepStatusLabel: (s) => ({
    fontSize: 11.5, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase",
    color:
      s === "achieved" ? "var(--green-700)"
      : s === "partial" ? "var(--gold-600)"
      : "var(--rose-700)",
    padding: "4px 10px", borderRadius: 999,
    background:
      s === "achieved" ? "var(--green-50)"
      : s === "partial" ? "var(--gold-50)"
      : "#fbe7e7"
  }),
  chev: (open) => ({
    transition: "transform .25s ease",
    transform: open ? "rotate(180deg)" : "rotate(0)",
    color: "var(--ink-3)"
  }),

  stepBody: {
    padding: "4px 18px 22px 86px",
    borderTop: "1px solid var(--line-2)",
    background: "linear-gradient(180deg,#fbfaf6,#ffffff)",
    display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22
  },
  blockLabel: {
    fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase",
    color: "var(--ink-3)", fontWeight: 700,
    display: "flex", alignItems: "center", gap: 8,
    margin: "16px 0 8px"
  },
  quote: {
    background: "#fff", border: "1px solid var(--line)",
    borderLeft: "3px solid var(--green-500)",
    borderRadius: 10, padding: "12px 14px",
    fontSize: 14, color: "var(--ink)", lineHeight: 1.55,
    fontStyle: "italic"
  },
  feedback: {
    fontSize: 14, color: "var(--ink-2)", lineHeight: 1.6
  },
  tipsCol: {},
  tip: {
    border: "1px solid var(--line)",
    borderRadius: 12, background: "#fff",
    padding: "12px 14px",
    marginBottom: 8
  },
  tipHead: {
    display: "flex", alignItems: "flex-start", gap: 10, cursor: "pointer"
  },
  tipBulb: {
    flex: "0 0 28px", width: 28, height: 28, borderRadius: 8,
    background: "var(--green-100)", color: "var(--green-700)",
    display: "grid", placeItems: "center"
  },
  tipText: { fontSize: 13.5, color: "var(--ink)", lineHeight: 1.5, fontWeight: 500 },
  tipExpand: { fontSize: 12, color: "var(--green-700)", marginTop: 6, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 4 },
  exampleBox: {
    marginTop: 10, paddingTop: 10, borderTop: "1px dashed var(--line)",
    display: "flex", flexDirection: "column", gap: 8
  },
  exampleRow: {
    display: "grid", gridTemplateColumns: "60px 1fr", gap: 10, alignItems: "flex-start"
  },
  exampleTag: (good) => ({
    fontSize: 10.5, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase",
    color: good ? "var(--green-700)" : "var(--rose-700)",
    background: good ? "var(--green-50)" : "#fbe7e7",
    border: `1px solid ${good ? "var(--green-200)" : "#f1c9c9"}`,
    borderRadius: 6, padding: "3px 6px", textAlign: "center"
  }),
  exampleText: { fontSize: 13, color: "var(--ink-2)", fontStyle: "italic", lineHeight: 1.5 },

  // Transversal
  compGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 },
  compCard: {
    background: "#fff", border: "1px solid var(--line)",
    borderRadius: 14, padding: "18px 20px",
    boxShadow: "var(--shadow-sm)"
  },
  compHead: { display: "flex", alignItems: "baseline", gap: 10, marginBottom: 10 },
  compName: { fontSize: 15, fontWeight: 600, color: "var(--ink)" },
  compScore: { marginLeft: "auto", fontFamily: "Fraunces", fontSize: 22, fontWeight: 500, color: "var(--green-700)" },
  compMax: { fontSize: 13, color: "var(--ink-3)", fontWeight: 500 },
  compBar: { display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 4, marginBottom: 12 },
  compSeg: (filled) => ({
    height: 6, borderRadius: 3,
    background: filled ? "var(--green-600)" : "var(--green-100)"
  }),
  compNote: { fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.55 },

  // Highlights
  highlightsRow: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 18 },
  hlCard: (kind) => ({
    background: kind === "good" ? "linear-gradient(180deg,#eef5ef,#f4f9f4)" : "linear-gradient(180deg,#fdf6e4,#fdecc4)",
    border: `1px solid ${kind === "good" ? "var(--green-200)" : "#f1d896"}`,
    borderLeft: `3px solid ${kind === "good" ? "var(--green-600)" : "var(--gold-500)"}`,
    borderRadius: 14, padding: "16px 18px"
  }),
  hlEyebrow: (kind) => ({
    fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase",
    color: kind === "good" ? "var(--green-700)" : "var(--gold-600)",
    fontWeight: 700, marginBottom: 6,
    display: "inline-flex", alignItems: "center", gap: 6
  }),
  hlTitle: { fontFamily: "Fraunces", fontSize: 18, color: "var(--ink)", margin: "0 0 4px", fontWeight: 500 },
  hlBody: { fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.5, margin: 0 }
};

const STATUS_LABEL = { achieved: "Logrado", partial: "Parcial", missed: "Pendiente" };
const STATUS_ICON = { achieved: "check", partial: "minus", missed: "x" };

const Step = ({ s, idx, open, onToggle }) => {
  const [openTips, setOpenTips] = useState({});
  const toggleTip = (i) => setOpenTips(o => ({ ...o, [i]: !o[i] }));

  return (
    <div style={{ ...evalStyles.step, ...(open ? evalStyles.stepOpen : {}) }}>
      <div style={evalStyles.stepHeader} onClick={onToggle}>
        <div style={evalStyles.stepIndex}>{String(idx + 1).padStart(2, "0")}</div>
        <div style={evalStyles.statusBadge(s.status)}>
          <Icon name={STATUS_ICON[s.status]} size={16} stroke={2.2} />
        </div>
        <div style={evalStyles.stepTitleBlock}>
          <div style={evalStyles.stepTitle}>{s.title}</div>
          <div style={evalStyles.stepSummary}>{s.summary}</div>
        </div>
        <div style={evalStyles.stepStatusLabel(s.status)}>{STATUS_LABEL[s.status]}</div>
        <div style={evalStyles.chev(open)}><Icon name="chevron" size={18} /></div>
      </div>

      {open && (
        <div style={evalStyles.stepBody}>
          <div>
            <div style={evalStyles.blockLabel}><Icon name="quote" size={14} /> Lo que hiciste</div>
            <div style={evalStyles.quote}>{s.did}</div>
          </div>

          <div style={evalStyles.tipsCol}>
            <div style={evalStyles.blockLabel}><Icon name="bulb" size={14} /> Cómo hacerlo aún mejor</div>
            {s.tips.map((t, i) => (
              <div key={i} style={evalStyles.tip}>
                <div style={evalStyles.tipHead} onClick={() => toggleTip(i)}>
                  <div style={evalStyles.tipBulb}><Icon name="bulb" size={15} /></div>
                  <div style={{ flex: 1 }}>
                    <div style={evalStyles.tipText}>{t.text}</div>
                    {t.example && (
                      <div style={evalStyles.tipExpand}>
                        {openTips[i] ? "Ocultar ejemplo" : "Ver ejemplo"}
                        <span style={{ transition: "transform .2s", transform: openTips[i] ? "rotate(90deg)" : "rotate(0)", display: "inline-block" }}>
                          <Icon name="right" size={12} />
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                {openTips[i] && t.example && (
                  <div style={evalStyles.exampleBox}>
                    {t.example.bad && (
                      <div style={evalStyles.exampleRow}>
                        <div style={evalStyles.exampleTag(false)}>Evita</div>
                        <div style={evalStyles.exampleText}>“{t.example.bad.replace(/^["“]|["”]$/g, "")}”</div>
                      </div>
                    )}
                    {t.example.good && (
                      <div style={evalStyles.exampleRow}>
                        <div style={evalStyles.exampleTag(true)}>Prueba</div>
                        <div style={evalStyles.exampleText}>“{t.example.good.replace(/^["“]|["”]$/g, "")}”</div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const StepsView = () => {
  const [openId, setOpenId] = useState(3); // open the partial step by default
  return (
    <div style={evalStyles.stepsList}>
      {evaluationData.steps.map((s, i) => (
        <Step
          key={s.id}
          s={s} idx={i}
          open={openId === s.id}
          onToggle={() => setOpenId(openId === s.id ? null : s.id)}
        />
      ))}
    </div>
  );
};

const TransversalView = () => (
  <div>
    <div style={evalStyles.highlightsRow}>
      <div style={evalStyles.hlCard("good")}>
        <div style={evalStyles.hlEyebrow("good")}><Icon name="spark" size={13} /> Lo más fuerte · Coherencia y Objetividad</div>
        <h3 style={evalStyles.hlTitle}>Línea clara, anclada en hechos</h3>
        <p style={evalStyles.hlBody}>Sostuviste tu mensaje sin contradicciones y separaste con claridad los hechos de las interpretaciones. Eso le dio a la conversación una base sólida y verificable.</p>
      </div>
      <div style={evalStyles.hlCard("focus")}>
        <div style={evalStyles.hlEyebrow("focus")}><Icon name="bulb" size={13} /> A fortalecer · Constructividad</div>
        <h3 style={evalStyles.hlTitle}>Cierres con compromisos verificables</h3>
        <p style={evalStyles.hlBody}>Tus aportes son accionables, pero el cierre quedó sin acuerdos concretos. Practicaremos terminar siempre con qué, quién y cuándo, para que el plan se sostenga.</p>
      </div>
    </div>

    <div style={evalStyles.compGrid}>
      {evaluationData.competencies.map(c => (
        <div key={c.id} style={evalStyles.compCard}>
          <div style={evalStyles.compHead}>
            <div style={evalStyles.compName}>{c.label}</div>
            <div style={evalStyles.compScore}>{c.score}<span style={evalStyles.compMax}>/{c.max}</span></div>
          </div>
          <div style={evalStyles.compBar}>
            {Array.from({ length: c.max }).map((_, i) => (
              <div key={i} style={evalStyles.compSeg(i < c.score)} />
            ))}
          </div>
          <div style={evalStyles.compNote}>{c.note}</div>
        </div>
      ))}
    </div>
  </div>
);

const Evaluation = () => {
  const [tab, setTab] = useState("steps");
  const d = evaluationData;
  const achievedCount = d.steps.filter(s => s.status === "achieved").length;
  const partialCount  = d.steps.filter(s => s.status === "partial").length;
  const missedCount   = d.steps.filter(s => s.status === "missed").length;

  return (
    <div style={evalStyles.wrap}>
      <div style={evalStyles.metaRow}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <span style={evalStyles.trackChip}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold-500)" }}></span>
            {d.scenario.track}
          </span>
          <h1 style={evalStyles.scenarioTitle}>{d.scenario.title}</h1>
        </div>
        <div style={evalStyles.actions}>
          <button style={evalStyles.btnGhost}><Icon name="download" size={15} /> PDF</button>
          <button style={evalStyles.btnGhost}><Icon name="share" size={15} /> Compartir</button>
          <button style={evalStyles.btnPrimary}><Icon name="replay" size={15} /> Reintentar</button>
        </div>
      </div>

      {/* Hero summary */}
      <div style={evalStyles.hero}>
        <div style={evalStyles.heroLeft}>
          <div style={evalStyles.heroEyebrow}>
            <Icon name="spark" size={13} /> Resultado de tu sesión
          </div>
          <h2 style={evalStyles.heroHeadline}>Tu puntuación: 87 — Buen progreso</h2>
          <div style={evalStyles.successInline}>
            <div style={evalStyles.successBadge}>
              <Icon name="check" size={20} stroke={2.6} />
            </div>
            <div>
              <div style={evalStyles.successTitle}>¡Pasaste exitosamente la práctica!</div>
              <div style={evalStyles.successSub}>
                Puedes elegir otra simulación de la lista para seguir afinando tus habilidades.
              </div>
            </div>
          </div>
        </div>
        <div style={evalStyles.scoreCol}>
          <div style={evalStyles.scoreTopRow}>
            <span style={evalStyles.scoreNum}>87</span>
            <span style={evalStyles.scoreOf}>/ 100</span>
            <span style={evalStyles.scoreLabel}>puntuación final</span>
          </div>
          <div style={{ display: "flex", height: 8, borderRadius: 4, background: "var(--green-100)", overflow: "hidden" }}>
            <div style={{ width: "87%", background: "var(--green-700)" }}></div>
          </div>
          <div style={evalStyles.legendRow}>
            <span style={{ color: "var(--green-700)", fontWeight: 600 }}>
              <Icon name="check" size={13} stroke={2.4} /> Práctica aprobada
            </span>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={evalStyles.tabsBar}>
        <div style={evalStyles.tab(tab === "steps")} onClick={() => setTab("steps")}>
          Evaluación por pasos
          <span style={evalStyles.tabCount(tab === "steps")}>{d.steps.length}</span>
        </div>
        <div style={evalStyles.tab(tab === "transversal")} onClick={() => setTab("transversal")}>
          Evaluación transversal
          <span style={evalStyles.tabCount(tab === "transversal")}>{d.competencies.length}</span>
        </div>
      </div>

      {tab === "steps" ? <StepsView /> : <TransversalView />}
    </div>
  );
};

window.Evaluation = Evaluation;
