import React, { AnchorHTMLAttributes, forwardRef, ReactElement, RefAttributes } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { ButtonVariant } from './Button';
import cx from 'clsx';
import styles from './styles.module.scss';

export type LinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** Defaults to 'primary' */
  variant?: ButtonVariant;
  /** sets width to 100% */
  fullwidth?: boolean;
  /** increase font-size and padding */
  large?: boolean;
  /** if it is React Link the route to load */
  to?: string;
};

export type RoutedLinkProps = LinkProps & LinkButtonProps;

export type AnchorButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & LinkButtonProps;

type PolymorphicProps = AnchorButtonProps & RoutedLinkProps;

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

export const LinkButtonImpl = forwardRef<HTMLAnchorElement, PolymorphicProps>(
  ({ variant = 'primary', fullwidth, large, className, children, ...passThroughProps }, ref) => {
    const Component = 'href' in passThroughProps ? 'a' : Link;

    const classNames = cx(
      styles.button,
      styles[variant],
      fullwidth && styles.fullwidth,
      large && styles.large,
      className
    );

    return (
      <Component className={classNames} {...passThroughProps} ref={ref}>
        {children}
      </Component>
    );
  }
);

export type LinkButtonType = typeof LinkButtonImpl & {
  (props: AnchorButtonProps & RefAttributes<HTMLAnchorElement>): ReactElement | null;
  (props: LinkButtonProps & RefAttributes<HTMLAnchorElement>): ReactElement | null;
};

export const LinkButton = LinkButtonImpl as LinkButtonType;
