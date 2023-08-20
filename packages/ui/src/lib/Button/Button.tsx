import React, { forwardRef } from "react";
import cx from "clsx";
import styles from "./styles.module.scss";
import type { SupportedLocales } from "../../../hooks/locale";
import { getCurrentLocale } from "../../../hooks/locale";
import { getLanguageStrings } from "./localizations";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "secondaryGray"
  | "tertiary";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Defaults to 'primary' */
  variant?: ButtonVariant;
  /** If the button is being used for a 'destructive' action such as cancelling or deleting */
  destructive?: boolean;
  /** If this is an icon button the glyph is needed to depict icon */
  fullwidth?: boolean; // set width to 100%
  /** increase font-size and padding */
  large?: boolean;
  /** If the button is in a loadig state */
  loading?: boolean;
  /** The current language */
  language?: SupportedLocales;
};

/**
 * Clover styled button.
 * Supports all props that can be applied to a native HTML `button` element. Unlike the native HTML `button` element
 * the `type` is `button` as default, so `submit` must be specified as the type explicitly when using for form submission.
 *
 * MDN Button docs: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Attributes
 */
/**
 * @title
 *  Button
 * @label
 *  Button
 * @shortdescription
 *  Clover styled button.
 * @keywords
 *  [Button,Clover button,Secondary, Tertiary, primary button]
 * @description
 * Clover styled button. Note: Use sentence case for the label!
 * Supports all props that can be applied to a native HTML `button` element. Unlike the native HTML `button` element
 * the `type` is `button` as default, so `submit` must be specified as the type explicitly when using for form submission.
 * MDN Button docs: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Attributes
 * @componentUsage
 * <Button variant={'secondary'} {...args} />
 * @example
 * <ButtonExample children={'Click me'}/>
 * @visibility
 * false
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = "button",
      variant = "primary",
      destructive,
      fullwidth,
      large,
      loading,
      className,
      children,
      language = getCurrentLocale(),
      ...passThroughProps
    },
    ref
  ) => {
    const text = getLanguageStrings(language);
    return (
      <>
        <button
          type={type}
          ref={ref}
          aria-disabled={loading}
          className={cx(
            styles.button,
            styles[variant],
            destructive && styles.destructive,
            fullwidth && styles.fullwidth,
            large && styles.large,
            styles.dots,
            className
          )}
          {...passThroughProps}
        >
          {loading && (
            <span
              className={cx(
                styles.busyState,
                destructive && styles.destructive
              )}
            >
              <svg
                role="img"
                fill="none"
                focusable="false"
                aria-hidden="true"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20ZM11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22Z"
                  fill="white"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.0921 2.00047C9.34608 1.98259 7.63258 2.47299 6.16041 3.4119C4.68825 4.35081 3.52099 5.69768 2.8009 7.28837C2.57313 7.7915 1.98062 8.01473 1.47749 7.78697C0.974358 7.5592 0.751129 6.96669 0.978893 6.46356C1.85901 4.51939 3.28566 2.87321 5.08497 1.72565C6.88429 0.578096 8.97856 -0.0212783 11.1126 0.000577066C13.2466 0.0224324 15.3281 0.664573 17.1035 1.84874C18.879 3.03291 20.2716 4.70796 21.1117 6.66975C21.3291 7.17744 21.0938 7.76526 20.5861 7.98267C20.0784 8.20008 19.4906 7.96476 19.2732 7.45707C18.5859 5.85197 17.4464 4.48147 15.9938 3.51261C14.5412 2.54374 12.8381 2.01835 11.0921 2.00047Z"
                  fill="url(#paint0_radial_566_619)"
                ></path>
                <defs>
                  <radialGradient
                    id="paint0_radial_566_619"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(1.5 8) scale(19)"
                  >
                    <stop stop-color="white" stop-opacity="0"></stop>
                    <stop offset="1" stop-color="white"></stop>
                  </radialGradient>
                </defs>
              </svg>
              <span className={styles.reduceMotion}>{text.loading}</span>
            </span>
          )}
          <span className={styles.btnChildren}>{children}</span>
        </button>

        {loading !== undefined && loading !== null && (
          <span className={styles.visuallyHidden} aria-live={"polite"}>
            {loading && text.loading}
          </span>
        )}
      </>
    );
  }
);
