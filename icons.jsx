// Icon set — minimal stroke icons
const Icon = ({ name, size = 20, stroke = 1.6, ...rest }) => {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round", ...rest };
  switch (name) {
    case "home":     return <svg {...common}><path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/></svg>;
    case "play":     return <svg {...common}><path d="M7 5v14l12-7z" fill="currentColor" stroke="none"/></svg>;
    case "library":  return <svg {...common}><rect x="3" y="4" width="4" height="16" rx="1"/><rect x="9" y="4" width="4" height="16" rx="1"/><path d="m17 5 3 1-3 14"/></svg>;
    case "history":  return <svg {...common}><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l3 2"/></svg>;
    case "trophy":   return <svg {...common}><path d="M8 4h8v4a4 4 0 1 1-8 0z"/><path d="M5 6H3a3 3 0 0 0 3 3M19 6h2a3 3 0 0 1-3 3"/><path d="M10 13h4l-1 4h-2z"/><path d="M8 21h8"/></svg>;
    case "settings": return <svg {...common}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>;
    case "check":    return <svg {...common}><path d="m5 12 5 5L20 7"/></svg>;
    case "minus":    return <svg {...common}><path d="M5 12h14"/></svg>;
    case "x":        return <svg {...common}><path d="M6 6l12 12M18 6l-12 12"/></svg>;
    case "chevron":  return <svg {...common}><path d="m6 9 6 6 6-6"/></svg>;
    case "right":    return <svg {...common}><path d="m9 6 6 6-6 6"/></svg>;
    case "spark":    return <svg {...common}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></svg>;
    case "quote":    return <svg {...common}><path d="M7 7h4v4H7zM5 11c0 3 1 5 4 5M13 7h4v4h-4zM11 11c0 3 1 5 4 5"/></svg>;
    case "bulb":     return <svg {...common}><path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10c1 1 1.5 2 1.5 3h5c0-1 .5-2 1.5-3a6 6 0 0 0-4-10z"/></svg>;
    case "download": return <svg {...common}><path d="M12 4v12"/><path d="m7 11 5 5 5-5"/><path d="M5 20h14"/></svg>;
    case "share":    return <svg {...common}><circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="m8 11 8-4M8 13l8 4"/></svg>;
    case "replay":   return <svg {...common}><path d="M3 12a9 9 0 1 0 9-9"/><path d="M3 3v6h6"/></svg>;
    case "search":   return <svg {...common}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>;
    case "bell":     return <svg {...common}><path d="M6 8a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6"/><path d="M10 19a2 2 0 0 0 4 0"/></svg>;
    case "ear":      return <svg {...common}><path d="M6 12a6 6 0 1 1 12 0c0 4-3 4-3 7a3 3 0 0 1-6 0"/><path d="M10 12a2 2 0 1 1 4 0c0 2-2 2-2 4"/></svg>;
    default: return null;
  }
};

window.Icon = Icon;
