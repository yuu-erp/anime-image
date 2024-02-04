"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface NavItemProps {
  title: string;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ ...props }) => {
  const pathname = usePathname();
  const isActive =
    pathname === props.href || pathname.startsWith(`/*${props.href}`);
  return (
    <Link {...props}>
      <p className={classNames(isActive ? "text-rose-400" : "text-white")}>
        {props.title}
      </p>
    </Link>
  );
};

export default React.memo(NavItem) as typeof NavItem;
