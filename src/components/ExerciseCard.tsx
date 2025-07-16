import type { ExerciseCardProps } from "@/types";
import { Box, Card, CardContent, Checkbox, Stack, Typography } from "@mui/material";
import { memo } from "react";

export const ExerciseCard = memo(({ exercise, onCheckDone }: ExerciseCardProps) => {
  const { id, name, sets, completedSets, isDone } = exercise;
  const handleCheckDone = () => {
    onCheckDone(id);
  };

  return (
    <Card variant="outlined" sx={{ bgcolor: '#1e1e1e'}}>
      <CardContent>
        <Stack spacing={1}>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {completedSets} of {sets} sets done
          </Typography>
          <Box display="flex" gap={1} sx={{ cursor: 'pointer' }}>
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
          <Box display="flex" alignItems="center">
            <Checkbox
              checked={isDone}
              color="default"
              size="small"
              onChange={handleCheckDone}
            />
            <Typography variant="body2">Mark as done</Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  )
});
