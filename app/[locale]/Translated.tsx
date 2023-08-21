import { useTranslations } from "next-intl";

export default function Translated() {
  const t = useTranslations("Index");

  return <>{t("title")}</>;
}
