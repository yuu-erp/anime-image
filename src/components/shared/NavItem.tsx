"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";

interface NavItemProps {
  title: string;
  href: string;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = props => {
  const { title, href, className } = props;
  const pathname = usePathname();
  const isActive = useMemo(() => pathname === href, [href, pathname]);
  return (
    <Link href={href}>
      <p
        className={classNames(
          className,
          isActive ? "text-rose-400" : "text-white"
        )}>
        {title}
      </p>
    </Link>
  );
};

export default React.memo(NavItem) as typeof NavItem;
