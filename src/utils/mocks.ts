import type { Exercise } from "@/types";

export const mockExercises: Exercise[] = [
    {
      id: 'A',
      name: 'Push-ups',
      sets: 3,
      completedSets: 0,
      isDone: false,
    },
    {
      id: 'B',
      name: 'Burpees',
      sets: 4,
      completedSets: 3,
      isDone: false,
    },
    {
      id: 'C',
      name: 'Pull-ups',
      sets: 2,
      completedSets: 1,
      isDone: false,
    },
    {
      id: 'D',
      name: 'Pull-ups',
      sets: 2,
      completedSets: 2,
      isDone: true,
    },
    {
      id: 'E',
      name: 'Pull-ups',
      sets: 2,
      completedSets: 1,
      isDone: false,
    },
    {
      id: 'F',
      name: 'Pull-ups',
      sets: 2,
      completedSets: 0,
      isDone: true,
    },
];
