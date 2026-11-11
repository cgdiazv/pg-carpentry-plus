"use client";

import type { ReactNode } from "react";
import { useLanguage } from "./LanguageProvider";

export default function LocalizedText({
  english,
  spanish,
}: {
  english: ReactNode;
  spanish: ReactNode;
}) {
  const { language } = useLanguage();
  return <>{language === "es" ? spanish : english}</>;
}
