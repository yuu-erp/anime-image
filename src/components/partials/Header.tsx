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

export default async function Header() {
  return (
    <React.Fragment>
      <Section className="flex items-center justify-between h-16 fixed w-full bg-black">
        <div className="relative h-2/3 w-10 mr-8">
          <Logo className="!w-full !h-full" />
        </div>
        <div className="flex items-center space-x-6 font-medium">
          {routers.map(router => (
            <NavItem
              key={router.href}
              href={router.href}
              title={router.title}
              className="hover:text-rose-400"
            />
          ))}
        </div>
      </Section>
    </React.Fragment>
  );
}
