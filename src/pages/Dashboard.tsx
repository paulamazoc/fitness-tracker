import { ExerciseForm } from "@/components/ExerciseForm";
import { ExerciseList } from "@/components/ExerciseList";
import { QuoteGenerator } from "@/components/QuoteGenerator";
import { Box } from "@mui/material";
import { useExercise } from '@/providers/Exercise'

export const Dashboard = () => {
    const { exercises } = useExercise();
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
