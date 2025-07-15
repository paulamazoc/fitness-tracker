import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QuoteGenerator } from './QuoteGenerator';

describe('QuoteGenerator', () => {
  it("renders first quote when Math.random returns 0", () => {
    vi.spyOn(Math, "random").mockReturnValue(0);

    render(<QuoteGenerator />);

    expect(screen.getByText(/Keep it up!/i)).toBeInTheDocument();
  });

  it("renders last quote when Math.random returns a value close to 1", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.99);

    render(<QuoteGenerator />);

    expect(screen.getByText(/Don't finish when you are tired, finish when you are done!/i)).toBeInTheDocument();
  });
});
