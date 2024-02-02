import React from "react";
import Logo from "../shared/Logo";
import { useTranslation } from "@/app/i18n";

export default async function Header({ lng }: { lng: string }) {
  const { t } = await useTranslation({ lng, ns: "header" });

  return (
    <React.Fragment>
      <header className="sticky top-0 left-0 right-0 flex flex-row items-center justify-center p-4 transition-all duration-300 z-20">
        <div className="flex-1 flex flex-row items-center max-w-7xl gap-6">
          <Logo />
          <div>{t("home")}</div>
        </div>
      </header>
    </React.Fragment>
  );
}
