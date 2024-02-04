import { useTranslation } from "../i18n";

export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation({ lng });

  return <main className="mt-16">Home Page | NextJs 14</main>;
}
