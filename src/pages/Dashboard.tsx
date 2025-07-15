import { ExerciseForm } from "@/components/ExerciseForm";
import { ExerciseList } from "@/components/ExerciseList";
import { QuoteGenerator } from "@/components/QuoteGenerator";
import type { Exercise } from "@/types";
import { mockExercises } from "@/utils/mocks";
import { Box } from "@mui/material";
import { useState } from "react";

export const Dashboard = () => {
    const [exercises, _setExercises] = useState<Exercise[]>(mockExercises);
    return (
        <Box
            display="flex"
            flexDirection="column"
        >
            <QuoteGenerator />
            <ExerciseForm />
            <ExerciseList exercises={exercises} />
        </Box>
    );
};
