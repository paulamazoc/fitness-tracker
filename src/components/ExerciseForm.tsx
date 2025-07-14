import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

export const ExerciseForm = () => {
  const [name, setName] = useState("");
  const [sets, setSets] = useState(0);
  return (
    <Box
      component="form"
      display="flex"
      alignItems="flex-start"
      position="sticky"
      py={1}
      px={2}
      gap={2}
      mb={4}
      zIndex={2}
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
        value={sets}
        onChange={(e) => setSets(Number(e.target.value))}
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
