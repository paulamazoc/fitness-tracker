import type { ExerciseCardProps } from "@/types";
import { Box, Button, Card, CardContent, Checkbox, Chip, Stack, Typography } from "@mui/material";
import { memo } from "react";
import { exerciseCardStrategyMap } from "./strategyMap";

export const ExerciseCard = memo(({ exercise, onCheckDone, onCompleteSet, variant = 'uncompleted' }: ExerciseCardProps) => {
  const { id, name, sets, completedSets, isDone } = exercise;
  const strategy = exerciseCardStrategyMap[variant];
  return (
    <Card variant="outlined" sx={{ bgcolor: strategy.cardBg }}>
      <CardContent>
        <Stack spacing={1}>
          <Typography variant="h6">{name} {variant === "done" && <Chip size="small" label="DONE" sx={{ ml: 2 }} />}</Typography>
          <Typography variant="body2" color="text.secondary">
            {completedSets} of {sets} sets done
          </Typography>
          {strategy.showProgressBar && (
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
          )}
          {strategy.showActions && (
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Button
                variant="contained"
                onClick={() => {
                  if (completedSets < sets) onCompleteSet?.(id);
                }}
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
                  onChange={() => onCheckDone?.(id)}
                />
                <Typography variant="body2">Mark as done</Typography>
              </Box>
            </Box>
          )}
        </Stack>
      </CardContent>
    </Card>
  )
});
