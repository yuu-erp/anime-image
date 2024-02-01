import classNames from "classnames";
import React from "react";
import Image from "next/image";
const Logo: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={classNames(
        "relative flex h-12 w-12 rounded-full overflow-hidden",
        className
      )}
      {...props}>
      <Image src="/logo.jpg" layout="fill" objectFit="contain" alt="logo" />
    </div>
  );
};

export default React.memo(Logo);
