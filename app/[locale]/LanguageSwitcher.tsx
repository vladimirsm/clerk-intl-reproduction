import { useLocale } from "next-intl";
import Link from "next/link";

export default function LanguageSwitcher() {
  const locale = useLocale();

  if (locale === "dk") {
    return <Link href="/en">English</Link>;
  }

  return <Link href="/dk">Dansk</Link>;
}
