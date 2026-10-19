import { FormEvent, useRef, useState } from "react";
import { useTranslation } from "hooks";
import { profile } from "utils/profile";
import { events } from "utils/analytics";
import { localeEn, localeEs } from "./locale";
import styles from "./Contact.module.css";

export default function FormContact(): JSX.Element {
  const { t } = useTranslation(localeEs, localeEn);
  const [name, setName] = useState("");
  const [type, setType] = useState(0);
  const [message, setMessage] = useState("");
  const [copyState, setCopyState] = useState<"idle" | "copied" | "manual">("idle");
  const emailRef = useRef<HTMLAnchorElement>(null);

  // If the clipboard API is blocked, select the address so the visitor can copy it by hand.
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyState("copied");
      setTimeout(() => setCopyState("idle"), 2500);
    } catch {
      const selection = window.getSelection();
      if (emailRef.current && selection) {
        const range = document.createRange();
        range.selectNodeContents(emailRef.current);
        selection.removeAllRanges();
        selection.addRange(range);
      }
      setCopyState("manual");
    }
  };

  // No backend: build a ready-to-send email and hand it to the visitor's mail app.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const projectType = t.types[type];
    events.contactForm(projectType);
    const subject = `${t.subjectPrefix}: ${projectType}${name ? ` · ${name}` : ""}`;
    const body = `${t.greeting}\n\n${message}\n\n${t.signature}\n${name}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className={styles.section} aria-labelledby="contact-title">
      <header className={styles.header}>
        <p className={styles.eyebrow}>{t.eyebrow}</p>
        <h1 id="contact-title" className={styles.title}>{t.title}</h1>
        <p className={styles.intro}>{t.intro}</p>
      </header>

      <div className={styles.layout}>
        <div className={styles.channels}>
          <article className={`${styles.card} ${styles.cardPrimary}`}>
            <p className={styles.badge}>
              <span className={styles.dot} aria-hidden="true" />
              {t.workanaBadge}
            </p>
            <h2 className={styles.cardTitle}>{t.workanaTitle}</h2>
            <p className={styles.cardText}>{t.workanaText}</p>
            <a className={styles.primary} href={profile.workana} target="_blank" rel="noopener noreferrer" onClick={() => events.workana("contact")}>
              {t.workanaCta}
            </a>
          </article>

          <article className={styles.card}>
            <h2 className={styles.cardTitle}>{t.emailTitle}</h2>
            <p className={styles.cardText}>{t.emailText}</p>
            <div className={styles.emailRow}>
              <a ref={emailRef} className={styles.email} href={`mailto:${profile.email}`} onClick={() => events.email("contact_card")}>{profile.email}</a>
              <button type="button" className={styles.copy} onClick={copyEmail}>
                {copyState === "copied" ? t.copied : t.copy}
              </button>
            </div>
            {copyState === "manual" && <p className={styles.copyHint}>{t.copyManual}</p>}
            <p className={styles.srOnly} role="status">{copyState === "copied" ? t.copiedAnnouncement : ""}</p>
          </article>

          <article className={styles.card}>
            <h2 className={styles.cardTitle}>{t.jobTitle}</h2>
            <p className={styles.cardText}>{t.jobText}</p>
            <div className={styles.links}>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" onClick={() => events.linkedin("contact")}>
                {t.jobLinkedin}
              </a>
              <a href={`mailto:${profile.email}?subject=${encodeURIComponent(t.jobSubject)}`}>{t.jobEmail}</a>
            </div>
          </article>

        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.formTitle}>{t.formTitle}</h2>
          <p className={styles.formText}>{t.formText}</p>

          <label className={styles.field}>
            <span>{t.nameLabel}</span>
            <input
              type="text"
              name="name"
              autoComplete="name"
              value={name}
              placeholder={t.namePlaceholder}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </label>

          <fieldset className={styles.field}>
            <legend>{t.typeLabel}</legend>
            <div className={styles.types}>
              {t.types.map((label, index) => (
                <label key={label} className={`${styles.type} ${type === index ? styles.typeActive : ""}`}>
                  <input
                    type="radio"
                    name="type"
                    value={index}
                    checked={type === index}
                    onChange={() => setType(index)}
                  />
                  {label}
                </label>
              ))}
            </div>
          </fieldset>

          <label className={styles.field}>
            <span>{t.messageLabel}</span>
            <textarea
              name="message"
              rows={6}
              value={message}
              placeholder={t.messagePlaceholder}
              onChange={(event) => setMessage(event.target.value)}
              required
            />
          </label>

          <button type="submit" className={styles.submit}>
            {t.submit}
          </button>
          <p className={styles.fallback}>
            {t.fallback} <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </form>
      </div>
    </section>
  );
}
