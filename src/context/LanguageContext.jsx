// src/context/LanguageContext.jsx
import React, { createContext, useState, useEffect } from "react";

// Inline translations for three languages
const translations = {
  en: {
    adminDashboard: {
      title: "Admin Dashboard",
      logout: "Logout",
      busManagement: "Bus Management",
      ticketing: "Ticketing",
      language: "Language",
      selectLanguage: "Select Language"
    },
    announcement: {
      nextStop: "Next stop: {stop}, arriving in {eta}",
      arrival: "Arrived at {stop}"
    }
  },
  si: {
    adminDashboard: {
      title: "පරිපාලක පුවරුව",
      logout: "පිටවන්න",
      busManagement: "බස් කළමනාකරණ",
      ticketing: "ඩිජිටල් ටිකට් එක",
      language: "භාෂාව",
      selectLanguage: "භාෂාව තෝරන්න"
    },
    announcement: {
      nextStop: "ඊළඟ නවතා ගැනීම: {stop}, {eta} තුළ",
      arrival: "{stop} ළඟට පැමිණේ"
    }
  },
  ta: {
    adminDashboard: {
      title: "நிர்வாக டாஷ்போர்டு",
      logout: "வெளியேறு",
      busManagement: "பஸ் மேலாண்மை",
      ticketing: "டிக்கெட்",
      language: "மொழி",
      selectLanguage: "மொழியைத் தேர்ந்தெடுக்கவும்"
    },
    announcement: {
      nextStop: "அடுத்த நிறுத்தம்: {stop}, {eta} இல் வருகிறோம்",
      arrival: "{stop}‑ல் வந்துவிட்டோம்"
    }
  }
};

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const stored = localStorage.getItem("lang");
  const [lang, setLang] = useState(stored || "en");

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[lang];
    for (const k of keys) {
      value = value?.[k];
      if (!value) break;
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
