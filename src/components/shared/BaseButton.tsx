import classNames from "classnames";
import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export type IconButton = {
  className?: string;
};
export interface BaseButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
  LeftIcon?: React.ComponentType<IconButton>;
  RightIcon?: React.ComponentType<IconButton>;
  className?: string;
  classNameIcon?: string;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null
  ) => void;
  isLoading?: boolean;
}
const BaseButton = React.forwardRef<HTMLButtonElement, BaseButtonProps>(
  (props, ref) => {
    const {
      LeftIcon,
      RightIcon,
      className,
      classNameIcon,
      onClick,
      children,
      isLoading,
      ...rest
    } = props;

    const iconClass =
      classNameIcon?.includes("w-") || classNameIcon?.includes("h-")
        ? classNameIcon
        : classNames("w-6 h-6", classNameIcon);

    return (
      <button ref={ref} {...rest} className={className}>
        {isLoading && (
          <AiOutlineLoading3Quarters
            className={classNames(iconClass, "animate-spin")}
          />
        )}
        {LeftIcon && <LeftIcon className={iconClass} />}
        {children}
        {RightIcon && <RightIcon className={iconClass} />}
      </button>
    );
  }
);

export default React.memo(BaseButton) as typeof BaseButton;
