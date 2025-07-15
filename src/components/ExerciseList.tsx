import { Box, Stack, Typography } from "@mui/material";
import { ExerciseCard } from "./ExerciseCard";
import type { ExerciseListProps } from "@/types";

export const ExerciseList = ({ exercises }: ExerciseListProps) => {
  if (exercises.length === 0) return <Typography variant="h6">No exercises added yet.</Typography>;
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
