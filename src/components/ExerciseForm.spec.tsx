import { describe, it, expect, vi, afterEach } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { ExerciseForm } from './ExerciseForm';

const addExerciseMock = vi.fn();
vi.mock("@/providers/Exercise", () => ({
  useExercise: () => ({
    addExercise: addExerciseMock,
  }),
}));

describe('ExerciseForm', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders the form with initial values", () => {
    render(<ExerciseForm />);

    expect(screen.getByLabelText(/exercise name/i)).toHaveValue("");
    expect(screen.getByLabelText(/sets/i)).toHaveValue(1);
  });

  it("does not submit the form if fields are empty", () => {
    render(<ExerciseForm />);

    const nameInput = screen.getByLabelText(/exercise name/i);
    const setsInput = screen.getByLabelText(/sets/i);

    fireEvent.change(nameInput, { target: { value: " " } });
    fireEvent.change(setsInput, { target: { value: "" } });
    fireEvent.click(screen.getByRole("button", { name: /Add/i }));

    expect(addExerciseMock).not.toHaveBeenCalledWith();
  });

  it("does not submit the form if sets is 0", () => {
    render(<ExerciseForm />);

    const nameInput = screen.getByLabelText(/exercise name/i);
    const setsInput = screen.getByLabelText(/sets/i);

    fireEvent.change(nameInput, { target: { value: "snatch" } });
    fireEvent.change(setsInput, { target: { value: "0" } });
    fireEvent.click(screen.getByRole("button", { name: /Add/i }));

    expect(addExerciseMock).not.toHaveBeenCalled();
  });

  it("submit the form and reset to default values", () => {
    render(<ExerciseForm />);

    const nameInput = screen.getByLabelText(/exercise name/i);
    const setsInput = screen.getByLabelText(/sets/i);

    fireEvent.change(nameInput, { target: { value: "pushups" } });
    fireEvent.change(setsInput, { target: { value: "5" } });
    fireEvent.click(screen.getByRole("button", { name: /Add/i }));

    expect(addExerciseMock).toHaveBeenCalledWith("pushups", 5);
    expect(nameInput).toHaveValue("");
    expect(setsInput).toHaveValue(1);
  });

  it("updates input values when user types", () => {
    render(<ExerciseForm />);
    const nameInput = screen.getByLabelText(/exercise name/i);
    const setsInput = screen.getByLabelText(/sets/i);

    fireEvent.change(nameInput, { target: { value: "box jumps" } });
    fireEvent.change(setsInput, { target: { value: "3" } });

    expect(nameInput).toHaveValue("box jumps");
    expect(setsInput).toHaveValue(3);
  });
});
