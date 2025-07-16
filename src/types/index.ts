import type { ExerciseCardVariant } from "@/components/ExerciseCard/strategyMap";

export interface Exercise {
    id: string;
    name: string;
    sets: number;
    completedSets: number;
    isDone: boolean;
}

export type ExerciseCardProps = {
  exercise: Exercise
  onCheckDone?: (id: string) => void
  onCompleteSet?: (id: string) => void
  variant?: ExerciseCardVariant;
};

export type ExerciseListProps = {
  exercises: Exercise[]
};

export type ExerciseContextType = {
  exercises: Exercise[]
  addExercise: (name: string, sets: number) => void
  checkDone: (id: string) => void
  completeSet: (id: string) => void
};
