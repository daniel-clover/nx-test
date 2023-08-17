/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { IconButton } from '.';

describe('Button', () => {
  it('should simply render an instance when invoked', () => {
    render(<IconButton glyph="info" label="test label" />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should render the label text', () => {
    render(<IconButton glyph="info" label="test label" />);
    expect(screen.getByRole('button')).toHaveAccessibleName('test label');
  });
});
