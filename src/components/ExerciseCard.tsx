import type { ExerciseCardProps } from "@/types";
import { Box, Card, CardContent, Checkbox, Stack, Typography } from "@mui/material";

export const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  const { name, sets, completedSets, isDone } = exercise;
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
            />
            <Typography variant="body2">Mark as done</Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  )
};
