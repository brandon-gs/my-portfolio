import { useRouter } from "next/router";

export default function useTranslation<Translation>(
  spanishTranslations: Translation,
  englishTranslations: Translation
) {
  const router = useRouter();
  const { locale } = router;
  const defaultLocale = locale ? locale : "en";
  const isEnglishPage = locale === "en";
  const isSpanishPage = locale === "es";
  const t: Translation = isSpanishPage
    ? spanishTranslations
    : englishTranslations;

  return { router, defaultLocale, isEnglishPage, isSpanishPage, t };
}
