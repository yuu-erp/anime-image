import Link from "next/link";
import { useTranslation } from "../i18n";

export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation({ lng });

  return (
    <main>
      <>
        <h1>{t("title")}</h1>
        <Link href={`/${lng}/second-page`}>second page</Link>
      </>
    </main>
  );
}
