import React, { forwardRef } from 'react';
import cx from 'clsx';

import { Icon, KnownGlyphs } from '../Icon';
import { iconLibrary } from '../Icon/iconLibrary';
import styles from './styles.module.scss';

export type IconButtonProps = React.HTMLAttributes<HTMLElement> & {
  glyph: KnownGlyphs | string;
  label: string;
  buttonTestId?: string;
};

/**
 * Button with icon component
 * Supports all props that can be applied to a native button element.
 **/
/**
 * @title 
 *  Icon Button
 * @label
 *  Icon Button
 * @shortdescription
 *  Button with icon component
 * @keywords
 *  [Button,Clover button,Icon button]
 * @description
 * Button with icon component
 * Supports all props that can be applied to a native button element.
 * @example
<IconButton glyph="info" label="test label" />
 */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ glyph, label, onClick, className, buttonTestId }, ref) => {
    const icon = iconLibrary[glyph];

    return (
      <button
        ref={ref}
        type="button"
        onClick={onClick}
        className={cx(className, (icon.size = 'md' ? styles.iconMd : styles.iconSm))}
        data-testid={buttonTestId}
      >
        <Icon glyph={glyph} title={label} />
      </button>
    );
  }
);
