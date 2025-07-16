import { ExerciseCard } from "@/components/ExerciseCard/ExerciseCard";
import { useExercise } from "@/providers/Exercise";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const History = () => {
    const navigate = useNavigate();
    const { exercises } = useExercise();
    const completedExercises = exercises.filter((exercise) => exercise.isDone);
    return (
        <Box
            display="flex"
            flexDirection="column"
            minHeight="100vh"
        >
            <Box position="absolute" top={24} right={16}>
                <Button variant="text" size="small" onClick={() => navigate('/')}>
                    ⟵ Go to Dashboard
                </Button>
            </Box>
            <Typography variant="h4" mb={4}>
                History
            </Typography>
            {completedExercises.length === 0 ? (
                <Typography variant="h6">No completed exercises yet.</Typography>
            ) : (
                <List>
                    {completedExercises.map((exercise) => (
                        <ListItem key={exercise.id}>
                            <ExerciseCard exercise={exercise} variant="done" />
                        </ListItem>
                    ))}
                </List>                   
            )
            }
        </Box>
    );
};
