import styles from './Button.module.scss';

/* eslint-disable-next-line */
export interface ButtonProps  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>  {}

export function Button({children, ...props}: ButtonProps) {

console.log(props)

  return (
    <button className={styles['container']}  {...props}>{children}</button>
  );
}

export default Button;
