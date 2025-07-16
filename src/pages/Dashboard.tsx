import { ExerciseForm } from "@/components/ExerciseForm";
import { ExerciseList } from "@/components/ExerciseList";
import { QuoteGenerator } from "@/components/QuoteGenerator";
import { Box, Button, Typography } from "@mui/material";
import { useExercise } from '@/providers/Exercise'
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
    const { exercises } = useExercise();
    const navigate = useNavigate();
    return (
        <Box
            display="flex"
            flexDirection="column"
            minHeight="100vh"
        >
            <Box position="absolute" top={24} right={16}>
                <Button variant="text" size="small" onClick={() => navigate('/history')}>
                    Go to History ⟶
                </Button>
            </Box>
            <QuoteGenerator />
            <ExerciseForm />
            <Typography variant="h4" mb={4}>
                Dashboard
            </Typography>
            <ExerciseList exercises={exercises} />
        </Box>
    );
};
