export interface Exercise {
    id?: string;
    name: string;
    sets: number;
    completedSets: number;
    isDone: boolean;
}

export type ExerciseCardProps = {
  exercise: Exercise
};

export type ExerciseListProps = {
  exercises: Exercise[]
};
