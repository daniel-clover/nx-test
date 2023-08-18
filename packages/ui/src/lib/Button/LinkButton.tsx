import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import { ButtonVariant } from "./Button";
import cx from "clsx";
import styles from "./styles.module.scss";

export type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** Defaults to 'primary' */
  variant?: ButtonVariant;
  /** sets width to 100% */
  fullWidth?: boolean;
  /** increase font-size and padding */
  large?: boolean;
  /** if it is React Link the route to load */
  to?: string;
};

/**
 * Anchor styled as Clover button.
 * Supports all props that can be applied to a native HTML `a` element.
 *
 * MDN Anchor docs: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Attributes
 */
/**
 * @title
 *  LinkButton
 * @label
 *  LinkButton
 * @shortdescription
 *  Anchor styled as Clover button.
 * @keywords
 *  [Anchor,Clover button,Link button]
 * @description
 * Anchor styled as Clover button. Note: Use sentence case for the label!
 * Supports all props that can be applied to a native HTML `a` element.
 * @componentUsage
 *
<LinkButton
    className="yourClass"
    destructive={boolean}
    type="button | submit"
    variant="primary | secondary | tertiary | link| (none)"
    fullwidth={boolean}
>
    Button text
</LinkButton>
 * @example
<LinkButton
    type="button"
    variant="tertiary"
    href="#"
>
    Link button
</LinkButton>
 */
export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    {
      variant = "primary",
      fullWidth,
      large,
      className,
      children,
      href,
      to,
      ...passThroughProps
    },
    ref
  ) => {
    const isLink = href !== undefined && !to;
    return isLink ? (
      <a
        ref={ref}
        className={cx(
          styles.button,
          styles[variant],
          fullWidth && styles.fullwidth,
          large && styles.large,
          className
        )}
        href={href}
        {...passThroughProps}
      >
        {children}
      </a>
    ) : (
      <Link
        ref={ref}
        to={to ?? ""}
        className={cx(
          styles.button,
          styles[variant],
          fullWidth && styles.fullwidth,
          large && styles.large,
          className
        )}
        {...passThroughProps}
      >
        {children}
      </Link>
    );
  }
);
