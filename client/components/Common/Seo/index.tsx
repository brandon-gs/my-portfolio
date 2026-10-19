import Head from "next/head";
import { useRouter } from "next/router";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://brandongs.vercel.app").replace(/\/$/, "");

interface Props {
  title: string;
  description: string;
  /** Path without locale prefix, with trailing slash (trailingSlash is on), e.g. "/" or "/contact/". */
  path: string;
  image?: string;
  noIndex?: boolean;
}

const localizedUrl = (locale: string, path: string) => `${SITE_URL}${locale === "es" ? "/es" : ""}${path}`;

export default function Seo({ title, description, path, image = "/og-image.png", noIndex = false }: Props): JSX.Element {
  const { locale = "en" } = useRouter();
  const url = localizedUrl(locale, path);
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noIndex ? <meta name="robots" content="noindex" /> : <link rel="canonical" href={url} />}
      {!noIndex && (
        <>
          <link rel="alternate" hrefLang="es" href={localizedUrl("es", path)} />
          <link rel="alternate" hrefLang="en" href={localizedUrl("en", path)} />
          <link rel="alternate" hrefLang="x-default" href={localizedUrl("en", path)} />
        </>
      )}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Brandon García" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={locale === "es" ? "es_MX" : "en_US"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  );
}
