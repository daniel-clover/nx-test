import { render, screen, fireEvent } from '@testing-library/react';
import { Action } from './index';

describe('Button', () => {
  it('should render a button', () => {
    const clickHandler = jest.fn();
    render(<Action onClick={clickHandler}>Click Me</Action>);
    const button = screen.getByRole('button', { name: 'Click Me' });
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});

describe('LinkButton', () => {
  it('should render a link button', () => {
    render(<Action href="./hello" />);
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
  });
});
