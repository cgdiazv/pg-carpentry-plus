"use client";

import Image, { type ImageProps } from "next/image";
import { useLanguage } from "./LanguageProvider";

type LocalizedImageProps = Omit<ImageProps, "alt"> & {
  englishAlt: string;
  spanishAlt: string;
};

export default function LocalizedImage({
  englishAlt,
  spanishAlt,
  ...imageProps
}: LocalizedImageProps) {
  const { language } = useLanguage();
  return (
    <Image
      {...imageProps}
      alt={language === "es" ? spanishAlt : englishAlt}
    />
  );
}
