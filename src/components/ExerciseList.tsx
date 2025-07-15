import { Box, Stack } from "@mui/material";
import { ExerciseCard } from "./ExerciseCard";
import type { ExerciseListProps } from "@/types";

export const ExerciseList = ({ exercises }: ExerciseListProps) => {
  return (
    <Box flex={1} overflow="auto" px={2} py={1}>
      <Stack spacing={2}>
        {exercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
          />
        ))}
      </Stack>
    </Box>
  )
};
