import { ExerciseForm } from "@/components/ExerciseForm";
import { ExerciseList } from "@/components/ExerciseList";
import { QuoteGenerator } from "@/components/QuoteGenerator";
import { Box, Typography } from "@mui/material";
import { useExercise } from '@/providers/Exercise'

export const Dashboard = () => {
    const { exercises } = useExercise();
    return (
        <Box
            display="flex"
            flexDirection="column"
            minHeight="100vh"  
        >
            <QuoteGenerator />
            <ExerciseForm />
            <Typography variant="h4" mb={4}>
                Dashboard
            </Typography>
            <ExerciseList exercises={exercises} />
        </Box>
    );
};
