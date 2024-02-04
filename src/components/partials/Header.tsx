import { useTranslation } from "@/app/i18n";
import React from "react";
import Logo from "../shared/Logo";
import NavItem from "../shared/NavItem";
import Section from "../shared/Section";

const routers = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Setting",
    href: "/setting",
  },
];

export default async function Header({ lng }: { lng: string }) {
  const { t } = await useTranslation({ lng, ns: "header" });

  return (
    <React.Fragment>
      <Section className="flex items-center justify-between h-16 fixed w-full">
        <div className="relative h-2/3 w-10 mr-8">
          <Logo className="!w-full !h-full" />
        </div>
        <div className="hidden sm:flex flex-1 items-center space-x-6 font-medium">
          {routers.map(router => (
            <NavItem
              key={router.href}
              href={router.href}
              title={t(router.title)}
            />
          ))}
        </div>
        <div className="items-center space-x-6 font-medium text-rose-400"></div>
      </Section>
    </React.Fragment>
  );
}
