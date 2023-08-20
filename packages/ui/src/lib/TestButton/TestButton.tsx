import styles from "./TestButton.module.scss";

/* eslint-disable-next-line */
export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export function TestButton({ children, ...props }: ButtonProps) {
  return (
    <button className={styles["container"]} {...props}>
      {children}
    </button>
  );
}

export default TestButton;
