import type { ExerciseCardProps } from "@/types";
import { Box, Button, Card, CardContent, Checkbox, Stack, Typography } from "@mui/material";
import { memo } from "react";

export const ExerciseCard = memo(({ exercise, onCheckDone, onCompleteSet }: ExerciseCardProps) => {
  const { id, name, sets, completedSets, isDone } = exercise;
  const handleCheckDone = () => {
    onCheckDone(id);
  };
  const handleCompleteSet  = () => {
    if (completedSets < sets) {
      onCompleteSet(exercise.id)
    }
  };

  return (
    <Card variant="outlined" sx={{ bgcolor: '#1e1e1e'}}>
      <CardContent>
        <Stack spacing={1}>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {completedSets} of {sets} sets done
          </Typography>
          <Box display="flex" gap={1} sx={{ cursor: 'pointer' }} pb={1}>
            {Array.from({ length: sets }).map((_, i) => (
              <Box
                key={i}
                sx={{
                  height: 10,
                  flex: 1,
                  borderRadius: 1,
                  backgroundColor: i < completedSets ? 'success.main' : '#444',
                }}
              />
            ))}
          </Box>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Button
              variant="contained"
              onClick={handleCompleteSet}
              size="small"
              sx={{ mr: 2 }}
            >
              + Complete a set
            </Button>
            <Box display="flex" alignItems="center">
              <Checkbox
                checked={isDone}
                color="default"
                size="small"
                onChange={handleCheckDone}
              />
              <Typography variant="body2">Mark as done</Typography>
            </Box>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  )
});
