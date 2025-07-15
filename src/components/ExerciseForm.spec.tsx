import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { ExerciseForm } from './ExerciseForm';

const addExerciseMock = vi.fn();
vi.mock("@/providers/Exercise", () => ({
  useExercise: () => ({
    addExercise: addExerciseMock,
  }),
}));

describe('ExerciseForm', () => {

  let nameInput: HTMLInputElement;
  let setsInput: HTMLInputElement;

  beforeEach(() => {
    render(<ExerciseForm />);
    nameInput = screen.getByLabelText(/exercise name/i);
    setsInput = screen.getByLabelText(/sets/i);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders the form with initial values", () => {
    expect(nameInput).toHaveValue("");
    expect(setsInput).toHaveValue(1);
  });

  it("does not submit the form if fields are empty", () => {
    fireEvent.change(nameInput, { target: { value: " " } });
    fireEvent.change(setsInput, { target: { value: "" } });
    fireEvent.click(screen.getByRole("button", { name: /Add/i }));

    expect(addExerciseMock).not.toHaveBeenCalledWith();
  });

  it("does not submit the form if sets is 0", () => {
    fireEvent.change(nameInput, { target: { value: "snatch" } });
    fireEvent.change(setsInput, { target: { value: "0" } });
    fireEvent.click(screen.getByRole("button", { name: /Add/i }));

    expect(addExerciseMock).not.toHaveBeenCalled();
  });

  it("submit the form and reset to default values", () => {
    fireEvent.change(nameInput, { target: { value: "pushups" } });
    fireEvent.change(setsInput, { target: { value: "5" } });
    fireEvent.click(screen.getByRole("button", { name: /Add/i }));

    expect(addExerciseMock).toHaveBeenCalledWith("pushups", 5);
    expect(nameInput).toHaveValue("");
    expect(setsInput).toHaveValue(1);
  });

  it("updates input values when user types", () => {
    fireEvent.change(nameInput, { target: { value: "box jumps" } });
    fireEvent.change(setsInput, { target: { value: "3" } });

    expect(nameInput).toHaveValue("box jumps");
    expect(setsInput).toHaveValue(3);
  });
});
