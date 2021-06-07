import { useRouter } from "next/router";

export default function useTranslation<Translation>(
  spanishTranslations: Translation,
  englishTranslations: Translation
) {
  const router = useRouter();
  const {
    query: { locale },
  } = router;
  const defaultLocale = typeof locale === "string" && locale ? locale : "en";
  const isEnglishPage = locale === "en" || locale === undefined;
  const isSpanishPage = locale === "es";
  const t: Translation = isSpanishPage
    ? spanishTranslations
    : englishTranslations;

  return { router, defaultLocale, isEnglishPage, isSpanishPage, t };
}
