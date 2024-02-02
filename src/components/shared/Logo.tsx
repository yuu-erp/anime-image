"use client";
import classNames from "classnames";
import React from "react";
import Image from "next/image";
import ImageLogo from "../../../public/logo.jpg";

const Logo: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={classNames(
        "relative flex h-10 w-10 rounded-full overflow-hidden",
        className
      )}
      {...props}>
      <Image src={ImageLogo} priority alt="logo" />
    </div>
  );
};

export default React.memo(Logo);
