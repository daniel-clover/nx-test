import { BrowserRouter as Router } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
// import { Button, IconButton, LinkButton } from './index';
import { Button, LinkButton } from "./index";

describe("Button", () => {
  it("should handle clicks", () => {
    const clickHandler = jest.fn();
    render(<Button onClick={clickHandler}>Click Me</Button>);
    const button = screen.getByRole("button", { name: "Click Me" });
    fireEvent.click(button);

    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
  it("should not handle clicks if disabled", () => {
    const clickHandler = jest.fn();
    render(
      <Button onClick={clickHandler} disabled>
        Click Me
      </Button>
    );
    const button = screen.getByRole("button", { name: "Click Me" });
    fireEvent.click(button);

    expect(clickHandler).not.toHaveBeenCalled();
  });
  it("should default to type button", () => {
    const clickHandler = jest.fn();
    const submitHandler = jest.fn();
    render(
      <form onSubmit={submitHandler}>
        <Button onClick={clickHandler} disabled>
          Click Me
        </Button>
      </form>
    );
    const button = screen.getByRole("button", { name: "Click Me" });

    fireEvent.click(button);
    expect(submitHandler).not.toHaveBeenCalled();
  });
});

// describe('IconButton', () => {
//   it('should simply render an instance when invoked', () => {
//     render(<IconButton glyph="info" label="test label" />);
//     const button = screen.getByRole('button');
//     expect(button).toBeInTheDocument();
//   });

//   it('should render the label text', () => {
//     render(<IconButton glyph="info" label="test label" />);
//     expect(screen.getByRole('button')).toHaveAccessibleName('test label');
//   });
// });

describe("LinkButton", () => {
  it('should render as a link when "href" is passed', () => {
    render(<LinkButton href="/dashboard" />);
    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  it('should render as a link when "to" is passed', () => {
    render(
      <Router>
        <LinkButton to="/dashboard" />
      </Router>
    );
    expect(screen.getByRole("link")).toBeInTheDocument();
  });
});
