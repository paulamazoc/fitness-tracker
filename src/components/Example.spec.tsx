import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Example } from './Example';

describe('Example component', () => {
  it('renders "Hello world!" text', () => {
    render(<Example />);
    const textElement = screen.getByText('Hello world!');
    expect(textElement).toBeInTheDocument();
  });
});
