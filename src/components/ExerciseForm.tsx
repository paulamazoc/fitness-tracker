import { useExerciseForm } from "@/hooks/useExerciseForm";
import { Box, Button, TextField } from "@mui/material";

export const ExerciseForm = () => {
  const { handleSetsOnChange, handleSubmit, name, setName, sets } = useExerciseForm();
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      alignItems="flex-start"
      py={1}
      px={1}
      gap={1}
      mb={4}
    >
      <TextField
        label="Exercise name"
        value={name}
        helperText="E.g.: Thrusters"
        onChange={(e) => setName(e.target.value)}
        size="small"
        fullWidth
        required
      />
      <TextField
        label="Sets"
        type="number"
        value={sets}
        onChange={handleSetsOnChange}
        size="small"
        fullWidth
        required
      />
      <Button
        type="submit"
        variant="contained"
      >
        Add
      </Button>
    </Box>
  )
};
