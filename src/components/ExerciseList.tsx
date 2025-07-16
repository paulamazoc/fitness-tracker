import { Box, Stack, Typography } from "@mui/material";
import { ExerciseCard } from "./ExerciseCard";
import type { ExerciseListProps } from "@/types";
import { useExercise } from "@/providers/Exercise";
import { useCallback, useMemo } from "react";

export const ExerciseList = ({ exercises }: ExerciseListProps) => {
  const { checkDone } = useExercise();
  const exercisesInProgress = useMemo(
    () => exercises.filter((exercise) => !exercise.isDone),
    [exercises]
  );

  const handleCheckDone = useCallback(
    (id: string) => checkDone(id),
    [checkDone]
  );

  if (exercisesInProgress.length === 0) return <Typography variant="h6">No exercises added yet.</Typography>;
  return (
    <Box flex={1} overflow="auto" px={2} py={1}>
      <Stack spacing={2}>
        {exercisesInProgress.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            onCheckDone={() => handleCheckDone(exercise.id)}
          />
        ))}
      </Stack>
    </Box>
  )
};
