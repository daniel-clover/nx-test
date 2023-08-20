import React, { forwardRef } from "react";
import { Button, ButtonProps, LinkButton, LinkButtonProps } from "../Button";

export type ActionProps = ButtonProps &
  LinkButtonProps &
  (
    | {
        /** The path or link to be used. Use this if 'to' is not used */ href: string;
        to?: never;
      }
    | {
        /** The rout to navigate to using react-router. Use this if 'href' is not used */ to: string;
        href?: never;
      }
    | {
        /** Either 'to' or 'href' should be used, not both */ to?: never;
        href?: never;
      }
  );

/**
 * @title
 *  Action Button
 * @label
 *  Action Button
 * @shortdescription
 *  Clover styled Action Button.
 * @keywords
 *  [Button,Action,Action Button, html button, anchor]
 * @description
 * Clover styled Action Button. Note: Use sentence case for the label!
 * @componentUsage
 * <Action variant="secondary">
    Secondary click
   </Action>
 * @example
    <ActionButtonTemplate />
 */
export const Action = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ActionProps
>(({ href, to, ...passThroughProps }, ref) => {
  return href || to ? (
    <LinkButton
      ref={ref as React.ForwardedRef<HTMLAnchorElement>}
      to={to}
      href={href}
      {...passThroughProps}
    />
  ) : (
    <Button
      ref={ref as React.ForwardedRef<HTMLButtonElement>}
      {...passThroughProps}
    />
  );
});
