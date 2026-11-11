"use client";

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";

export type Language = "en" | "es";

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
} | null>(null);

const languageChangeEvent = "pg-carpentry-language-change";

function getLanguageSnapshot(): Language {
  return window.localStorage.getItem("pg-carpentry-language") === "es"
    ? "es"
    : "en";
}

function subscribeToLanguage(listener: () => void) {
  window.addEventListener("storage", listener);
  window.addEventListener(languageChangeEvent, listener);

  return () => {
    window.removeEventListener("storage", listener);
    window.removeEventListener(languageChangeEvent, listener);
  };
}

function setStoredLanguage(language: Language) {
  window.localStorage.setItem("pg-carpentry-language", language);
  window.dispatchEvent(new Event(languageChangeEvent));
}

const pageMetadata: Record<
  Language,
  Record<string, { title: string; description: string }>
> = {
  en: {
    "/": {
      title: "PG Carpentry Plus | Custom Carpentry & Home Remodels in Fort Worth",
      description:
        "Custom carpentry, framing, finish trim, cabinetry, and home remodeling services.",
    },
    "/services": {
      title: "Services | PG Carpentry Plus",
      description:
        "Explore custom carpentry services from PG Carpentry Plus, including built-ins, architectural trim, accent walls, ceilings, framing, and more.",
    },
    "/gallery": {
      title: "Gallery | PG Carpentry Plus",
      description:
        "Browse custom carpentry projects by PG Carpentry Plus, including built-ins, architectural trim, accent walls, ceilings, and more.",
    },
    "/contact": {
      title: "Contact | PG Carpentry Plus",
      description:
        "Contact PG Carpentry Plus to discuss custom trim, accent walls, built-ins, and your next home project.",
    },
    "/capability-statement": {
      title: "Capability Statement | PG Carpentry Plus",
      description:
        "PG Carpentry Plus LLC provides custom finish carpentry, distinctive interiors, and tailored solutions in Fort Worth, Texas.",
    },
  },
  es: {
    "/": {
      title: "PG Carpentry Plus | Carpintería y Remodelaciones en Fort Worth",
      description:
        "Servicios de carpintería a medida, estructuras, molduras, gabinetes y remodelación de interiores.",
    },
    "/services": {
      title: "Servicios | PG Carpentry Plus",
      description:
        "Conozca nuestros servicios de carpintería a medida: gabinetes empotrados, molduras, paredes decorativas, techos, estructuras y más.",
    },
    "/gallery": {
      title: "Galería | PG Carpentry Plus",
      description:
        "Explore proyectos de carpintería a medida, molduras, paredes decorativas, techos y gabinetes empotrados.",
    },
    "/contact": {
      title: "Contacto | PG Carpentry Plus",
      description:
        "Comuníquese con PG Carpentry Plus para hablar sobre molduras, paredes decorativas, gabinetes empotrados y su próximo proyecto.",
    },
    "/capability-statement": {
      title: "Perfil de la Empresa | PG Carpentry Plus",
      description:
        "PG Carpentry Plus LLC ofrece carpintería de acabado a medida, interiores distintivos y soluciones personalizadas en Fort Worth, Texas.",
    },
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore<Language>(
    subscribeToLanguage,
    getLanguageSnapshot,
    (): Language => "en",
  );
  const pathname = usePathname();

  useEffect(() => {
    const currentPath = pathname.replace(/\/$/, "") || "/";
    const metadata = pageMetadata[language][currentPath];

    const synchronizeLanguage = () => {
      document.documentElement.lang = language;
      if (!metadata) return;

      if (document.title !== metadata.title) {
        document.title = metadata.title;
      }

      for (const selector of [
        'meta[name="description"]',
        'meta[property="og:description"]',
      ]) {
        const element = document.querySelector<HTMLMetaElement>(selector);
        if (element?.content !== metadata.description) {
          element?.setAttribute("content", metadata.description);
        }
      }

      const openGraphTitle =
        document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
      if (openGraphTitle?.content !== metadata.title) {
        openGraphTitle?.setAttribute("content", metadata.title);
      }
    };

    synchronizeLanguage();
    const observer = new MutationObserver(synchronizeLanguage);
    observer.observe(document.head, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => observer.disconnect();
  }, [language, pathname]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: setStoredLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider.");
  }
  return context;
}
