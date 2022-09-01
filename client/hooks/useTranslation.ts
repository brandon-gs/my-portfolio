import { useMemo } from "react";
import { useRouter } from "next/router";

export default function useTranslation<Translation>(
  spanishTranslations: Translation,
  englishTranslations: Translation
) {
  const router = useRouter();
  const { locale, defaultLocale } = router;

  const currentLocale = useMemo(() => locale ?? defaultLocale, [locale]);
  const isEnglishPage = useMemo(
    () => locale === "en" || locale === undefined,
    [locale]
  );
  const isSpanishPage = useMemo(() => locale === "es", [locale]);
  const t: Translation = isSpanishPage
    ? spanishTranslations
    : englishTranslations;

  return { router, locale: currentLocale, isEnglishPage, isSpanishPage, t };
}
